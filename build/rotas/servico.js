"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const servico_1 = require("../controller/servico");
const rota = (0, express_1.Router)();
const controller = new servico_1.ServicoController();
//Rota: /api/servicos
rota.get('/', controller.listar);
rota.post('/', controller.inserir);
rota.delete('/:id', controller.delete);
rota.put('/:id', controller.update);
exports.default = rota;
