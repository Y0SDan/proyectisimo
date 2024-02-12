"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.administradorController = void 0;
const pool = require('../database');
class AdministradorController {
    createAdministrador(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nombre, correo, contrasena } = req.body;
            try {
                const resp = yield pool.query("INSERT INTO administrador (nombre, correo, contrasena) VALUES ($1, $2, $3) RETURNING *", [nombre, correo, contrasena]);
                console.log("Respuesta:", resp.rows[0]);
                res.json(resp.rows[0]);
            }
            catch (error) {
                const err = error;
                console.error(err);
                res.status(500).json({ error: err.message });
            }
        });
    }
    mostrarAdministradores(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const respuesta = yield pool.query('SELECT * FROM administrador;');
            res.json(respuesta.rows);
        });
    }
    buscarAdministrador(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const respuesta = yield pool.query(`SELECT * FROM administrador WHERE id = ${id}`);
            res.json(respuesta.rows);
        });
    }
    eliminarAdministrador(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const respuesta = yield pool.query('DELETE FROM administrador WHERE id = $1', [id]);
            res.json(respuesta.command);
        });
    }
    actualizarAdministrador(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { nombre, correo, contrasena } = req.body;
            try {
                const respuesta = yield pool.query(`UPDATE administrador SET nombre = $1, correo = $2, contrasena = $3 WHERE id = $4`, [nombre, correo, contrasena, id]);
                res.json({ message: "Administrador actualizado exitosamente" });
            }
            catch (error) {
                const err = error;
                console.error(err);
                res.status(500).json({ error: err.message });
            }
        });
    }
    loginAdministrador(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { correo, contrasena } = req.body;
            try {
                const respuesta = yield pool.query('SELECT * FROM administrador WHERE correo = $1 AND contrasena = $2', [correo, contrasena]);
                if (respuesta.rows.length > 0) {
                    res.json(respuesta.rows[0]);
                }
                else {
                    res.status(401).json({ message: "Correo o contraseña incorrectos" });
                }
            }
            catch (error) {
                const err = error;
                console.error(err);
                res.status(500).json({ error: err.message });
            }
        });
    }
}
exports.administradorController = new AdministradorController();
