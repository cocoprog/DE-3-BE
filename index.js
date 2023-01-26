/* 
  {
    id:
    title: ,
    description: ,
    price: ,
    thumbnail: ,
    code: ,
    stock: ,
  }
*/

//const idAutoIncrement = require("id-auto-increment");

class ProductManager{
  constructor() {
    this.products = [];
  }

  static id = 0;

   addProduct = (product) => {
    if(!product.name || !product.price || !product.code || !product.description || !product.price || !product.thumbnail || !product.stock){
      console.log('incompleto');
    }else {
      product.id = ProductManager.id;
      ProductManager.id = ProductManager.id +1;       
    }

    if(this.products.some(ptos => ptos.code === product.code)){
      console.log('El producto ya existe')
    }else{
      this.products.push(product);
    }
    
      // this.products.push(product);
      return this.products;
    }    
  

  getProducts = () => {
    return this.products
  }

  getProductById = (id) => {
    const prod = this.products.filter(el => el.id === id);
    if(prod.length > 0){
      return prod;
    }
    return 'Not Found';
  }
}


var pto = new ProductManager();
//pto.addProduct({ name: 'ale343',price: 99, code: 'abc123', description: 'asdsadasdsad', price: 34, thumbnail: 'www.nose.com/img1', stock: 3});

pto.addProduct({name: 'ale1', price: 199, code: 'abc123', description: 'asdsadasdsad', price: 35, thumbnail: 'www.nose.com/img2', stock: 3});

//pto.addProduct({name: 'ale3', price: 299, code: 'abc125', description: 'asdsadasdsad', price: 36, thumbnail: 'www.nose.com/img3', stock: 3});

console.log(pto.getProducts());
//console.log(pto.getProductById(2));