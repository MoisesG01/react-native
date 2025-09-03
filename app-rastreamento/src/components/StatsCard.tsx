import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors, globalStyles } from "../styles/global";

interface StatsCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon?: string;
  color?: string;
  size?: "small" | "medium" | "large";
}

export const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  subtitle,
  icon,
  color = colors.primary,
  size = "medium",
}) => {
  const getSizeStyles = () => {
    switch (size) {
      case "small":
        return {
          container: styles.smallContainer,
          title: styles.smallTitle,
          value: styles.smallValue,
          subtitle: styles.smallSubtitle,
        };
      case "large":
        return {
          container: styles.largeContainer,
          title: styles.largeTitle,
          value: styles.largeValue,
          subtitle: styles.largeSubtitle,
        };
      default:
        return {
          container: styles.mediumContainer,
          title: styles.mediumTitle,
          value: styles.mediumValue,
          subtitle: styles.mediumSubtitle,
        };
    }
  };

  const sizeStyles = getSizeStyles();

  return (
    <View style={[globalStyles.statCard, sizeStyles.container]}>
      {icon && <Text style={styles.icon}>{icon}</Text>}
      <Text style={[sizeStyles.value, { color }]}>{value}</Text>
      <Text style={sizeStyles.title}>{title}</Text>
      {subtitle && <Text style={sizeStyles.subtitle}>{subtitle}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    fontSize: 24,
    marginBottom: 8,
  },
  // Small size
  smallContainer: {
    padding: 12,
    minWidth: 80,
  },
  smallTitle: {
    fontSize: 10,
    color: colors.textSecondary,
    textAlign: "center",
    marginTop: 4,
  },
  smallValue: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 2,
  },
  smallSubtitle: {
    fontSize: 9,
    color: colors.textLight,
    textAlign: "center",
  },
  // Medium size
  mediumContainer: {
    padding: 15,
    minWidth: 100,
  },
  mediumTitle: {
    fontSize: 12,
    color: colors.textSecondary,
    textAlign: "center",
    marginTop: 4,
  },
  mediumValue: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 4,
  },
  mediumSubtitle: {
    fontSize: 10,
    color: colors.textLight,
    textAlign: "center",
  },
  // Large size
  largeContainer: {
    padding: 20,
    minWidth: 120,
  },
  largeTitle: {
    fontSize: 14,
    color: colors.textSecondary,
    textAlign: "center",
    marginTop: 6,
  },
  largeValue: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 6,
  },
  largeSubtitle: {
    fontSize: 12,
    color: colors.textLight,
    textAlign: "center",
  },
});
