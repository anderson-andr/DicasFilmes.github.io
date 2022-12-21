"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const http_1 = require("@angular/common/http");
const core_1 = require("@angular/core");
const button_1 = require("@angular/material/button");
const form_field_1 = require("@angular/material/form-field");
const toolbar_1 = require("@angular/material/toolbar");
const platform_browser_1 = require("@angular/platform-browser");
const animations_1 = require("@angular/platform-browser/animations");
const app_routing_module_1 = require("./app-routing.module");
const app_component_1 = require("./app.component");
const ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, core_1.NgModule)({
        declarations: [
            app_component_1.AppComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            app_routing_module_1.AppRoutingModule,
            toolbar_1.MatToolbarModule,
            animations_1.BrowserAnimationsModule,
            toolbar_1.MatToolbarModule,
            http_1.HttpClientModule,
            form_field_1.MatFormFieldModule,
            button_1.MatButtonModule,
            ng_bootstrap_1.NgbModule
        ],
        providers: [],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
