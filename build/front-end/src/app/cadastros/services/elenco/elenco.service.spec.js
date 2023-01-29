"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const elenco_service_1 = require("./elenco.service");
describe('ElencoService', () => {
    let service;
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(elenco_service_1.ElencoService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
