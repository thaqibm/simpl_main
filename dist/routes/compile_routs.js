"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.compileRouter = void 0;
const express_1 = __importDefault(require("express"));
exports.compileRouter = express_1.default.Router();
exports.compileRouter.get('/', (req, res, next) => {
    res.status(200).send("Simpl Compiler");
});
