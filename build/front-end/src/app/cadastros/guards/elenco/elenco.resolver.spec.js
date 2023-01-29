"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const elenco_resolver_1 = require("./elenco.resolver");
describe('ElencoResolver', () => {
    let resolver;
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({});
        resolver = testing_1.TestBed.inject(elenco_resolver_1.ElencoResolver);
    });
    it('should be created', () => {
        expect(resolver).toBeTruthy();
    });
});
