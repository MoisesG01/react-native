import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StatsCard } from "../components/StatsCard";
import { colors, globalStyles } from "../styles/global";
import { ScreenType } from "../types";

interface ProgressScreenProps {
  onNavigate: (screen: ScreenType) => void;
}

export const ProgressScreen: React.FC<ProgressScreenProps> = ({
  onNavigate,
}) => {
  const [selectedPeriod, setSelectedPeriod] = useState<
    "week" | "month" | "year"
  >("week");

  const mockStats = {
    week: {
      workouts: 4,
      duration: 180,
      calories: 1200,
      streak: 5,
    },
    month: {
      workouts: 18,
      duration: 810,
      calories: 5400,
      streak: 12,
    },
    year: {
      workouts: 220,
      duration: 9900,
      calories: 66000,
      streak: 45,
    },
  };

  const currentStats = mockStats[selectedPeriod];

  const periods = [
    { key: "week", label: "Semana", icon: "📅" },
    { key: "month", label: "Mês", icon: "📊" },
    { key: "year", label: "Ano", icon: "🎯" },
  ];

  const achievements = [
    {
      title: "Primeira Semana",
      description: "Completou 7 dias seguidos",
      icon: "🔥",
      unlocked: true,
    },
    {
      title: "Maratonista",
      description: "30 minutos de cardio",
      icon: "🏃‍♂️",
      unlocked: true,
    },
    {
      title: "Força Total",
      description: "10 treinos de força",
      icon: "💪",
      unlocked: false,
    },
    {
      title: "Flexível",
      description: "15 sessões de alongamento",
      icon: "🧘‍♀️",
      unlocked: false,
    },
  ];

  return (
    <View style={styles.container}>
      {/* Header com gradiente */}
      <LinearGradient
        colors={[colors.gradientStart, colors.gradientEnd]}
        style={styles.header}
      >
        <View style={styles.headerContent}>
          <TouchableOpacity
            style={styles.homeButton}
            onPress={() => onNavigate("welcome")}
          >
            <Text style={styles.homeButtonText}>🏠</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Meu Progresso</Text>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => onNavigate("dashboard")}
          >
            <Text style={styles.backButtonText}>←</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Seletor de período */}
        <View style={styles.periodSelector}>
          {periods.map((period) => (
            <TouchableOpacity
              key={period.key}
              style={[
                styles.periodButton,
                selectedPeriod === period.key && styles.periodButtonActive,
              ]}
              onPress={() =>
                setSelectedPeriod(period.key as "week" | "month" | "year")
              }
            >
              <Text style={styles.periodIcon}>{period.icon}</Text>
              <Text
                style={[
                  styles.periodLabel,
                  selectedPeriod === period.key && styles.periodLabelActive,
                ]}
              >
                {period.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Estatísticas principais */}
        <View style={styles.statsSection}>
          <Text style={styles.sectionTitle}>Resumo do Período</Text>
          <View style={styles.statsGrid}>
            <StatsCard
              title="Treinos"
              value={currentStats.workouts}
              subtitle="completados"
              icon="🏋️‍♂️"
              color={colors.primary}
              size="medium"
            />
            <StatsCard
              title="Minutos"
              value={currentStats.duration}
              subtitle="de exercício"
              icon="⏱️"
              color={colors.secondary}
              size="medium"
            />
            <StatsCard
              title="Calorias"
              value={currentStats.calories}
              subtitle="queimadas"
              icon="🔥"
              color={colors.accent}
              size="medium"
            />
            <StatsCard
              title="Streak"
              value={currentStats.streak}
              subtitle="dias seguidos"
              icon="🔥"
              color={colors.warning}
              size="medium"
            />
          </View>
        </View>

        {/* Gráfico de progresso (simulado) */}
        <View style={styles.progressSection}>
          <Text style={styles.sectionTitle}>Progresso Semanal</Text>
          <View style={styles.progressChart}>
            {Array.from({ length: 7 }, (_, i) => (
              <View key={i} style={styles.dayColumn}>
                <View style={styles.dayBar}>
                  <View
                    style={[
                      styles.dayFill,
                      {
                        height: `${Math.random() * 60 + 20}%`,
                        backgroundColor: i < 5 ? colors.primary : colors.border,
                      },
                    ]}
                  />
                </View>
                <Text style={styles.dayLabel}>
                  {["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"][i]}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* Conquistas */}
        <View style={styles.achievementsSection}>
          <Text style={styles.sectionTitle}>Conquistas</Text>
          {achievements.map((achievement, index) => (
            <View
              key={index}
              style={[
                styles.achievementCard,
                !achievement.unlocked && styles.achievementLocked,
              ]}
            >
              <View style={styles.achievementIcon}>
                <Text style={styles.achievementIconText}>
                  {achievement.icon}
                </Text>
              </View>
              <View style={styles.achievementContent}>
                <Text
                  style={[
                    styles.achievementTitle,
                    !achievement.unlocked && styles.achievementTitleLocked,
                  ]}
                >
                  {achievement.title}
                </Text>
                <Text
                  style={[
                    styles.achievementDescription,
                    !achievement.unlocked &&
                      styles.achievementDescriptionLocked,
                  ]}
                >
                  {achievement.description}
                </Text>
              </View>
              <View style={styles.achievementStatus}>
                {achievement.unlocked ? (
                  <Text style={styles.achievementUnlocked}>✓</Text>
                ) : (
                  <Text style={styles.achievementLockedText}>🔒</Text>
                )}
              </View>
            </View>
          ))}
        </View>

        {/* Metas */}
        <View style={styles.goalsSection}>
          <Text style={styles.sectionTitle}>Metas Atuais</Text>
          <View style={styles.goalCard}>
            <View style={styles.goalHeader}>
              <Text style={styles.goalTitle}>Treinos por Semana</Text>
              <Text style={styles.goalProgress}>4/5</Text>
            </View>
            <View style={styles.progressBar}>
              <View
                style={[styles.progressFill, { width: `${(4 / 5) * 100}%` }]}
              />
            </View>
            <Text style={styles.goalDescription}>
              Complete 5 treinos esta semana para manter sua consistência!
            </Text>
          </View>
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
    paddingTop: 60,
    paddingBottom: 30,
    paddingHorizontal: 20,
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
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
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.surface,
    alignItems: "center",
    justifyContent: "center",
  },
  backButtonText: {
    fontSize: 20,
    color: colors.primary,
    fontWeight: "bold",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.surface,
  },
  placeholder: {
    width: 40,
  },
  content: {
    flex: 1,
  },
  periodSelector: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 20,
    paddingBottom: 10,
  },
  periodButton: {
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: colors.surface,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: colors.border,
    minWidth: 80,
  },
  periodButtonActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  periodIcon: {
    fontSize: 24,
    marginBottom: 8,
  },
  periodLabel: {
    fontSize: 14,
    color: colors.textSecondary,
    fontWeight: "500",
  },
  periodLabelActive: {
    color: colors.surface,
  },
  statsSection: {
    padding: 20,
    paddingTop: 10,
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
  progressSection: {
    padding: 20,
    paddingTop: 10,
  },
  progressChart: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    height: 120,
    paddingHorizontal: 10,
  },
  dayColumn: {
    alignItems: "center",
    flex: 1,
  },
  dayBar: {
    width: 30,
    height: 80,
    backgroundColor: colors.border,
    borderRadius: 15,
    overflow: "hidden",
    marginBottom: 8,
  },
  dayFill: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: colors.primary,
    borderRadius: 15,
  },
  dayLabel: {
    fontSize: 12,
    color: colors.textSecondary,
    fontWeight: "500",
  },
  achievementsSection: {
    padding: 20,
    paddingTop: 10,
  },
  achievementCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.surface,
    borderRadius: 15,
    padding: 15,
    marginBottom: 10,
    shadowColor: colors.cardShadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  achievementLocked: {
    opacity: 0.6,
  },
  achievementIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
  },
  achievementIconText: {
    fontSize: 24,
  },
  achievementContent: {
    flex: 1,
  },
  achievementTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.text,
    marginBottom: 4,
  },
  achievementTitleLocked: {
    color: colors.textSecondary,
  },
  achievementDescription: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  achievementDescriptionLocked: {
    color: colors.textLight,
  },
  achievementStatus: {
    width: 30,
    alignItems: "center",
  },
  achievementUnlocked: {
    fontSize: 20,
    color: colors.accent,
    fontWeight: "bold",
  },
  achievementLockedText: {
    fontSize: 16,
    color: colors.textLight,
  },
  goalsSection: {
    padding: 20,
    paddingTop: 10,
  },
  goalCard: {
    backgroundColor: colors.surface,
    borderRadius: 15,
    padding: 20,
    shadowColor: colors.cardShadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  goalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  goalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.text,
  },
  goalProgress: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.primary,
  },
  progressBar: {
    height: 8,
    backgroundColor: colors.border,
    borderRadius: 4,
    marginBottom: 15,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    backgroundColor: colors.primary,
    borderRadius: 4,
  },
  goalDescription: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
  },
  bottomSpacing: {
    height: 20,
  },
});
