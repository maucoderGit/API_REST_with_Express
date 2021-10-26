const faker = require("faker");

class ProductsService {

  constructor(){
    this.products = [];
    this.generate();
  }

  generate(){
    const limit = 100;
    for(i = 0; i < limit; i++){
      this.products.push([{
        id: faker.datatype.uuid,
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        img: faker.image.imageUrl(),
      }]);
    }
  }

  create(){

  }

  find(id){
    return this.products.find(item => item.id === id);
  }

  findOne(){

  }

  update(){

  }

  delete(){

  }

}

module.exports = ProductsService;
