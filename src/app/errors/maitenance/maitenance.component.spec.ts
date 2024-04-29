import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaitenanceComponent } from './maitenance.component';

describe('MaitenanceComponent', () => {
  let component: MaitenanceComponent;
  let fixture: ComponentFixture<MaitenanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaitenanceComponent]
    });
    fixture = TestBed.createComponent(MaitenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
