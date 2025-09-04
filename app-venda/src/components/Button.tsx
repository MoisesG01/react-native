import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from "react-native";
import { colors, globalStyles } from "../styles/global";

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: "primary" | "secondary" | "outline";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = "primary",
  size = "medium",
  disabled = false,
  style,
  textStyle,
}) => {
  const getButtonStyle = (): ViewStyle => {
    let buttonStyle: ViewStyle = { ...globalStyles.button, ...styles[size] };

    switch (variant) {
      case "primary":
        buttonStyle = { ...buttonStyle, ...globalStyles.buttonPrimary };
        break;
      case "secondary":
        buttonStyle = { ...buttonStyle, ...globalStyles.buttonSecondary };
        break;
      case "outline":
        buttonStyle = { ...buttonStyle, ...styles.outline };
        break;
    }

    if (disabled) {
      buttonStyle = { ...buttonStyle, ...styles.disabled };
    }

    return buttonStyle;
  };

  const getTextStyle = (): TextStyle => {
    let textStyleObj: TextStyle = { ...globalStyles.buttonText };

    if (variant === "outline") {
      textStyleObj = { ...textStyleObj, ...styles.outlineText };
    }

    if (disabled) {
      textStyleObj = { ...textStyleObj, ...styles.disabledText };
    }

    return textStyleObj;
  };

  return (
    <TouchableOpacity
      style={[getButtonStyle(), style]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.8}
    >
      <Text style={[getTextStyle(), textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  small: {
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  medium: {
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  large: {
    paddingVertical: 20,
    paddingHorizontal: 32,
  },
  outline: {
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: colors.primary,
  },
  outlineText: {
    color: colors.primary,
  },
  disabled: {
    backgroundColor: colors.textLight,
    opacity: 0.6,
  },
  disabledText: {
    color: colors.surface,
  },
});
