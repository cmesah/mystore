const faker = require('faker');

class CategoryService {

  // Creamos el constructor,
  constructor() {
    this.category = [];
    this.generate();
  }

  //metodo generate vamos a crear un array en memoria con faker

  generate() {

    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.category.push({
        id: faker.datatype.uuid(),
        name: faker.vehicle.type(),
        price: parseInt(faker.commerce.price(), 10),
        Image: faker.image.imageUrl()
      });
    }
  }


  create()
  {

  }


  find()
  {
    return this.category
  }


  findOne(id)
  {
    return this.category.find(item => item.id === id)
  }


  update()
  {

  }


}

module.exports = CategoryService;
