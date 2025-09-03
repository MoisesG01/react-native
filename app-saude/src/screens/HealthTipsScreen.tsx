import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Button } from "../components/Button";
import { HealthTipCard } from "../components/HealthTipCard";
import { colors, globalStyles } from "../styles/global";
import { healthTips, getTipsByCategory } from "../utils/healthData";

interface HealthTipsScreenProps {
  onBack: () => void;
}

export const HealthTipsScreen: React.FC<HealthTipsScreenProps> = ({
  onBack,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", name: "Todas", icon: "💡" },
    { id: "energy", name: "Energia", icon: "⚡" },
    { id: "sleep", name: "Sono", icon: "🌙" },
    { id: "stress", name: "Estresse", icon: "🧘" },
    { id: "general", name: "Geral", icon: "🏥" },
  ];

  const getFilteredTips = () => {
    if (selectedCategory === "all") {
      return healthTips;
    }
    return getTipsByCategory(selectedCategory);
  };

  const getCategoryColor = (categoryId: string) => {
    switch (categoryId) {
      case "energy":
        return colors.warning;
      case "sleep":
        return colors.secondary;
      case "stress":
        return colors.danger;
      case "general":
        return colors.primary;
      default:
        return colors.primary;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={globalStyles.headerTitle}>Dicas de Saúde</Text>
        <Text style={globalStyles.headerSubtitle}>
          Explore dicas personalizadas para melhorar seu bem-estar
        </Text>
      </View>

      <View style={styles.categoriesContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoriesScroll}
        >
          {categories.map((category) => (
            <TouchableOpacity
              key={category.id}
              style={[
                styles.categoryButton,
                selectedCategory === category.id && styles.selectedCategory,
                { borderColor: getCategoryColor(category.id) },
              ]}
              onPress={() => setSelectedCategory(category.id)}
            >
              <Text style={styles.categoryIcon}>{category.icon}</Text>
              <Text
                style={[
                  styles.categoryName,
                  selectedCategory === category.id &&
                    styles.selectedCategoryText,
                ]}
              >
                {category.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.tipsHeader}>
          <Text style={styles.tipsCount}>
            {getFilteredTips().length} dica
            {getFilteredTips().length !== 1 ? "s" : ""} encontrada
            {getFilteredTips().length !== 1 ? "s" : ""}
          </Text>
          {selectedCategory !== "all" && (
            <Text style={styles.categoryDescription}>
              Dicas específicas para{" "}
              {categories
                .find((c) => c.id === selectedCategory)
                ?.name.toLowerCase()}
            </Text>
          )}
        </View>

        {getFilteredTips().map((tip) => (
          <HealthTipCard key={tip.id} tip={tip} />
        ))}

        {getFilteredTips().length === 0 && (
          <View style={styles.noTipsContainer}>
            <Text style={styles.noTipsIcon}>🔍</Text>
            <Text style={styles.noTipsTitle}>Nenhuma dica encontrada</Text>
            <Text style={styles.noTipsDescription}>
              Tente selecionar uma categoria diferente ou volte para ver todas
              as dicas.
            </Text>
          </View>
        )}

        <View style={styles.bottomSpacing} />
      </ScrollView>

      <View style={globalStyles.bottomContainer}>
        <Button title="Voltar" onPress={onBack} variant="outline" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    ...globalStyles.header,
    backgroundColor: colors.primary,
  },
  headerTitle: {
    ...globalStyles.headerTitle,
    color: colors.surface,
  },
  headerSubtitle: {
    ...globalStyles.headerSubtitle,
    color: colors.surface,
    opacity: 0.9,
  },
  categoriesContainer: {
    backgroundColor: colors.surface,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  categoriesScroll: {
    paddingHorizontal: 20,
  },
  categoryButton: {
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 12,
    marginRight: 15,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: colors.border,
    backgroundColor: colors.surface,
    minWidth: 80,
  },
  selectedCategory: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  categoryIcon: {
    fontSize: 20,
    marginBottom: 5,
  },
  categoryName: {
    fontSize: 12,
    fontWeight: "600",
    color: colors.textSecondary,
  },
  selectedCategoryText: {
    color: colors.surface,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  tipsHeader: {
    alignItems: "center",
    marginBottom: 25,
  },
  tipsCount: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.primary,
    marginBottom: 5,
  },
  categoryDescription: {
    fontSize: 14,
    color: colors.textSecondary,
    textAlign: "center",
    fontStyle: "italic",
  },
  noTipsContainer: {
    alignItems: "center",
    padding: 40,
    backgroundColor: colors.surface,
    borderRadius: 20,
    marginHorizontal: 20,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  noTipsIcon: {
    fontSize: 48,
    marginBottom: 15,
  },
  noTipsTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.text,
    marginBottom: 8,
  },
  noTipsDescription: {
    fontSize: 16,
    color: colors.textSecondary,
    textAlign: "center",
    lineHeight: 22,
  },
  bottomSpacing: {
    height: 20,
  },
});
