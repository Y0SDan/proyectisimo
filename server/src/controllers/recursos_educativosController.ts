import {Request,Response} from 'express';
const pool = require('../database'); //acceso a la base de datos
class Recursos_educativosController
{
    public async createRecurso_educativo(req: Request, res: Response): Promise<void> {
        const resp = await pool.query("INSERT INTO recursos_educativos set ?",[req.body]);
        res.json(resp);        
    }    

    public async mostrarRecursos_educativos(req: Request, res: Response ): Promise<void>{
        const respuesta = await pool.query('SELECT * FROM recursos_educativos');
        res.json( respuesta );
    }

    public async buscarRecurso_educativo(req: Request, res: Response ): Promise<void>{
        const {id} = req.params;
        const respuesta = await pool.query(`SELECT * FROM recurso_educativos WHERE id = ${id}`);
        res.json( respuesta );
    }

    public async eliminarRecurso_educativo(req: Request, res: Response ): Promise<void>{
        const {id} = req.params;
        const respuesta = await pool.query(`DELETE FROM recursos_educativos WHERE id = ${id}`);
        res.json( respuesta );
    }

    public async actualizarRecurso_educativo(req: Request, res: Response ): Promise<void>{
        const {id} = req.params;
        const respuesta = await pool.query(`UPDATE recursos_educativos SET ? WHERE id = ?`,[req.body,id]);
        res.json( respuesta );
    }
}
export const recursos_educativosController = new Recursos_educativosController();