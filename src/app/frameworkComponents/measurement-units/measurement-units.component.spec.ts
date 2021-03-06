import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeasurementUnitsComponent } from './measurement-units.component';

describe('MeasurementUnitsComponent', () => {
  let component: MeasurementUnitsComponent;
  let fixture: ComponentFixture<MeasurementUnitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeasurementUnitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeasurementUnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
