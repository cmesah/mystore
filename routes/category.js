const express = require('express');
const router = express.Router();
const CategoryService = require('./../services/CategoryService');

const service = new CategoryService();

router.get('/', (req,res)=>{
  const category = service.find()
    res.json(category);
});


router.get('/:id', (req, res) => {
  const {id} = req.params;
  const category = service.findOne(id);
  res.json(category);
})


module.exports = router;
