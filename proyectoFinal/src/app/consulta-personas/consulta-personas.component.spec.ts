import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaPersonasComponent } from './consulta-personas.component';

describe('ConsultaPersonasComponent', () => {
  let component: ConsultaPersonasComponent;
  let fixture: ComponentFixture<ConsultaPersonasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaPersonasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaPersonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
