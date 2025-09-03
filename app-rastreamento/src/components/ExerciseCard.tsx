import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Exercise } from "../types";
import { colors, globalStyles } from "../styles/global";

interface ExerciseCardProps {
  exercise: Exercise;
  onPress: () => void;
  showDetails?: boolean;
}

export const ExerciseCard: React.FC<ExerciseCardProps> = ({
  exercise,
  onPress,
  showDetails = false,
}) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "beginner":
        return colors.accent;
      case "intermediate":
        return colors.warning;
      case "advanced":
        return colors.danger;
      default:
        return colors.accent;
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "strength":
        return "💪";
      case "cardio":
        return "🏃‍♂️";
      case "flexibility":
        return "🧘‍♀️";
      case "balance":
        return "⚖️";
      case "sports":
        return "⚽";
      case "yoga":
        return "🧘‍♂️";
      case "pilates":
        return "🤸‍♀️";
      default:
        return "💪";
    }
  };

  return (
    <TouchableOpacity
      style={[globalStyles.card, styles.exerciseCard]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Text style={styles.categoryIcon}>
            {getCategoryIcon(exercise.category)}
          </Text>
          <View style={styles.titleTextContainer}>
            <Text style={styles.exerciseName}>{exercise.name}</Text>
            <Text style={styles.category}>{exercise.category}</Text>
          </View>
        </View>
        <View
          style={[
            styles.difficultyBadge,
            { backgroundColor: getDifficultyColor(exercise.difficulty) },
          ]}
        >
          <Text style={styles.difficultyText}>
            {exercise.difficulty === "beginner"
              ? "Iniciante"
              : exercise.difficulty === "intermediate"
              ? "Intermediário"
              : "Avançado"}
          </Text>
        </View>
      </View>

      <View style={styles.muscleGroups}>
        <Text style={styles.muscleGroupsLabel}>Grupos Musculares:</Text>
        <View style={styles.muscleGroupsContainer}>
          {exercise.muscleGroups.map((muscle, index) => (
            <View key={index} style={styles.muscleGroupTag}>
              <Text style={styles.muscleGroupText}>
                {muscle === "chest"
                  ? "Peito"
                  : muscle === "back"
                  ? "Costas"
                  : muscle === "shoulders"
                  ? "Ombros"
                  : muscle === "biceps"
                  ? "Bíceps"
                  : muscle === "triceps"
                  ? "Tríceps"
                  : muscle === "forearms"
                  ? "Antebraços"
                  : muscle === "abs"
                  ? "Abdômen"
                  : muscle === "obliques"
                  ? "Oblíquos"
                  : muscle === "glutes"
                  ? "Glúteos"
                  : muscle === "quadriceps"
                  ? "Quadríceps"
                  : muscle === "hamstrings"
                  ? "Isquiotibiais"
                  : muscle === "calves"
                  ? "Panturrilhas"
                  : muscle === "fullBody"
                  ? "Corpo Inteiro"
                  : muscle}
              </Text>
            </View>
          ))}
        </View>
      </View>

      {showDetails && (
        <View style={styles.details}>
          <View style={styles.caloriesContainer}>
            <Text style={styles.caloriesLabel}>Calorias/min:</Text>
            <Text style={styles.caloriesValue}>
              {exercise.caloriesPerMinute}
            </Text>
          </View>

          <View style={styles.equipmentContainer}>
            <Text style={styles.equipmentLabel}>Equipamento:</Text>
            <Text style={styles.equipmentValue}>
              {exercise.equipment.includes("none")
                ? "Nenhum"
                : exercise.equipment.join(", ")}
            </Text>
          </View>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  exerciseCard: {
    marginBottom: 15,
    borderLeftWidth: 4,
    borderLeftColor: colors.primary,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 15,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  categoryIcon: {
    fontSize: 24,
    marginRight: 12,
  },
  titleTextContainer: {
    flex: 1,
  },
  exerciseName: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.text,
    marginBottom: 4,
  },
  category: {
    fontSize: 14,
    color: colors.textSecondary,
    textTransform: "capitalize",
  },
  difficultyBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  difficultyText: {
    fontSize: 12,
    fontWeight: "600",
    color: colors.surface,
  },
  muscleGroups: {
    marginBottom: 15,
  },
  muscleGroupsLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.text,
    marginBottom: 8,
  },
  muscleGroupsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  muscleGroupTag: {
    backgroundColor: colors.surfaceDark,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    marginRight: 8,
    marginBottom: 4,
  },
  muscleGroupText: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  details: {
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingTop: 15,
  },
  caloriesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  caloriesLabel: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  caloriesValue: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.primary,
  },
  equipmentContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  equipmentLabel: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  equipmentValue: {
    fontSize: 14,
    color: colors.text,
    fontWeight: "500",
  },
});
