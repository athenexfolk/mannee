import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, input } from '@angular/core';
import {
  FinancialTransaction,
  FinancialType,
} from '../../../core/models/account.model';

@Component({
  selector: 'app-finance-transaction',
  imports: [CurrencyPipe, DatePipe],
  templateUrl: './finance-transaction.component.html',
  styleUrl: './finance-transaction.component.css',
})
export class FinanceTransactionComponent {
  transaction = input.required<FinancialTransaction>();

  get FinancialType() {
    return FinancialType;
  }
}
