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
exports.CadastroElencoFormComponent = void 0;
const core_1 = require("@angular/core");
const elenco_service_1 = require("../services/elenco/elenco.service");
const common_1 = require("@angular/common");
const forms_1 = require("@angular/forms");
const snack_bar_1 = require("@angular/material/snack-bar");
const router_1 = require("@angular/router");
let CadastroElencoFormComponent = class CadastroElencoFormComponent {
    constructor(formBuilder, eleconService, snackBar, location, route) {
        this.formBuilder = formBuilder;
        this.eleconService = eleconService;
        this.snackBar = snackBar;
        this.location = location;
        this.route = route;
        this.form = this.formBuilder.group({
            nome_ator: [null],
            foto_ator: [null],
            descricao: [null],
            id_filme: localStorage.getItem('filme')
        });
    }
    ngOnInit() {
    }
    onSubmit() {
        this.eleconService.save(this.form.value)
            .subscribe(result => this.onSucess(), error => this.onError());
    }
    onCancel() {
        this.location.back();
    }
    onSucess() {
        this.snackBar.open('Ator(a) salvo com sucesso!', '', { duration: 5000 });
        this.onCancel();
    }
    onError() {
        this.snackBar.open('Erro ao salvar Ator(a)', '', { duration: 5000 });
    }
};
CadastroElencoFormComponent = __decorate([
    (0, core_1.Component)({
        selector: 'app-cadastro-elenco-form',
        templateUrl: './cadastro-elenco-form.component.html',
        styleUrls: ['./cadastro-elenco-form.component.scss']
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder,
        elenco_service_1.ElencoService,
        snack_bar_1.MatSnackBar,
        common_1.Location,
        router_1.ActivatedRoute])
], CadastroElencoFormComponent);
exports.CadastroElencoFormComponent = CadastroElencoFormComponent;
