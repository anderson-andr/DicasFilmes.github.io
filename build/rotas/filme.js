"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const filme_1 = require("../controller/filme");
const rota = (0, express_1.Router)();
const controller = new filme_1.FilmeController();
//Rota: /api/filme
rota.get('/', controller.listar);
rota.post('/', controller.inserir);
rota.get('/:id', controller.buscarPorId);
rota.delete('/:id', controller.delete);
rota.put('/:id', controller.update);
rota.get('/lista/:id', controller.listar_Filmes_byUser);
exports.default = rota;
