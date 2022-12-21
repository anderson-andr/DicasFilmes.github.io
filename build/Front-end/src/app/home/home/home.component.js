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
exports.HomeComponent = void 0;
const core_1 = require("@angular/core");
const filmes_service_1 = require("../../filmes/services/filmes.service");
const router_1 = require("@angular/router");
let HomeComponent = class HomeComponent {
    constructor(filmesService, router, route) {
        this.filmesService = filmesService;
        this.router = router;
        this.route = route;
        this.Filme = [];
    }
    ngOnInit() {
        this.filmesService.list().subscribe(res => {
            this.Filme = res;
            console.log(this.Filme);
        });
    }
    onFilme(id) {
        this.router.navigate(['/filme'], { relativeTo: this.route });
        localStorage.setItem('id', id.toString());
    }
};
HomeComponent = __decorate([
    (0, core_1.Component)({
        selector: 'app-home',
        templateUrl: './home.component.html',
        styleUrls: ['./home.component.scss']
    }),
    __metadata("design:paramtypes", [filmes_service_1.FilmesService,
        router_1.Router,
        router_1.ActivatedRoute])
], HomeComponent);
exports.HomeComponent = HomeComponent;
