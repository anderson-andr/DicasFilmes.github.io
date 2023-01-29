import { ComponentFixture, TestBed } from '@angular/core/testing';
import { beforeEach,describe,it} from 'node:test';

import { CadastroFilmesComponent } from './cadastro-filmes.component';

describe('CadastroFilmesComponent', () => {
  let component: CadastroFilmesComponent;
  let fixture: ComponentFixture<CadastroFilmesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroFilmesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroFilmesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component);
  });
});
function expect(component: CadastroFilmesComponent) {
  throw new Error('Function not implemented.');
}

