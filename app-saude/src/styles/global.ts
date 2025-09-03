import { StyleSheet } from "react-native";

// Paleta de cores relacionada à saúde
export const colors = {
  primary: "#2E7D32", // Verde escuro - saúde
  primaryLight: "#4CAF50", // Verde médio
  primaryDark: "#1B5E20", // Verde muito escuro
  secondary: "#1976D2", // Azul - confiança
  secondaryLight: "#42A5F5", // Azul claro
  secondaryDark: "#0D47A1", // Azul escuro
  accent: "#00BCD4", // Azul ciano - frescor
  success: "#4CAF50", // Verde sucesso
  warning: "#FF9800", // Laranja - atenção
  danger: "#F44336", // Vermelho - alerta
  background: "#F8FBF9", // Verde muito claro
  surface: "#FFFFFF", // Branco
  text: "#1A1A1A", // Preto suave
  textSecondary: "#666666", // Cinza médio
  textLight: "#9E9E9E", // Cinza claro
  border: "#E0E0E0", // Cinza borda
  shadow: "#000000",
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
  scoreContainer: {
    alignItems: "center",
    padding: 20,
  },
  scoreCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  scoreText: {
    fontSize: 32,
    fontWeight: "bold",
    color: colors.surface,
  },
  tipCard: {
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
  tipTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.primary,
    marginBottom: 8,
  },
  tipDescription: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
  },
  priorityBadge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: "flex-start",
    marginTop: 8,
  },
  priorityText: {
    fontSize: 12,
    fontWeight: "600",
    color: colors.surface,
  },
});
