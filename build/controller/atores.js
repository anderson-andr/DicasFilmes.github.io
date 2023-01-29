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
exports.AtorController = void 0;
const data_source_1 = require("../src/data-source");
const atores_1 = require("../src/entity/atores");
class AtorController {
    listar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const datasource = yield data_source_1.AppDataSource;
            const atoresRepository = datasource.getRepository(atores_1.Atores);
            const listaAtores = yield atoresRepository.find();
            res.json(listaAtores);
        });
    }
    inserir(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const atoresRequest = req.body;
            if (!atoresRequest || !atoresRequest.nome_ator || !atoresRequest.descricao || !atoresRequest.foto_ator || !atoresRequest.id_filme) {
                return res.status(400).json({
                    Erro: "Todos os dados são obrigatorios"
                });
            }
            const atores = new atores_1.Atores();
            atores.nome_ator = atoresRequest.nome_ator;
            atores.descricao = atoresRequest.descricao;
            atores.foto_ator = atoresRequest.foto_ator;
            atores.id_filme = atoresRequest.id_filme;
            const datasource = yield data_source_1.AppDataSource;
            const atoresRepository = datasource.getRepository(atores_1.Atores);
            const atorSalvo = yield atoresRepository.save(atores);
            res.status(201).json(atorSalvo);
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const datasource = yield data_source_1.AppDataSource;
            const atoresRepository = datasource.getRepository(atores_1.Atores);
            const id = req.params.id;
            const atores = yield atoresRepository.findOneBy({ id_ator: id });
            yield atoresRepository.delete({ id_ator: id });
            res.status(201).json({ AtorDeletado: atores });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const datasource = yield data_source_1.AppDataSource;
            const atoresRepository = datasource.getRepository(atores_1.Atores);
            const id = req.params.id;
            const atoresRequest = req.body;
            if (!atoresRequest || !atoresRequest.nome_ator || !atoresRequest.descricacao || !atoresRequest.foto_ator) {
                return res.status(400).json({
                    Erro: "Todos os dados são obrigatorios"
                });
            }
            yield atoresRepository.update(id, {
                nome_ator: atoresRequest.nome_ator, descricao: atoresRequest.descricacao, foto_ator: atoresRequest.foto_ator
            });
            const atores = yield atoresRepository.findOneBy({ id_ator: id });
            res.status(201).json(atores);
        });
    }
    buscarPorId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const datasource = yield data_source_1.AppDataSource;
            const atoresRepository = datasource.getRepository(atores_1.Atores);
            const id = req.params.id;
            const atores = yield atoresRepository.findOneBy({ id_ator: id });
            res.json(atores);
        });
    }
    listar_Eleco_ByFilme(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const datasource = yield data_source_1.AppDataSource.createQueryRunner();
            const atores = yield datasource.query("select * from atores "
                + " where id_filme =" + id);
            res.status(201).json(atores);
        });
    }
}
exports.AtorController = AtorController;
