import {Request,Response} from 'express';
import pool from '../database'; //acceso a la base de datos
class RolesController
{
public async mostrar_todos_roles(req: Request, res: Response ): Promise<void>{
const respuesta = await pool.query('SELECT * FROM roles');
res.json( respuesta );
}
//aqui va el crud
public async createRol(req: Request, res: Response): Promise<void> {
    //console.log(req.body)
    const resp = await pool.query("INSERT INTO roles set ?",[req.body]);
    res.json(resp);
    //res.json(null);
}

public async eliminarRol(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const resp = await pool.query(`DELETE FROM rol WHERE id = ${id}`);
    res.json(resp);
}

//Agregar un actualizar rol
   
}

export const rolesController = new RolesController();