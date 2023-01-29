import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroElencoFormComponent } from './cadastro-elenco-form.component';

describe('CadastroElencoFormComponent', () => {
  let component: CadastroElencoFormComponent;
  let fixture: ComponentFixture<CadastroElencoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroElencoFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroElencoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
