import { StyleSheet } from "react-native";

// Paleta de cores relacionada ao comércio e vendas
export const colors = {
  primary: "#1E3A8A", // Azul escuro - confiança e profissionalismo
  primaryLight: "#3B82F6", // Azul médio
  primaryDark: "#1E40AF", // Azul muito escuro
  secondary: "#059669", // Verde - dinheiro e sucesso
  secondaryLight: "#10B981", // Verde claro
  secondaryDark: "#047857", // Verde escuro
  accent: "#F59E0B", // Amarelo dourado - valor e premium
  success: "#10B981", // Verde sucesso
  warning: "#F59E0B", // Amarelo - atenção
  danger: "#EF4444", // Vermelho - erro
  background: "#F8FAFC", // Cinza muito claro
  surface: "#FFFFFF", // Branco
  text: "#1F2937", // Cinza escuro
  textSecondary: "#6B7280", // Cinza médio
  textLight: "#9CA3AF", // Cinza claro
  border: "#E5E7EB", // Cinza borda
  shadow: "#000000",
  // Cores específicas para métodos de pagamento
  paymentCash: "#10B981", // Verde para dinheiro
  paymentCheck: "#3B82F6", // Azul para cheque
  paymentCredit2x: "#8B5CF6", // Roxo para cartão 2x
  paymentCredit3x: "#F59E0B", // Amarelo para cartão 3x
  paymentOther: "#6B7280", // Cinza para outros
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    backgroundColor: colors.surface,
    padding: 20,
    paddingTop: 60,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: colors.primary,
    marginBottom: 8,
    textAlign: "center",
  },
  headerSubtitle: {
    fontSize: 16,
    color: colors.textSecondary,
    lineHeight: 22,
    textAlign: "center",
  },
  bottomContainer: {
    backgroundColor: colors.surface,
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  card: {
    backgroundColor: colors.surface,
    borderRadius: 20,
    marginBottom: 15,
    padding: 20,
    overflow: "hidden",
    elevation: 4,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    borderWidth: 1,
    borderColor: colors.border,
  },
  button: {
    paddingVertical: 16,
    borderRadius: 25,
    alignItems: "center",
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonPrimary: {
    backgroundColor: colors.primary,
  },
  buttonSecondary: {
    backgroundColor: colors.secondary,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.surface,
  },
  input: {
    backgroundColor: colors.surface,
    borderWidth: 2,
    borderColor: colors.border,
    borderRadius: 15,
    padding: 15,
    fontSize: 16,
    color: colors.text,
    marginBottom: 15,
  },
  inputFocused: {
    borderColor: colors.primary,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.text,
    marginBottom: 8,
  },
  resultContainer: {
    alignItems: "center",
    padding: 20,
  },
  resultCard: {
    backgroundColor: colors.surface,
    borderRadius: 20,
    padding: 25,
    marginBottom: 15,
    width: "100%",
    alignItems: "center",
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
    borderWidth: 2,
    borderColor: colors.primary,
  },
  resultTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.primary,
    marginBottom: 20,
    textAlign: "center",
  },
  resultValue: {
    fontSize: 32,
    fontWeight: "bold",
    color: colors.secondary,
    marginBottom: 10,
  },
  resultLabel: {
    fontSize: 16,
    color: colors.textSecondary,
    marginBottom: 15,
  },
  paymentCard: {
    backgroundColor: colors.surface,
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
    borderLeftWidth: 5,
    borderLeftColor: colors.primary,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  paymentTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.primary,
    marginBottom: 8,
  },
  paymentDescription: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
  },
  discountBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    alignSelf: "flex-start",
    marginTop: 8,
  },
  discountText: {
    fontSize: 12,
    fontWeight: "600",
    color: colors.surface,
  },
  calculationRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  calculationLabel: {
    fontSize: 16,
    color: colors.text,
  },
  calculationValue: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.text,
  },
  finalValue: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.secondary,
  },
});
