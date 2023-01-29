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
exports.ElencoResolver = void 0;
const core_1 = require("@angular/core");
const rxjs_1 = require("rxjs");
const elenco_service_1 = require("../../services/elenco/elenco.service");
let ElencoResolver = class ElencoResolver {
    constructor(elencoService) {
        this.elencoService = elencoService;
    }
    resolve(route, state) {
        if (route.params && route.params['id']) {
            return this.elencoService.loadById(route.params['id']);
        }
        return (0, rxjs_1.of)({ id_ator: 0, nome_ator: '', foto_ator: '', id_filme: 0, descricao: '' });
    }
};
ElencoResolver = __decorate([
    (0, core_1.Injectable)({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [elenco_service_1.ElencoService])
], ElencoResolver);
exports.ElencoResolver = ElencoResolver;
