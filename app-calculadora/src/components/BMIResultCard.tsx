import React from "react";
import { View, Text, StyleSheet, Animated } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Card } from "./Card";
import { BMIResult } from "../types";
import { theme } from "../styles/theme";

interface BMIResultCardProps {
  result: BMIResult;
  animatedValue?: Animated.Value;
}

export const BMIResultCard: React.FC<BMIResultCardProps> = ({
  result,
  animatedValue,
}) => {
  const animatedStyle = animatedValue
    ? {
        transform: [
          {
            scale: animatedValue.interpolate({
              inputRange: [0, 1],
              outputRange: [0.8, 1],
            }),
          },
          {
            translateY: animatedValue.interpolate({
              inputRange: [0, 1],
              outputRange: [50, 0],
            }),
          },
        ],
        opacity: animatedValue,
      }
    : {};

  return (
    <Animated.View style={[animatedStyle]}>
      <Card
        gradient
        gradientColors={[
          result.category.color + "20",
          result.category.color + "10",
        ]}
        style={styles.resultCard}
      >
        <View style={styles.header}>
          <View
            style={[
              styles.iconContainer,
              { backgroundColor: result.category.color },
            ]}
          >
            <Text style={styles.icon}>{result.category.icon}</Text>
          </View>
          <View style={styles.headerText}>
            <Text style={styles.bmiValue}>{result.value}</Text>
            <Text style={styles.bmiLabel}>IMC</Text>
          </View>
        </View>

        <View style={styles.categoryContainer}>
          <Text style={[styles.categoryText, { color: result.category.color }]}>
            {result.category.label}
          </Text>
          <Text style={styles.descriptionText}>
            {result.category.description}
          </Text>
        </View>

        <View style={styles.messageContainer}>
          <Ionicons
            name="information-circle"
            size={20}
            color={theme.colors.info}
            style={styles.messageIcon}
          />
          <Text style={styles.messageText}>{result.message}</Text>
        </View>

        <View style={styles.rangeContainer}>
          <Text style={styles.rangeLabel}>Faixa de IMC:</Text>
          <Text style={styles.rangeText}>
            {result.category.min} - {result.category.max}
          </Text>
        </View>
      </Card>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  resultCard: {
    marginHorizontal: theme.spacing.md,
    marginVertical: theme.spacing.sm,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: theme.spacing.lg,
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    marginRight: theme.spacing.md,
  },
  icon: {
    fontSize: 24,
  },
  headerText: {
    flex: 1,
  },
  bmiValue: {
    fontSize: 36,
    fontWeight: "700",
    color: theme.colors.text,
  },
  bmiLabel: {
    fontSize: theme.typography.caption.fontSize,
    color: theme.colors.textSecondary,
    fontWeight: "500",
  },
  categoryContainer: {
    marginBottom: theme.spacing.lg,
  },
  categoryText: {
    fontSize: theme.typography.h3.fontSize,
    fontWeight: theme.typography.h3.fontWeight as any,
    marginBottom: theme.spacing.xs,
  },
  descriptionText: {
    fontSize: theme.typography.body.fontSize,
    color: theme.colors.textSecondary,
  },
  messageContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: theme.colors.info + "10",
    padding: theme.spacing.md,
    borderRadius: theme.borderRadius.md,
    marginBottom: theme.spacing.lg,
  },
  messageIcon: {
    marginRight: theme.spacing.sm,
    marginTop: 2,
  },
  messageText: {
    flex: 1,
    fontSize: theme.typography.body.fontSize,
    color: theme.colors.text,
    lineHeight: 20,
  },
  rangeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: theme.spacing.md,
    borderTopWidth: 1,
    borderTopColor: theme.colors.textSecondary + "20",
  },
  rangeLabel: {
    fontSize: theme.typography.caption.fontSize,
    color: theme.colors.textSecondary,
  },
  rangeText: {
    fontSize: theme.typography.caption.fontSize,
    fontWeight: "600",
    color: theme.colors.text,
  },
});
