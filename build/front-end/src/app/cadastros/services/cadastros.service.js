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
exports.CadastrosService = void 0;
const core_1 = require("@angular/core");
const http_1 = require("@angular/common/http");
const rxjs_1 = require("rxjs");
let CadastrosService = class CadastrosService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.API = 'http://localhost:3000/api/filme';
    }
    list() {
        return this.httpClient
            .get(this.API)
            .pipe((0, rxjs_1.first)(), (0, rxjs_1.tap)((filme) => console.log(filme)));
    }
    save(record) {
        console.log(record);
        if (record.id_filme) {
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
            .put(`${this.API}/${record.id_filme}`, record)
            .pipe((0, rxjs_1.first)());
    }
    loadById(id) {
        return this.httpClient.get(`${this.API}/${id}`);
    }
    delete(servico) {
        return this.httpClient.delete(this.API + '/' + servico.id_filme);
    }
};
CadastrosService = __decorate([
    (0, core_1.Injectable)({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [http_1.HttpClient])
], CadastrosService);
exports.CadastrosService = CadastrosService;
