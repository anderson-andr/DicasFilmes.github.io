"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilmesModule = void 0;
const common_1 = require("@angular/common");
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
const app_material_module_1 = require("../shared/app-material/app-material.module");
const shared_module_1 = require("../shared/shared.module");
const filmes_routing_module_1 = require("./filmes-routing.module");
const filmes_component_1 = require("./filmes/filmes.component");
let FilmesModule = class FilmesModule {
};
FilmesModule = __decorate([
    (0, core_1.NgModule)({
        declarations: [
            filmes_component_1.FilmesComponent
        ],
        imports: [
            common_1.CommonModule,
            filmes_routing_module_1.FilmesRoutingModule,
            app_material_module_1.AppMaterialModule,
            shared_module_1.SharedModule,
            forms_1.ReactiveFormsModule,
        ]
    })
], FilmesModule);
exports.FilmesModule = FilmesModule;
