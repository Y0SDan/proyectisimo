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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usuariosController = void 0;
const database_1 = __importDefault(require("../database")); //acceso a la base de datos
class UsuariosController {
    mostrar_todos_usuarios(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("YA ESTAMOS AQUI");
            const respuesta = yield database_1.default.query('SELECT * FROM usuarios');
            res.json(respuesta);
        });
    }
    listOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const respuesta = yield database_1.default.query('SELECT * FROM usuarios WHERE id = ?', [id]);
            if (respuesta) {
                res.json(respuesta);
                return;
            }
            res.status(404).json({ 'mensaje': 'Usuario no encontrado' });
        });
    }
    //aqui va el crud
    createUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //console.log(req.body)
            const resp = yield database_1.default.query("INSERT INTO usuarios set ?", [req.body]);
            res.json(resp);
            //res.json(null);
        });
    }
    actualizarUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            //console.log(req.params);
            console.log(id);
            const resp = yield database_1.default.query("UPDATE usuarios set ? WHERE id = ?", [req.body, id]);
            res.json(resp);
            //res.json(null);
        });
    }
    eliminarUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const resp = yield database_1.default.query(`DELETE FROM usuarios WHERE id = ${id}`);
            res.json(resp);
        });
    }
    listarUsuariosRol(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const resp = yield database_1.default.query(`SELECT nombre, nombre_rol FROM  usuarios LEFT JOIN roles on usuarios.id_rol = roles.id_rol WHERE usuarios.id_Rol = ${id};`);
            res.json(resp);
            //if(resp.length>0){
            //    res.json(resp);
            //    return ;
            //}
            //res.status(404).json({'mensaje': 'No hay usuarios en ese rol'});
        });
    }
    ValidarUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //console.log(req.body)
            const parametros = req.body;
            var consulta = `SELECT id_Rol, correo FROM usuarios WHERE correo = '${parametros.correo}' AND contrasena = '${parametros.contrasena}'`;
            const resp = yield database_1.default.query(consulta);
            if (resp)
                res.json(resp);
            else
                res.json({ "id_Rol": "-1" });
            //res.json(null);
            //console.log(consulta);
        });
    }
}
exports.usuariosController = new UsuariosController();
