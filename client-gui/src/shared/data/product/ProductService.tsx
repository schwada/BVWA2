import BaseHttpService, { HttpService } from "../util/BaseHttpService";

export default new class ProductService {

	private http: HttpService;

	constructor() {
		this.http = BaseHttpService;
	}

	public async index(): Promise<any | null> {
		return await this.http.fetch("/products");
	}

	public async get(id: any): Promise<any | null> {
		return await this.http.fetch(`/products/${id}`);
	}

	public async userIndex(): Promise<any | null> {
		return await this.http.fetch("/products/user");
	}

}
	