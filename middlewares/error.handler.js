function logErrors (err, req, res, next){
  console.error(err);
  next(err); // middleware de tipo de error
}

// crea un formato para enviacerlo a nuestro cliente
// detecta un error crea un formato para devolverlo al cliente
function errorHandler(err, req, res, next){
    res.status(500).json({
      mensage: err.message,
      stack:err.stack
    });
}//asi no se utilice next hay que ponerla debe tener los 4 parametros



//cannot set headers  after they are sent to the client else next before
function boomErrorHandler(err, req, res, next){
  if(err.isBoom){
    const{output}=err;
    res.status(output.statusCode).json(output.payload);
  }else{
    next(err);
  }
}


module.exports = {logErrors, errorHandler,boomErrorHandler}

