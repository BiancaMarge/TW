import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vp2Component } from './vp2.component';

describe('Vp2Component', () => {
  let component: Vp2Component;
  let fixture: ComponentFixture<Vp2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Vp2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Vp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
