"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class IndexRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/yo/', (req, res) => res.send('HOLI'));
        this.router.get('/holi/', (req, res) => res.send('Segunda ruta'));
    }
}
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;
