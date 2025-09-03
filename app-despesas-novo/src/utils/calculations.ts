import { FinancialData, SavingsMessage } from "../types";

export const calculateSavings = (
  income: number,
  expenses: number
): FinancialData => {
  const savings = income - expenses;
  const savingsPercentage = income > 0 ? (savings / income) * 100 : 0;

  return {
    income,
    expenses,
    savings,
    savingsPercentage,
  };
};

export const getSavingsMessage = (
  savingsPercentage: number
): SavingsMessage => {
  if (savingsPercentage >= 15) {
    return {
      message: "Invista seu dinheiro!",
      type: "success",
    };
  } else if (savingsPercentage >= 10) {
    return {
      message: "Vamos investir no próximo mês!",
      type: "warning",
    };
  } else {
    return {
      message: "Vamos continuar tentando!",
      type: "info",
    };
  }
};

export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
};

export const formatPercentage = (value: number): string => {
  return `${value.toFixed(1)}%`;
};
