import { Router } from 'express';
import { rolesController } from '../controllers/rolesController';
class RolesRoutes
{
public router: Router=Router();
constructor()
{
this.config();
}
config() : void
{
//this.router.get('/mostrarTodosUsuarios/',(req,res) => res.send('probando usuarios'));
this.router.get('/mostrarTodosRoles/',rolesController.mostrar_todos_roles);
this.router.post('/crearRol/',rolesController.createRol);
this.router.delete('/eliminarRol/:id',rolesController.eliminarRol);
}
}
const rolesRoutes= new RolesRoutes();
export default rolesRoutes.router;