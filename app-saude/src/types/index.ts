export interface HealthData {
  id: string;
  date: string;
  energyLevel: number;
  sleepQuality: number;
  stressLevel: number;
  mood: number;
  waterIntake: number;
  exerciseMinutes: number;
}

export interface HealthTip {
  id: string;
  category: "energy" | "sleep" | "stress" | "mood" | "general";
  title: string;
  description: string;
  icon: string;
  priority: "low" | "medium" | "high";
}

export interface HealthAssessment {
  overallScore: number;
  recommendations: HealthTip[];
  status: "excellent" | "good" | "fair" | "needs-improvement";
}

export type ScreenType =
  | "welcome"
  | "dashboard"
  | "input"
  | "assessment"
  | "tips"
  | "history";

export interface EnergyLevel {
  value: number;
  label: string;
  color: string;
  description: string;
}

export interface SleepQuality {
  value: number;
  label: string;
  color: string;
  description: string;
}

export interface StressLevel {
  value: number;
  label: string;
  color: string;
  description: string;
}
