"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioController = void 0;
const data_source_1 = require("../src/data-source");
const usuario_1 = require("../src/entity/usuario");
class UsuarioController {
    listar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const datasource = yield data_source_1.AppDataSource;
            const usuarioRepository = datasource.getRepository(usuario_1.Usuario);
            const listaServicos = yield usuarioRepository.find();
            res.json(listaServicos);
        });
    }
    inserir(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuarioRequest = req.body;
            if (!usuarioRequest || !usuarioRequest.nome_usuario || !usuarioRequest.email || !usuarioRequest.senha || !usuarioRequest.cpf) {
                return res.status(400).json({
                    Erro: "Todos os dados são obrigatorios"
                });
            }
            const usuario = new usuario_1.Usuario();
            usuario.nome_usuario = usuarioRequest.nome_usuario;
            usuario.email = usuarioRequest.email;
            usuario.senha = usuarioRequest.senha;
            usuario.cpf = usuarioRequest.cpf;
            const datasource = yield data_source_1.AppDataSource;
            const usuarioRepository = datasource.getRepository(usuario_1.Usuario);
            const usuarioSalvo = yield usuarioRepository.save(usuario);
            res.status(201).json(usuarioSalvo);
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const datasource = yield data_source_1.AppDataSource;
            const usuarioRepository = datasource.getRepository(usuario_1.Usuario);
            const id = req.params.id;
            const usuario = yield usuarioRepository.findOneBy({ id_usuario: id });
            yield usuarioRepository.delete({ id_usuario: id });
            res.status(201).json({ ServicoDeletado: usuario });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const datasource = yield data_source_1.AppDataSource;
            const usuarioRepository = datasource.getRepository(usuario_1.Usuario);
            const id = req.params.id;
            const usuarioRequest = req.body;
            if (!usuarioRequest || !usuarioRequest.nome_usuario || !usuarioRequest.email || !usuarioRequest.senha || !usuarioRequest.cpf) {
                return res.status(400).json({
                    Erro: "Todos os dados são obrigatorios"
                });
            }
            yield usuarioRepository.update(id, { nome_usuario: usuarioRequest.nome_usuario, email: usuarioRequest.email, senha: usuarioRequest.senha, cpf: usuarioRequest.cpf });
            const usuario = yield usuarioRepository.findOneBy({ id_usuario: id });
            res.status(201).json(usuario);
        });
    }
    buscarPorId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const datasource = yield data_source_1.AppDataSource;
            const produtoRepository = datasource.getRepository(usuario_1.Usuario);
            const id = req.params.id;
            const filme = yield produtoRepository.findOneBy({ id_usuario: id });
            res.json(filme);
        });
    }
}
exports.UsuarioController = UsuarioController;
