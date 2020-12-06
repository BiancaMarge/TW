import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComandhistoryComponent } from './comandhistory.component';

describe('ComandhistoryComponent', () => {
  let component: ComandhistoryComponent;
  let fixture: ComponentFixture<ComandhistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComandhistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComandhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
