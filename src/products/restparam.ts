import { ROLES } from "../enums/role.enum";
import { User } from "../models/user.model";

const currentUser: User = {
  name: 'John',
  role: ROLES.CUSTOMER,
  email: 'email@gmeilk.com',
  password: 'password'
};

export const isAdmin = () => {
  return currentUser.role === ROLES.ADMIN;
}

export const checkRoles = (...roles: string[]) => {
  switch (currentUser.role) {
    case ROLES.ADMIN:
      return roles.includes(ROLES.ADMIN);
    case ROLES.CUSTOMER:
      return roles.includes(ROLES.CUSTOMER);
    default:
      return false;
  }
}



console.log(isAdmin()); // false
console.log(checkRoles(ROLES.CUSTOMER)); // true
console.log(checkRoles(ROLES.ADMIN, ROLES.SELLER)); // false
console.log(checkRoles(ROLES.SELLER, ROLES.CUSTOMER)); // true
