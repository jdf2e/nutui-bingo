import { HttpClient } from './HttpClient';
export class ApiService {
    httpClient;
    constructor() {
        this.httpClient = new HttpClient();
    }
    getArticle() {
        return this.httpClient.request('/openapi/article?pageIndex=1&pageSize=100', 'get', {});
    }
    getCases() {
        return this.httpClient.request('/openapi/cases?pageIndex=1&pageSize=100', 'get', {});
    }
}
