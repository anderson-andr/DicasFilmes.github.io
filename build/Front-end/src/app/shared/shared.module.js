"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SharedModule = void 0;
const common_1 = require("@angular/common");
const core_1 = require("@angular/core");
const app_material_module_1 = require("./app-material/app-material.module");
const error_dialog_component_1 = require("./components/error-dialog/error-dialog.component");
let SharedModule = class SharedModule {
};
SharedModule = __decorate([
    (0, core_1.NgModule)({
        declarations: [
            error_dialog_component_1.ErrorDialogComponent,
        ],
        imports: [
            common_1.CommonModule,
            app_material_module_1.AppMaterialModule
        ],
        exports: [
            error_dialog_component_1.ErrorDialogComponent
        ]
    })
], SharedModule);
exports.SharedModule = SharedModule;