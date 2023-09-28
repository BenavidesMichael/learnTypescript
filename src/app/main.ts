import { addProduct, products, searchProducts, updateProduct } from "../services/product.service";
import { faker } from "@faker-js/faker"

for (let index = 0; index < 50; index++) {
  addProduct({
    title: faker.commerce.productName(),
    stock: faker.number.int({min:1, max: 50}),
    price: parseInt(faker.commerce.price()),
    description: faker.commerce.productDescription(),
    isnNew: faker.datatype.boolean(),
    tags:   faker.commerce.productAdjective().split(' '),
    image: faker.image.url(),
    size: faker.helpers.arrayElement(['small', 'medium','large']),
    categoryId: faker.string.uuid(),
  });
}

console.table(products);

updateProduct(products[0].id, {
  title: 'New title',
  stock: 80,
  price: 45,
});


console.table(products);

searchProducts({
  stock: 80,
  createDate: new Date(),
  tags: ['Fresh', 'Handcrafted'],
});
