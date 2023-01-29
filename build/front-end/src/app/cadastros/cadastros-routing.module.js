"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CadastrosRoutingModule = void 0;
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const cadastro_elenco_form_component_1 = require("./cadastro-elenco-form/cadastro-elenco-form.component");
const cadastro_elenco_component_1 = require("./cadastro-elenco/cadastro-elenco.component");
const cadastro_filmes_component_1 = require("./cadastro-filmes/cadastro-filmes.component");
const cadastro_form_component_1 = require("./cadastro-form/cadastro-form.component");
const cadastros_resolver_1 = require("./guards/cadastros.resolver");
const elenco_resolver_1 = require("./guards/elenco/elenco.resolver");
const routes = [
    { path: '', component: cadastro_filmes_component_1.CadastroFilmesComponent },
    { path: 'novo', component: cadastro_form_component_1.CadastroFormComponent },
    { path: 'editar/:id', component: cadastro_form_component_1.CadastroFormComponent, resolve: { filme: cadastros_resolver_1.CadastrosResolver } },
    { path: 'elenco', component: cadastro_elenco_component_1.CadastroElencoComponent },
    { path: 'elenco/novo', component: cadastro_elenco_form_component_1.CadastroElencoFormComponent },
    { path: 'elenco/editar/:id', component: cadastro_elenco_form_component_1.CadastroElencoFormComponent, resolve: { elenco: elenco_resolver_1.ElencoResolver } }
];
let CadastrosRoutingModule = class CadastrosRoutingModule {
};
CadastrosRoutingModule = __decorate([
    (0, core_1.NgModule)({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule]
    })
], CadastrosRoutingModule);
exports.CadastrosRoutingModule = CadastrosRoutingModule;
