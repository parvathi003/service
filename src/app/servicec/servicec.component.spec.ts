import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicecComponent } from './servicec.component';

describe('ServicecComponent', () => {
  let component: ServicecComponent;
  let fixture: ComponentFixture<ServicecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
