import express, {Request, Response, Application, NextFunction} from 'express';

const app:Application = express(); 

app.get('/', (req:Request,res:Response, next:NextFunction)=>{
    res.send("Hello");
});

app.listen(5000, ()=>console.log("Server running on http://localhost:5000/"));