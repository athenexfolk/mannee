import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFinanceTransactionComponent } from './add-finance-transaction.component';

describe('AddFinanceTransactionComponent', () => {
  let component: AddFinanceTransactionComponent;
  let fixture: ComponentFixture<AddFinanceTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddFinanceTransactionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddFinanceTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
