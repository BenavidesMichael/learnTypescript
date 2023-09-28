import { Product } from "../models/product.model";

// type CreateProductDto = Omit<Product, 'id' | 'createDate' | 'updateDate' | 'category'>;

// on retire des props de notre objet Product
export interface CreateProductDto extends Omit<Product, 'id' | 'createDate' | 'updateDate' | 'category'> {
  categoryId: string | number;
}

// on choisi les props de notre objet Product
interface DisplayProduct extends Pick<Product, 'id' | 'title' | 'description'> {}
