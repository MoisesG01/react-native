import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
  ViewStyle,
  TextStyle,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { theme } from "../styles/theme";

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: "primary" | "secondary" | "outline";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  loading?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = "primary",
  size = "medium",
  disabled = false,
  loading = false,
  style,
  textStyle,
  icon,
}) => {
  const getButtonStyle = () => {
    const baseStyle = [styles.button, styles[size]];

    if (variant === "primary") {
      return [...baseStyle, styles.primaryButton];
    } else if (variant === "secondary") {
      return [...baseStyle, styles.secondaryButton];
    } else if (variant === "outline") {
      return [...baseStyle, styles.outlineButton];
    }

    return baseStyle;
  };

  const getTextStyle = () => {
    const baseTextStyle = [styles.buttonText, styles[`${size}Text`]];

    if (variant === "primary") {
      return [...baseTextStyle, styles.primaryText];
    } else if (variant === "secondary") {
      return [...baseTextStyle, styles.secondaryText];
    } else if (variant === "outline") {
      return [...baseTextStyle, styles.outlineText];
    }

    return baseTextStyle;
  };

  const isDisabled = disabled || loading;

  if (variant === "primary") {
    return (
      <TouchableOpacity
        onPress={onPress}
        disabled={isDisabled}
        style={[getButtonStyle(), style]}
        activeOpacity={0.7}
      >
        <LinearGradient
          colors={
            isDisabled
              ? [
                  theme.colors.textSecondary + "40",
                  theme.colors.textSecondary + "20",
                ]
              : [
                  "#667eea", // Azul suave
                  "#764ba2", // Roxo suave
                  "#f093fb", // Rosa suave
                ]
          }
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.gradient}
        >
          {loading ? (
            <ActivityIndicator color={theme.colors.surface} size="small" />
          ) : (
            <>
              {icon && <>{icon}</>}
              <Text style={[getTextStyle(), textStyle]}>{title}</Text>
            </>
          )}
        </LinearGradient>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={isDisabled}
      style={[getButtonStyle(), style]}
      activeOpacity={0.8}
    >
      {loading ? (
        <ActivityIndicator
          color={
            variant === "outline" ? theme.colors.primary : theme.colors.surface
          }
          size="small"
        />
      ) : (
        <>
          {icon && <>{icon}</>}
          <Text style={[getTextStyle(), textStyle]}>{title}</Text>
        </>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: theme.borderRadius.xl,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.25,
    shadowRadius: 16,
    elevation: 8,
  },
  gradient: {
    flex: 1,
    borderRadius: theme.borderRadius.xl,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingHorizontal: theme.spacing.lg,
  },
  primaryButton: {
    backgroundColor: theme.colors.primary,
  },
  secondaryButton: {
    backgroundColor: theme.colors.secondary,
  },
  outlineButton: {
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: theme.colors.primary,
  },
  small: {
    paddingVertical: theme.spacing.sm,
    paddingHorizontal: theme.spacing.md,
    minHeight: 40,
  },
  medium: {
    paddingVertical: theme.spacing.lg,
    paddingHorizontal: theme.spacing.xl,
    minHeight: 56,
  },
  large: {
    paddingVertical: theme.spacing.xl,
    paddingHorizontal: theme.spacing.xxl,
    minHeight: 64,
  },
  buttonText: {
    fontWeight: "700",
    textAlign: "center",
    letterSpacing: 0.5,
    textShadowColor: "rgba(0, 0, 0, 0.1)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  primaryText: {
    color: theme.colors.surface,
    fontSize: 16,
  },
  secondaryText: {
    color: theme.colors.surface,
  },
  outlineText: {
    color: theme.colors.primary,
  },
  smallText: {
    fontSize: 14,
  },
  mediumText: {
    fontSize: 16,
  },
  largeText: {
    fontSize: 18,
  },
});
