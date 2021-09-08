export class UploadOptions {
    url = '';
    formData;
    method = 'post';
    xhrState = 200;
    timeout = 30 * 1000;
    headers = {};
    withCredentials = false;
    onStart;
    onProgress;
    onSuccess;
    onFailure;
}
export class Uploader {
    options;
    constructor(options) {
        this.options = options;
    }
    upload() {
        const options = this.options;
        const xhr = new XMLHttpRequest();
        xhr.timeout = options.timeout;
        if (xhr.upload) {
            xhr.upload.addEventListener('progress', (e) => {
                options.onProgress?.(e, options);
            }, false);
            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    if (xhr.status === options.xhrState) {
                        options.onSuccess?.(xhr.responseText, options);
                    }
                    else {
                        options.onFailure?.(xhr.responseText, options);
                    }
                }
            };
            xhr.withCredentials = options.withCredentials;
            xhr.open(options.method, options.url, true);
            for (const [key, value] of Object.entries(options.headers)) {
                xhr.setRequestHeader(key, value);
            }
            options.onStart?.(options);
            xhr.send(options.formData);
        }
        else {
            console.warn('浏览器不支持 XMLHttpRequest');
        }
    }
    uploadTaro(filePath, Taro) {
        const options = this.options;
        const uploadTask = Taro.uploadFile({
            url: options.url,
            filePath,
            header: {
                'Content-Type': 'multipart/form-data',
                ...options.headers
            },
            formData: options.formData,
            name: 'files',
            success(response) {
                if (response.errMsg) {
                    options.onFailure?.(response, options);
                }
                else if (options.xhrState === response.statusCode) {
                    options.onSuccess?.(response, options);
                }
            },
            fail(e) {
                options.onFailure?.(e, options);
            }
        });
        options.onStart?.(options);
        uploadTask.progress((res) => {
            options.onProgress?.(res, options);
        });
    }
}
