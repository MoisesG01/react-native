import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { colors, globalStyles } from "../styles/global";
import { ProductData, PaymentOption } from "../types";
import { paymentMethods, getPaymentMethodColor } from "../utils/salesData";

interface PaymentSelectionScreenProps {
  productData: ProductData;
  onSelectPayment: (paymentCode: number) => void;
  onBack: () => void;
}

export const PaymentSelectionScreen: React.FC<PaymentSelectionScreenProps> = ({
  productData,
  onSelectPayment,
  onBack,
}) => {
  const [selectedPayment, setSelectedPayment] = useState<number | null>(null);

  const subtotal = productData.value * productData.quantity;

  const handlePaymentSelect = (paymentCode: number) => {
    setSelectedPayment(paymentCode);
  };

  const handleContinue = () => {
    if (selectedPayment !== null) {
      onSelectPayment(selectedPayment);
    }
  };

  const getDiscountAmount = (discountPercentage: number) => {
    return (subtotal * discountPercentage) / 100;
  };

  const getFinalValue = (discountPercentage: number) => {
    return subtotal - getDiscountAmount(discountPercentage);
  };

  return (
    <View style={globalStyles.container}>
      <View style={styles.header}>
        <Text style={styles.icon}>💳</Text>
        <Text style={globalStyles.headerTitle}>Forma de Pagamento</Text>
        <Text style={globalStyles.headerSubtitle}>
          Escolha a forma de pagamento para calcular o desconto
        </Text>
      </View>

      <View style={styles.summaryCard}>
        <Text style={styles.summaryTitle}>Resumo da Compra</Text>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Valor Unitário:</Text>
          <Text style={styles.summaryValue}>
            R${" "}
            {productData.value.toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Quantidade:</Text>
          <Text style={styles.summaryValue}>{productData.quantity}</Text>
        </View>
        <View style={[styles.summaryRow, styles.summaryTotal]}>
          <Text style={styles.summaryLabelTotal}>Subtotal:</Text>
          <Text style={styles.summaryValueTotal}>
            R${" "}
            {subtotal.toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </Text>
        </View>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.paymentTitle}>Selecione a Forma de Pagamento:</Text>

        {paymentMethods.map((payment) => (
          <TouchableOpacity
            key={payment.code}
            style={[
              styles.paymentCard,
              selectedPayment === payment.code && styles.selectedPaymentCard,
              { borderLeftColor: getPaymentMethodColor(payment.code) },
            ]}
            onPress={() => handlePaymentSelect(payment.code)}
          >
            <View style={styles.paymentHeader}>
              <Text style={styles.paymentIcon}>{payment.icon}</Text>
              <View style={styles.paymentInfo}>
                <Text style={styles.paymentName}>{payment.label}</Text>
                <Text style={styles.paymentDescription}>
                  {payment.description}
                </Text>
              </View>
              {payment.discount > 0 && (
                <View
                  style={[
                    styles.discountBadge,
                    { backgroundColor: getPaymentMethodColor(payment.code) },
                  ]}
                >
                  <Text style={styles.discountText}>-{payment.discount}%</Text>
                </View>
              )}
            </View>

            {selectedPayment === payment.code && (
              <View style={styles.paymentCalculation}>
                <View style={styles.calculationRow}>
                  <Text style={styles.calculationLabel}>Desconto:</Text>
                  <Text style={styles.calculationValue}>
                    -R${" "}
                    {getDiscountAmount(payment.discount).toLocaleString(
                      "pt-BR",
                      {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      }
                    )}
                  </Text>
                </View>
                <View style={[styles.calculationRow, styles.finalRow]}>
                  <Text style={styles.finalLabel}>Valor Final:</Text>
                  <Text style={styles.finalValue}>
                    R${" "}
                    {getFinalValue(payment.discount).toLocaleString("pt-BR", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </Text>
                </View>
              </View>
            )}
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={globalStyles.bottomContainer}>
        <TouchableOpacity
          style={[globalStyles.button, styles.backButton]}
          onPress={onBack}
        >
          <Text style={[globalStyles.buttonText, styles.backButtonText]}>
            Voltar
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            globalStyles.button,
            globalStyles.buttonPrimary,
            selectedPayment === null && styles.disabledButton,
          ]}
          onPress={handleContinue}
          disabled={selectedPayment === null}
        >
          <Text style={globalStyles.buttonText}>Calcular Venda</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    ...globalStyles.header,
    alignItems: "center",
  },
  icon: {
    fontSize: 48,
    marginBottom: 15,
  },
  summaryCard: {
    backgroundColor: colors.surface,
    margin: 20,
    marginBottom: 10,
    borderRadius: 15,
    padding: 20,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 2,
    borderColor: colors.primary,
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.primary,
    marginBottom: 15,
    textAlign: "center",
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  summaryLabel: {
    fontSize: 16,
    color: colors.text,
  },
  summaryValue: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.text,
  },
  summaryTotal: {
    borderBottomWidth: 0,
    marginTop: 10,
    paddingTop: 15,
    borderTopWidth: 2,
    borderTopColor: colors.primary,
  },
  summaryLabelTotal: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.primary,
  },
  summaryValueTotal: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.secondary,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  paymentTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.text,
    marginBottom: 15,
  },
  paymentCard: {
    backgroundColor: colors.surface,
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
    borderLeftWidth: 5,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 2,
    borderColor: colors.border,
  },
  selectedPaymentCard: {
    borderColor: colors.primary,
    backgroundColor: colors.background,
  },
  paymentHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  paymentIcon: {
    fontSize: 32,
    marginRight: 15,
  },
  paymentInfo: {
    flex: 1,
  },
  paymentName: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.primary,
    marginBottom: 5,
  },
  paymentDescription: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 18,
  },
  discountBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  discountText: {
    fontSize: 12,
    fontWeight: "600",
    color: colors.surface,
  },
  paymentCalculation: {
    marginTop: 15,
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  calculationRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 5,
  },
  calculationLabel: {
    fontSize: 16,
    color: colors.text,
  },
  calculationValue: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.danger,
  },
  finalRow: {
    marginTop: 10,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  finalLabel: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.primary,
  },
  finalValue: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.secondary,
  },
  backButton: {
    backgroundColor: colors.textLight,
    marginBottom: 10,
  },
  backButtonText: {
    color: colors.surface,
  },
  disabledButton: {
    backgroundColor: colors.textLight,
    opacity: 0.6,
  },
});
