"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const contactoController_1 = require("../controllers/contactoController");
class ContactoRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.post('/crearContacto/', contactoController_1.contactoController.createContacto);
        this.router.get('/mostrarContactos/', contactoController_1.contactoController.mostrarContactos);
        this.router.get('/buscarContacto/:id', contactoController_1.contactoController.buscarContacto);
        this.router.delete('/eliminarContacto/:id', contactoController_1.contactoController.eliminarContacto);
        this.router.put('/actualizarContacto/:id', contactoController_1.contactoController.actualizarContacto);
    }
}
const contactoRoutes = new ContactoRoutes();
exports.default = contactoRoutes.router;
