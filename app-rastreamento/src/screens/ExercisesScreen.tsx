import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { ExerciseCard } from "../components/ExerciseCard";
import { Button } from "../components/Button";
import { colors, globalStyles } from "../styles/global";
import {
  exercises,
  getExercisesByCategory,
  getExercisesByMuscleGroup,
} from "../utils/fitnessData";
import { Exercise, ExerciseCategory, MuscleGroup, ScreenType } from "../types";

interface ExercisesScreenProps {
  onNavigate: (screen: ScreenType) => void;
  onExercisePress: (exercise: Exercise) => void;
}

export const ExercisesScreen: React.FC<ExercisesScreenProps> = ({
  onNavigate,
  onExercisePress,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<
    ExerciseCategory | "all"
  >("all");
  const [selectedMuscleGroup, setSelectedMuscleGroup] = useState<
    MuscleGroup | "all"
  >("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredExercises, setFilteredExercises] = useState(exercises);

  const categories: {
    key: ExerciseCategory | "all";
    label: string;
    icon: string;
  }[] = [
    { key: "all", label: "Todos", icon: "💪" },
    { key: "strength", label: "Força", icon: "🏋️‍♂️" },
    { key: "cardio", label: "Cardio", icon: "🏃‍♂️" },
    { key: "flexibility", label: "Flexibilidade", icon: "🧘‍♀️" },
    { key: "balance", label: "Equilíbrio", icon: "⚖️" },
    { key: "sports", label: "Esportes", icon: "⚽" },
    { key: "yoga", label: "Yoga", icon: "🧘‍♂️" },
    { key: "pilates", label: "Pilates", icon: "🤸‍♀️" },
  ];

  const muscleGroups: {
    key: MuscleGroup | "all";
    label: string;
    icon: string;
  }[] = [
    { key: "all", label: "Todos", icon: "🔄" },
    { key: "chest", label: "Peito", icon: "💪" },
    { key: "back", label: "Costas", icon: "🦴" },
    { key: "shoulders", label: "Ombros", icon: "🏋️‍♂️" },
    { key: "biceps", label: "Bíceps", icon: "💪" },
    { key: "triceps", label: "Tríceps", icon: "💪" },
    { key: "abs", label: "Abdômen", icon: "🔥" },
    { key: "glutes", label: "Glúteos", icon: "🍑" },
    { key: "quadriceps", label: "Quadríceps", icon: "🦵" },
    { key: "hamstrings", label: "Isquiotibiais", icon: "🦵" },
    { key: "calves", label: "Panturrilhas", icon: "🦵" },
    { key: "fullBody", label: "Corpo Inteiro", icon: "🔄" },
  ];

  const filterExercises = () => {
    let filtered = exercises;

    // Filtrar por categoria
    if (selectedCategory !== "all") {
      filtered = getExercisesByCategory(selectedCategory);
    }

    // Filtrar por grupo muscular
    if (selectedMuscleGroup !== "all") {
      filtered = filtered.filter((exercise) =>
        exercise.muscleGroups.includes(selectedMuscleGroup)
      );
    }

    // Filtrar por busca
    if (searchQuery.trim()) {
      filtered = filtered.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          exercise.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredExercises(filtered);
  };

  React.useEffect(() => {
    filterExercises();
  }, [selectedCategory, selectedMuscleGroup, searchQuery]);

  const handleCategorySelect = (category: ExerciseCategory | "all") => {
    setSelectedCategory(category);
  };

  const handleMuscleGroupSelect = (muscleGroup: MuscleGroup | "all") => {
    setSelectedMuscleGroup(muscleGroup);
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
        <Text style={styles.headerTitle}>Exercícios</Text>
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
              placeholder="Buscar exercícios..."
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

        {/* Filtros de grupo muscular */}
        <View style={styles.filtersSection}>
          <Text style={styles.sectionTitle}>Grupos Musculares</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.muscleGroupsContainer}
          >
            {muscleGroups.map((muscleGroup) => (
              <TouchableOpacity
                key={muscleGroup.key}
                style={[
                  styles.muscleGroupButton,
                  selectedMuscleGroup === muscleGroup.key &&
                    styles.muscleGroupButtonActive,
                ]}
                onPress={() => handleMuscleGroupSelect(muscleGroup.key)}
              >
                <Text style={styles.muscleGroupIcon}>{muscleGroup.icon}</Text>
                <Text
                  style={[
                    styles.muscleGroupLabel,
                    selectedMuscleGroup === muscleGroup.key &&
                      styles.muscleGroupLabelActive,
                  ]}
                >
                  {muscleGroup.label}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Lista de exercícios */}
        <View style={styles.exercisesSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>
              {filteredExercises.length} Exercícios Encontrados
            </Text>
            <TouchableOpacity onPress={() => onNavigate("workouts")}>
              <Text style={styles.seeAllText}>Ver treinos</Text>
            </TouchableOpacity>
          </View>

          {filteredExercises.length === 0 ? (
            <View style={styles.emptyState}>
              <Text style={styles.emptyStateIcon}>🤔</Text>
              <Text style={styles.emptyStateTitle}>
                Nenhum exercício encontrado
              </Text>
              <Text style={styles.emptyStateDescription}>
                Tente ajustar os filtros ou buscar por outros termos
              </Text>
            </View>
          ) : (
            filteredExercises.map((exercise) => (
              <ExerciseCard
                key={exercise.id}
                exercise={exercise}
                onPress={() => onExercisePress(exercise)}
                showDetails={true}
              />
            ))
          )}
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
  muscleGroupsContainer: {
    paddingRight: 20,
  },
  muscleGroupButton: {
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginRight: 12,
    backgroundColor: colors.surface,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    minWidth: 70,
  },
  muscleGroupButtonActive: {
    backgroundColor: colors.accent,
    borderColor: colors.accent,
  },
  muscleGroupIcon: {
    fontSize: 20,
    marginBottom: 6,
  },
  muscleGroupLabel: {
    fontSize: 11,
    color: colors.textSecondary,
    textAlign: "center",
    fontWeight: "500",
  },
  muscleGroupLabelActive: {
    color: colors.surface,
  },
  exercisesSection: {
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
  bottomSpacing: {
    height: 20,
  },
});
