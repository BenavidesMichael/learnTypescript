import { faker } from "@faker-js/faker"
import { ProductService } from "../services/product.service";

const productService: ProductService = new ProductService();

for (let index = 0; index < 50; index++) {
  productService.createProduct({
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

console.log('------------------------------------------------------------');
console.log(productService.getProducts());
console.log('------------------------------------------------------------');

productService.updateProduct(productService.getProducts()[0].id, {
  title: 'New title',
  stock: 80,
  price: 45,
});

console.log('------------------------------------------------------------');
console.log(productService.getProducts());
console.log('------------------------------------------------------------');
productService.searchProducts({
  stock: 80,
  createDate: new Date(),
  tags: ['Fresh', 'Handcrafted'],
});
