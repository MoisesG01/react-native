import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { colors, globalStyles } from "../styles/global";
import { Destination } from "../types";

interface DestinationCardProps {
  destination: Destination;
  onPress?: () => void;
  showMatchScore?: boolean;
  matchScore?: number;
}

export const DestinationCard: React.FC<DestinationCardProps> = ({
  destination,
  onPress,
  showMatchScore = false,
  matchScore = 0,
}) => {
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

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(amount);
  };

  const CardContent = () => (
    <View style={globalStyles.destinationCard}>
      <View style={styles.destinationHeader}>
        <View style={styles.destinationInfo}>
          <Text style={globalStyles.destinationTitle}>{destination.name}</Text>
          <Text style={styles.destinationCountry}>{destination.country}</Text>
        </View>
        {showMatchScore && (
          <View style={styles.matchScoreContainer}>
            <View
              style={[
                styles.matchScore,
                { backgroundColor: getMatchColor(matchScore) },
              ]}
            >
              <Text style={styles.matchScoreText}>{matchScore}%</Text>
            </View>
            <Text style={styles.matchLabel}>{getMatchLabel(matchScore)}</Text>
          </View>
        )}
      </View>

      <Text style={globalStyles.destinationDescription}>
        {destination.description}
      </Text>

      <View style={styles.destinationDetails}>
        <View style={styles.detailItem}>
          <Text style={styles.detailIcon}>💰</Text>
          <Text style={styles.detailText}>
            {formatCurrency(destination.averageCost.midRange)}
          </Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.detailIcon}>⏱️</Text>
          <Text style={styles.detailText}>{destination.travelTime}</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.detailIcon}>🌤️</Text>
          <Text style={styles.detailText}>
            {destination.bestSeason.join(", ")}
          </Text>
        </View>
      </View>

      <View style={styles.categoriesContainer}>
        {destination.categories.map((category, idx) => (
          <View key={idx} style={styles.categoryBadge}>
            <Text style={styles.categoryText}>
              {getCategoryIcon(category)} {getCategoryName(category)}
            </Text>
          </View>
        ))}
      </View>

      <View style={styles.highlightsContainer}>
        <Text style={styles.highlightsTitle}>Destaques:</Text>
        {destination.highlights.slice(0, 3).map((highlight, idx) => (
          <Text key={idx} style={styles.highlightText}>
            • {highlight}
          </Text>
        ))}
        {destination.highlights.length > 3 && (
          <Text style={styles.moreHighlights}>
            +{destination.highlights.length - 3} mais
          </Text>
        )}
      </View>
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
  highlightsContainer: {
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingTop: 15,
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
  moreHighlights: {
    fontSize: 12,
    color: colors.primary,
    fontWeight: "600",
    fontStyle: "italic",
  },
});
