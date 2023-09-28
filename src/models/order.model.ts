import { Base } from "./base.model";
import { Product } from "./product.model";
import { User } from "./user.model";

export interface Order extends Base {
  user: User,
  products: Product[],
}
