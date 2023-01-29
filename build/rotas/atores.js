"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const atores_1 = require("../controller/atores");
const rota = (0, express_1.Router)();
const controller = new atores_1.AtorController();
//Rota: /api/filme
rota.get('/', controller.listar);
rota.post('/', controller.inserir);
rota.get('/:id', controller.buscarPorId);
rota.delete('/:id', controller.delete);
rota.put('/:id', controller.update);
rota.get('/elenco/:id', controller.listar_Eleco_ByFilme);
exports.default = rota;
