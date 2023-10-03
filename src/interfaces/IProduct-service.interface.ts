import { Product } from "../models/api/product.model";

export interface IProductService {
  getProductsAsync(): Promise<Product[]>;
  getProductAsync(id: number): Promise<Product | undefined>;
  createProductAsync(product: Product): Promise<Product>;
  updateProductAsync(id: number, product: Partial<Omit<Product, 'id' | 'category'>>) : Promise<Product>;
  deleteProductAsync(id: number): Promise<void>;
  searchProductsAsync(product: Product) : Promise<Product[] | undefined>;
}
