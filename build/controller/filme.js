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
exports.FilmeController = void 0;
const data_source_1 = require("../src/data-source");
const filme_1 = require("../src/entity/filme");
class FilmeController {
    listar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const datasource = yield data_source_1.AppDataSource;
            const filmeRepository = datasource.getRepository(filme_1.Filme);
            const listaServicos = yield filmeRepository.find();
            res.json(listaServicos);
        });
    }
    inserir(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const filmeRequest = req.body;
            if (!filmeRequest || !filmeRequest.nome_filme || !filmeRequest.descricacao || !filmeRequest.foto_capa || !filmeRequest.trailer) {
                return res.status(400).json({
                    Erro: "Todos os dados são obrigatorios"
                });
            }
            const filme = new filme_1.Filme();
            filme.nome_filme = filmeRequest.nome_filme;
            filme.id_usuario = filmeRequest.id_usuario;
            filme.descricacao = filmeRequest.descricacao;
            filme.foto_capa = filmeRequest.foto_capa;
            filme.trailer = filmeRequest.trailer;
            const datasource = yield data_source_1.AppDataSource;
            const filmeRepository = datasource.getRepository(filme_1.Filme);
            const filmeSalvo = yield filmeRepository.save(filme);
            res.status(201).json(filmeSalvo);
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const datasource = yield data_source_1.AppDataSource;
            const filmeRepository = datasource.getRepository(filme_1.Filme);
            const id = req.params.id;
            const filme = yield filmeRepository.findOneBy({ id_filme: id });
            yield filmeRepository.delete({ id_filme: id });
            res.status(201).json({ FilmeDelatado: filme });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const datasource = yield data_source_1.AppDataSource;
            const filmeRepository = datasource.getRepository(filme_1.Filme);
            const id = req.params.id;
            const filmeRequest = req.body;
            if (!filmeRequest || !filmeRequest.nome_filme || !filmeRequest.descricacao || !filmeRequest.foto_capa || !filmeRequest.trailer) {
                return res.status(400).json({
                    Erro: "Todos os dados são obrigatorios"
                });
            }
            yield filmeRepository.update(id, { nome_filme: filmeRequest.nome_filme, descricacao: filmeRequest.descricacao, foto_capa: filmeRequest.foto_capa, trailer: filmeRequest.trailer });
            const filme = yield filmeRepository.findOneBy({ id_filme: id });
            res.status(201).json(filme);
        });
    }
    listar_Filmes_byUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const datasource = yield data_source_1.AppDataSource.createQueryRunner();
            const filme = yield datasource.query("select * from filme a inner join usuario b on b.id_usuario"
                + " = a.id_usuario where b.id_usuario =" + id);
            res.status(201).json(filme);
        });
    }
    buscarPorId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const datasource = yield data_source_1.AppDataSource;
            const produtoRepository = datasource.getRepository(filme_1.Filme);
            const id = req.params.id;
            const filme = yield produtoRepository.findOneBy({ id_filme: id });
            res.json(filme);
        });
    }
}
exports.FilmeController = FilmeController;
