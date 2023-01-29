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
exports.CadastroFilmesComponent = void 0;
const core_1 = require("@angular/core");
const dialog_1 = require("@angular/material/dialog");
const router_1 = require("@angular/router");
const rxjs_1 = require("rxjs");
const cadastros_service_1 = require("../services/cadastros.service");
const error_dialog_component_1 = require("../../shared/components/error-dialog/error-dialog.component");
let CadastroFilmesComponent = class CadastroFilmesComponent {
    constructor(cadastroFilmes, dialog, router, route) {
        this.cadastroFilmes = cadastroFilmes;
        this.dialog = dialog;
        this.router = router;
        this.route = route;
        this.displayedColumns = ['nome_filme', 'foto_capa', 'descricacao', 'actions'];
        this.filmes = [];
        this.filmes$ = this.cadastroFilmes.list().pipe((0, rxjs_1.catchError)(error => {
            this.onErro('Erro ao carregar. ');
            return (0, rxjs_1.of)([]);
        }));
    }
    onErro(errorMsg) {
        this.dialog.open(error_dialog_component_1.ErrorDialogComponent, {
            data: errorMsg
        });
    }
    ngOnInit() {
    }
    onAdd() {
        this.router.navigate(['novo'], { relativeTo: this.route });
    }
    onEdit(filme) {
        this.router.navigate(['editar', filme.id_filme], { relativeTo: this.route });
    }
    refresh() {
        this.filmes$ = this.cadastroFilmes.list()
            .pipe((0, rxjs_1.catchError)(error => {
            this.onErro('Erro ao carregar cursos.');
            return (0, rxjs_1.of)([]);
        }));
    }
    onDelete(filme) {
        this.cadastroFilmes.delete(filme).subscribe(() => {
            this.filmes = this.filmes.filter(response => response !== filme);
            alert("Serviço Deletado");
            this.refresh();
        });
    }
    onElenco(filme) {
        this.router.navigate(['elenco'], { relativeTo: this.route });
        let id_filme = filme.id_filme;
        localStorage.setItem('filme', id_filme);
        console.log(localStorage.getItem('filme'));
    }
};
CadastroFilmesComponent = __decorate([
    (0, core_1.Component)({
        selector: 'app-cadastro-filmes',
        templateUrl: './cadastro-filmes.component.html',
        styleUrls: ['./cadastro-filmes.component.scss']
    }),
    __metadata("design:paramtypes", [cadastros_service_1.CadastrosService,
        dialog_1.MatDialog,
        router_1.Router,
        router_1.ActivatedRoute])
], CadastroFilmesComponent);
exports.CadastroFilmesComponent = CadastroFilmesComponent;
