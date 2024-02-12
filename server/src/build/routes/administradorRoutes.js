"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const administradorController_1 = require("../controllers/administradorController");
class AdministradorRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.post('/crearAdministrador/', administradorController_1.administradorController.createAdministrador);
        this.router.get('/mostrarAdministradores/', administradorController_1.administradorController.mostrarAdministradores);
        this.router.get('/buscarAdministrador/:id', administradorController_1.administradorController.buscarAdministrador);
        this.router.delete('/eliminarAdministrador/:id', administradorController_1.administradorController.eliminarAdministrador);
        this.router.put('/actualizarAdministrador/:id', administradorController_1.administradorController.actualizarAdministrador);
        this.router.post('/loginAdministrador', administradorController_1.administradorController.loginAdministrador);
    }
}
const administradorRoutes = new AdministradorRoutes();
exports.default = administradorRoutes.router;
