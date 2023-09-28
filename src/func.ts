(() => {
  type Size = 'small' | 'medium' | 'large';
  // problemes avec les references THIS
  function createProductToJson(title: string, createdAt: Date, size: Size, stock? : number){
    return {
      title,
      createdAt,
      size,
      stock
    };
  };

  const product = createProductToJson('Shoes', new Date(), 'medium', 100);
  const productV2 = createProductToJson('Shoes', new Date(), 'medium');
  console.log(product);
  console.log(product.title);
  console.log(product.stock);


  // Arrow functions : meilleur facon de faire
  const createProduct = (title: string, createdAt: Date, size: Size, stock : number) => {
    return { title, createdAt, size, stock };
  };

  console.log('--------------------------------------------');
  const calculTotal = (prix: number[]) => {
    return prix.reduce((acc, cur) => acc + cur, 0);
  }

  const resp = calculTotal([1, 2, 3, 4, 5]);
  console.log(resp);

})();
