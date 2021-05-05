import express, {Router, Request, Response, Application, NextFunction}  from 'express'; 

export const compileRouter : Router = express.Router(); 

compileRouter.get('/', (req:Request,res:Response,next:NextFunction) =>{
    res.status(200).send("Simpl Compiler");
});