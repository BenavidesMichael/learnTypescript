import { ROLES } from "../enums/role.enum";
import { Base } from "./base.model";

export interface User extends Base {
  name: string,
  email: string,
  password: string,
  role: ROLES
};
