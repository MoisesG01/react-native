import {
  PaymentMethod,
  SaleCalculation,
  ProductData,
  PaymentOption,
} from "../types";

export const paymentMethods: PaymentOption[] = [
  {
    code: 0,
    label: "À Vista",
    description: "Pagamento à vista com desconto de 25%",
    discount: 25,
    icon: "💰",
  },
  {
    code: 1,
    label: "Cheque (30 dias)",
    description:
      "Pagamento via cheque com vencimento em 30 dias - desconto de 20%",
    discount: 20,
    icon: "📄",
  },
  {
    code: 2,
    label: "Cartão de Crédito (2x)",
    description:
      "Pagamento em 2 parcelas no cartão de crédito - desconto de 10%",
    discount: 10,
    icon: "💳",
  },
  {
    code: 3,
    label: "Cartão de Crédito (3x)",
    description:
      "Pagamento em 3 parcelas no cartão de crédito - desconto de 5%",
    discount: 5,
    icon: "💳",
  },
  {
    code: 4,
    label: "Negociado com Vendedor",
    description:
      "Forma de pagamento a ser negociada diretamente com o vendedor",
    discount: 0,
    icon: "🤝",
  },
];

export const calculateSale = (
  productData: ProductData,
  paymentCode: number
): SaleCalculation => {
  const subtotal = productData.value * productData.quantity;

  // Encontrar o método de pagamento selecionado
  const selectedPayment = paymentMethods.find(
    (method) => method.code === paymentCode
  );

  if (!selectedPayment) {
    throw new Error("Método de pagamento inválido");
  }

  const discountPercentage = selectedPayment.discount;
  const discountAmount = (subtotal * discountPercentage) / 100;
  const finalValue = subtotal - discountAmount;

  return {
    productValue: productData.value,
    quantity: productData.quantity,
    subtotal,
    paymentMethod: {
      code: selectedPayment.code,
      name: selectedPayment.label,
      description: selectedPayment.description,
      discount: discountPercentage,
      color: getPaymentMethodColor(selectedPayment.code),
    },
    discountAmount,
    discountPercentage,
    finalValue,
  };
};

export const getPaymentMethodColor = (code: number): string => {
  switch (code) {
    case 0:
      return "#10B981"; // Verde para dinheiro
    case 1:
      return "#3B82F6"; // Azul para cheque
    case 2:
      return "#8B5CF6"; // Roxo para cartão 2x
    case 3:
      return "#F59E0B"; // Amarelo para cartão 3x
    case 4:
      return "#6B7280"; // Cinza para outros
    default:
      return "#6B7280";
  }
};

export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
};

export const validateProductData = (data: ProductData): string | null => {
  if (data.value <= 0) {
    return "O valor do produto deve ser maior que zero";
  }

  if (data.quantity <= 0) {
    return "A quantidade deve ser maior que zero";
  }

  if (data.quantity > 999) {
    return "A quantidade não pode ser maior que 999";
  }

  if (data.value > 999999.99) {
    return "O valor do produto não pode ser maior que R$ 999.999,99";
  }

  return null;
};
