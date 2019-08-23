"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bodyParser = __importStar(require("body-parser"));
const shift_1 = require("./api/shift");
class App {
    constructor() {
        this.express = express_1.default();
        this.middleware();
        this.routes();
    }
    middleware() {
        this.express.use(bodyParser.urlencoded({ extended: true }));
        this.express.use(bodyParser.json());
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