import { StyleSheet } from "react-native";

// Paleta de cores relacionada a viagens e aventuras
export const colors = {
  primary: "#1E3A8A", // Azul profundo - céu e oceano
  primaryLight: "#3B82F6", // Azul vibrante
  primaryDark: "#1E40AF", // Azul escuro
  secondary: "#059669", // Verde esmeralda - natureza
  secondaryLight: "#10B981", // Verde claro
  secondaryDark: "#047857", // Verde escuro
  accent: "#F59E0B", // Âmbar dourado - sol e praia
  accentLight: "#FCD34D", // Amarelo claro
  accentDark: "#D97706", // Laranja escuro
  success: "#10B981", // Verde sucesso
  warning: "#F59E0B", // Âmbar - atenção
  danger: "#EF4444", // Vermelho - alerta
  background: "#F0F9FF", // Azul muito claro - céu
  surface: "#FFFFFF", // Branco
  text: "#1F2937", // Cinza escuro
  textSecondary: "#6B7280", // Cinza médio
  textLight: "#9CA3AF", // Cinza claro
  border: "#E5E7EB", // Cinza borda
  shadow: "#000000",
  // Cores específicas para viagens
  beach: "#0EA5E9", // Azul praia
  mountain: "#6B7280", // Cinza montanha
  forest: "#059669", // Verde floresta
  desert: "#F59E0B", // Amarelo deserto
  city: "#374151", // Cinza cidade
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
  buttonAccent: {
    backgroundColor: colors.accent,
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
  destinationCard: {
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
  destinationTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.primary,
    marginBottom: 8,
  },
  destinationDescription: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
    marginBottom: 12,
  },
  activityCard: {
    backgroundColor: colors.surface,
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
    borderLeftWidth: 5,
    borderLeftColor: colors.accent,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  activityTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.primary,
    marginBottom: 8,
  },
  activityDescription: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
  },
  categoryBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
    alignSelf: "flex-start",
    marginTop: 8,
  },
  categoryText: {
    fontSize: 12,
    fontWeight: "600",
    color: colors.surface,
  },
  preferenceCard: {
    backgroundColor: colors.surface,
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: colors.border,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  preferenceCardSelected: {
    borderColor: colors.primary,
    backgroundColor: colors.background,
  },
  preferenceTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.text,
    marginBottom: 8,
  },
  preferenceDescription: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
  },
});
