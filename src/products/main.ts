import { addProduct, products, calculTotal } from '../products/product.service'

addProduct({ title: 'A', price: 10, stock: 100, size: 'small' });
addProduct({ title: 'B', price: 20, description: 'Description', stock: 100, size: 'medium' });

console.table(products);
console.log('--------------------------------------------');
console.log(`total des prix des produits : ${calculTotal(products.map(p => p.price))}`);
