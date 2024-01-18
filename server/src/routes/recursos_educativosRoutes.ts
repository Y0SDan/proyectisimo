import { Router } from 'express';
import { recursos_educativosController } from '../controllers/recursos_educativosController';
class Recursos_educativosRoutes
{
public router: Router=Router();
constructor()
{
this.config();
}
config() : void
{
    this.router.post('/crearRecurso_educativo/',recursos_educativosController.createRecurso_educativo);
    this.router.get('/mostrarRecursos_educativos/',recursos_educativosController.mostrarRecursos_educativos);
    this.router.get('/buscarRecurso_educativo/:id',recursos_educativosController.buscarRecurso_educativo);
    this.router.delete('/eliminarRecurso_educativo/:id',recursos_educativosController.eliminarRecurso_educativo);
    this.router.put('/actualizarRecurso_educativo/:id',recursos_educativosController.actualizarRecurso_educativo);
}
}
const recurso_educativosRoutes= new Recursos_educativosRoutes();
export default recurso_educativosRoutes.router;