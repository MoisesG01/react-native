import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { HealthTip } from "../types";
import { colors, globalStyles } from "../styles/global";

interface HealthTipCardProps {
  tip: HealthTip;
  onPress?: () => void;
}

export const HealthTipCard: React.FC<HealthTipCardProps> = ({
  tip,
  onPress,
}) => {
  const getPriorityColor = () => {
    switch (tip.priority) {
      case "high":
        return colors.danger;
      case "medium":
        return colors.warning;
      case "low":
        return colors.success;
      default:
        return colors.primary;
    }
  };

  const getPriorityLabel = () => {
    switch (tip.priority) {
      case "high":
        return "Alta";
      case "medium":
        return "Média";
      case "low":
        return "Baixa";
      default:
        return "";
    }
  };

  return (
    <View style={[globalStyles.tipCard, styles.container]}>
      <View style={styles.header}>
        <Text style={styles.icon}>{tip.icon}</Text>
        <View style={styles.headerText}>
          <Text style={globalStyles.tipTitle}>{tip.title}</Text>
          <View
            style={[
              styles.priorityBadge,
              { backgroundColor: getPriorityColor() },
            ]}
          >
            <Text style={globalStyles.priorityText}>{getPriorityLabel()}</Text>
          </View>
        </View>
      </View>

      <Text style={globalStyles.tipDescription}>{tip.description}</Text>

      <View style={styles.categoryContainer}>
        <Text style={styles.categoryText}>
          {tip.category === "energy" && "⚡ Energia"}
          {tip.category === "sleep" && "🌙 Sono"}
          {tip.category === "stress" && "🧘 Estresse"}
          {tip.category === "mood" && "😊 Humor"}
          {tip.category === "general" && "💡 Geral"}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 12,
  },
  icon: {
    fontSize: 32,
    marginRight: 15,
    marginTop: -5,
  },
  headerText: {
    flex: 1,
  },
  priorityBadge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: "flex-start",
    marginTop: 8,
  },
  categoryContainer: {
    marginTop: 12,
    alignItems: "flex-end",
  },
  categoryText: {
    fontSize: 12,
    color: colors.textLight,
    fontStyle: "italic",
  },
});
