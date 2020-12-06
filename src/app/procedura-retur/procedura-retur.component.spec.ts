import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProceduraReturComponent } from './procedura-retur.component';

describe('ProceduraReturComponent', () => {
  let component: ProceduraReturComponent;
  let fixture: ComponentFixture<ProceduraReturComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProceduraReturComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProceduraReturComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
