import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceSummaryComponent } from './finance-summary.component';

describe('FinanceSummaryComponent', () => {
  let component: FinanceSummaryComponent;
  let fixture: ComponentFixture<FinanceSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinanceSummaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinanceSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
