import { Router } from 'express';
import { contactoController } from '../controllers/contactoController';
class ContactoRoutes
{
public router: Router=Router();
constructor()
{
this.config();
}
config() : void
{
    this.router.post('/crearContacto/',contactoController.createContacto);
    this.router.get('/mostrarContactos/',contactoController.mostrarContactos);
    this.router.get('/buscarContacto/:id',contactoController.buscarContacto);
    this.router.delete('/eliminarContacto/:id',contactoController.eliminarContacto);
    this.router.put('/actualizarContacto/:id',contactoController.actualizarContacto);
}
}
const contactoRoutes= new ContactoRoutes();
export default contactoRoutes.router;