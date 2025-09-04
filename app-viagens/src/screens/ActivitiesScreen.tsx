import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { colors, globalStyles } from "../styles/global";
import { TravelRecommendation, Activity } from "../types";

interface ActivitiesScreenProps {
  recommendation: TravelRecommendation;
  onBack: () => void;
  onActivitySelect?: (activity: Activity) => void;
}

export const ActivitiesScreen: React.FC<ActivitiesScreenProps> = ({
  recommendation,
  onBack,
  onActivitySelect,
}) => {
  const [selectedActivities, setSelectedActivities] = useState<Activity[]>([]);

  const toggleActivity = (activity: Activity) => {
    setSelectedActivities((prev) =>
      prev.find((a) => a.id === activity.id)
        ? prev.filter((a) => a.id !== activity.id)
        : [...prev, activity]
    );
  };

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

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.header}>
        <TouchableOpacity onPress={onBack} style={styles.backButton}>
          <Text style={styles.backButtonText}>← Voltar</Text>
        </TouchableOpacity>
        <Text style={globalStyles.headerTitle}>
          Atividades em {recommendation.destination.name}
        </Text>
        <Text style={globalStyles.headerSubtitle}>
          {recommendation.suggestedActivities.length} atividades sugeridas para
          você
        </Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {recommendation.suggestedActivities.length === 0 ? (
          <View style={styles.emptyState}>
            <Text style={styles.emptyIcon}>🎯</Text>
            <Text style={styles.emptyTitle}>Nenhuma atividade encontrada</Text>
            <Text style={styles.emptyDescription}>
              Não encontramos atividades específicas para este destino no
              momento
            </Text>
          </View>
        ) : (
          recommendation.suggestedActivities.map((activity) => {
            const isSelected = selectedActivities.find(
              (a) => a.id === activity.id
            );
            return (
              <TouchableOpacity
                key={activity.id}
                style={[
                  globalStyles.activityCard,
                  isSelected && styles.activityCardSelected,
                ]}
                onPress={() => {
                  toggleActivity(activity);
                  onActivitySelect?.(activity);
                }}
              >
                <View style={styles.activityHeader}>
                  <View style={styles.activityInfo}>
                    <Text style={globalStyles.activityTitle}>
                      {activity.name}
                    </Text>
                    <Text style={styles.activityLocation}>
                      📍 {activity.location}
                    </Text>
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
                      style={[
                        styles.detailText,
                        { color: getCostColor(activity.cost) },
                      ]}
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

                {activity.tips.length > 0 && (
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
              </TouchableOpacity>
            );
          })
        )}
      </ScrollView>

      {selectedActivities.length > 0 && (
        <View style={styles.selectedActivitiesBar}>
          <View style={styles.selectedInfo}>
            <Text style={styles.selectedCount}>
              {selectedActivities.length} atividade
              {selectedActivities.length > 1 ? "s" : ""} selecionada
              {selectedActivities.length > 1 ? "s" : ""}
            </Text>
            <Text style={styles.selectedSubtext}>
              Toque para criar seu itinerário personalizado
            </Text>
          </View>
          <TouchableOpacity
            style={styles.createItineraryButton}
            onPress={() => {
              // Aqui você pode implementar a lógica para criar um itinerário
              console.log("Atividades selecionadas:", selectedActivities);
            }}
            activeOpacity={0.8}
          >
            <Text style={styles.createItineraryText}>Criar Itinerário</Text>
            <Text style={styles.createItineraryIcon}>📅</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  backButton: {
    alignSelf: "flex-start",
    marginBottom: 10,
  },
  backButtonText: {
    fontSize: 16,
    color: colors.primary,
    fontWeight: "600",
  },
  emptyState: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 60,
  },
  emptyIcon: {
    fontSize: 64,
    marginBottom: 20,
  },
  emptyTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.text,
    marginBottom: 12,
    textAlign: "center",
  },
  emptyDescription: {
    fontSize: 16,
    color: colors.textSecondary,
    textAlign: "center",
    lineHeight: 22,
    paddingHorizontal: 20,
  },
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
  selectedActivitiesBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.surface,
    padding: 20,
    paddingBottom: 30,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 8,
  },
  selectedInfo: {
    flex: 1,
    marginRight: 15,
  },
  selectedCount: {
    fontSize: 16,
    color: colors.text,
    fontWeight: "bold",
    marginBottom: 4,
  },
  selectedSubtext: {
    fontSize: 12,
    color: colors.textSecondary,
    fontStyle: "italic",
  },
  createItineraryButton: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 6,
  },
  createItineraryText: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.surface,
    marginRight: 8,
  },
  createItineraryIcon: {
    fontSize: 18,
  },
});
