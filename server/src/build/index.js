"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const contactoRoutes_1 = __importDefault(require("./routes/contactoRoutes"));
const recursos_educativosRoutes_1 = __importDefault(require("./routes/recursos_educativosRoutes"));
const donativosRoutes_1 = __importDefault(require("./routes/donativosRoutes"));
const administradorRoutes_1 = __importDefault(require("./routes/administradorRoutes"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const swagger_json_1 = __importDefault(require("./swagger.json"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
        this.app.use('/documentacion', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_json_1.default));
    }
    config() {
        this.app.set('port', process.env.PORT || 3000); //En que puerto va a ejecutar
        this.app.use((0, morgan_1.default)('dev')); //que ejecutamos y que tiempo
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json()); //permite que utilicemos json
        this.app.use(express_1.default.urlencoded({ extended: false })); //decodifca las url
    }
    routes() {
        this.app.use(indexRoutes_1.default);
        this.app.use('/api/contacto', contactoRoutes_1.default);
        this.app.use('/api/recursos_educativos', recursos_educativosRoutes_1.default);
        this.app.use('/api/donativos', donativosRoutes_1.default);
        this.app.use('/api/administrador', administradorRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('El servidor se esta ejecutando en el puerto: ', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
