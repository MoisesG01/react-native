import { Theme } from "../types";

export const theme: Theme = {
  colors: {
    primary: "#6366F1", // Indigo
    secondary: "#8B5CF6", // Purple
    background: "#F8FAFC", // Slate 50
    surface: "#FFFFFF",
    text: "#1E293B", // Slate 800
    textSecondary: "#64748B", // Slate 500
    success: "#10B981", // Emerald 500
    warning: "#F59E0B", // Amber 500
    error: "#EF4444", // Red 500
    info: "#3B82F6", // Blue 500
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
  },
  borderRadius: {
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24,
  },
  typography: {
    h1: {
      fontSize: 32,
      fontWeight: "700" as const,
    },
    h2: {
      fontSize: 24,
      fontWeight: "600" as const,
    },
    h3: {
      fontSize: 20,
      fontWeight: "600" as const,
    },
    body: {
      fontSize: 16,
      fontWeight: "400" as const,
    },
    caption: {
      fontSize: 14,
      fontWeight: "400" as const,
    },
  },
};

export const bmiCategories = [
  {
    min: 0,
    max: 18.5,
    label: "Abaixo do peso",
    color: "#3B82F6", // Blue
    description: "Você está abaixo do peso ideal",
    icon: "📉",
  },
  {
    min: 18.5,
    max: 24.9,
    label: "Peso normal",
    color: "#10B981", // Green
    description: "Parabéns! Você está no peso ideal",
    icon: "✅",
  },
  {
    min: 25,
    max: 29.9,
    label: "Sobrepeso",
    color: "#F59E0B", // Amber
    description: "Você está com sobrepeso",
    icon: "⚠️",
  },
  {
    min: 30,
    max: 100,
    label: "Obesidade",
    color: "#EF4444", // Red
    description: "Você está com obesidade",
    icon: "🚨",
  },
];
