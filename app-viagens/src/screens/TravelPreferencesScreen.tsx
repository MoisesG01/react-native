import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { colors, globalStyles } from "../styles/global";
import {
  TravelPreferences,
  TravelInterest,
  BudgetRange,
  DurationOption,
  TravelStyle,
} from "../types";
import {
  travelInterests,
  budgetOptions,
  durationOptions,
  travelStyles,
} from "../utils/travelData";

interface TravelPreferencesScreenProps {
  onSubmit: (preferences: TravelPreferences) => void;
  onBack: () => void;
}

export const TravelPreferencesScreen: React.FC<
  TravelPreferencesScreenProps
> = ({ onSubmit, onBack }) => {
  const [selectedBudget, setSelectedBudget] = useState<string>("");
  const [selectedDuration, setSelectedDuration] = useState<string>("");
  const [selectedStyle, setSelectedStyle] = useState<string>("");
  const [selectedInterests, setSelectedInterests] = useState<TravelInterest[]>(
    []
  );
  const [selectedSeason, setSelectedSeason] = useState<string>("");
  const [selectedGroupSize, setSelectedGroupSize] = useState<string>("");
  const [selectedAccommodation, setSelectedAccommodation] =
    useState<string>("");

  const seasons = [
    { value: "spring", label: "Primavera", icon: "🌸" },
    { value: "summer", label: "Verão", icon: "☀️" },
    { value: "autumn", label: "Outono", icon: "🍂" },
    { value: "winter", label: "Inverno", icon: "❄️" },
  ];

  const groupSizes = [
    { value: "solo", label: "Sozinho", icon: "🧑" },
    { value: "couple", label: "Casal", icon: "👫" },
    { value: "family", label: "Família", icon: "👨‍👩‍👧‍👦" },
    { value: "friends", label: "Amigos", icon: "👥" },
    { value: "group", label: "Grupo", icon: "👨‍👩‍👧‍👦" },
  ];

  const accommodations = [
    { value: "budget", label: "Econômico", icon: "🏨" },
    { value: "mid-range", label: "Intermediário", icon: "🏩" },
    { value: "luxury", label: "Luxo", icon: "🏰" },
    { value: "unique", label: "Único", icon: "🏕️" },
  ];

  const toggleInterest = (interest: TravelInterest) => {
    setSelectedInterests((prev) =>
      prev.find((i) => i.id === interest.id)
        ? prev.filter((i) => i.id !== interest.id)
        : [...prev, interest]
    );
  };

  const handleSubmit = () => {
    if (
      !selectedBudget ||
      !selectedDuration ||
      !selectedStyle ||
      selectedInterests.length === 0
    ) {
      return;
    }

    const preferences: TravelPreferences = {
      id: Date.now().toString(),
      budget: selectedBudget as any,
      duration: selectedDuration as any,
      travelStyle: selectedStyle as any,
      interests: selectedInterests,
      season: selectedSeason as any,
      groupSize: selectedGroupSize as any,
      accommodation: selectedAccommodation as any,
    };

    onSubmit(preferences);
  };

  const isFormValid =
    selectedBudget &&
    selectedDuration &&
    selectedStyle &&
    selectedInterests.length > 0;

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[colors.primary, colors.primaryLight]}
        style={styles.header}
      >
        <TouchableOpacity onPress={onBack} style={styles.backButton}>
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
        <View style={styles.headerContent}>
          <Text style={styles.headerTitle}>Suas Preferências</Text>
          <Text style={styles.headerSubtitle}>
            Conte-nos sobre o tipo de viagem que você deseja
          </Text>
        </View>
      </LinearGradient>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Orçamento */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionIcon}>💰</Text>
            <Text style={styles.sectionTitle}>Orçamento</Text>
          </View>
          <View style={styles.optionsGrid}>
            {budgetOptions.map((option) => (
              <TouchableOpacity
                key={option.value}
                style={[
                  styles.optionCard,
                  selectedBudget === option.value && styles.optionCardSelected,
                ]}
                onPress={() => setSelectedBudget(option.value)}
              >
                <View style={styles.optionHeader}>
                  <View
                    style={[
                      styles.optionColor,
                      { backgroundColor: option.color },
                    ]}
                  />
                  <Text style={styles.optionTitle}>{option.label}</Text>
                </View>
                <Text style={styles.optionDescription}>
                  {option.description}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Duração */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionIcon}>📅</Text>
            <Text style={styles.sectionTitle}>Duração da Viagem</Text>
          </View>
          <View style={styles.optionsGrid}>
            {durationOptions.map((option) => (
              <TouchableOpacity
                key={option.value}
                style={[
                  styles.optionCard,
                  selectedDuration === option.value &&
                    styles.optionCardSelected,
                ]}
                onPress={() => setSelectedDuration(option.value)}
              >
                <View style={styles.optionHeader}>
                  <Text style={styles.optionDays}>{option.days}</Text>
                  <Text style={styles.optionTitle}>{option.label}</Text>
                </View>
                <Text style={styles.optionDescription}>
                  {option.description}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Estilo de Viagem */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionIcon}>🎯</Text>
            <Text style={styles.sectionTitle}>Estilo de Viagem</Text>
          </View>
          <View style={styles.optionsGrid}>
            {travelStyles.map((style) => (
              <TouchableOpacity
                key={style.value}
                style={[
                  styles.optionCard,
                  selectedStyle === style.value && styles.optionCardSelected,
                ]}
                onPress={() => setSelectedStyle(style.value)}
              >
                <View style={styles.optionHeader}>
                  <Text style={styles.optionIcon}>{style.icon}</Text>
                  <Text style={styles.optionTitle}>{style.label}</Text>
                </View>
                <Text style={styles.optionDescription}>
                  {style.description}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Interesses */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionIcon}>❤️</Text>
            <View style={styles.sectionTitleContainer}>
              <Text style={styles.sectionTitle}>Seus Interesses</Text>
              <Text style={styles.sectionSubtitle}>
                Selecione tudo que te interessa
              </Text>
            </View>
          </View>
          <View style={styles.interestsGrid}>
            {travelInterests.map((interest) => {
              const isSelected = selectedInterests.find(
                (i) => i.id === interest.id
              );
              return (
                <TouchableOpacity
                  key={interest.id}
                  style={[
                    styles.interestCard,
                    isSelected && styles.interestCardSelected,
                  ]}
                  onPress={() => toggleInterest(interest)}
                >
                  <Text style={styles.interestIcon}>{interest.icon}</Text>
                  <Text
                    style={[
                      styles.interestName,
                      isSelected && styles.interestNameSelected,
                    ]}
                  >
                    {interest.name}
                  </Text>
                  {isSelected && <Text style={styles.checkmark}>✓</Text>}
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        {/* Estação */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>🌤️ Estação Preferida</Text>
          <View style={styles.optionsGrid}>
            {seasons.map((season) => (
              <TouchableOpacity
                key={season.value}
                style={[
                  globalStyles.preferenceCard,
                  selectedSeason === season.value &&
                    globalStyles.preferenceCardSelected,
                ]}
                onPress={() => setSelectedSeason(season.value)}
              >
                <Text style={styles.optionIcon}>{season.icon}</Text>
                <Text style={styles.optionTitle}>{season.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Tamanho do Grupo */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>👥 Tamanho do Grupo</Text>
          <View style={styles.optionsGrid}>
            {groupSizes.map((group) => (
              <TouchableOpacity
                key={group.value}
                style={[
                  globalStyles.preferenceCard,
                  selectedGroupSize === group.value &&
                    globalStyles.preferenceCardSelected,
                ]}
                onPress={() => setSelectedGroupSize(group.value)}
              >
                <Text style={styles.optionIcon}>{group.icon}</Text>
                <Text style={styles.optionTitle}>{group.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Acomodação */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>🏨 Tipo de Acomodação</Text>
          <View style={styles.optionsGrid}>
            {accommodations.map((accommodation) => (
              <TouchableOpacity
                key={accommodation.value}
                style={[
                  globalStyles.preferenceCard,
                  selectedAccommodation === accommodation.value &&
                    globalStyles.preferenceCardSelected,
                ]}
                onPress={() => setSelectedAccommodation(accommodation.value)}
              >
                <Text style={styles.optionIcon}>{accommodation.icon}</Text>
                <Text style={styles.optionTitle}>{accommodation.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>

      <View style={styles.bottomContainer}>
        <LinearGradient
          colors={[colors.accent, colors.accentDark]}
          style={styles.submitButton}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        >
          <TouchableOpacity
            style={styles.submitButtonTouchable}
            onPress={handleSubmit}
            disabled={!isFormValid}
            activeOpacity={0.8}
          >
            <Text style={styles.submitButtonText}>Encontrar Destinos</Text>
            <Text style={styles.submitButtonIcon}>✈️</Text>
          </TouchableOpacity>
        </LinearGradient>
        {!isFormValid && (
          <Text style={styles.formHint}>
            Complete pelo menos orçamento, duração, estilo e interesses
          </Text>
        )}
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
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
  },
  backButtonText: {
    fontSize: 20,
    color: colors.surface,
    fontWeight: "bold",
  },
  headerContent: {
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: colors.surface,
    marginBottom: 8,
    textAlign: "center",
  },
  headerSubtitle: {
    fontSize: 16,
    color: colors.surface,
    textAlign: "center",
    opacity: 0.9,
    lineHeight: 22,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  section: {
    marginBottom: 25,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  sectionIcon: {
    fontSize: 24,
    marginRight: 12,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.text,
  },
  sectionTitleContainer: {
    flex: 1,
  },
  sectionSubtitle: {
    fontSize: 14,
    color: colors.textSecondary,
    marginTop: 2,
  },
  optionsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  optionCard: {
    width: "48%",
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    borderWidth: 2,
    borderColor: colors.border,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  optionCardSelected: {
    borderColor: colors.primary,
    backgroundColor: colors.background,
    shadowOpacity: 0.2,
    elevation: 5,
  },
  optionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  optionColor: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 8,
  },
  optionDays: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.primary,
    marginRight: 8,
  },
  optionIcon: {
    fontSize: 20,
    marginRight: 8,
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.text,
    flex: 1,
  },
  optionDescription: {
    fontSize: 13,
    color: colors.textSecondary,
    lineHeight: 18,
  },
  interestsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  interestCard: {
    width: "48%",
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    alignItems: "center",
    borderWidth: 2,
    borderColor: colors.border,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    position: "relative",
  },
  interestCardSelected: {
    borderColor: colors.primary,
    backgroundColor: colors.background,
    shadowOpacity: 0.2,
    elevation: 5,
  },
  interestIcon: {
    fontSize: 28,
    marginBottom: 8,
  },
  interestName: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.text,
    textAlign: "center",
  },
  interestNameSelected: {
    color: colors.primary,
  },
  checkmark: {
    position: "absolute",
    top: 8,
    right: 8,
    fontSize: 16,
    color: colors.success,
    fontWeight: "bold",
  },
  bottomContainer: {
    padding: 20,
    paddingBottom: 30,
    backgroundColor: colors.surface,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  submitButton: {
    borderRadius: 30,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 6,
  },
  submitButtonTouchable: {
    paddingVertical: 18,
    paddingHorizontal: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
  },
  submitButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.surface,
    marginRight: 10,
  },
  submitButtonIcon: {
    fontSize: 20,
  },
  formHint: {
    fontSize: 12,
    color: colors.textSecondary,
    textAlign: "center",
    marginTop: 10,
    fontStyle: "italic",
  },
});
