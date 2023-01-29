"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CadastrosModule = void 0;
const common_1 = require("@angular/common");
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
const menu_1 = require("@angular/material/menu");
const app_material_module_1 = require("../shared/app-material/app-material.module");
const shared_module_1 = require("../shared/shared.module");
const cadastro_filmes_component_1 = require("./cadastro-filmes/cadastro-filmes.component");
const cadastro_form_component_1 = require("./cadastro-form/cadastro-form.component");
const cadastros_routing_module_1 = require("./cadastros-routing.module");
const cadastro_elenco_component_1 = require("./cadastro-elenco/cadastro-elenco.component");
const cadastro_elenco_form_component_1 = require("./cadastro-elenco-form/cadastro-elenco-form.component");
let CadastrosModule = class CadastrosModule {
};
CadastrosModule = __decorate([
    (0, core_1.NgModule)({
        declarations: [
            cadastro_filmes_component_1.CadastroFilmesComponent,
            cadastro_form_component_1.CadastroFormComponent,
            cadastro_elenco_component_1.CadastroElencoComponent,
            cadastro_elenco_form_component_1.CadastroElencoFormComponent,
        ],
        imports: [
            common_1.CommonModule,
            cadastros_routing_module_1.CadastrosRoutingModule,
            app_material_module_1.AppMaterialModule,
            shared_module_1.SharedModule,
            forms_1.ReactiveFormsModule,
            menu_1.MatMenuModule
        ]
    })
], CadastrosModule);
exports.CadastrosModule = CadastrosModule;
