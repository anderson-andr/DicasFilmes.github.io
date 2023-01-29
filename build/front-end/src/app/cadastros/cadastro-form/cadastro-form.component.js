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
exports.CadastroFormComponent = void 0;
const common_1 = require("@angular/common");
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
const snack_bar_1 = require("@angular/material/snack-bar");
const router_1 = require("@angular/router");
const cadastros_service_1 = require("../services/cadastros.service");
let CadastroFormComponent = class CadastroFormComponent {
    constructor(formBuilder, cadastroFilmes, snackBar, location, route) {
        this.formBuilder = formBuilder;
        this.cadastroFilmes = cadastroFilmes;
        this.snackBar = snackBar;
        this.location = location;
        this.route = route;
        this.form = this.formBuilder.group({
            id_filme: [null],
            nome_filme: [null],
            foto_capa: [null],
            trailer: [null],
            id_usuario: [null],
            descricacao: [null],
        });
    }
    ngOnInit() {
        const filme = this.route.snapshot.data['filme'];
        this.form.setValue({
            id_filme: filme.id_filme,
            nome_filme: filme.nome_filme,
            foto_capa: filme.foto_capa,
            trailer: filme.trailer,
            id_usuario: filme.id_usuario,
            descricacao: filme.descricacao,
        });
        console.log(filme);
    }
    onSubmit() {
        this.cadastroFilmes.save(this.form.value)
            .subscribe(result => this.onSucess(), error => this.onError());
    }
    onCancel() {
        this.location.back();
    }
    onSucess() {
        this.snackBar.open('Serviço salvo com sucesso!', '', { duration: 5000 });
        this.onCancel();
    }
    onError() {
        this.snackBar.open('Erro ao salvar serviço', '', { duration: 5000 });
    }
};
CadastroFormComponent = __decorate([
    (0, core_1.Component)({
        selector: 'app-cadastro-form',
        templateUrl: './cadastro-form.component.html',
        styleUrls: ['./cadastro-form.component.scss']
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder,
        cadastros_service_1.CadastrosService,
        snack_bar_1.MatSnackBar,
        common_1.Location,
        router_1.ActivatedRoute])
], CadastroFormComponent);
exports.CadastroFormComponent = CadastroFormComponent;
