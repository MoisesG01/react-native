import React from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { theme } from "../styles/theme";

interface CardProps {
  children: React.ReactNode;
  style?: ViewStyle;
  gradient?: boolean;
  gradientColors?: string[];
  shadow?: boolean;
  padding?: "small" | "medium" | "large";
}

export const Card: React.FC<CardProps> = ({
  children,
  style,
  gradient = false,
  gradientColors = [theme.colors.surface, theme.colors.surface] as const,
  shadow = true,
  padding = "medium",
}) => {
  const cardStyle = [
    styles.card,
    styles[`${padding}Padding`],
    shadow && styles.shadow,
    style,
  ];

  if (gradient) {
    return (
      <LinearGradient
        colors={gradientColors as any}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={cardStyle}
      >
        {children}
      </LinearGradient>
    );
  }

  return <View style={cardStyle}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.lg,
    margin: theme.spacing.sm,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 6,
  },
  smallPadding: {
    padding: theme.spacing.md,
  },
  mediumPadding: {
    padding: theme.spacing.lg,
  },
  largePadding: {
    padding: theme.spacing.xl,
  },
});
