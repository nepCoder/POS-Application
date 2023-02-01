import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDelFormComponent } from './customer-del-form.component';

describe('CustomerDelFormComponent', () => {
  let component: CustomerDelFormComponent;
  let fixture: ComponentFixture<CustomerDelFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerDelFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerDelFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
