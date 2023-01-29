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
exports.ElencoService = void 0;
const http_1 = require("@angular/common/http");
const core_1 = require("@angular/core");
const rxjs_1 = require("rxjs");
let ElencoService = class ElencoService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.API = 'http://localhost:3000/api/ator';
    }
    list() {
        const id = localStorage.getItem('filme');
        return this.httpClient
            .get(this.API + '/elenco/' + id)
            .pipe((0, rxjs_1.first)(), (0, rxjs_1.tap)((elenco) => console.log(elenco)));
    }
    save(record) {
        console.log(record);
        if (record.id_ator) {
            console.log('update');
            return this.update(record);
        }
        console.log('create');
        return this.create(record);
    }
    create(record) {
        return this.httpClient.post(this.API, record).pipe((0, rxjs_1.first)());
    }
    update(record) {
        return this.httpClient
            .put(`${this.API}/${record.id_ator}`, record)
            .pipe((0, rxjs_1.first)());
    }
    delete(servico) {
        return this.httpClient.delete(this.API + '/' + servico.id_ator);
    }
    loadById(id) {
        return this.httpClient.get(`${this.API}/${id}`);
    }
};
ElencoService = __decorate([
    (0, core_1.Injectable)({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [http_1.HttpClient])
], ElencoService);
exports.ElencoService = ElencoService;
