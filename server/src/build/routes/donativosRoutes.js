"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const donativosController_1 = require("../controllers/donativosController");
class DonativoRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.post('/crearDonativo/', donativosController_1.donativoController.createDonativo);
        this.router.get('/mostrarDonativos/', donativosController_1.donativoController.mostrarDonativos);
        this.router.get('/buscarDonativo/:id', donativosController_1.donativoController.buscarDonativo);
        this.router.delete('/eliminarDonativo/:id', donativosController_1.donativoController.eliminarDonativo);
        this.router.put('/actualizarDonativo/:id', donativosController_1.donativoController.actualizarDonativo);
    }
}
const donativoRoutes = new DonativoRoutes();
exports.default = donativoRoutes.router;
