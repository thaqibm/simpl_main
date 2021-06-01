import express, {Request, Response, Application, NextFunction} from 'express';
import { compileRouter } from './routes/compile_routs';

const bodyParser = require('body-parser');

const PORT = process.env.PORT || 5000; 
const app:Application = express(); 

app.use(express.static('build'));
app.use(bodyParser.json());
app.use('/compile', compileRouter);

app.listen(PORT, ()=>console.log("Server running on http://localhost:5000/"));