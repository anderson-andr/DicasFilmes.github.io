import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroElencoComponent } from './cadastro-elenco.component';

import { beforeEach,describe,it} from 'node:test';


describe('CadastroElencoComponent', () => {
  let component: CadastroElencoComponent;
  let fixture: ComponentFixture<CadastroElencoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroElencoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroElencoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component);
  });
});
function expect(component: CadastroElencoComponent) {
  throw new Error('Function not implemented.');
}

