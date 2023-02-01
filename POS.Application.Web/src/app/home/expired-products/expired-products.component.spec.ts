import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpiredProductsComponent } from './expired-products.component';

describe('ExpiredProductsComponent', () => {
  let component: ExpiredProductsComponent;
  let fixture: ComponentFixture<ExpiredProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpiredProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpiredProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
