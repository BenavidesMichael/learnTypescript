import { IProductService } from "../interfaces/IProduct-service.interface";
import { Product } from "../models/api/product.model";
import axios from "axios";

export class ProductApiService implements IProductService{

  private url = 'https://api.escuelajs.co/api/v1/products';

  constructor() { }

  async getProductsAsync(): Promise<Product[]> {
    const { data } =  await axios.get<Product[]>(this.url);
    return data;
  }

  async getProductAsync(id: number): Promise<Product | undefined> {
    const { data } =  await axios.get<Product>(`${this.url}/${id}`);
    return data;
  }

  async createProductAsync(product: Product): Promise<Product> {
    const { data } =  await axios.post<Product>(this.url, product);
    return data;
  }

  async updateProductAsync(id: number, product: Partial<Omit<Product, 'id' | 'category'>>): Promise<Product> {
    const { data } =  await axios.put<Product>(`${this.url}/${id}`, product);
    return data;
  }

  async deleteProductAsync(id: number): Promise<void> {
    axios.delete<Product>(`${this.url}/${id}`);
  }

  async searchProductsAsync(product: Partial<Pick<Product, 'title' | 'price'>>): Promise<Product[] | undefined> {
    let results = await this.getProductsAsync();

    if (product.title !== undefined && product.title.trim() !== '') {
      results = results.filter(p => p.title.toLowerCase().includes(product.title!.toLowerCase()));
    }

    if (product.price !== undefined) {
      results = results.filter(p => p.price >= product.price!);
    }

    return results.length > 0 ? results : undefined;
  }

}
