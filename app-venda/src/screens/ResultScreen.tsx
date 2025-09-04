import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Share,
} from "react-native";
import { colors, globalStyles } from "../styles/global";
import { SaleCalculation } from "../types";
import { formatCurrency } from "../utils/salesData";

interface ResultScreenProps {
  calculation: SaleCalculation;
  onNewCalculation: () => void;
  onBack: () => void;
}

export const ResultScreen: React.FC<ResultScreenProps> = ({
  calculation,
  onNewCalculation,
  onBack,
}) => {
  const handleShare = async () => {
    const shareText =
      `🛒 Calculadora de Vendas\n\n` +
      `📦 Produto: ${
        calculation.quantity
      }x R$ ${calculation.productValue.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}\n` +
      `💳 Pagamento: ${calculation.paymentMethod.name}\n` +
      `💰 Subtotal: ${formatCurrency(calculation.subtotal)}\n` +
      `🎯 Desconto: ${calculation.discountPercentage}% (${formatCurrency(
        calculation.discountAmount
      )})\n` +
      `✅ Valor Final: ${formatCurrency(calculation.finalValue)}`;

    try {
      await Share.share({
        message: shareText,
        title: "Resultado da Venda",
      });
    } catch (error) {
      console.log("Erro ao compartilhar:", error);
    }
  };

  return (
    <View style={globalStyles.container}>
      <View style={styles.header}>
        <Text style={styles.icon}>✅</Text>
        <Text style={globalStyles.headerTitle}>Cálculo Concluído</Text>
        <Text style={globalStyles.headerSubtitle}>
          Aqui está o resultado da sua venda
        </Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.resultCard}>
          <Text style={styles.resultTitle}>Valor Final da Venda</Text>
          <Text style={styles.resultValue}>
            {formatCurrency(calculation.finalValue)}
          </Text>
          <Text style={styles.resultLabel}>
            Economia de {formatCurrency(calculation.discountAmount)}
          </Text>
        </View>

        <View style={styles.detailsCard}>
          <Text style={styles.detailsTitle}>Detalhes da Venda</Text>

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Valor Unitário:</Text>
            <Text style={styles.detailValue}>
              {formatCurrency(calculation.productValue)}
            </Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Quantidade:</Text>
            <Text style={styles.detailValue}>{calculation.quantity}</Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Subtotal:</Text>
            <Text style={styles.detailValue}>
              {formatCurrency(calculation.subtotal)}
            </Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Desconto:</Text>
            <Text style={[styles.detailValue, styles.discountValue]}>
              -{calculation.discountPercentage}% (
              {formatCurrency(calculation.discountAmount)})
            </Text>
          </View>

          <View style={[styles.detailRow, styles.finalRow]}>
            <Text style={styles.finalLabel}>Valor Final:</Text>
            <Text style={styles.finalValue}>
              {formatCurrency(calculation.finalValue)}
            </Text>
          </View>
        </View>

        <View style={styles.paymentCard}>
          <Text style={styles.paymentTitle}>Forma de Pagamento</Text>
          <View style={styles.paymentInfo}>
            <Text style={styles.paymentIcon}>
              {calculation.paymentMethod.code === 0
                ? "💰"
                : calculation.paymentMethod.code === 1
                ? "📄"
                : calculation.paymentMethod.code === 2
                ? "💳"
                : calculation.paymentMethod.code === 3
                ? "💳"
                : "🤝"}
            </Text>
            <View style={styles.paymentDetails}>
              <Text style={styles.paymentName}>
                {calculation.paymentMethod.name}
              </Text>
              <Text style={styles.paymentDescription}>
                {calculation.paymentMethod.description}
              </Text>
            </View>
          </View>
          {calculation.discountPercentage > 0 && (
            <View
              style={[
                styles.discountBadge,
                { backgroundColor: calculation.paymentMethod.color },
              ]}
            >
              <Text style={styles.discountBadgeText}>
                Desconto de {calculation.discountPercentage}%
              </Text>
            </View>
          )}
        </View>

        <View style={styles.summaryCard}>
          <Text style={styles.summaryTitle}>Resumo da Economia</Text>
          <View style={styles.summaryContent}>
            <View style={styles.summaryItem}>
              <Text style={styles.summaryIcon}>💸</Text>
              <Text style={styles.summaryLabel}>Valor Original</Text>
              <Text style={styles.summaryValue}>
                {formatCurrency(calculation.subtotal)}
              </Text>
            </View>
            <View style={styles.summaryItem}>
              <Text style={styles.summaryIcon}>🎯</Text>
              <Text style={styles.summaryLabel}>Desconto</Text>
              <Text style={[styles.summaryValue, styles.discountValue]}>
                -{formatCurrency(calculation.discountAmount)}
              </Text>
            </View>
            <View style={styles.summaryItem}>
              <Text style={styles.summaryIcon}>✅</Text>
              <Text style={styles.summaryLabel}>Valor Final</Text>
              <Text style={[styles.summaryValue, styles.finalValue]}>
                {formatCurrency(calculation.finalValue)}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={globalStyles.bottomContainer}>
        <TouchableOpacity
          style={[globalStyles.button, styles.shareButton]}
          onPress={handleShare}
        >
          <Text style={[globalStyles.buttonText, styles.shareButtonText]}>
            📤 Compartilhar
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[globalStyles.button, styles.backButton]}
          onPress={onBack}
        >
          <Text style={[globalStyles.buttonText, styles.backButtonText]}>
            Voltar
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[globalStyles.button, globalStyles.buttonPrimary]}
          onPress={onNewCalculation}
        >
          <Text style={globalStyles.buttonText}>Nova Venda</Text>
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
    fontSize: 64,
    marginBottom: 20,
  },
  content: {
    flex: 1,
    padding: 20,
    paddingBottom: 40,
  },
  resultCard: {
    backgroundColor: colors.surface,
    borderRadius: 25,
    padding: 30,
    marginBottom: 20,
    alignItems: "center",
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
    borderWidth: 3,
    borderColor: colors.secondary,
  },
  resultTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.primary,
    marginBottom: 15,
    textAlign: "center",
  },
  resultValue: {
    fontSize: 36,
    fontWeight: "bold",
    color: colors.secondary,
    marginBottom: 10,
  },
  resultLabel: {
    fontSize: 16,
    color: colors.textSecondary,
    textAlign: "center",
  },
  detailsCard: {
    backgroundColor: colors.surface,
    borderRadius: 20,
    padding: 25,
    marginBottom: 20,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  detailsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.primary,
    marginBottom: 20,
    textAlign: "center",
  },
  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  detailLabel: {
    fontSize: 16,
    color: colors.text,
  },
  detailValue: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.text,
  },
  discountValue: {
    color: colors.danger,
  },
  finalRow: {
    borderBottomWidth: 0,
    marginTop: 15,
    paddingTop: 20,
    borderTopWidth: 2,
    borderTopColor: colors.primary,
  },
  finalLabel: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.primary,
  },
  finalValue: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.secondary,
  },
  paymentCard: {
    backgroundColor: colors.surface,
    borderRadius: 20,
    padding: 25,
    marginBottom: 20,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderLeftWidth: 5,
    borderLeftColor: colors.primary,
  },
  paymentTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.primary,
    marginBottom: 15,
    textAlign: "center",
  },
  paymentInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  paymentIcon: {
    fontSize: 32,
    marginRight: 15,
  },
  paymentDetails: {
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
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 15,
    alignSelf: "center",
  },
  discountBadgeText: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.surface,
  },
  summaryCard: {
    backgroundColor: colors.surface,
    borderRadius: 20,
    padding: 25,
    marginBottom: 30,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.primary,
    marginBottom: 20,
    textAlign: "center",
  },
  summaryContent: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  summaryItem: {
    alignItems: "center",
    flex: 1,
  },
  summaryIcon: {
    fontSize: 24,
    marginBottom: 8,
  },
  summaryLabel: {
    fontSize: 12,
    color: colors.textSecondary,
    textAlign: "center",
    marginBottom: 5,
  },
  summaryValue: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.text,
    textAlign: "center",
  },
  shareButton: {
    backgroundColor: colors.accent,
    marginBottom: 10,
  },
  shareButtonText: {
    color: colors.surface,
  },
  backButton: {
    backgroundColor: colors.textLight,
    marginBottom: 10,
  },
  backButtonText: {
    color: colors.surface,
  },
});
