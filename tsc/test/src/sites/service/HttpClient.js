import axios from 'axios';
import config from '../config/env';
export class HttpClient {
    checkStatus(response) {
        const resData = {
            state: 0,
            value: {},
            message: ''
        };
        if (response &&
            (response.status === 200 ||
                response.status === 304 ||
                response.status === 400)) {
            resData.value = response.data;
        }
        return resData;
    }
    async request(url, method, params) {
        const defaultHeaders = {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        };
        const headers = Object.assign(defaultHeaders, params.header);
        try {
            const options = {
                method,
                url: config.baseUrl + url,
                data: params,
                params: params,
                timeout: 1000 * 30,
                crossDomain: true,
                headers
            };
            const res = await axios(options);
            return this.checkStatus(res);
        }
        catch (error) {
            console.error(error);
            return null;
        }
    }
}
