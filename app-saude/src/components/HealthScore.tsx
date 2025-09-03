import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { HealthAssessment } from "../types";
import { colors, globalStyles } from "../styles/global";

interface HealthScoreProps {
  assessment: HealthAssessment;
}

export const HealthScore: React.FC<HealthScoreProps> = ({ assessment }) => {
  const getScoreColor = () => {
    if (assessment.overallScore >= 80) return colors.success;
    if (assessment.overallScore >= 60) return colors.primary;
    if (assessment.overallScore >= 40) return colors.warning;
    return colors.danger;
  };

  const getScoreLabel = () => {
    if (assessment.overallScore >= 80) return "Excelente!";
    if (assessment.overallScore >= 60) return "Bom";
    if (assessment.overallScore >= 40) return "Regular";
    return "Precisa Melhorar";
  };

  const getScoreEmoji = () => {
    if (assessment.overallScore >= 80) return "🌟";
    if (assessment.overallScore >= 60) return "👍";
    if (assessment.overallScore >= 40) return "😐";
    return "💪";
  };

  return (
    <View style={globalStyles.scoreContainer}>
      <View
        style={[globalStyles.scoreCircle, { backgroundColor: getScoreColor() }]}
      >
        <Text style={globalStyles.scoreText}>{assessment.overallScore}</Text>
      </View>

      <Text style={styles.scoreLabel}>{getScoreLabel()}</Text>
      <Text style={styles.scoreEmoji}>{getScoreEmoji()}</Text>

      <View style={styles.statusContainer}>
        <Text style={styles.statusText}>
          Status:{" "}
          <Text style={[styles.statusValue, { color: getScoreColor() }]}>
            {assessment.status === "excellent" && "Excelente"}
            {assessment.status === "good" && "Bom"}
            {assessment.status === "fair" && "Regular"}
            {assessment.status === "needs-improvement" && "Precisa Melhorar"}
          </Text>
        </Text>
      </View>

      <View style={styles.recommendationsContainer}>
        <Text style={styles.recommendationsTitle}>
          Recomendações ({assessment.recommendations.length})
        </Text>
        <Text style={styles.recommendationsSubtitle}>
          Baseado na sua avaliação de hoje
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  scoreLabel: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.text,
    marginTop: 15,
    marginBottom: 5,
  },
  scoreEmoji: {
    fontSize: 32,
    marginBottom: 20,
  },
  statusContainer: {
    backgroundColor: colors.surface,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 15,
    marginBottom: 20,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statusText: {
    fontSize: 16,
    color: colors.textSecondary,
  },
  statusValue: {
    fontWeight: "bold",
  },
  recommendationsContainer: {
    alignItems: "center",
  },
  recommendationsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.primary,
    marginBottom: 5,
  },
  recommendationsSubtitle: {
    fontSize: 14,
    color: colors.textSecondary,
    textAlign: "center",
  },
});
