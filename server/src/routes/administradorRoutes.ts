import { Router } from "express";
import { administradorController } from "../controllers/administradorController";

class AdministradorRoutes
{
    public router: Router=Router();
    constructor()
    {
        this.config();
    }
    config() : void
    {
        this.router.post('/crearAdministrador/',administradorController.createAdministrador);
        this.router.get('/mostrarAdministradores/',administradorController.mostrarAdministradores);
        this.router.get('/buscarAdministrador/:id',administradorController.buscarAdministrador);
        this.router.delete('/eliminarAdministrador/:id',administradorController.eliminarAdministrador);
        this.router.put('/actualizarAdministrador/:id',administradorController.actualizarAdministrador);
        this.router.post('/loginAdministrador', administradorController.loginAdministrador);
    }
}
const administradorRoutes= new AdministradorRoutes();
export default administradorRoutes.router;