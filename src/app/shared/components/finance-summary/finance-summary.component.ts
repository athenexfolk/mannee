import { CurrencyPipe } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-finance-summary',
  imports: [CurrencyPipe],
  templateUrl: './finance-summary.component.html',
  styleUrl: './finance-summary.component.css',
})
export class FinanceSummaryComponent {
  title = input('Summary');
  amount = input(0);

  bgColor = input('#ffffff');
  textColor = input('#000000');
}
