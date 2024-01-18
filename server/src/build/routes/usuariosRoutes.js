"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuariosController_1 = require("../controllers/usuariosController");
class UsuariosRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        //this.router.get('/mostrarTodosUsuarios/',(req,res) => res.send('probando usuarios'));
        this.router.get('/mostrarTodosUsuarios/', usuariosController_1.usuariosController.mostrar_todos_usuarios);
        this.router.get('/obtenerUsuario/:id', usuariosController_1.usuariosController.listOne);
        this.router.post('/crearUsuario/', usuariosController_1.usuariosController.createUsuario);
        this.router.put('/actualizarUsuario/:id', usuariosController_1.usuariosController.actualizarUsuario);
        this.router.delete('/eliminarUsuario/:id', usuariosController_1.usuariosController.eliminarUsuario);
        this.router.get('/listarUsuariosRol/:id', usuariosController_1.usuariosController.listarUsuariosRol);
        this.router.post('/ValidarUsuario/', usuariosController_1.usuariosController.ValidarUsuario);
    }
}
const usuariosRoutes = new UsuariosRoutes();
exports.default = usuariosRoutes.router;
