import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtrasPersonasComponent } from './otras-personas.component';

describe('OtrasPersonasComponent', () => {
  let component: OtrasPersonasComponent;
  let fixture: ComponentFixture<OtrasPersonasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtrasPersonasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtrasPersonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
