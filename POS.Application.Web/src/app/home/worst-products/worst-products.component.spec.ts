import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorstProductsComponent } from './worst-products.component';

describe('WorstProductsComponent', () => {
  let component: WorstProductsComponent;
  let fixture: ComponentFixture<WorstProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorstProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorstProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
