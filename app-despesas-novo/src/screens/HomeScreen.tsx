import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { colors } from "../styles/colors";
import { InputField } from "../components/InputField";
import { Button } from "../components/Button";
import { ResultCard } from "../components/ResultCard";
import { calculateSavings, getSavingsMessage } from "../utils/calculations";
import { FinancialData, SavingsMessage } from "../types";

export const HomeScreen: React.FC = () => {
  const [income, setIncome] = useState("");
  const [expenses, setExpenses] = useState("");
  const [result, setResult] = useState<FinancialData | null>(null);
  const [message, setMessage] = useState<SavingsMessage | null>(null);
  const [loading, setLoading] = useState(false);

  const validateInputs = (): boolean => {
    if (!income.trim() || !expenses.trim()) {
      Alert.alert("Erro", "Por favor, preencha todos os campos");
      return false;
    }

    const incomeNum = parseFloat(income);
    const expensesNum = parseFloat(expenses);

    if (isNaN(incomeNum) || isNaN(expensesNum)) {
      Alert.alert("Erro", "Por favor, insira valores numéricos válidos");
      return false;
    }

    if (incomeNum < 0 || expensesNum < 0) {
      Alert.alert("Erro", "Os valores não podem ser negativos");
      return false;
    }

    if (incomeNum === 0) {
      Alert.alert("Erro", "A receita não pode ser zero");
      return false;
    }

    return true;
  };

  const handleCalculate = () => {
    if (!validateInputs()) return;

    setLoading(true);

    // Simular um pequeno delay para melhor UX
    setTimeout(() => {
      const incomeNum = parseFloat(income);
      const expensesNum = parseFloat(expenses);

      const financialData = calculateSavings(incomeNum, expensesNum);
      const savingsMessage = getSavingsMessage(financialData.savingsPercentage);

      setResult(financialData);
      setMessage(savingsMessage);
      setLoading(false);
    }, 500);
  };

  const handleReset = () => {
    setIncome("");
    setExpenses("");
    setResult(null);
    setMessage(null);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <StatusBar style="light" backgroundColor={colors.primary} />

      <View style={styles.header}>
        <Text style={styles.headerTitle}>Controle de Despesas</Text>
        <Text style={styles.headerSubtitle}>
          Acompanhe suas finanças e veja quanto você economiza
        </Text>
      </View>

      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.formContainer}>
          <Text style={styles.formTitle}>Dados do Mês</Text>

          <InputField
            label="Receitas (R$)"
            value={income}
            onChangeText={setIncome}
            placeholder="0,00"
            keyboardType="numeric"
          />

          <InputField
            label="Despesas (R$)"
            value={expenses}
            onChangeText={setExpenses}
            placeholder="0,00"
            keyboardType="numeric"
          />

          <View style={styles.buttonContainer}>
            <Button
              title="Calcular"
              onPress={handleCalculate}
              loading={loading}
              fullWidth
            />

            {result && (
              <Button
                title="Novo Cálculo"
                onPress={handleReset}
                variant="outline"
                fullWidth
              />
            )}
          </View>
        </View>

        {result && message && <ResultCard data={result} message={message} />}

        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>Como funciona?</Text>
          <Text style={styles.infoText}>
            • Economia de 15% ou mais: "Invista seu dinheiro!"{"\n"}• Economia
            entre 10% e 15%: "Vamos investir no próximo mês!"{"\n"}• Economia
            menor que 10%: "Vamos continuar tentando!"
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    backgroundColor: colors.primary,
    paddingTop: 60,
    paddingBottom: 30,
    paddingHorizontal: 24,
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "700",
    color: colors.surface,
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 16,
    color: colors.surface + "CC",
    textAlign: "center",
    lineHeight: 22,
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    padding: 24,
  },
  formContainer: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: 24,
    marginBottom: 16,
    shadowColor: colors.shadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  formTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: colors.text,
    marginBottom: 20,
    textAlign: "center",
  },
  buttonContainer: {
    gap: 12,
  },
  infoContainer: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: 24,
    marginTop: 16,
    shadowColor: colors.shadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.text,
    marginBottom: 12,
    textAlign: "center",
  },
  infoText: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
  },
});
