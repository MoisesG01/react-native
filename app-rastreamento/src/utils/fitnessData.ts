import {
  Exercise,
  Workout,
  WorkoutExercise,
  FitnessGoal,
  UserProfile,
  FitnessStats,
  ExerciseRecommendation,
  MuscleGroup,
  WorkoutCategory,
  ExerciseCategory,
} from "../types";

// Dados de exercícios pré-definidos
export const exercises: Exercise[] = [
  {
    id: "1",
    name: "Flexão de Braço",
    category: "strength",
    muscleGroups: ["chest", "triceps", "shoulders"],
    difficulty: "beginner",
    equipment: ["none"],
    instructions: [
      "Deite-se de bruços no chão",
      "Posicione as mãos na largura dos ombros",
      "Mantenha o corpo reto",
      "Baixe o corpo até o peito quase tocar o chão",
      "Empurre para cima até a posição inicial",
    ],
    caloriesPerMinute: 8,
  },
  {
    id: "2",
    name: "Agachamento",
    category: "strength",
    muscleGroups: ["quadriceps", "glutes", "hamstrings"],
    difficulty: "beginner",
    equipment: ["none"],
    instructions: [
      "Fique em pé com os pés na largura dos ombros",
      "Mantenha o peito erguido",
      "Abaixe-se como se fosse sentar em uma cadeira",
      "Mantenha os joelhos alinhados com os dedos dos pés",
      "Volte à posição inicial",
    ],
    caloriesPerMinute: 10,
  },
  {
    id: "3",
    name: "Prancha",
    category: "strength",
    muscleGroups: ["abs", "obliques", "shoulders"],
    difficulty: "beginner",
    equipment: ["none"],
    instructions: [
      "Apoie-se nos antebraços e dedos dos pés",
      "Mantenha o corpo reto da cabeça aos pés",
      "Contraia o abdômen",
      "Mantenha a posição pelo tempo determinado",
    ],
    caloriesPerMinute: 6,
  },
  {
    id: "4",
    name: "Burpee",
    category: "cardio",
    muscleGroups: ["fullBody"],
    difficulty: "intermediate",
    equipment: ["none"],
    instructions: [
      "Fique em pé",
      "Abaixe-se em posição de agachamento",
      "Coloque as mãos no chão",
      "Jogue os pés para trás em posição de flexão",
      "Faça uma flexão",
      "Volte os pés para a posição de agachamento",
      "Pule para cima",
    ],
    caloriesPerMinute: 15,
  },
  {
    id: "5",
    name: "Mountain Climber",
    category: "cardio",
    muscleGroups: ["abs", "shoulders", "quadriceps"],
    difficulty: "beginner",
    equipment: ["none"],
    instructions: [
      "Comece em posição de flexão",
      "Mantenha o corpo reto",
      "Traga um joelho em direção ao peito",
      "Alternne rapidamente entre as pernas",
    ],
    caloriesPerMinute: 12,
  },
];

// Treinos pré-definidos
export const workouts: Workout[] = [
  {
    id: "1",
    name: "Treino Full Body Iniciante",
    exercises: [
      {
        exerciseId: "1",
        exercise: exercises[0],
        sets: 3,
        reps: 10,
        duration: 0,
        restTime: 60,
      },
      {
        exerciseId: "2",
        exercise: exercises[1],
        sets: 3,
        reps: 15,
        duration: 0,
        restTime: 60,
      },
      {
        exerciseId: "3",
        exercise: exercises[2],
        sets: 3,
        reps: 0,
        duration: 30,
        restTime: 60,
      },
    ],
    duration: 20,
    difficulty: "beginner",
    category: "fullBody",
    targetMuscleGroups: ["chest", "quadriceps", "abs"],
    estimatedCalories: 150,
    isCustom: false,
  },
  {
    id: "2",
    name: "Treino Cardio Intenso",
    exercises: [
      {
        exerciseId: "4",
        exercise: exercises[3],
        sets: 4,
        reps: 8,
        duration: 0,
        restTime: 45,
      },
      {
        exerciseId: "5",
        exercise: exercises[4],
        sets: 4,
        reps: 0,
        duration: 45,
        restTime: 30,
      },
    ],
    duration: 25,
    difficulty: "intermediate",
    category: "cardio",
    targetMuscleGroups: ["fullBody"],
    estimatedCalories: 200,
    isCustom: false,
  },
];

// Funções utilitárias
export const calculateCaloriesBurned = (
  exercise: Exercise,
  duration: number,
  userWeight: number
): number => {
  const baseCalories = exercise.caloriesPerMinute * (duration / 60);
  const weightMultiplier = userWeight / 70; // Baseado em peso de 70kg
  return Math.round(baseCalories * weightMultiplier);
};

export const calculateWorkoutDuration = (workout: Workout): number => {
  let totalDuration = 0;
  workout.exercises.forEach((exercise) => {
    const exerciseTime =
      exercise.sets * (exercise.duration + exercise.restTime);
    totalDuration += exerciseTime;
  });
  return Math.round(totalDuration / 60); // Retorna em minutos
};

export const calculateWorkoutCalories = (
  workout: Workout,
  userWeight: number
): number => {
  let totalCalories = 0;
  workout.exercises.forEach((exercise) => {
    const exerciseDuration = exercise.sets * exercise.duration;
    const calories = calculateCaloriesBurned(
      exercise.exercise,
      exerciseDuration,
      userWeight
    );
    totalCalories += calories;
  });
  return Math.round(totalCalories);
};

export const getExercisesByMuscleGroup = (
  muscleGroup: MuscleGroup
): Exercise[] => {
  return exercises.filter((exercise) =>
    exercise.muscleGroups.includes(muscleGroup)
  );
};

export const getExercisesByCategory = (
  category: ExerciseCategory
): Exercise[] => {
  return exercises.filter((exercise) => exercise.category === category);
};

export const getWorkoutsByCategory = (category: WorkoutCategory): Workout[] => {
  return workouts.filter((workout) => workout.category === category);
};

export const getWorkoutsByDifficulty = (
  difficulty: "beginner" | "intermediate" | "advanced"
): Workout[] => {
  return workouts.filter((workout) => workout.difficulty === difficulty);
};

export const calculateGoalProgress = (goal: FitnessGoal): number => {
  if (goal.target === 0) return 0;
  const progress = (goal.current / goal.target) * 100;
  return Math.min(Math.max(progress, 0), 100);
};

export const getExerciseRecommendations = (
  userProfile: UserProfile,
  completedWorkouts: string[]
): ExerciseRecommendation[] => {
  const recommendations: ExerciseRecommendation[] = [];

  // Recomendações baseadas no nível de fitness
  if (userProfile.fitnessLevel === "beginner") {
    const beginnerExercises = exercises.filter(
      (ex) => ex.difficulty === "beginner"
    );
    beginnerExercises.slice(0, 3).forEach((exercise) => {
      recommendations.push({
        exercise,
        reason: "Perfeito para iniciantes",
        priority: "high",
        category: "strength",
      });
    });
  }

  // Recomendações baseadas nos grupos musculares preferidos
  userProfile.preferences.preferredMuscleGroups.forEach((muscleGroup) => {
    const muscleExercises = getExercisesByMuscleGroup(muscleGroup);
    muscleExercises.slice(0, 2).forEach((exercise) => {
      if (!recommendations.find((r) => r.exercise.id === exercise.id)) {
        recommendations.push({
          exercise,
          reason: `Foca em ${muscleGroup}`,
          priority: "medium",
          category: "strength",
        });
      }
    });
  });

  return recommendations.slice(0, 5); // Máximo de 5 recomendações
};

export const generateWeeklyGoal = (userProfile: UserProfile): FitnessGoal => {
  return {
    id: Date.now().toString(),
    type: "workoutsPerWeek",
    target: userProfile.preferences.weeklyGoal,
    current: 0,
    unit: "treinos",
    deadline: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 dias
    isCompleted: false,
    progress: 0,
  };
};

export const calculateFitnessStats = (workoutSessions: any[]): FitnessStats => {
  if (workoutSessions.length === 0) {
    return {
      totalWorkouts: 0,
      totalDuration: 0,
      totalCalories: 0,
      averageWorkoutDuration: 0,
      weeklyStreak: 0,
      monthlyProgress: [],
    };
  }

  const totalWorkouts = workoutSessions.length;
  const totalDuration = workoutSessions.reduce(
    (sum, session) => sum + session.duration,
    0
  );
  const totalCalories = workoutSessions.reduce(
    (sum, session) => sum + session.caloriesBurned,
    0
  );
  const averageWorkoutDuration = Math.round(totalDuration / totalWorkouts);

  // Cálculo do streak semanal (simplificado)
  const weeklyStreak = Math.min(totalWorkouts, 7);

  return {
    totalWorkouts,
    totalDuration,
    totalCalories,
    averageWorkoutDuration,
    weeklyStreak,
    monthlyProgress: [],
  };
};
