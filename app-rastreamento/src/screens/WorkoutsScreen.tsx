import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { WorkoutCard } from "../components/WorkoutCard";
import { Button } from "../components/Button";
import { colors, globalStyles } from "../styles/global";
import {
  workouts,
  getWorkoutsByCategory,
  getWorkoutsByDifficulty,
} from "../utils/fitnessData";
import { Workout, WorkoutCategory, ScreenType } from "../types";

interface WorkoutsScreenProps {
  onNavigate: (screen: ScreenType) => void;
  onStartWorkout: (workout: Workout) => void;
}

export const WorkoutsScreen: React.FC<WorkoutsScreenProps> = ({
  onNavigate,
  onStartWorkout,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<
    WorkoutCategory | "all"
  >("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState<
    "all" | "beginner" | "intermediate" | "advanced"
  >("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredWorkouts, setFilteredWorkouts] = useState(workouts);

  const categories: {
    key: WorkoutCategory | "all";
    label: string;
    icon: string;
  }[] = [
    { key: "all", label: "Todos", icon: "🔄" },
    { key: "fullBody", label: "Corpo Inteiro", icon: "🔄" },
    { key: "upperBody", label: "Parte Superior", icon: "💪" },
    { key: "lowerBody", label: "Parte Inferior", icon: "🦵" },
    { key: "core", label: "Core", icon: "🔥" },
    { key: "cardio", label: "Cardio", icon: "🏃‍♂️" },
    { key: "strength", label: "Força", icon: "🏋️‍♂️" },
    { key: "flexibility", label: "Flexibilidade", icon: "🧘‍♀️" },
    { key: "hiit", label: "HIIT", icon: "⚡" },
    { key: "yoga", label: "Yoga", icon: "🧘‍♂️" },
    { key: "pilates", label: "Pilates", icon: "🤸‍♀️" },
  ];

  const difficulties: {
    key: "all" | "beginner" | "intermediate" | "advanced";
    label: string;
    color: string;
  }[] = [
    { key: "all", label: "Todos", color: colors.textSecondary },
    { key: "beginner", label: "Iniciante", color: colors.accent },
    { key: "intermediate", label: "Intermediário", color: colors.warning },
    { key: "advanced", label: "Avançado", color: colors.danger },
  ];

  const filterWorkouts = () => {
    let filtered = workouts;

    // Filtrar por categoria
    if (selectedCategory !== "all") {
      filtered = getWorkoutsByCategory(selectedCategory);
    }

    // Filtrar por dificuldade
    if (selectedDifficulty !== "all") {
      filtered = filtered.filter(
        (workout) => workout.difficulty === selectedDifficulty
      );
    }

    // Filtrar por busca
    if (searchQuery.trim()) {
      filtered = filtered.filter(
        (workout) =>
          workout.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          workout.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredWorkouts(filtered);
  };

  React.useEffect(() => {
    filterWorkouts();
  }, [selectedCategory, selectedDifficulty, searchQuery]);

  const handleCategorySelect = (category: WorkoutCategory | "all") => {
    setSelectedCategory(category);
  };

  const handleDifficultySelect = (
    difficulty: "all" | "beginner" | "intermediate" | "advanced"
  ) => {
    setSelectedDifficulty(
      difficulty as "all" | "beginner" | "intermediate" | "advanced"
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.homeButton}
          onPress={() => onNavigate("welcome")}
        >
          <Text style={styles.homeButtonText}>🏠</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Treinos</Text>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => onNavigate("dashboard")}
        >
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Barra de busca */}
        <View style={styles.searchSection}>
          <View style={styles.searchContainer}>
            <Text style={styles.searchIcon}>🔍</Text>
            <TextInput
              style={styles.searchInput}
              placeholder="Buscar treinos..."
              placeholderTextColor={colors.textLight}
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>
        </View>

        {/* Filtros de categoria */}
        <View style={styles.filtersSection}>
          <Text style={styles.sectionTitle}>Categorias</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoriesContainer}
          >
            {categories.map((category) => (
              <TouchableOpacity
                key={category.key}
                style={[
                  styles.categoryButton,
                  selectedCategory === category.key &&
                    styles.categoryButtonActive,
                ]}
                onPress={() => handleCategorySelect(category.key)}
              >
                <Text style={styles.categoryIcon}>{category.icon}</Text>
                <Text
                  style={[
                    styles.categoryLabel,
                    selectedCategory === category.key &&
                      styles.categoryLabelActive,
                  ]}
                >
                  {category.label}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Filtros de dificuldade */}
        <View style={styles.filtersSection}>
          <Text style={styles.sectionTitle}>Dificuldade</Text>
          <View style={styles.difficultyContainer}>
            {difficulties.map((difficulty) => (
              <TouchableOpacity
                key={difficulty.key}
                style={[
                  styles.difficultyButton,
                  selectedDifficulty === difficulty.key &&
                    styles.difficultyButtonActive,
                ]}
                onPress={() => handleDifficultySelect(difficulty.key)}
              >
                <Text
                  style={[
                    styles.difficultyLabel,
                    selectedDifficulty === difficulty.key &&
                      styles.difficultyLabelActive,
                  ]}
                >
                  {difficulty.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Lista de treinos */}
        <View style={styles.workoutsSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>
              {filteredWorkouts.length} Treinos Encontrados
            </Text>
            <TouchableOpacity onPress={() => onNavigate("exercises")}>
              <Text style={styles.seeAllText}>Ver exercícios</Text>
            </TouchableOpacity>
          </View>

          {filteredWorkouts.length === 0 ? (
            <View style={styles.emptyState}>
              <Text style={styles.emptyStateIcon}>🤔</Text>
              <Text style={styles.emptyStateTitle}>
                Nenhum treino encontrado
              </Text>
              <Text style={styles.emptyStateDescription}>
                Tente ajustar os filtros ou buscar por outros termos
              </Text>
            </View>
          ) : (
            filteredWorkouts.map((workout) => (
              <WorkoutCard
                key={workout.id}
                workout={workout}
                onPress={() => onStartWorkout(workout)}
                showDetails={true}
              />
            ))
          )}
        </View>

        {/* Botão de criar treino personalizado */}
        <View style={styles.createWorkoutSection}>
          <Button
            title="Criar Treino Personalizado"
            onPress={() => onNavigate("profile")}
            variant="outline"
            size="large"
            fullWidth
          />
        </View>

        {/* Espaço para o final */}
        <View style={styles.bottomSpacing} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 60,
    paddingBottom: 20,
    paddingHorizontal: 20,
    backgroundColor: colors.surface,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  homeButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.surfaceDark,
    alignItems: "center",
    justifyContent: "center",
  },
  homeButtonText: {
    fontSize: 20,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.surfaceDark,
    alignItems: "center",
    justifyContent: "center",
  },
  backButtonText: {
    fontSize: 20,
    color: colors.primary,
    fontWeight: "bold",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.text,
  },
  placeholder: {
    width: 40,
  },
  content: {
    flex: 1,
  },
  searchSection: {
    padding: 20,
    paddingBottom: 10,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.surface,
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: colors.border,
  },
  searchIcon: {
    fontSize: 18,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: colors.text,
  },
  filtersSection: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.text,
    marginBottom: 15,
  },
  categoriesContainer: {
    paddingRight: 20,
  },
  categoryButton: {
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginRight: 15,
    backgroundColor: colors.surface,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: colors.border,
    minWidth: 80,
  },
  categoryButtonActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  categoryIcon: {
    fontSize: 24,
    marginBottom: 8,
  },
  categoryLabel: {
    fontSize: 12,
    color: colors.textSecondary,
    textAlign: "center",
    fontWeight: "500",
  },
  categoryLabelActive: {
    color: colors.surface,
  },
  difficultyContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  difficultyButton: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 12,
    marginHorizontal: 5,
    backgroundColor: colors.surface,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
  },
  difficultyButtonActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  difficultyLabel: {
    fontSize: 14,
    fontWeight: "500",
    color: colors.textSecondary,
  },
  difficultyLabelActive: {
    color: colors.surface,
  },
  workoutsSection: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  seeAllText: {
    fontSize: 14,
    color: colors.primary,
    fontWeight: "600",
  },
  emptyState: {
    alignItems: "center",
    paddingVertical: 40,
  },
  emptyStateIcon: {
    fontSize: 48,
    marginBottom: 15,
  },
  emptyStateTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.text,
    marginBottom: 8,
    textAlign: "center",
  },
  emptyStateDescription: {
    fontSize: 14,
    color: colors.textSecondary,
    textAlign: "center",
    lineHeight: 20,
  },
  createWorkoutSection: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  bottomSpacing: {
    height: 20,
  },
});
