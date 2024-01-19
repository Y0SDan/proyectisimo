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
exports.recursos_educativosController = void 0;
const pool = require('../database'); //acceso a la base de datos
class Recursos_educativosController {
    createRecurso_educativo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = yield pool.query("INSERT INTO recursos_educativos set ?", [req.body]);
            res.json(resp);
        });
    }
    mostrarRecursos_educativos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const respuesta = yield pool.query('SELECT * FROM recursos_educativos');
            res.json(respuesta);
        });
    }
    buscarRecurso_educativo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const respuesta = yield pool.query(`SELECT * FROM recurso_educativos WHERE id = ${id}`);
            res.json(respuesta);
        });
    }
    eliminarRecurso_educativo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const respuesta = yield pool.query(`DELETE FROM recursos_educativos WHERE id = ${id}`);
            res.json(respuesta);
        });
    }
    actualizarRecurso_educativo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const respuesta = yield pool.query(`UPDATE recursos_educativos SET ? WHERE id = ?`, [req.body, id]);
            res.json(respuesta);
        });
    }
}
exports.recursos_educativosController = new Recursos_educativosController();
