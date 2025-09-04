import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { colors, globalStyles } from "../styles/global";
import { Activity } from "../types";

interface ActivityCardProps {
  activity: Activity;
  onPress?: () => void;
  isSelected?: boolean;
  showTips?: boolean;
}

export const ActivityCard: React.FC<ActivityCardProps> = ({
  activity,
  onPress,
  isSelected = false,
  showTips = true,
}) => {
  const getCostColor = (cost: string) => {
    switch (cost) {
      case "free":
        return colors.success;
      case "low":
        return colors.accent;
      case "medium":
        return colors.warning;
      case "high":
        return colors.danger;
      default:
        return colors.textSecondary;
    }
  };

  const getCostLabel = (cost: string) => {
    switch (cost) {
      case "free":
        return "Gratuito";
      case "low":
        return "Baixo";
      case "medium":
        return "Médio";
      case "high":
        return "Alto";
      default:
        return cost;
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "easy":
        return colors.success;
      case "medium":
        return colors.warning;
      case "hard":
        return colors.danger;
      default:
        return colors.textSecondary;
    }
  };

  const getDifficultyLabel = (difficulty: string) => {
    switch (difficulty) {
      case "easy":
        return "Fácil";
      case "medium":
        return "Médio";
      case "hard":
        return "Difícil";
      default:
        return difficulty;
    }
  };

  const getCategoryIcon = (category: string) => {
    const icons: { [key: string]: string } = {
      beach: "🏖️",
      mountain: "🏔️",
      forest: "🌲",
      desert: "🏜️",
      city: "🏙️",
      historical: "🏛️",
      cultural: "🎭",
      adventure: "🧗",
      food: "🍽️",
      nightlife: "🌃",
      art: "🎨",
      nature: "🌿",
    };
    return icons[category] || "📍";
  };

  const getCategoryName = (category: string) => {
    const names: { [key: string]: string } = {
      beach: "Praia",
      mountain: "Montanha",
      forest: "Floresta",
      desert: "Deserto",
      city: "Cidade",
      historical: "Histórico",
      cultural: "Cultural",
      adventure: "Aventura",
      food: "Gastronomia",
      nightlife: "Vida Noturna",
      art: "Arte",
      nature: "Natureza",
    };
    return names[category] || category;
  };

  const CardContent = () => (
    <View
      style={[
        globalStyles.activityCard,
        isSelected && styles.activityCardSelected,
      ]}
    >
      <View style={styles.activityHeader}>
        <View style={styles.activityInfo}>
          <Text style={globalStyles.activityTitle}>{activity.name}</Text>
          <Text style={styles.activityLocation}>📍 {activity.location}</Text>
        </View>
        <View style={styles.activityMeta}>
          <View style={styles.categoryBadge}>
            <Text style={styles.categoryIcon}>
              {getCategoryIcon(activity.category)}
            </Text>
            <Text style={styles.categoryText}>
              {getCategoryName(activity.category)}
            </Text>
          </View>
        </View>
      </View>

      <Text style={globalStyles.activityDescription}>
        {activity.description}
      </Text>

      <View style={styles.activityDetails}>
        <View style={styles.detailItem}>
          <Text style={styles.detailIcon}>⏱️</Text>
          <Text style={styles.detailText}>{activity.duration}</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.detailIcon}>💰</Text>
          <Text
            style={[styles.detailText, { color: getCostColor(activity.cost) }]}
          >
            {getCostLabel(activity.cost)}
          </Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.detailIcon}>⚡</Text>
          <Text
            style={[
              styles.detailText,
              { color: getDifficultyColor(activity.difficulty) },
            ]}
          >
            {getDifficultyLabel(activity.difficulty)}
          </Text>
        </View>
      </View>

      {activity.highlights.length > 0 && (
        <View style={styles.highlightsContainer}>
          <Text style={styles.highlightsTitle}>Destaques:</Text>
          {activity.highlights.map((highlight, idx) => (
            <Text key={idx} style={styles.highlightText}>
              • {highlight}
            </Text>
          ))}
        </View>
      )}

      {showTips && activity.tips.length > 0 && (
        <View style={styles.tipsContainer}>
          <Text style={styles.tipsTitle}>💡 Dicas:</Text>
          {activity.tips.map((tip, idx) => (
            <Text key={idx} style={styles.tipText}>
              {tip}
            </Text>
          ))}
        </View>
      )}

      {isSelected && (
        <View style={styles.selectedIndicator}>
          <Text style={styles.selectedText}>✓ Selecionado</Text>
        </View>
      )}
    </View>
  );

  if (onPress) {
    return (
      <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
        <CardContent />
      </TouchableOpacity>
    );
  }

  return <CardContent />;
};

const styles = StyleSheet.create({
  activityCardSelected: {
    borderColor: colors.primary,
    backgroundColor: colors.background,
  },
  activityHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 12,
  },
  activityInfo: {
    flex: 1,
  },
  activityLocation: {
    fontSize: 14,
    color: colors.textSecondary,
    marginTop: 4,
  },
  activityMeta: {
    alignItems: "flex-end",
  },
  categoryBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.primary,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  categoryIcon: {
    fontSize: 12,
    marginRight: 4,
  },
  categoryText: {
    fontSize: 12,
    color: colors.surface,
    fontWeight: "600",
  },
  activityDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  detailItem: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  detailIcon: {
    fontSize: 16,
    marginRight: 6,
  },
  detailText: {
    fontSize: 12,
    color: colors.textSecondary,
    fontWeight: "500",
  },
  highlightsContainer: {
    marginBottom: 15,
  },
  highlightsTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.text,
    marginBottom: 8,
  },
  highlightText: {
    fontSize: 13,
    color: colors.textSecondary,
    lineHeight: 18,
    marginBottom: 4,
  },
  tipsContainer: {
    backgroundColor: colors.background,
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  tipsTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.primary,
    marginBottom: 8,
  },
  tipText: {
    fontSize: 13,
    color: colors.textSecondary,
    lineHeight: 18,
    marginBottom: 4,
  },
  selectedIndicator: {
    backgroundColor: colors.success,
    padding: 8,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  selectedText: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.surface,
  },
});
