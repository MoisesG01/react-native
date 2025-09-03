export interface Exercise {
  id: string;
  name: string;
  category: ExerciseCategory;
  muscleGroups: MuscleGroup[];
  difficulty: "beginner" | "intermediate" | "advanced";
  equipment: Equipment[];
  instructions: string[];
  caloriesPerMinute: number;
  imageUrl?: string;
}

export interface Workout {
  id: string;
  name: string;
  exercises: WorkoutExercise[];
  duration: number; // em minutos
  difficulty: "beginner" | "intermediate" | "advanced";
  category: WorkoutCategory;
  targetMuscleGroups: MuscleGroup[];
  estimatedCalories: number;
  isCustom: boolean;
}

export interface WorkoutExercise {
  exerciseId: string;
  exercise: Exercise;
  sets: number;
  reps: number;
  duration: number; // em segundos
  restTime: number; // em segundos
  weight?: number; // em kg
}

export interface WorkoutSession {
  id: string;
  workoutId: string;
  workout: Workout;
  startTime: Date;
  endTime?: Date;
  duration: number; // em minutos
  caloriesBurned: number;
  exercisesCompleted: CompletedExercise[];
  notes?: string;
  rating?: number; // 1-5
}

export interface CompletedExercise {
  exerciseId: string;
  exercise: Exercise;
  sets: CompletedSet[];
  totalDuration: number; // em segundos
}

export interface CompletedSet {
  setNumber: number;
  reps: number;
  weight?: number;
  duration: number; // em segundos
  restTime: number; // em segundos
}

export interface FitnessGoal {
  id: string;
  type: GoalType;
  target: number;
  current: number;
  unit: string;
  deadline: Date;
  isCompleted: boolean;
  progress: number; // 0-100
}

export interface UserProfile {
  id: string;
  name: string;
  age: number;
  gender: "male" | "female" | "other";
  height: number; // em cm
  weight: number; // em kg
  fitnessLevel: "beginner" | "intermediate" | "advanced";
  goals: FitnessGoal[];
  preferences: UserPreferences;
}

export interface UserPreferences {
  workoutDuration: number; // em minutos
  preferredCategories: WorkoutCategory[];
  preferredMuscleGroups: MuscleGroup[];
  equipmentAvailable: Equipment[];
  notifications: boolean;
  weeklyGoal: number; // treinos por semana
}

export interface FitnessStats {
  totalWorkouts: number;
  totalDuration: number; // em minutos
  totalCalories: number;
  averageWorkoutDuration: number;
  weeklyStreak: number;
  monthlyProgress: MonthlyProgress[];
}

export interface MonthlyProgress {
  month: string; // YYYY-MM
  workouts: number;
  duration: number;
  calories: number;
  goalsAchieved: number;
}

export interface ExerciseRecommendation {
  exercise: Exercise;
  reason: string;
  priority: "low" | "medium" | "high";
  category: "strength" | "cardio" | "flexibility" | "balance";
}

export type ExerciseCategory =
  | "strength"
  | "cardio"
  | "flexibility"
  | "balance"
  | "sports"
  | "yoga"
  | "pilates";

export type WorkoutCategory =
  | "fullBody"
  | "upperBody"
  | "lowerBody"
  | "core"
  | "cardio"
  | "strength"
  | "flexibility"
  | "hiit"
  | "yoga"
  | "pilates";

export type MuscleGroup =
  | "chest"
  | "back"
  | "shoulders"
  | "biceps"
  | "triceps"
  | "forearms"
  | "abs"
  | "obliques"
  | "glutes"
  | "quadriceps"
  | "hamstrings"
  | "calves"
  | "fullBody";

export type Equipment =
  | "none"
  | "dumbbells"
  | "barbell"
  | "kettlebell"
  | "resistanceBands"
  | "yogaMat"
  | "bench"
  | "pullUpBar"
  | "treadmill"
  | "bicycle"
  | "elliptical"
  | "rower";

export type GoalType =
  | "workoutsPerWeek"
  | "totalDuration"
  | "caloriesBurned"
  | "strengthIncrease"
  | "weightLoss"
  | "muscleGain"
  | "flexibility"
  | "endurance";

export type ScreenType =
  | "welcome"
  | "dashboard"
  | "workouts"
  | "exercises"
  | "progress"
  | "profile"
  | "workoutSession"
  | "exerciseDetail";
