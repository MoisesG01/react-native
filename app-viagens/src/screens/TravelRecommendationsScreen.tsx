import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { colors, globalStyles } from "../styles/global";
import { TravelRecommendation, TravelPreferences } from "../types";
import { calculateTravelRecommendations } from "../utils/travelData";

interface TravelRecommendationsScreenProps {
  preferences: TravelPreferences;
  onDestinationSelect: (recommendation: TravelRecommendation) => void;
  onBack: () => void;
  onNewSearch: () => void;
}

export const TravelRecommendationsScreen: React.FC<
  TravelRecommendationsScreenProps
> = ({ preferences, onDestinationSelect, onBack, onNewSearch }) => {
  const recommendations = calculateTravelRecommendations(preferences);

  const getMatchColor = (score: number) => {
    if (score >= 80) return colors.success;
    if (score >= 60) return colors.accent;
    if (score >= 40) return colors.warning;
    return colors.danger;
  };

  const getMatchLabel = (score: number) => {
    if (score >= 80) return "Perfeito";
    if (score >= 60) return "Muito Bom";
    if (score >= 40) return "Bom";
    return "Regular";
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(amount);
  };

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.header}>
        <TouchableOpacity onPress={onBack} style={styles.backButton}>
          <Text style={styles.backButtonText}>← Voltar</Text>
        </TouchableOpacity>
        <Text style={globalStyles.headerTitle}>Destinos Recomendados</Text>
        <Text style={globalStyles.headerSubtitle}>
          Encontramos {recommendations.length} destinos perfeitos para você
        </Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {recommendations.length === 0 ? (
          <View style={styles.emptyState}>
            <Text style={styles.emptyIcon}>🤔</Text>
            <Text style={styles.emptyTitle}>Nenhum destino encontrado</Text>
            <Text style={styles.emptyDescription}>
              Tente ajustar suas preferências para encontrar mais opções
            </Text>
            <TouchableOpacity
              style={[globalStyles.button, globalStyles.buttonSecondary]}
              onPress={onNewSearch}
            >
              <Text style={globalStyles.buttonText}>Ajustar Preferências</Text>
            </TouchableOpacity>
          </View>
        ) : (
          recommendations.map((recommendation, index) => (
            <TouchableOpacity
              key={recommendation.destination.id}
              style={globalStyles.destinationCard}
              onPress={() => onDestinationSelect(recommendation)}
            >
              <View style={styles.destinationHeader}>
                <View style={styles.destinationInfo}>
                  <Text style={globalStyles.destinationTitle}>
                    {recommendation.destination.name}
                  </Text>
                  <Text style={styles.destinationCountry}>
                    {recommendation.destination.country}
                  </Text>
                </View>
                <View style={styles.matchScoreContainer}>
                  <View
                    style={[
                      styles.matchScore,
                      {
                        backgroundColor: getMatchColor(
                          recommendation.matchScore
                        ),
                      },
                    ]}
                  >
                    <Text style={styles.matchScoreText}>
                      {recommendation.matchScore}%
                    </Text>
                  </View>
                  <Text style={styles.matchLabel}>
                    {getMatchLabel(recommendation.matchScore)}
                  </Text>
                </View>
              </View>

              <Text style={globalStyles.destinationDescription}>
                {recommendation.destination.description}
              </Text>

              <View style={styles.destinationDetails}>
                <View style={styles.detailItem}>
                  <Text style={styles.detailIcon}>💰</Text>
                  <Text style={styles.detailText}>
                    {formatCurrency(recommendation.estimatedCost)}
                  </Text>
                </View>
                <View style={styles.detailItem}>
                  <Text style={styles.detailIcon}>⏱️</Text>
                  <Text style={styles.detailText}>
                    {recommendation.destination.travelTime}
                  </Text>
                </View>
                <View style={styles.detailItem}>
                  <Text style={styles.detailIcon}>🌤️</Text>
                  <Text style={styles.detailText}>
                    {recommendation.bestTimeToVisit}
                  </Text>
                </View>
              </View>

              <View style={styles.categoriesContainer}>
                {recommendation.destination.categories.map((category, idx) => (
                  <View key={idx} style={styles.categoryBadge}>
                    <Text style={styles.categoryText}>
                      {getCategoryIcon(category)} {getCategoryName(category)}
                    </Text>
                  </View>
                ))}
              </View>

              <View style={styles.reasonsContainer}>
                <Text style={styles.reasonsTitle}>Por que este destino:</Text>
                {recommendation.reasons.slice(0, 2).map((reason, idx) => (
                  <Text key={idx} style={styles.reasonText}>
                    • {reason}
                  </Text>
                ))}
              </View>

              <View style={styles.activitiesPreview}>
                <Text style={styles.activitiesTitle}>
                  Atividades sugeridas (
                  {recommendation.suggestedActivities.length})
                </Text>
                <View style={styles.activitiesList}>
                  {recommendation.suggestedActivities
                    .slice(0, 3)
                    .map((activity, idx) => (
                      <Text key={idx} style={styles.activityItem}>
                        {activity.name}
                      </Text>
                    ))}
                  {recommendation.suggestedActivities.length > 3 && (
                    <Text style={styles.moreActivities}>
                      +{recommendation.suggestedActivities.length - 3} mais
                    </Text>
                  )}
                </View>
              </View>
            </TouchableOpacity>
          ))
        )}
      </ScrollView>

      <View style={globalStyles.bottomContainer}>
        <TouchableOpacity
          style={[globalStyles.button, globalStyles.buttonAccent]}
          onPress={onNewSearch}
        >
          <Text style={globalStyles.buttonText}>Nova Busca</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
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
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  destinationHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 12,
  },
  destinationInfo: {
    flex: 1,
  },
  destinationCountry: {
    fontSize: 14,
    color: colors.textSecondary,
    marginTop: 4,
  },
  matchScoreContainer: {
    alignItems: "center",
  },
  matchScore: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 4,
  },
  matchScoreText: {
    fontSize: 14,
    fontWeight: "bold",
    color: colors.surface,
  },
  matchLabel: {
    fontSize: 12,
    color: colors.textSecondary,
    fontWeight: "600",
  },
  destinationDetails: {
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
  categoriesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 15,
  },
  categoryBadge: {
    backgroundColor: colors.primary,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginRight: 8,
    marginBottom: 8,
  },
  categoryText: {
    fontSize: 12,
    color: colors.surface,
    fontWeight: "600",
  },
  reasonsContainer: {
    marginBottom: 15,
  },
  reasonsTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.text,
    marginBottom: 8,
  },
  reasonText: {
    fontSize: 13,
    color: colors.textSecondary,
    lineHeight: 18,
    marginBottom: 4,
  },
  activitiesPreview: {
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingTop: 15,
  },
  activitiesTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.text,
    marginBottom: 8,
  },
  activitiesList: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  activityItem: {
    fontSize: 12,
    color: colors.textSecondary,
    backgroundColor: colors.background,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    marginRight: 8,
    marginBottom: 4,
  },
  moreActivities: {
    fontSize: 12,
    color: colors.primary,
    fontWeight: "600",
    fontStyle: "italic",
  },
});
