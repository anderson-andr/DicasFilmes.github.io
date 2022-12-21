"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppMaterialModule = void 0;
const core_1 = require("@angular/core");
const button_1 = require("@angular/material/button");
const card_1 = require("@angular/material/card");
const dialog_1 = require("@angular/material/dialog");
const form_field_1 = require("@angular/material/form-field");
const icon_1 = require("@angular/material/icon");
const input_1 = require("@angular/material/input");
const progress_spinner_1 = require("@angular/material/progress-spinner");
const select_1 = require("@angular/material/select");
const snack_bar_1 = require("@angular/material/snack-bar");
const table_1 = require("@angular/material/table");
const toolbar_1 = require("@angular/material/toolbar");
let AppMaterialModule = class AppMaterialModule {
};
AppMaterialModule = __decorate([
    (0, core_1.NgModule)({
        exports: [
            table_1.MatTableModule,
            card_1.MatCardModule,
            toolbar_1.MatToolbarModule,
            progress_spinner_1.MatProgressSpinnerModule,
            dialog_1.MatDialogModule,
            button_1.MatButtonModule,
            icon_1.MatIconModule,
            form_field_1.MatFormFieldModule,
            input_1.MatInputModule,
            select_1.MatSelectModule,
            snack_bar_1.MatSnackBarModule
        ],
    })
], AppMaterialModule);
exports.AppMaterialModule = AppMaterialModule;
