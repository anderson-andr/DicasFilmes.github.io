"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const cadastros_resolver_1 = require("./cadastros.resolver");
describe('CadastrosResolver', () => {
    let resolver;
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({});
        resolver = testing_1.TestBed.inject(cadastros_resolver_1.CadastrosResolver);
    });
    it('should be created', () => {
        expect(resolver).toBeTruthy();
    });
});
