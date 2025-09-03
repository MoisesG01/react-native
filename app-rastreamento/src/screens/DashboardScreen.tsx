import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  RefreshControl,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Button } from "../components/Button";
import { StatsCard } from "../components/StatsCard";
import { WorkoutCard } from "../components/WorkoutCard";
import { colors, globalStyles } from "../styles/global";
import { workouts, calculateFitnessStats } from "../utils/fitnessData";
import { Workout, FitnessStats, ScreenType } from "../types";

interface DashboardScreenProps {
  onNavigate: (screen: ScreenType) => void;
  onStartWorkout: (workout: Workout) => void;
}

export const DashboardScreen: React.FC<DashboardScreenProps> = ({
  onNavigate,
  onStartWorkout,
}) => {
  const [stats, setStats] = useState<FitnessStats>({
    totalWorkouts: 0,
    totalDuration: 0,
    totalCalories: 0,
    averageWorkoutDuration: 0,
    weeklyStreak: 0,
    monthlyProgress: [],
  });
  const [refreshing, setRefreshing] = useState(false);
  const [recentWorkouts] = useState(workouts.slice(0, 2));

  const onRefresh = async () => {
    setRefreshing(true);
    // Simular carregamento de dados
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  };

  const handleQuickStart = () => {
    console.log("handleQuickStart chamado");
    console.log("recentWorkouts:", recentWorkouts);
    console.log("recentWorkouts.length:", recentWorkouts.length);

    if (recentWorkouts.length > 0) {
      console.log("Iniciando treino:", recentWorkouts[0].name);
      onStartWorkout(recentWorkouts[0]);
    } else {
      console.log("Nenhum treino disponível");
    }
  };

  return (
    <ScrollView
      style={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      {/* Header com gradiente */}
      <LinearGradient
        colors={[colors.gradientStart, colors.gradientEnd]}
        style={styles.header}
      >
        <View style={styles.headerContent}>
          <View style={styles.headerTop}>
            <TouchableOpacity
              style={styles.homeButton}
              onPress={() => onNavigate("welcome")}
            >
              <Text style={styles.homeButtonText}>🏠</Text>
            </TouchableOpacity>
            <Text style={styles.headerTitle}>FitTracker</Text>
            <View style={styles.placeholder} />
          </View>
          <Text style={styles.greeting}>Bom dia! 💪</Text>
          <Text style={styles.motivation}>
            Hora de suar e conquistar seus objetivos!
          </Text>
        </View>
      </LinearGradient>

      {/* Estatísticas rápidas */}
      <View style={styles.statsSection}>
        <Text style={styles.sectionTitle}>Resumo da Semana</Text>
        <View style={styles.statsGrid}>
          <StatsCard
            title="Treinos"
            value={stats.totalWorkouts}
            subtitle="esta semana"
            icon="🏋️‍♂️"
            color={colors.primary}
            size="medium"
          />
          <StatsCard
            title="Minutos"
            value={stats.totalDuration}
            subtitle="de exercício"
            icon="⏱️"
            color={colors.secondary}
            size="medium"
          />
          <StatsCard
            title="Calorias"
            value={stats.totalCalories}
            subtitle="queimadas"
            icon="🔥"
            color={colors.accent}
            size="medium"
          />
          <StatsCard
            title="Streak"
            value={stats.weeklyStreak}
            subtitle="dias seguidos"
            icon="🔥"
            color={colors.warning}
            size="medium"
          />
        </View>
      </View>

      {/* Início rápido */}
      <View style={styles.quickStartSection}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Início Rápido</Text>
          <TouchableOpacity onPress={() => onNavigate("workouts")}>
            <Text style={styles.seeAllText}>Ver todos</Text>
          </TouchableOpacity>
        </View>

        <Button
          title="Começar Treino"
          onPress={handleQuickStart}
          variant="primary"
          size="large"
          fullWidth
        />

        <Text style={styles.quickStartSubtitle}>
          Inicie rapidamente seu último treino ou escolha um novo
        </Text>
      </View>

      {/* Treinos recentes */}
      <View style={styles.recentWorkoutsSection}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Treinos Recentes</Text>
          <TouchableOpacity onPress={() => onNavigate("workouts")}>
            <Text style={styles.seeAllText}>Ver todos</Text>
          </TouchableOpacity>
        </View>

        {recentWorkouts.map((workout) => (
          <WorkoutCard
            key={workout.id}
            workout={workout}
            onPress={() => onStartWorkout(workout)}
            showDetails={false}
          />
        ))}
      </View>

      {/* Ações rápidas */}
      <View style={styles.quickActionsSection}>
        <Text style={styles.sectionTitle}>Ações Rápidas</Text>
        <View style={styles.quickActionsGrid}>
          <TouchableOpacity
            style={styles.quickActionButton}
            onPress={() => onNavigate("exercises")}
          >
            <Text style={styles.quickActionIcon}>💪</Text>
            <Text style={styles.quickActionText}>Exercícios</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.quickActionButton}
            onPress={() => onNavigate("progress")}
          >
            <Text style={styles.quickActionIcon}>📊</Text>
            <Text style={styles.quickActionText}>Progresso</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.quickActionButton}
            onPress={() => onNavigate("profile")}
          >
            <Text style={styles.quickActionIcon}>👤</Text>
            <Text style={styles.quickActionText}>Perfil</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.quickActionButton}
            onPress={() => onNavigate("workouts")}
          >
            <Text style={styles.quickActionIcon}>🎯</Text>
            <Text style={styles.quickActionText}>Treinos</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Espaço para o final */}
      <View style={styles.bottomSpacing} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    paddingTop: 60,
    paddingBottom: 30,
    paddingHorizontal: 20,
  },
  headerContent: {
    alignItems: "center",
  },
  headerTop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 20,
  },
  homeButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.surface,
    alignItems: "center",
    justifyContent: "center",
  },
  homeButtonText: {
    fontSize: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.surface,
  },
  placeholder: {
    width: 40,
  },
  greeting: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.surface,
    marginBottom: 8,
  },
  motivation: {
    fontSize: 16,
    color: colors.surface,
    textAlign: "center",
    opacity: 0.9,
  },
  statsSection: {
    padding: 20,
    paddingTop: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.text,
    marginBottom: 15,
  },
  statsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  quickStartSection: {
    padding: 20,
    paddingTop: 10,
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
  quickStartSubtitle: {
    fontSize: 14,
    color: colors.textSecondary,
    textAlign: "center",
    marginTop: 10,
  },
  recentWorkoutsSection: {
    padding: 20,
    paddingTop: 10,
  },
  quickActionsSection: {
    padding: 20,
    paddingTop: 10,
  },
  quickActionsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  quickActionButton: {
    backgroundColor: colors.surface,
    borderRadius: 15,
    padding: 20,
    alignItems: "center",
    width: "48%",
    marginBottom: 15,
    shadowColor: colors.cardShadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  quickActionIcon: {
    fontSize: 32,
    marginBottom: 10,
  },
  quickActionText: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.text,
    textAlign: "center",
  },
  bottomSpacing: {
    height: 20,
  },
});
