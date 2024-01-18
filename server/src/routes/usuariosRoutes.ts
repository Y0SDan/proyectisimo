import { Router } from 'express';
import { usuariosController } from '../controllers/usuariosController';
class UsuariosRoutes
{
public router: Router=Router();
constructor()
{
this.config();
}
config() : void
{
//this.router.get('/mostrarTodosUsuarios/',(req,res) => res.send('probando usuarios'));
this.router.get('/mostrarTodosUsuarios/',usuariosController.mostrar_todos_usuarios);
this.router.get('/obtenerUsuario/:id',usuariosController.listOne);
this.router.post('/crearUsuario/',usuariosController.createUsuario);
this.router.put('/actualizarUsuario/:id',usuariosController.actualizarUsuario);
this.router.delete('/eliminarUsuario/:id',usuariosController.eliminarUsuario);
this.router.get('/listarUsuariosRol/:id',usuariosController.listarUsuariosRol);
this.router.post('/ValidarUsuario/',usuariosController.ValidarUsuario);
}
}
const usuariosRoutes= new UsuariosRoutes();
export default usuariosRoutes.router;