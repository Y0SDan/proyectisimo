import { Router } from 'express';
class IndexRoutes
{
public router: Router=Router();
constructor()
{
this.config();
}
config() : void
{
this.router.get('/yo/',(req,res) => res.send('HOLI'));
this.router.get('/holi/',(req,res) => res.send('Segunda ruta'));
}
}
const indexRoutes= new IndexRoutes();
export default indexRoutes.router;