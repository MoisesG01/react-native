import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
  Animated,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { BMIResultCard } from "../components/BMIResultCard";
import { calculateBMI, validateInput } from "../utils/bmiCalculator";
import { BMIResult, UserInput } from "../types";
import { theme } from "../styles/theme";

export const BMICalculatorScreen: React.FC = () => {
  const [inputs, setInputs] = useState<UserInput>({
    weight: "",
    height: "",
  });
  const [result, setResult] = useState<BMIResult | null>(null);
  const [errors, setErrors] = useState<{ weight?: string; height?: string }>(
    {}
  );
  const [isCalculating, setIsCalculating] = useState(false);

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(50)).current;

  const handleInputChange = (field: keyof UserInput, value: string) => {
    setInputs((prev) => ({ ...prev, [field]: value }));

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleCalculate = async () => {
    setIsCalculating(true);

    // Validate inputs
    const validation = validateInput(inputs.weight, inputs.height);

    if (!validation.isValid) {
      const newErrors: { weight?: string; height?: string } = {};

      validation.errors.forEach((error) => {
        if (error.includes("Peso")) {
          newErrors.weight = error;
        } else if (error.includes("Altura")) {
          newErrors.height = error;
        }
      });

      setErrors(newErrors);
      setIsCalculating(false);
      return;
    }

    // Clear any existing errors
    setErrors({});

    // Simulate calculation delay for better UX
    await new Promise((resolve) => setTimeout(resolve, 800));

    try {
      const weight = parseFloat(inputs.weight);
      const height = parseFloat(inputs.height);

      const bmiResult = calculateBMI(weight, height);
      setResult(bmiResult);

      // Animate result appearance
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 600,
          useNativeDriver: true,
        }),
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 600,
          useNativeDriver: true,
        }),
      ]).start();
    } catch (error) {
      Alert.alert(
        "Erro",
        "Ocorreu um erro ao calcular o IMC. Tente novamente."
      );
    } finally {
      setIsCalculating(false);
    }
  };

  const handleReset = () => {
    setInputs({ weight: "", height: "" });
    setResult(null);
    setErrors({});

    // Reset animations
    fadeAnim.setValue(0);
    slideAnim.setValue(50);
  };

  const handleInfoPress = () => {
    Alert.alert(
      "Sobre o IMC",
      "O Índice de Massa Corporal (IMC) é uma medida que relaciona peso e altura para avaliar se uma pessoa está com peso adequado.\n\n• Abaixo de 18,5: Abaixo do peso\n• 18,5 - 24,9: Peso normal\n• 25 - 29,9: Sobrepeso\n• 30 ou mais: Obesidade\n\nLembre-se: O IMC é apenas uma referência. Consulte sempre um profissional de saúde.",
      [{ text: "Entendi", style: "default" }]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={[theme.colors.background, theme.colors.primary + "05"]}
        style={styles.gradient}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.keyboardAvoidingView}
        >
          <ScrollView
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
          >
            {/* Header */}
            <View style={styles.header}>
              <View style={styles.titleContainer}>
                <Text style={styles.title}>Calculadora de IMC</Text>
                <Text style={styles.subtitle}>
                  Descubra seu Índice de Massa Corporal
                </Text>
              </View>

              <Button
                title=""
                onPress={handleInfoPress}
                variant="outline"
                size="small"
                style={styles.infoButton}
                icon={
                  <Ionicons
                    name="information-circle"
                    size={22}
                    color={theme.colors.primary}
                  />
                }
              />
            </View>

            {/* Input Card */}
            <Card style={styles.inputCard}>
              <Text style={styles.cardTitle}>Seus Dados</Text>

              <Input
                label="Peso"
                value={inputs.weight}
                onChangeText={(text) => handleInputChange("weight", text)}
                placeholder="Ex: 70"
                keyboardType="numeric"
                unit="kg"
                error={errors.weight}
                maxLength={5}
              />

              <Input
                label="Altura"
                value={inputs.height}
                onChangeText={(text) => handleInputChange("height", text)}
                placeholder="Ex: 175"
                keyboardType="numeric"
                unit="cm"
                error={errors.height}
                maxLength={3}
              />

              <View style={styles.buttonContainer}>
                <Button
                  title="Calcular IMC"
                  onPress={handleCalculate}
                  loading={isCalculating}
                  disabled={!inputs.weight || !inputs.height}
                  style={styles.calculateButton}
                  icon={
                    <Ionicons
                      name="calculator"
                      size={20}
                      color={theme.colors.surface}
                      style={{ marginRight: theme.spacing.sm }}
                    />
                  }
                />

                {result && (
                  <Button
                    title="Limpar"
                    onPress={handleReset}
                    variant="outline"
                    style={styles.resetButton}
                    icon={
                      <Ionicons
                        name="refresh"
                        size={18}
                        color={theme.colors.primary}
                        style={{ marginRight: theme.spacing.sm }}
                      />
                    }
                  />
                )}
              </View>
            </Card>

            {/* Result Card */}
            {result && (
              <BMIResultCard result={result} animatedValue={fadeAnim} />
            )}

            {/* Tips Card */}
            <Card style={styles.tipsCard}>
              <View style={styles.tipsHeader}>
                <Ionicons
                  name="bulb-outline"
                  size={24}
                  color={theme.colors.warning}
                />
                <Text style={styles.tipsTitle}>Dicas Importantes</Text>
              </View>

              <View style={styles.tipsList}>
                <Text style={styles.tipItem}>
                  • O IMC é apenas uma referência inicial
                </Text>
                <Text style={styles.tipItem}>
                  • Consulte sempre um profissional de saúde
                </Text>
                <Text style={styles.tipItem}>
                  • Mantenha uma alimentação equilibrada
                </Text>
                <Text style={styles.tipItem}>
                  • Pratique exercícios regularmente
                </Text>
              </View>
            </Card>
          </ScrollView>
        </KeyboardAvoidingView>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  gradient: {
    flex: 1,
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: theme.spacing.xxl,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingHorizontal: theme.spacing.lg,
    paddingTop: theme.spacing.lg,
    marginBottom: theme.spacing.lg,
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    fontSize: theme.typography.h1.fontSize,
    fontWeight: theme.typography.h1.fontWeight as any,
    color: theme.colors.text,
    marginBottom: theme.spacing.xs,
  },
  subtitle: {
    fontSize: theme.typography.body.fontSize,
    color: theme.colors.textSecondary,
  },
  infoButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: theme.spacing.md,
  },
  inputCard: {
    marginHorizontal: theme.spacing.md,
    marginBottom: theme.spacing.lg,
  },
  cardTitle: {
    fontSize: theme.typography.h2.fontSize,
    fontWeight: theme.typography.h2.fontWeight as any,
    color: theme.colors.text,
    marginBottom: theme.spacing.lg,
    textAlign: "center",
  },
  buttonContainer: {
    marginTop: theme.spacing.lg,
  },
  calculateButton: {
    marginBottom: theme.spacing.md,
  },
  resetButton: {
    marginTop: theme.spacing.sm,
  },
  tipsCard: {
    marginHorizontal: theme.spacing.md,
    marginTop: theme.spacing.lg,
  },
  tipsHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: theme.spacing.md,
  },
  tipsTitle: {
    fontSize: theme.typography.h3.fontSize,
    fontWeight: theme.typography.h3.fontWeight as any,
    color: theme.colors.text,
    marginLeft: theme.spacing.sm,
  },
  tipsList: {
    paddingLeft: theme.spacing.sm,
  },
  tipItem: {
    fontSize: theme.typography.body.fontSize,
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.sm,
    lineHeight: 20,
  },
});
