const boom = require('@hapi/boom');


function validatorHandler(schema, property){  // propiedad clouser
 return (req, res, next) => {
    const data = req[property];
    const {error} = schema.validate(data,{abortEarly: false });
    if (error){
      next(boom.badRequest(error));
    }
    next();
 }
}//asi no se utilice next h



module.exports = validatorHandler;
