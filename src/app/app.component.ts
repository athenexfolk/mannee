import { Component, inject } from '@angular/core';
import { AccountService } from './core/services/account.service';
import { CreateFinancialTransactionDto } from './core/models/account.model';
import { Switch } from './shared/utils/switch';
import { FormsModule } from '@angular/forms';
import { FinanceSummaryComponent } from './shared/components/finance-summary/finance-summary.component';
import { FinanceTransactionListComponent } from './shared/components/finance-transaction-list/finance-transaction-list.component';
import { AddFinanceTransactionComponent } from './shared/components/add-finance-transaction/add-finance-transaction.component';

@Component({
  selector: 'app-root',
  imports: [
    FormsModule,
    FinanceSummaryComponent,
    FinanceTransactionListComponent,
    AddFinanceTransactionComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  readonly accountService = inject(AccountService);

  addPanel = new Switch();

  async add({ name, amount, type }: CreateFinancialTransactionDto) {
    try {
      await this.accountService.addTransaction({
        name,
        amount,
        type,
      });
      this.addPanel.close();
    } catch {
      console.error('Failed to add transaction');
    }
  }
}
