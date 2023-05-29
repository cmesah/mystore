const products = require('./products');
const express = require('express');
const users = require('./users');
const category = require('./category');

function routerApi(app){

  const router = express.Router();
  app.use('/api/v1',router)
  router.use('/products', products);
  router.use('/users', users);
  router.use('/category', category);
}


module.exports= routerApi;
