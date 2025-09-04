import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { colors, globalStyles } from "../styles/global";
import { ProductData } from "../types";
import { validateProductData } from "../utils/salesData";

interface ProductInputScreenProps {
  onSubmit: (data: ProductData) => void;
  onBack: () => void;
}

export const ProductInputScreen: React.FC<ProductInputScreenProps> = ({
  onSubmit,
  onBack,
}) => {
  const [productValue, setProductValue] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = () => {
    const value = parseFloat(productValue.replace(",", "."));
    const qty = parseInt(quantity);

    const productData: ProductData = {
      value: value,
      quantity: qty,
    };

    const validation = validateProductData(productData);
    if (validation) {
      Alert.alert("Dados Inválidos", validation);
      return;
    }

    onSubmit(productData);
  };

  const formatCurrency = (text: string) => {
    // Remove tudo que não é número
    const numbers = text.replace(/\D/g, "");
    // Converte para centavos e depois para reais
    const value = parseInt(numbers) / 100;
    return value.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  const handleValueChange = (text: string) => {
    const formatted = formatCurrency(text);
    setProductValue(formatted);
  };

  return (
    <KeyboardAvoidingView
      style={globalStyles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.icon}>📦</Text>
          <Text style={globalStyles.headerTitle}>Dados do Produto</Text>
          <Text style={globalStyles.headerSubtitle}>
            Insira o valor unitário e a quantidade do produto
          </Text>
        </View>

        <View style={styles.content}>
          <View style={globalStyles.card}>
            <Text style={globalStyles.label}>Valor Unitário (R$)</Text>
            <TextInput
              style={[globalStyles.input, styles.currencyInput]}
              value={productValue}
              onChangeText={handleValueChange}
              placeholder="0,00"
              keyboardType="numeric"
              placeholderTextColor={colors.textLight}
            />
            <Text style={styles.inputHint}>
              Digite o valor do produto (ex: 150,50)
            </Text>
          </View>

          <View style={globalStyles.card}>
            <Text style={globalStyles.label}>Quantidade</Text>
            <TextInput
              style={globalStyles.input}
              value={quantity}
              onChangeText={setQuantity}
              placeholder="1"
              keyboardType="numeric"
              placeholderTextColor={colors.textLight}
            />
            <Text style={styles.inputHint}>
              Digite a quantidade de produtos
            </Text>
          </View>

          {productValue && quantity && (
            <View style={styles.previewCard}>
              <Text style={styles.previewTitle}>Resumo</Text>
              <View style={styles.previewRow}>
                <Text style={styles.previewLabel}>Valor Unitário:</Text>
                <Text style={styles.previewValue}>R$ {productValue}</Text>
              </View>
              <View style={styles.previewRow}>
                <Text style={styles.previewLabel}>Quantidade:</Text>
                <Text style={styles.previewValue}>{quantity}</Text>
              </View>
              <View style={[styles.previewRow, styles.previewTotal]}>
                <Text style={styles.previewLabelTotal}>Subtotal:</Text>
                <Text style={styles.previewValueTotal}>
                  R${" "}
                  {(
                    parseFloat(
                      productValue.replace(".", "").replace(",", ".")
                    ) * parseInt(quantity || "0")
                  ).toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </Text>
              </View>
            </View>
          )}
        </View>

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
              (!productValue || !quantity) && styles.disabledButton,
            ]}
            onPress={handleSubmit}
            disabled={!productValue || !quantity}
          >
            <Text style={globalStyles.buttonText}>Continuar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
  },
  header: {
    ...globalStyles.header,
    alignItems: "center",
  },
  icon: {
    fontSize: 48,
    marginBottom: 15,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  currencyInput: {
    fontSize: 18,
    fontWeight: "600",
  },
  inputHint: {
    fontSize: 12,
    color: colors.textLight,
    marginTop: -10,
    marginBottom: 5,
  },
  previewCard: {
    backgroundColor: colors.surface,
    borderRadius: 15,
    padding: 20,
    marginTop: 10,
    borderWidth: 2,
    borderColor: colors.primary,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  previewTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.primary,
    marginBottom: 15,
    textAlign: "center",
  },
  previewRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  previewLabel: {
    fontSize: 16,
    color: colors.text,
  },
  previewValue: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.text,
  },
  previewTotal: {
    borderBottomWidth: 0,
    marginTop: 10,
    paddingTop: 15,
    borderTopWidth: 2,
    borderTopColor: colors.primary,
  },
  previewLabelTotal: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.primary,
  },
  previewValueTotal: {
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
