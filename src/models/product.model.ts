import { Base } from "./base.model";
import { Category } from "./category.model";

export type Size = 'small' | 'medium' | 'large';

export interface Product extends Base {
  title: string,
  price: number,
  description?: string,
  stock: number,
  size?: Size,
  image?: string,
  isnNew: boolean,
  tags?: string[],
  category: Category
};

