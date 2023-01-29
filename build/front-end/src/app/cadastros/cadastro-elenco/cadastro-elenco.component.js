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
exports.CadastroElencoComponent = void 0;
const core_1 = require("@angular/core");
const dialog_1 = require("@angular/material/dialog");
const router_1 = require("@angular/router");
const rxjs_1 = require("rxjs");
const error_dialog_component_1 = require("../../shared/components/error-dialog/error-dialog.component");
const elenco_service_1 = require("../services/elenco/elenco.service");
let CadastroElencoComponent = class CadastroElencoComponent {
    constructor(elencoService, dialog, router, route) {
        this.elencoService = elencoService;
        this.dialog = dialog;
        this.router = router;
        this.route = route;
        this.displayedColumns = ['nome_ator', 'foto_ator', 'descricao', 'actions'];
        this.elencos = [];
        this.elenco$ = this.elencoService.list().pipe((0, rxjs_1.catchError)(error => {
            return (0, rxjs_1.of)([]);
        }));
    }
    onErro(errorMsg) {
        this.dialog.open(error_dialog_component_1.ErrorDialogComponent, {
            data: errorMsg
        });
    }
    onAdd() {
        this.router.navigate(['novo'], { relativeTo: this.route });
    }
    onEdit(elenco) {
        this.router.navigate(['Editar/Ator', elenco.id_ator], { relativeTo: this.route });
    }
    refresh() {
        this.elenco$ = this.elencoService.list()
            .pipe((0, rxjs_1.catchError)(error => {
            this.onErro('Erro ao carregar cursos.');
            return (0, rxjs_1.of)([]);
        }));
    }
    onDelete(elenco) {
        this.elencoService.delete(elenco).subscribe(() => {
            this.elencos = this.elencos.filter(response => response !== elenco);
            alert("Ator(a) deletado");
            this.refresh();
        });
    }
};
CadastroElencoComponent = __decorate([
    (0, core_1.Component)({
        selector: 'app-cadastro-elenco',
        templateUrl: './cadastro-elenco.component.html',
        styleUrls: ['./cadastro-elenco.component.scss']
    }),
    __metadata("design:paramtypes", [elenco_service_1.ElencoService,
        dialog_1.MatDialog,
        router_1.Router,
        router_1.ActivatedRoute])
], CadastroElencoComponent);
exports.CadastroElencoComponent = CadastroElencoComponent;
