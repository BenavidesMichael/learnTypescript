import { Category } from "../models/api/category.model";
import axios from "axios";

export class BaseHttpService<T> {
  constructor(private url:string) {}

  async getAll() {
    const { data } =  await axios.get<T[]>(this.url);
    return data;
  }

}

(async () => {
  const productPervice = new BaseHttpService<Category>('https://api.escuelajs.co/api/v1/products');
  const products = await productPervice.getAll();
  console.log(products.length );

  console.log('------------------');

  const service = new BaseHttpService<Category>('https://api.escuelajs.co/api/v1/categories');
  const categories = await service.getAll();
  console.log(categories.length);
})();

