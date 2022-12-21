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
exports.ServicoController = void 0;
const data_source_1 = require("../src/data-source");
const servico_1 = require("../src/entity/servico");
class ServicoController {
    listar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const datasource = yield data_source_1.AppDataSource;
            const servicoRepository = datasource.getRepository(servico_1.Servico);
            const listaServicos = yield servicoRepository.find();
            res.json(listaServicos);
        });
    }
    inserir(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const servicoRequest = req.body;
            if (!servicoRequest || !servicoRequest.descricao || !servicoRequest.preco) {
                return res.status(400).json({
                    Erro: "descrição e/ou preco sao obrigatorios"
                });
            }
            const servico = new servico_1.Servico();
            servico.descricao = servicoRequest.descricao;
            servico.preco = servicoRequest.preco;
            const datasource = yield data_source_1.AppDataSource;
            const servicoRepository = datasource.getRepository(servico_1.Servico);
            const servicoSalvo = yield servicoRepository.save(servico);
            res.status(201).json(servicoSalvo);
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const datasource = yield data_source_1.AppDataSource;
            const servicoRepository = datasource.getRepository(servico_1.Servico);
            const id = req.params.id;
            const servico = yield servicoRepository.findOneBy({ id: id });
            const servicoEntracotrado = yield servicoRepository.delete({ id: id });
            res.status(201).json({ ServicoDeletado: servico });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const datasource = yield data_source_1.AppDataSource;
            const servicoRepository = datasource.getRepository(servico_1.Servico);
            const id = req.params.id;
            const servicoRequest = req.body;
            if (!servicoRequest || !servicoRequest.descricao || !servicoRequest.preco) {
                return res.status(400).json({
                    Erro: "descrição e/ou preco sao obrigatorios"
                });
            }
            yield servicoRepository.update(id, { descricao: servicoRequest.descricao, preco: servicoRequest.preco });
            const servico = yield servicoRepository.findOneBy({ id: id });
            res.status(201).json(servico);
        });
    }
}
exports.ServicoController = ServicoController;
