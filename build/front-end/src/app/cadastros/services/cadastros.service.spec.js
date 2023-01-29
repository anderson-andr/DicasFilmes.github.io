"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const node_test_1 = require("node:test");
const cadastros_service_1 = require("./cadastros.service");
(0, node_test_1.describe)('CadastrosService', () => {
    let service;
    (0, node_test_1.beforeEach)(() => {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(cadastros_service_1.CadastrosService);
    });
    (0, node_test_1.it)('should be created', () => {
        expect(service);
    });
});
function expect(service) {
    throw new Error('Function not implemented.');
}
