import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorDevelopComponent } from './error-develop.component';

describe('ErrorDevelopComponent', () => {
  let component: ErrorDevelopComponent;
  let fixture: ComponentFixture<ErrorDevelopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ErrorDevelopComponent]
    });
    fixture = TestBed.createComponent(ErrorDevelopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
