import { CreateProductDto } from "../dtos/createProduct.dto";
import { SearchProductDto } from "../dtos/searchProduct.dto";
import { UpdateProductDto } from "../dtos/updateProduct.dto";
import { Product } from "../models/product.model";
import { faker } from "@faker-js/faker"

export  const products:Product[] = [];

export const addProduct = (product: CreateProductDto) : Product => {
  const newProduct:Product = {
    ...product,
    id: faker.string.uuid(),
    createDate: new Date(),
    updateDate: new Date(),
    category: {
      id: product.categoryId,
      name: faker.commerce.department(),
      createDate: new Date(),
      updateDate: new Date(),
    }
  };

  products.push(newProduct);
  return newProduct;
}

export const updateProduct = (id: string | number, product: UpdateProductDto) : Product => {
  const index = products.findIndex((item) => item.id === id);
  const prevProduct = products[index];

  const updatedProduct = {
    ...prevProduct,
    ...product,
    updateDate: new Date(),
  };

  return updatedProduct;
}

export const deleteProduct = (id: string | number) : void => {
  const index = products.findIndex((item) => item.id === id);
  products.splice(index, 1);
}

export const getProduct = (id: string | number) : Product | undefined => {
  return products.find((item) => item.id === id);
}

export const searchProducts = (product: SearchProductDto) : Product[] => {
  return products;
};
