"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.compileRouter = void 0;
const express_1 = __importDefault(require("express"));
const main_1 = require("../interp/simpl_interp/main");
exports.compileRouter = express_1.default.Router();
exports.compileRouter.get('/', (req, res, next) => {
    res.status(200).send("Simpl Compiler");
});
exports.compileRouter.post('/', (req, res, next) => {
    const code = req.body['code'];
    console.log(code);
    main_1.interp(code)
        .then(out => {
        console.log(out);
        res.json({ out });
        res.send();
    })
        .catch(e => {
        console.log(e);
        res.json({ error: e });
        res.send();
    });
});
