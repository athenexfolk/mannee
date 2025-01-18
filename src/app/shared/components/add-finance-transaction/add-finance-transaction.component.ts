import { Component, inject, Input, output } from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  CreateFinancialTransactionDto,
  FinancialType,
} from '../../../core/models/account.model';

@Component({
  selector: 'app-add-finance-transaction',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './add-finance-transaction.component.html',
  styleUrl: './add-finance-transaction.component.css',
})
export class AddFinanceTransactionComponent {
  private readonly fb = inject(FormBuilder);

  maxNameLength = 30;

  form = this.fb.group({
    name: ['', [Validators.required, Validators.maxLength(this.maxNameLength)]],
    amount: [
      '',
      [Validators.required, Validators.pattern(/^[0-9]+(\.[0-9]{1,2})?$/)],
    ],
    type: [FinancialType.Income, Validators.required],
  });

  get name() {
    return this.form.get('name');
  }

  get amount() {
    return this.form.get('amount');
  }

  get type() {
    return this.form.get('type');
  }

  closed = output();
  added = output<CreateFinancialTransactionDto>();

  financialTypes = Object.keys(FinancialType);

  get FinancialType() {
    return FinancialType;
  }

  submit() {
    if (this.form.invalid) {
      return;
    }

    const transaction: CreateFinancialTransactionDto = {
      name: this.name!.value!,
      amount: this.parseAmount(this.amount!.value!),
      type: this.type!.value! as FinancialType,
    };
    this.added.emit(transaction);
  }

  parseAmount(amount: string) {
    return isNaN(+amount) || +amount < 0 ? 0 : parseFloat((+amount).toFixed(2));
  }
}
