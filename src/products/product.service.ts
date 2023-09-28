import { Product } from "../models/product.model";

export  const products:Product[] = [];

export const addProduct = (product: Product) : void => {
  products.push(product);
}

export const calculTotal = (prix: number[]) => {
  return products.reduce((acc, cur) => acc + cur.price, 0);
}

// Optional parameters
export const createProduct = (id: string | number, stock: number, isNew: boolean = true) => {
  return {
    id,
    stock,
    isNew
  };
};
