import { Router } from 'express';
import { donativoController } from '../controllers/donativosController';
class DonativoRoutes
{
public router: Router=Router();
constructor()
{
this.config();
}
config() : void
{
    this.router.post('/crearDonativo/',donativoController.createDonativo);
    this.router.get('/mostrarDonativos/',donativoController.mostrarDonativos);
    this.router.get('/buscarDonativo/:id',donativoController.buscarDonativo);
    this.router.delete('/eliminarDonativo/:id',donativoController.eliminarDonativo);
    this.router.put('/actualizarDonativo/:id',donativoController.actualizarDonativo);
}
}
const donativoRoutes= new DonativoRoutes();
export default donativoRoutes.router;