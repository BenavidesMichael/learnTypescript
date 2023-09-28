import { Product } from "../models/product.model";

export interface SearchProductDto extends Readonly<Partial<Omit<Product, 'tags'>>>{
  readonly tags: ReadonlyArray<string>;
}
