import {Request,Response} from 'express';
const pool = require('../database'); //acceso a la base de datos
class DonativoController
{
    public async createDonativo(req: Request, res: Response): Promise<void> {
        const resp = await pool.query("INSERT INTO donativos set ?",[req.body]);
        res.json(resp);        
    }    

    public async mostrarDonativos(req: Request, res: Response ): Promise<void>{
        const respuesta = await pool.query('SELECT * FROM donativos');
        res.json( respuesta );
    }

    public async buscarDonativo(req: Request, res: Response ): Promise<void>{
        const {id} = req.params;
        const respuesta = await pool.query(`SELECT * FROM donativos WHERE id = ${id}`);
        res.json( respuesta );
    }

    public async eliminarDonativo(req: Request, res: Response ): Promise<void>{
        const {id} = req.params;
        const respuesta = await pool.query(`DELETE FROM donativos WHERE id = ${id}`);
        res.json( respuesta );
    }

    public async actualizarDonativo(req: Request, res: Response ): Promise<void>{
        const {id} = req.params;
        const respuesta = await pool.query(`UPDATE donativos SET ? WHERE id = ?`,[req.body,id]);
        res.json( respuesta );
    }

}
export const donativoController = new DonativoController();