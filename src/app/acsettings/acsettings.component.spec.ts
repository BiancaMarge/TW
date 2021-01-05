import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcsettingsComponent } from './acsettings.component';

describe('AcsettingsComponent', () => {
  let component: AcsettingsComponent;
  let fixture: ComponentFixture<AcsettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcsettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcsettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
