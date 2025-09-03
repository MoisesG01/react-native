import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { colors, globalStyles } from "../styles/global";

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: "primary" | "secondary" | "accent" | "outline";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = "primary",
  size = "medium",
  disabled = false,
  fullWidth = false,
}) => {
  const getVariantStyle = () => {
    switch (variant) {
      case "primary":
        return globalStyles.buttonPrimary;
      case "secondary":
        return globalStyles.buttonSecondary;
      case "accent":
        return globalStyles.buttonAccent;
      case "outline":
        return globalStyles.buttonOutline;
      default:
        return globalStyles.buttonPrimary;
    }
  };

  const buttonStyle = [
    globalStyles.button,
    getVariantStyle(),
    size === "small" && styles.small,
    size === "large" && styles.large,
    fullWidth && styles.fullWidth,
    disabled && styles.disabled,
  ].filter(Boolean);

  const textStyle = [
    globalStyles.buttonText,
    variant === "outline" && styles.outlineText,
    disabled && styles.disabledText,
  ].filter(Boolean);

  return (
    <TouchableOpacity
      style={buttonStyle}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.8}
    >
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  small: {
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  large: {
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  fullWidth: {
    width: "100%",
  },
  disabled: {
    opacity: 0.6,
  },
  outlineText: {
    color: colors.primary,
  },
  disabledText: {
    color: colors.textLight,
  },
});
