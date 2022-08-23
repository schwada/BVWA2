export class HttpService {

    public baseUrl: string = import.meta.env.VITE_API_URL;
    public headers: Headers = new Headers({
        'Content-Type': 'application/json',  
        'Accept': 'application/json'
    });
    
    public defaults: RequestInit = {
        headers: this.headers
    };

    public fetch(input: RequestInfo, init?: RequestInit): Promise<any> {
        return fetch(this.baseUrl + input, {...this.defaults, ...init}).then(resp => resp.json());
    }

    public addDefault(defaults: RequestInit) {
        this.defaults = {...this.defaults, ...defaults };
    }

}

export default new HttpService();