"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const recursos_educativosController_1 = require("../controllers/recursos_educativosController");
class Recursos_educativosRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.post('/crearRecurso_educativo/', recursos_educativosController_1.recursos_educativosController.createRecurso_educativo);
        this.router.get('/mostrarRecursos_educativos/', recursos_educativosController_1.recursos_educativosController.mostrarRecursos_educativos);
        this.router.get('/buscarRecurso_educativo/:id', recursos_educativosController_1.recursos_educativosController.buscarRecurso_educativo);
        this.router.delete('/eliminarRecurso_educativo/:id', recursos_educativosController_1.recursos_educativosController.eliminarRecurso_educativo);
        this.router.put('/actualizarRecurso_educativo/:id', recursos_educativosController_1.recursos_educativosController.actualizarRecurso_educativo);
    }
}
const recurso_educativosRoutes = new Recursos_educativosRoutes();
exports.default = recurso_educativosRoutes.router;
