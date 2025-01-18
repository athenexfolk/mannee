import { computed, Injectable } from '@angular/core';
import {
  CreateFinancialTransactionDto,
  FinancialTransaction,
  FinancialType,
} from '../models/account.model';
import { liveQuery } from 'dexie';
import { db } from '../db/db';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private readonly _db = db;

  transactions = toSignal<FinancialTransaction[]>(
    liveQuery(() => this._db.transactions.orderBy('date').toArray())
  );

  async addTransaction(dto: CreateFinancialTransactionDto) {
    await this._db.transactions.add({ ...dto, date: new Date() });
  }

  incomeTransactions = computed(
    () =>
      this.transactions()?.filter((t) => t.type === FinancialType.Income) || []
  );

  expensesTransactions = computed(
    () =>
      this.transactions()?.filter((t) => t.type === FinancialType.Expenses) ||
      []
  );

  totalIncome = computed(
    () => this.incomeTransactions()?.reduce((acc, t) => acc + t.amount, 0) || 0
  );

  totalExpenses = computed(
    () =>
      this.expensesTransactions()?.reduce((acc, t) => acc + t.amount, 0) || 0
  );

  totalBalance = computed(() => this.totalIncome() - this.totalExpenses() || 0);
}
