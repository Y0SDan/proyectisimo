import {Request,Response} from 'express';
const pool = require('../database'); //acceso a la base de datos
class UsuariosController
{
public async mostrar_todos_usuarios(req: Request, res: Response ): Promise<void>{
console.log("YA ESTAMOS AQUI");
const respuesta = await pool.query('SELECT * FROM usuarios');
res.json( respuesta );
}
public async listOne(req: Request, res: Response): Promise <void>{
const {id} = req.params;
const respuesta = await pool.query('SELECT * FROM usuarios WHERE id = ?', [id]);
if(respuesta){
    res.json(respuesta);
    return ;
}
res.status(404).json({'mensaje': 'Usuario no encontrado'});
}
//aqui va el crud
public async createUsuario(req: Request, res: Response): Promise<void> {
    //console.log(req.body)
    const resp = await pool.query("INSERT INTO usuarios set ?",[req.body]);
    res.json(resp);
    //res.json(null);
}

public async actualizarUsuario(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    //console.log(req.params);
    console.log(id);
    const resp = await pool.query("UPDATE usuarios set ? WHERE id = ?", [req.body, id]);
    res.json(resp);
    //res.json(null);
}

public async eliminarUsuario(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const resp = await pool.query(`DELETE FROM usuarios WHERE id = ${id}`);
    res.json(resp);
}

public async listarUsuariosRol(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const resp = await pool.query(`SELECT nombre, nombre_rol FROM  usuarios LEFT JOIN roles on usuarios.id_rol = roles.id_rol WHERE usuarios.id_Rol = ${id};`);
    res.json(resp);
    //if(resp.length>0){
    //    res.json(resp);
    //    return ;
    //}
    //res.status(404).json({'mensaje': 'No hay usuarios en ese rol'});
}

public async ValidarUsuario(req: Request, res: Response): Promise<void> {
    //console.log(req.body)
    const parametros = req.body;
    var consulta = `SELECT id_Rol, correo FROM usuarios WHERE correo = '${parametros.correo}' AND contrasena = '${parametros.contrasena}'`;
    const resp = await pool.query(consulta);
    if(resp)
        res.json(resp);
    else
        res.json({"id_Rol":"-1"});
    //res.json(null);
    //console.log(consulta);
}    
}

export const usuariosController = new UsuariosController();