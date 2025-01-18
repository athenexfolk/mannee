import { Dexie, Table } from 'dexie';
import { FinancialTransaction } from '../models/account.model';

export class AppDB extends Dexie {
  transactions!: Table<FinancialTransaction, number>;

  constructor() {
    super('mannee');
    this.version(3).stores({
      transactions: '++id, date',
    });
  }
}

export const db = new AppDB();
