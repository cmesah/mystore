const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');

const{logErrors,errorHandler, boomErrorHandler}=require('./middlewares/error.handler')

const app= express();
const port = 3000;

app.use(express.json());
const whitelist = ['http://localhost:8080']; //para habilitar solo unos origenes
const options = {
  origin : (origin, callback) =>{
    if (whitelist.includes(origin)){
      callback(null,true);
    }else{
      callback(new Error('No permitido'));
    }
  }
}
app.use(cors(options)); // se habilita cualquier origen

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
   console.log('mi port '+ port);
 });



// TODO LO ESPECIFICO DEBE IR ANTES DE LO DINAMICO



// app.get('/', (req,res)=>{
//   res.send('Hola mi server en express');
// })

// app.get('/nueva-ruta', (req,res)=>{
//   res.send('Hola soy una nueva ruta');
// })




