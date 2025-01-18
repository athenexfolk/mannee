import { Component, input } from '@angular/core';
import {
  FinancialTransaction,
  FinancialType,
} from '../../../core/models/account.model';
import { FinanceTransactionComponent } from '../finance-transaction/finance-transaction.component';

@Component({
  selector: 'app-finance-transaction-list',
  imports: [FinanceTransactionComponent],
  templateUrl: './finance-transaction-list.component.html',
  styleUrl: './finance-transaction-list.component.css',
})
export class FinanceTransactionListComponent {
  transactions = input<FinancialTransaction[]>([]);

  get FinancialType() {
    return FinancialType;
  }
}
