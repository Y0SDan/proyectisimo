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
exports.contactoController = void 0;
const pool = require('../database');
class ContactoController {
    createContacto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = yield pool.query("INSERT INTO contacto set ?", [req.body]);
            res.json(resp);
        });
    }
    mostrarContactos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const respuesta = yield pool.query('SELECT * FROM contacto;');
            res.json(respuesta.rows);
        });
    }
    buscarContacto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const respuesta = yield pool.query(`SELECT * FROM contacto WHERE id = ${id}`);
            res.json(respuesta);
        });
    }
    eliminarContacto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const respuesta = yield pool.query(`DELETE FROM contacto WHERE id = ${id}`);
            res.json(respuesta);
        });
    }
    actualizarContacto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const respuesta = yield pool.query(`UPDATE contacto SET ? WHERE id = ?`, [req.body, id]);
            res.json(respuesta);
        });
    }
}
exports.contactoController = new ContactoController();
