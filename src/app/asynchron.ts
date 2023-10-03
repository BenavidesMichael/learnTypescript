import { ProductApiService } from './../services/product-api.service'

(async () => {
  const service = new ProductApiService();
  console.log(' ------------- All Products ---------------- ');
  const products = await service.getProductsAsync();
  console.log(products.length + ' products found');
  console.log(' -------------- Product --------------- ');
  const product = await service.getProductAsync(products[0].id);
  console.log(product)
  console.log(' --------------- Update -------------- ');
  const productToUpdate = await service.updateProductAsync(
    products[0].id,
    {
      price: 123456,
      title: 'Updated product',
      description: 'Updated description'
    });
    const productUpdated = await service.getProductAsync(products[0].id);
    console.log(productUpdated)
    console.log(' --------------- search -------------- ');
    const searchResult = await service.searchProductsAsync({
      price: 1000,
    });
    console.log(searchResult)
})();
