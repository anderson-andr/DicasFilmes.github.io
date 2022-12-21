"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuario_1 = require("../controller/usuario");
const rota = (0, express_1.Router)();
const controller = new usuario_1.UsuarioController();
//Rota: /api/servicos
rota.get('/', controller.listar);
rota.post('/', controller.inserir);
rota.delete('/:id', controller.delete);
rota.put('/:id', controller.update);
exports.default = rota;
