const express = require('express');
const ProducsService = require('./../services/ProducsService');
const validatorHandler = require('./../middlewares/validator.handler');
const {createProdcutSchema,updateProductShema,getProductShema} = require('./../schemas/product.schema');
const faker = require('faker');

const router = express.Router();


const service = new ProducsService();


router.get('/', async (req,res)=>{
  const products = await service.find()
    res.json(products);
});

router.get ('/filter', (req,res)=>{
  res.send('Soy un filtro');
})

router.get('/:id',
  validatorHandler(getProductShema,'params'),
  async (req, res, next) => {
    try {
      const {id} = req.params;
      const product = await service.findOne(id);
      res.json(product);

    } catch (error) {
      next(error);
    }

});

router.post('/',
  validatorHandler(createProdcutSchema,'body'),
  async (req,res)=>{
    const body = req.body;
    const newProduct = await service.create(body);
    res.status(201).json(newProduct);
  });



// PUT actualiza todos los datos , patch solo lo que se necesita
router.patch('/:id',
validatorHandler(getProductShema,'params'),
validatorHandler(updateProductShema,'body'),
async (req,res,next)=>{
  try {
  const {id}= req.params;
  const body = req.body;
  const product = await service.update(id, body);
  res.json(product);

  } catch (error) {
    next(error);
  }

  });


router.delete('/:id',async(req,res)=>{
  const {id}= req.params;
  const rta = await service.delete(id);
  res.json(rta);
  });


module.exports = router;


/*
ESTATUS CODE


*/


/*
Consulta tipo query
*/

// app.get('/products',(req,res)=> {
//   const products = [];
//   const {size} = req.query;
//   const limit = size || 10;
//   for (let index = 0; index < limit; index++){
//     products.push({
//       name:faker.commerce.productName(),
//       price:parseInt(faker.commerce.price(),10),
//       image: faker.image.imageUrl()
//     });
//   }
//   res.json(products)
// });
