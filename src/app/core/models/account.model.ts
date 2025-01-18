export enum FinancialType {
  Income = 'Income',
  Expenses = 'Expenses',
}

export interface FinancialTransaction {
  id?: number;
  name: string;
  amount: number;
  date: Date;
  type: FinancialType;
}

export interface CreateFinancialTransactionDto {
  name: string;
  amount: number;
  type: FinancialType;
}

export class Account {
  protected transactions: FinancialTransaction[] = [];

  addFinancialTransaction(transaction: FinancialTransaction): void {
    this.transactions.push(transaction);
  }

  getFinancialTransactions(): FinancialTransaction[] {
    return this.transactions;
  }

  getFinancialTransactionsByType(type: FinancialType): FinancialTransaction[] {
    return this.transactions.filter((t) => t.type === type);
  }

  getTotalIncome(): number {
    return this.transactions
      .filter((t) => t.type === FinancialType.Income)
      .reduce((sum, t) => sum + t.amount, 0);
  }

  getTotalExpenses(): number {
    return this.transactions
      .filter((t) => t.type === FinancialType.Expenses)
      .reduce((sum, t) => sum + t.amount, 0);
  }

  getNetBalance(): number {
    return this.getTotalIncome() - this.getTotalExpenses();
  }

  private groupFinancialTransactionsByMonth(): Map<
    string,
    FinancialTransaction[]
  > {
    const grouped = new Map<string, FinancialTransaction[]>();

    for (const transaction of this.transactions) {
      const monthKey = `${transaction.date.getFullYear()}-${
        transaction.date.getMonth() + 1
      }`;
      if (!grouped.has(monthKey)) {
        grouped.set(monthKey, []);
      }
      grouped.get(monthKey)!.push(transaction);
    }

    return grouped;
  }

  getMonthlyIncome(year: number, month: number): number {
    const transactions = this.transactions.filter(
      (t) =>
        t.type === FinancialType.Income &&
        t.date.getFullYear() === year &&
        t.date.getMonth() + 1 === month
    );
    return transactions.reduce((sum, t) => sum + t.amount, 0);
  }

  getMonthlyExpenses(year: number, month: number): number {
    const transactions = this.transactions.filter(
      (t) =>
        t.type === FinancialType.Expenses &&
        t.date.getFullYear() === year &&
        t.date.getMonth() + 1 === month
    );
    return transactions.reduce((sum, t) => sum + t.amount, 0);
  }

  getMonthlyNetBalance(year: number, month: number): number {
    return (
      this.getMonthlyIncome(year, month) - this.getMonthlyExpenses(year, month)
    );
  }

  getMonthlySummaries(): {
    month: string;
    income: number;
    expenses: number;
    netBalance: number;
  }[] {
    const grouped = this.groupFinancialTransactionsByMonth();
    const summaries: {
      month: string;
      income: number;
      expenses: number;
      netBalance: number;
    }[] = [];

    for (const [month, transactions] of grouped.entries()) {
      const income = transactions
        .filter((t) => t.type === FinancialType.Income)
        .reduce((sum, t) => sum + t.amount, 0);
      const expenses = transactions
        .filter((t) => t.type === FinancialType.Expenses)
        .reduce((sum, t) => sum + t.amount, 0);
      summaries.push({
        month,
        income,
        expenses,
        netBalance: income - expenses,
      });
    }

    return summaries;
  }
}
