import { StyleSheet } from "react-native";

// Paleta de cores relacionada ao fitness e exercícios
export const colors = {
  primary: "#FF6B35", // Laranja vibrante - energia e motivação
  primaryLight: "#FF8A65", // Laranja claro
  primaryDark: "#E64A19", // Laranja escuro
  secondary: "#2196F3", // Azul - confiança e estabilidade
  secondaryLight: "#64B5F6", // Azul claro
  secondaryDark: "#1976D2", // Azul escuro
  accent: "#4CAF50", // Verde - sucesso e progresso
  accentLight: "#81C784", // Verde claro
  accentDark: "#388E3C", // Verde escuro
  success: "#4CAF50", // Verde sucesso
  warning: "#FF9800", // Laranja - atenção
  danger: "#F44336", // Vermelho - alerta
  background: "#F5F5F5", // Cinza claro - fundo neutro
  surface: "#FFFFFF", // Branco
  surfaceDark: "#FAFAFA", // Branco acinzentado
  text: "#212121", // Preto suave
  textSecondary: "#757575", // Cinza médio
  textLight: "#9E9E9E", // Cinza claro
  border: "#E0E0E0", // Cinza borda
  shadow: "#000000",
  gradientStart: "#FF6B35", // Início do gradiente
  gradientEnd: "#F7931E", // Fim do gradiente
  cardShadow: "#FF6B35", // Sombra com cor primária
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
    shadowColor: colors.cardShadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
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
    shadowColor: colors.cardShadow,
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
  },
  card: {
    backgroundColor: colors.surface,
    borderRadius: 20,
    marginBottom: 15,
    padding: 20,
    overflow: "hidden",
    elevation: 6,
    shadowColor: colors.cardShadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
  },
  button: {
    paddingVertical: 16,
    borderRadius: 25,
    alignItems: "center",
    shadowColor: colors.cardShadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  buttonPrimary: {
    backgroundColor: colors.primary,
  },
  buttonSecondary: {
    backgroundColor: colors.secondary,
  },
  buttonAccent: {
    backgroundColor: colors.accent,
  },
  buttonOutline: {
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: colors.primary,
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
    shadowColor: colors.cardShadow,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 10,
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
    shadowColor: colors.cardShadow,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 4,
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
  // Novos estilos para o app de fitness
  workoutCard: {
    backgroundColor: colors.surface,
    borderRadius: 20,
    marginBottom: 15,
    padding: 20,
    overflow: "hidden",
    elevation: 8,
    shadowColor: colors.cardShadow,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 15,
    borderWidth: 2,
    borderColor: colors.primary,
  },
  progressBar: {
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.border,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    backgroundColor: colors.primary,
    borderRadius: 4,
  },
  statCard: {
    backgroundColor: colors.surface,
    borderRadius: 15,
    padding: 15,
    alignItems: "center",
    shadowColor: colors.cardShadow,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
    borderWidth: 1,
    borderColor: colors.border,
  },
  statValue: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.primary,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: colors.textSecondary,
    textAlign: "center",
  },
});
