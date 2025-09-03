export interface FinancialData {
  income: number;
  expenses: number;
  savings: number;
  savingsPercentage: number;
}

export interface SavingsMessage {
  message: string;
  type: "success" | "warning" | "info";
}
