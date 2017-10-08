export class QuarkOptions {

    baseUrl: string;
    url: string;
    headers: any;
    code: number;
    method: string;
    qs: any;
    json: any;

    constructor(baseUrl: string) {
        this.baseUrl = this.normalizeUrl(baseUrl);
        this.headers = {};
        this.code = 200;
        this.method = 'GET';
        this.qs = {};
        return this;
    }

    setData(data: any) {
        if (data) {
            this.json = data;
        }
        return this;
    }

    setUrl(url: string) {
        this.url = url;
        return this;
    }

    setMethod(method: string) {
        this.method = method ? method : 'GET';
        return this;
    }

    setCode(code: number) {
        this.code = code ? code : 200;
        return this;
    }

    setQuerystring(querystring: string) {
        this.qs = querystring;
        return this;
    }

    normalizeUrl(url: string) {
        const isSlash = url.substr(url.length - 1) === '/';
        return isSlash ? url.substring(0, url.length - 1) : url;
    }

    security(decodedToken: any) {
        if (decodedToken) {
            this.headers['X-SECURITY'] = decodedToken;
            this.headers['X-USER'] = decodedToken.user;
            this.headers['X-ACCOUNT'] = decodedToken.account;
            this.headers['X-LOCALE'] = decodedToken.locale;
            this.headers['X-LANG'] = decodedToken.lang;
        }
        return this;
    }
}
