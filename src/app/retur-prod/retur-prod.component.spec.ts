import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturProdComponent } from './retur-prod.component';

describe('ReturProdComponent', () => {
  let component: ReturProdComponent;
  let fixture: ComponentFixture<ReturProdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReturProdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
