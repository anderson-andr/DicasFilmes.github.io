"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const filmes_service_1 = require("./filmes.service");
describe('FilmesService', () => {
    let service;
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(filmes_service_1.FilmesService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
