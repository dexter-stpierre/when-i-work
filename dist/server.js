"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http = __importStar(require("http"));
const app_1 = __importDefault(require("./app"));
const port = normalizePort(process.env.PORT || 3000);
app_1.default.set('port', port);
const server = http.createServer(app_1.default);
server.listen(port);
server.on('listening', onListening);
function normalizePort(val) {
    const parsedPort = typeof val === 'string' ? parseInt(val, 10) : val;
    if (isNaN(parsedPort)) {
        return val;
    }
    else if (parsedPort >= 0) {
        return parsedPort;
    }
    else {
        return false;
    }
}
function onListening() {
    console.log(`listening on port ${port}`);
}
//# sourceMappingURL=server.js.map