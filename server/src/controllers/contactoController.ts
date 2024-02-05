import {Request,Response} from 'express';
const pool = require('../database');
class ContactoController
{
    public async createContacto(req: Request, res: Response): Promise<void> {
        const resp = await pool.query("INSERT INTO contacto set ?",[req.body]);
        res.json(resp);        
    }    

    public async mostrarContactos(req: Request, res: Response ): Promise<void>{
        const respuesta = await pool.query('SELECT * FROM contacto;');
        res.json( respuesta.rows );
    }

    public async buscarContacto(req: Request, res: Response ): Promise<void>{
        const {id} = req.params;
        const respuesta = await pool.query(`SELECT * FROM contacto WHERE id = ${id}`);
        res.json( respuesta );
    }

    public async eliminarContacto(req: Request, res: Response ): Promise<void>{
        const {id} = req.params;
        const respuesta = await pool.query(`DELETE FROM contacto WHERE id = ${id}`);
        res.json( respuesta );
    }

    public async actualizarContacto(req: Request, res: Response ): Promise<void>{
        const {id} = req.params;
        const respuesta = await pool.query(`UPDATE contacto SET ? WHERE id = ?`,[req.body,id]);
        res.json( respuesta );
    }

}
export const contactoController = new ContactoController();