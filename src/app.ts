import express, {Request, Response, Application, NextFunction} from 'express';
import { compileRouter } from './routes/compile_routs';

const bodyParser = require('body-parser');





const PORT = process.env.PORT || 5000; 
const app:Application = express(); 
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization');

//  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  // Pass to next layer of middleware
  next();
});


app.use(express.static('public'));
app.use(bodyParser.json());
app.use('/compile', compileRouter);

app.listen(PORT, ()=>console.log("Server running on http://localhost:5000/"));
