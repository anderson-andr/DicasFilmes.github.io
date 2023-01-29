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
exports.FilmesComponent = void 0;
const core_1 = require("@angular/core");
const dialog_1 = require("@angular/material/dialog");
const router_1 = require("@angular/router");
const error_dialog_component_1 = require("../../shared/components/error-dialog/error-dialog.component");
const filmes_service_1 = require("../services/filmes.service");
let FilmesComponent = class FilmesComponent {
    constructor(filmesService, dialog, router, route) {
        //this.coursesService = new CoursesService();
        this.filmesService = filmesService;
        this.dialog = dialog;
        this.router = router;
        this.route = route;
        this.Filme = [];
    }
    onErro(errorMsg) {
        this.dialog.open(error_dialog_component_1.ErrorDialogComponent, {
            data: errorMsg
        });
    }
    ngOnInit() {
        this.route.paramMap.subscribe(res => {
            this.idFilme = res.get('id');
        });
        this.FilmebyId(this.idFilme);
    }
    FilmebyId(id) {
        this.filmesService.loadById(id).subscribe((res) => {
            this.filme_encontrado = res;
            console.log(res);
        });
    }
};
FilmesComponent = __decorate([
    (0, core_1.Component)({
        selector: 'app-filmes',
        templateUrl: './filmes.component.html',
        styleUrls: ['./filmes.component.scss']
    }),
    __metadata("design:paramtypes", [filmes_service_1.FilmesService,
        dialog_1.MatDialog,
        router_1.Router,
        router_1.ActivatedRoute])
], FilmesComponent);
exports.FilmesComponent = FilmesComponent;
