import { CreateProductDto } from "../dtos/createProduct.dto";
import { SearchProductDto } from "../dtos/searchProduct.dto";
import { UpdateProductDto } from "../dtos/updateProduct.dto";
import { IProductService } from "../interfaces/IProduct-service.interface";
import { Product } from "../models/product.model";
import { faker } from "@faker-js/faker"

export class ProductService {

  private products:Product[] = [];

  constructor() {}

  getProducts = (): Product[] => {
    return this.products;
  }

  getProduct = (id: string | number) : Product | undefined => {
    return this.products.find((item) => item.id === id);
  }

  createProduct = (product: CreateProductDto): Product => {
    const newProduct: Product = {
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
    }

    this.products.push(newProduct);
    return newProduct;
  };

  updateProduct = (id: string | number, product: UpdateProductDto) : Product  =>  {
    const index = this.products.findIndex((item) => item.id === id);
    const prevProduct = this.products[index];

    const updatedProduct = {
      ...prevProduct,
      ...product,
      updateDate: new Date(),
    };

    return updatedProduct;
  }

  deleteProduct = (id: string | number) : void  => {
    const index = this.products.findIndex((item) => item.id === id);
    this.products.splice(index, 1);
  }

  searchProducts = (product: SearchProductDto) : Product[] => {
    return this.products;
  };
}




