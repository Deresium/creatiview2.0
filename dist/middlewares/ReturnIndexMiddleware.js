"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ApplicationMiddleware_1 = __importDefault(require("./ApplicationMiddleware"));
const path_1 = __importDefault(require("path"));
class ReturnIndexMiddleware extends ApplicationMiddleware_1.default {
    constructor() {
        super();
    }
    defineMiddlewareFunction() {
        return (req, res, next) => {
            var _a;
            if (((_a = req.headers.accept) === null || _a === void 0 ? void 0 : _a.includes('text/html')) && !req.path.includes('/api/')) {
                let folder = 'creativiewvue';
                if (req.headers.host.includes('pictures.')) {
                    folder = 'creativiewpicturesvue';
                }
                const publicDirectoryPath = path_1.default.join(__dirname, `../../public/${folder}`);
                res.sendFile(publicDirectoryPath + '/index.html');
            }
            else {
                next();
            }
        };
    }
}
exports.default = ReturnIndexMiddleware;
//# sourceMappingURL=ReturnIndexMiddleware.js.map