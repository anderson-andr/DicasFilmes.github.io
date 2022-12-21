"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const filmes_guard_1 = require("./filmes.guard");
describe('FilmesGuard', () => {
    let guard;
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({});
        guard = testing_1.TestBed.inject(filmes_guard_1.FilmesGuard);
    });
    it('should be created', () => {
        expect(guard).toBeTruthy();
    });
});
