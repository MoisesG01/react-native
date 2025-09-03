import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Workout } from "../types";
import { colors, globalStyles } from "../styles/global";

interface WorkoutCardProps {
  workout: Workout;
  onPress: () => void;
  showDetails?: boolean;
}

export const WorkoutCard: React.FC<WorkoutCardProps> = ({
  workout,
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
      case "fullBody":
        return "🔄";
      case "upperBody":
        return "💪";
      case "lowerBody":
        return "🦵";
      case "core":
        return "🔥";
      case "cardio":
        return "🏃‍♂️";
      case "strength":
        return "🏋️‍♂️";
      case "flexibility":
        return "🧘‍♀️";
      case "hiit":
        return "⚡";
      case "yoga":
        return "🧘‍♂️";
      case "pilates":
        return "🤸‍♀️";
      default:
        return "💪";
    }
  };

  const getCategoryName = (category: string) => {
    switch (category) {
      case "fullBody":
        return "Corpo Inteiro";
      case "upperBody":
        return "Parte Superior";
      case "lowerBody":
        return "Parte Inferior";
      case "core":
        return "Core";
      case "cardio":
        return "Cardio";
      case "strength":
        return "Força";
      case "flexibility":
        return "Flexibilidade";
      case "hiit":
        return "HIIT";
      case "yoga":
        return "Yoga";
      case "pilates":
        return "Pilates";
      default:
        return category;
    }
  };

  return (
    <TouchableOpacity
      style={[globalStyles.workoutCard]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Text style={styles.categoryIcon}>
            {getCategoryIcon(workout.category)}
          </Text>
          <View style={styles.titleTextContainer}>
            <Text style={styles.workoutName}>{workout.name}</Text>
            <Text style={styles.category}>
              {getCategoryName(workout.category)}
            </Text>
          </View>
        </View>
        <View
          style={[
            styles.difficultyBadge,
            { backgroundColor: getDifficultyColor(workout.difficulty) },
          ]}
        >
          <Text style={styles.difficultyText}>
            {workout.difficulty === "beginner"
              ? "Iniciante"
              : workout.difficulty === "intermediate"
              ? "Intermediário"
              : "Avançado"}
          </Text>
        </View>
      </View>

      <View style={styles.statsRow}>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{workout.duration}</Text>
          <Text style={styles.statLabel}>min</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{workout.exercises.length}</Text>
          <Text style={styles.statLabel}>exercícios</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{workout.estimatedCalories}</Text>
          <Text style={styles.statLabel}>cal</Text>
        </View>
      </View>

      {showDetails && (
        <View style={styles.details}>
          <View style={styles.muscleGroups}>
            <Text style={styles.muscleGroupsLabel}>Grupos Musculares:</Text>
            <View style={styles.muscleGroupsContainer}>
              {workout.targetMuscleGroups.map((muscle, index) => (
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

          <View style={styles.exercisesPreview}>
            <Text style={styles.exercisesPreviewLabel}>Exercícios:</Text>
            {workout.exercises.slice(0, 3).map((exercise, index) => (
              <Text key={index} style={styles.exerciseName}>
                • {exercise.exercise.name}
              </Text>
            ))}
            {workout.exercises.length > 3 && (
              <Text style={styles.moreExercises}>
                +{workout.exercises.length - 3} mais exercícios
              </Text>
            )}
          </View>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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
    fontSize: 28,
    marginRight: 15,
  },
  titleTextContainer: {
    flex: 1,
  },
  workoutName: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.text,
    marginBottom: 4,
  },
  category: {
    fontSize: 14,
    color: colors.textSecondary,
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
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 15,
    paddingVertical: 15,
    backgroundColor: colors.surfaceDark,
    borderRadius: 12,
  },
  statItem: {
    alignItems: "center",
  },
  statValue: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.primary,
    marginBottom: 2,
  },
  statLabel: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  details: {
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingTop: 15,
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
  exercisesPreview: {
    marginBottom: 10,
  },
  exercisesPreviewLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.text,
    marginBottom: 8,
  },
  exerciseName: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 4,
    paddingLeft: 10,
  },
  moreExercises: {
    fontSize: 12,
    color: colors.primary,
    fontStyle: "italic",
    paddingLeft: 10,
    marginTop: 4,
  },
});
