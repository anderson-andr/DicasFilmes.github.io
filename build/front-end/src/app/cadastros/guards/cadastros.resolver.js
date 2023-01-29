"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CadastrosResolver = void 0;
const core_1 = require("@angular/core");
const rxjs_1 = require("rxjs");
const cadastros_service_1 = require("../services/cadastros.service");
let CadastrosResolver = class CadastrosResolver {
    constructor(cadastroService) {
        this.cadastroService = cadastroService;
    }
    resolve(route, state) {
        if (route.params && route.params['id']) {
            return this.cadastroService.loadById(route.params['id']);
        }
        return (0, rxjs_1.of)({ id_filme: 0, nome_filme: '', foto_capa: '', trailer: '', id_usuario: 0, descricacao: '' });
    }
};
CadastrosResolver = __decorate([
    (0, core_1.Injectable)({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [cadastros_service_1.CadastrosService])
], CadastrosResolver);
exports.CadastrosResolver = CadastrosResolver;
