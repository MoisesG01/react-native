export interface ProductData {
  value: number;
  quantity: number;
}

export interface PaymentMethod {
  code: number;
  name: string;
  description: string;
  discount: number;
  color: string;
}

export interface SaleCalculation {
  productValue: number;
  quantity: number;
  subtotal: number;
  paymentMethod: PaymentMethod;
  discountAmount: number;
  discountPercentage: number;
  finalValue: number;
}

export type ScreenType =
  | "welcome"
  | "product-input"
  | "payment-selection"
  | "result";

export interface PaymentOption {
  code: number;
  label: string;
  description: string;
  discount: number;
  icon: string;
}
