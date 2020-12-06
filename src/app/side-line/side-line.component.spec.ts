import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideLineComponent } from './side-line.component';

describe('SideLineComponent', () => {
  let component: SideLineComponent;
  let fixture: ComponentFixture<SideLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideLineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
