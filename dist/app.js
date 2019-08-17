"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const shift_1 = require("./api/shift");
class App {
    constructor() {
        this.express = express_1.default();
        this.routes();
    }
    routes() {
        this.express.use('/shifts', shift_1.shiftRouter);
        this.express.use('/*', (_, res) => {
            res.send('Hello World');
        });
    }
}
exports.default = new App().express;
//# sourceMappingURL=app.js.map