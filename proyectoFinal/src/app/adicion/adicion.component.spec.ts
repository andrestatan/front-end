import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionComponent } from './adicion.component';

describe('AdicionComponent', () => {
  let component: AdicionComponent;
  let fixture: ComponentFixture<AdicionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdicionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
