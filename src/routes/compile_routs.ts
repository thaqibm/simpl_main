import express, {Router, Request, Response, Application, NextFunction}  from 'express'; 
import {interp} from 'simpl_interp';
export const compileRouter : Router = express.Router(); 

compileRouter.get('/', (req:Request,res:Response,next:NextFunction) =>{
    res.status(200).send("Simpl Compiler");
});

compileRouter.post('/', (req: Request, res:Response, next: NextFunction) =>{
    console.log(req.body);
    const out = interp(req.body['code'])
    .then(output => {
        res.send({"output": output, "error": null});
    })
    .catch(e => res.send({"output": null, "error": e}));
});