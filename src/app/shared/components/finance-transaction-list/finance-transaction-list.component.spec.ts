import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceTransactionListComponent } from './finance-transaction-list.component';

describe('FinanceTransactionListComponent', () => {
  let component: FinanceTransactionListComponent;
  let fixture: ComponentFixture<FinanceTransactionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinanceTransactionListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinanceTransactionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
