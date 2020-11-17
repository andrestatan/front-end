import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncicioComponent } from './incicio.component';

describe('IncicioComponent', () => {
  let component: IncicioComponent;
  let fixture: ComponentFixture<IncicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
