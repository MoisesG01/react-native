import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../styles/colors";
import { FinancialData, SavingsMessage } from "../types";
import { formatCurrency, formatPercentage } from "../utils/calculations";

interface ResultCardProps {
  data: FinancialData;
  message: SavingsMessage;
}

export const ResultCard: React.FC<ResultCardProps> = ({ data, message }) => {
  const getMessageStyle = () => {
    switch (message.type) {
      case "success":
        return styles.successMessage;
      case "warning":
        return styles.warningMessage;
      case "info":
        return styles.infoMessage;
      default:
        return styles.infoMessage;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resultado do Mês</Text>

      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.label}>Receitas</Text>
          <Text style={styles.value}>{formatCurrency(data.income)}</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.label}>Despesas</Text>
          <Text style={styles.value}>{formatCurrency(data.expenses)}</Text>
        </View>
      </View>

      <View style={styles.divider} />

      <View style={styles.savingsContainer}>
        <Text style={styles.label}>Economia</Text>
        <Text style={styles.savingsValue}>{formatCurrency(data.savings)}</Text>
        <Text style={styles.percentage}>
          {formatPercentage(data.savingsPercentage)}
        </Text>
      </View>

      <View style={[styles.messageContainer, getMessageStyle()]}>
        <Text style={styles.messageText}>{message.message}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: 24,
    marginVertical: 16,
    shadowColor: colors.shadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: colors.text,
    textAlign: "center",
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  column: {
    flex: 1,
    alignItems: "center",
  },
  label: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 8,
  },
  value: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.text,
  },
  divider: {
    height: 1,
    backgroundColor: colors.border,
    marginVertical: 20,
  },
  savingsContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  savingsValue: {
    fontSize: 24,
    fontWeight: "700",
    color: colors.primary,
    marginBottom: 8,
  },
  percentage: {
    fontSize: 16,
    color: colors.primary,
    fontWeight: "600",
  },
  messageContainer: {
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  successMessage: {
    backgroundColor: colors.success + "20",
    borderWidth: 1,
    borderColor: colors.success,
  },
  warningMessage: {
    backgroundColor: colors.warning + "20",
    borderWidth: 1,
    borderColor: colors.warning,
  },
  infoMessage: {
    backgroundColor: colors.info + "20",
    borderWidth: 1,
    borderColor: colors.info,
  },
  messageText: {
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
});
