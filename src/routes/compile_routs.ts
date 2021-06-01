import express, {Router, Request, Response, Application, NextFunction}  from 'express'; 
import {interp} from '../interp/simpl_interp/main';
export const compileRouter : Router = express.Router(); 

compileRouter.get('/', (req:Request,res:Response,next:NextFunction) =>{
    res.status(200).send("Simpl Compiler");
});

compileRouter.post('/', (req: Request, res:Response, next: NextFunction) =>{
    const code = req.body['code'];
    console.log(code);
    interp(code)
    .then(out =>{
        console.log(out);
        res.json({out});
        res.send();
    })
    .catch(e => {
        console.log(e);
        res.json({error: e});
        res.send();
    })

});
