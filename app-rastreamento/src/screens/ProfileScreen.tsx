import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Switch,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Button } from "../components/Button";
import { colors, globalStyles } from "../styles/global";
import { ScreenType } from "../types";

interface ProfileScreenProps {
  onNavigate: (screen: ScreenType) => void;
}

export const ProfileScreen: React.FC<ProfileScreenProps> = ({ onNavigate }) => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);

  const mockProfile = {
    name: "João Silva",
    age: 28,
    height: 175,
    weight: 75,
    fitnessLevel: "intermediate",
    weeklyGoal: 4,
    preferredCategories: ["strength", "cardio"],
    preferredMuscleGroups: ["chest", "back", "abs"],
    equipmentAvailable: ["dumbbells", "resistanceBands", "yogaMat"],
  };

  const fitnessLevelLabels = {
    beginner: "Iniciante",
    intermediate: "Intermediário",
    advanced: "Avançado",
  };

  const categoryLabels = {
    strength: "Força",
    cardio: "Cardio",
    flexibility: "Flexibilidade",
    balance: "Equilíbrio",
    sports: "Esportes",
    yoga: "Yoga",
    pilates: "Pilates",
  };

  const muscleGroupLabels = {
    chest: "Peito",
    back: "Costas",
    shoulders: "Ombros",
    biceps: "Bíceps",
    triceps: "Tríceps",
    abs: "Abdômen",
    glutes: "Glúteos",
    quadriceps: "Quadríceps",
    hamstrings: "Isquiotibiais",
    calves: "Panturrilhas",
    fullBody: "Corpo Inteiro",
  };

  const equipmentLabels = {
    none: "Nenhum",
    dumbbells: "Halteres",
    barbell: "Barra",
    kettlebell: "Kettlebell",
    resistanceBands: "Faixas Elásticas",
    yogaMat: "Tapete de Yoga",
    bench: "Banco",
    pullUpBar: "Barra de Pull-up",
    treadmill: "Esteira",
    bicycle: "Bicicleta",
    elliptical: "Elíptico",
    rower: "Remo",
  };

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
          <Text style={styles.headerTitle}>Meu Perfil</Text>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => onNavigate("dashboard")}
          >
            <Text style={styles.backButtonText}>←</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Informações básicas */}
        <View style={styles.basicInfoSection}>
          <View style={styles.profileAvatar}>
            <Text style={styles.profileInitial}>
              {mockProfile.name.charAt(0)}
            </Text>
          </View>
          <Text style={styles.profileName}>{mockProfile.name}</Text>
          <Text style={styles.profileSubtitle}>
            {
              fitnessLevelLabels[
                mockProfile.fitnessLevel as keyof typeof fitnessLevelLabels
              ]
            }
          </Text>
        </View>

        {/* Estatísticas pessoais */}
        <View style={styles.statsSection}>
          <Text style={styles.sectionTitle}>Informações Pessoais</Text>
          <View style={styles.statsGrid}>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>{mockProfile.age}</Text>
              <Text style={styles.statLabel}>Anos</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>{mockProfile.height}</Text>
              <Text style={styles.statLabel}>cm</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>{mockProfile.weight}</Text>
              <Text style={styles.statLabel}>kg</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>{mockProfile.weeklyGoal}</Text>
              <Text style={styles.statLabel}>Treinos/semana</Text>
            </View>
          </View>
        </View>

        {/* Preferências */}
        <View style={styles.preferencesSection}>
          <Text style={styles.sectionTitle}>Preferências de Treino</Text>

          <View style={styles.preferenceItem}>
            <Text style={styles.preferenceLabel}>Categorias Preferidas</Text>
            <View style={styles.tagsContainer}>
              {mockProfile.preferredCategories.map((category) => (
                <View key={category} style={styles.tag}>
                  <Text style={styles.tagText}>
                    {categoryLabels[category as keyof typeof categoryLabels]}
                  </Text>
                </View>
              ))}
            </View>
          </View>

          <View style={styles.preferenceItem}>
            <Text style={styles.preferenceLabel}>Grupos Musculares</Text>
            <View style={styles.tagsContainer}>
              {mockProfile.preferredMuscleGroups.map((muscleGroup) => (
                <View key={muscleGroup} style={styles.tag}>
                  <Text style={styles.tagText}>
                    {
                      muscleGroupLabels[
                        muscleGroup as keyof typeof muscleGroupLabels
                      ]
                    }
                  </Text>
                </View>
              ))}
            </View>
          </View>

          <View style={styles.preferenceItem}>
            <Text style={styles.preferenceLabel}>Equipamentos Disponíveis</Text>
            <View style={styles.tagsContainer}>
              {mockProfile.equipmentAvailable.map((equipment) => (
                <View key={equipment} style={styles.tag}>
                  <Text style={styles.tagText}>
                    {equipmentLabels[equipment as keyof typeof equipmentLabels]}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        </View>

        {/* Configurações */}
        <View style={styles.settingsSection}>
          <Text style={styles.sectionTitle}>Configurações</Text>

          <View style={styles.settingItem}>
            <View style={styles.settingInfo}>
              <Text style={styles.settingLabel}>Notificações</Text>
              <Text style={styles.settingDescription}>
                Lembretes de treino e metas
              </Text>
            </View>
            <Switch
              value={notificationsEnabled}
              onValueChange={setNotificationsEnabled}
              trackColor={{ false: colors.border, true: colors.primary }}
              thumbColor={colors.surface}
            />
          </View>

          <View style={styles.settingItem}>
            <View style={styles.settingInfo}>
              <Text style={styles.settingLabel}>Modo Escuro</Text>
              <Text style={styles.settingDescription}>
                Tema escuro para o app
              </Text>
            </View>
            <Switch
              value={darkModeEnabled}
              onValueChange={setDarkModeEnabled}
              trackColor={{ false: colors.border, true: colors.primary }}
              thumbColor={colors.surface}
            />
          </View>
        </View>

        {/* Ações */}
        <View style={styles.actionsSection}>
          <Button
            title="Editar Perfil"
            onPress={() => onNavigate("dashboard")}
            variant="primary"
            size="large"
            fullWidth
          />

          <Button
            title="Exportar Dados"
            onPress={() => onNavigate("dashboard")}
            variant="outline"
            size="large"
            fullWidth
          />

          <Button
            title="Sobre o App"
            onPress={() => onNavigate("dashboard")}
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
  basicInfoSection: {
    alignItems: "center",
    padding: 20,
    paddingTop: 30,
  },
  profileAvatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: colors.surface,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
    shadowColor: colors.cardShadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  profileInitial: {
    fontSize: 32,
    fontWeight: "bold",
    color: colors.primary,
  },
  profileName: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.text,
    marginBottom: 5,
  },
  profileSubtitle: {
    fontSize: 16,
    color: colors.textSecondary,
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
    justifyContent: "space-between",
  },
  statItem: {
    alignItems: "center",
    backgroundColor: colors.surface,
    borderRadius: 15,
    padding: 15,
    flex: 1,
    marginHorizontal: 5,
    shadowColor: colors.cardShadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statValue: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.primary,
    marginBottom: 5,
  },
  statLabel: {
    fontSize: 12,
    color: colors.textSecondary,
    textAlign: "center",
  },
  preferencesSection: {
    padding: 20,
    paddingTop: 10,
  },
  preferenceItem: {
    marginBottom: 20,
  },
  preferenceLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.text,
    marginBottom: 10,
  },
  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  tag: {
    backgroundColor: colors.primary,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
    marginRight: 8,
    marginBottom: 8,
  },
  tagText: {
    fontSize: 12,
    color: colors.surface,
    fontWeight: "500",
  },
  settingsSection: {
    padding: 20,
    paddingTop: 10,
  },
  settingItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.surface,
    borderRadius: 15,
    padding: 20,
    marginBottom: 10,
    shadowColor: colors.cardShadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  settingInfo: {
    flex: 1,
  },
  settingLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.text,
    marginBottom: 4,
  },
  settingDescription: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  actionsSection: {
    padding: 20,
    paddingTop: 10,
  },
  bottomSpacing: {
    height: 20,
  },
});
