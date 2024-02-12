import { Request,Response } from "express";
const pool = require('../database');
class AdministradorController
{
    async createAdministrador(req: Request, res: Response): Promise<void> {
        const { nombre, correo, contrasena } = req.body;

        try {
            const resp = await pool.query("INSERT INTO administrador (nombre, correo, contrasena) VALUES ($1, $2, $3) RETURNING *", [nombre, correo, contrasena]);
            console.log("Respuesta:", resp.rows[0]);
            res.json(resp.rows[0]);
        } catch (error) {
            const err = error as Error;
            console.error(err);
            res.status(500).json({ error: err.message });
        }
    }
       

    public async mostrarAdministradores(req: Request, res: Response ): Promise<void>{
        const respuesta = await pool.query('SELECT * FROM administrador;');
        res.json( respuesta.rows );
    }

    public async buscarAdministrador(req: Request, res: Response ): Promise<void>{
        const {id} = req.params;
        const respuesta = await pool.query(`SELECT * FROM administrador WHERE id = ${id}`);
        res.json( respuesta.rows );
    }

    public async eliminarAdministrador(req: Request, res: Response ): Promise<void>{
        const {id} = req.params;
        const respuesta = await pool.query('DELETE FROM administrador WHERE id = $1', [id]);
        res.json( respuesta.command );
    }

    public async actualizarAdministrador(req: Request, res: Response ): Promise<void>{
        const {id} = req.params;
        const { nombre, correo, contrasena } = req.body;

        try {
            const respuesta = await pool.query(`UPDATE administrador SET nombre = $1, correo = $2, contrasena = $3 WHERE id = $4`, [nombre, correo, contrasena, id]);
            res.json({ message: "Administrador actualizado exitosamente" });
        } catch (error) {
            const err = error as Error;
            console.error(err);
            res.status(500).json({ error: err.message });
        }
    }

    public async loginAdministrador(req: Request, res: Response): Promise<void> {
        const { correo, contrasena } = req.body;
    
        try {
            const respuesta = await pool.query('SELECT * FROM administrador WHERE correo = $1 AND contrasena = $2', [correo, contrasena]);
            if (respuesta.rows.length > 0) {
                res.json(respuesta.rows[0]);
            } else {
                res.status(401).json({ message: "Correo o contraseña incorrectos" });
            }
        } catch (error) {
            const err = error as Error;
            console.error(err);
            res.status(500).json({ error: err.message });
        }
    }
}
export const administradorController = new AdministradorController();