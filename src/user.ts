import { ROLES } from "./enums/role.enum";
import { User } from "./models/user.model";

const user: User = {
  name: 'John Doe',
  email: 'test@gmail.com',
  password: '123456',
  role: ROLES.ADMIN
};

console.log(user);
