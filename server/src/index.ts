import express, {Application} from 'express';
import swagger_ui_express from 'swagger-ui-express';
import indexRoutes from './routes/indexRoutes';
import contactoRoutes from './routes/contactoRoutes';
import recursos_educativosRoutes from './routes/recursos_educativosRoutes';
import donativosRoutes from './routes/donativosRoutes';
import morgan from 'morgan';
import cors from 'cors';
import swaggerDocument from './swagger.json';
class Server
{
public app: Application;
constructor()
{
this.app= express();
this.config();
this.routes();
this.app.use('/documentacion',swagger_ui_express.serve, swagger_ui_express.setup(swaggerDocument));
}

config (): void
{
this.app.set('port',process.env.PORT|| 3000); //En que puerto va a ejecutar
this.app.use(morgan('dev')); //que ejecutamos y que tiempo
this.app.use(cors());
this.app.use(express.json()); //permite que utilicemos json
this.app.use(express.urlencoded({extended: false})); //decodifca las url
}
routes (): void
{
    this.app.use(indexRoutes);
    this.app.use('/api/contacto',contactoRoutes);
    this.app.use('/api/recursos_educativos',recursos_educativosRoutes);
    this.app.use('/api/donativos',donativosRoutes);
}
start (): void
{
this.app.listen(this.app.get('port'), () =>
{
console.log('El servidor se esta ejecutando en el puerto: ',this.app.get('port'));
});
}
}
const server = new Server();
server.start();
