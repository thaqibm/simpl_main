"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const compile_routs_1 = require("./routes/compile_routs");
const simpl_interp_1 = require("simpl_interp");
const PORT = process.env.PORT || 5000;
const app = express_1.default();
app.use(express_1.default.static('build'));
app.use('/compile', compile_routs_1.compileRouter);
simpl_interp_1.interp('(vars [(i 100)] (while (> i 0) (print i) (set i (- i 1))))')
    .then(t => console.log(t));
app.listen(PORT, () => console.log("Server running on http://localhost:5000/"));
