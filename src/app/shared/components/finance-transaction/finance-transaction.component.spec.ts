import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceTransactionComponent } from './finance-transaction.component';

describe('FinanceTransactionComponent', () => {
  let component: FinanceTransactionComponent;
  let fixture: ComponentFixture<FinanceTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinanceTransactionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinanceTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
