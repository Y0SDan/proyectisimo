import {Request,Response} from 'express';
const pool = require('../database');
class ContactoController
{
    public async createContacto(req: Request, res: Response): Promise<void> {
        const { name, email, message } = req.body;

        try{
            const resp = await pool.query("INSERT INTO contacto (name, email, message) VALUES ($1, $2, $3) RETURNING *", [name, email, message]);
            console.log("Respuesta:", resp.rows[0]);
            res.json(resp.rows[0]);
        } catch (error) {
            const err = error as Error;
            console.error(err);
            res.status(500).json({ error: err.message });
        }
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