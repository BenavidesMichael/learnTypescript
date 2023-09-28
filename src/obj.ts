(() => {
  const  loginV1 = (email: string, password: string) : void => {
    console.log(email, password);
  }
  loginV1('test@gmail.com', '123456');

  console.log('--------------------------------------------');
  const  login = (data: {email: string, password: string}) : void => {
    console.log(data.email, data.password);
  }

  login({email: 'test@gmail.com', password: '123456'});

  console.log('--------------------------------------------');
  const products:any[] = [];
  const addProduct = (product: {title: string, price: number, description?: string, stock: number}) : void => {
    products.push(product);
  }

  addProduct({title: 'A', price: 10, stock: 100});
  addProduct({title: 'B', price: 20, description: 'Description', stock: 100});
  console.log('-------------- Errors Non Typed Obj ------------------------------');
  products.push('ABC');
  products.push(123456);

  console.table(products);

  console.log('--------------------------------------------');

  type Product = {
    title: string,
    price: number,
    description?: string,
    stock: number
  };

  const productsTyped: Product[] = [];
  const addProductTyped = (product: Product) : void => {
    productsTyped.push(product);
  }
  addProductTyped({title: 'Typed', price: 10, stock: 100});
  console.table(productsTyped);
  console.log('--------------------------------------------');
})();
