import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { colors, globalStyles } from "../styles/global";

interface WelcomeScreenProps {
  onStart: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  return (
    <LinearGradient
      colors={[colors.primary, colors.primaryLight, colors.accent]}
      style={styles.container}
    >
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.logo}>✈️</Text>
          <Text style={styles.appName}>TravelPlanner</Text>
          <Text style={styles.tagline}>
            Planeje sua próxima aventura com recomendações personalizadas
          </Text>
        </View>

        <View style={styles.featuresContainer}>
          <View style={styles.feature}>
            <Text style={styles.featureIcon}>🌍</Text>
            <Text style={styles.featureTitle}>Destinos Personalizados</Text>
            <Text style={styles.featureDescription}>
              Descubra lugares incríveis baseados nas suas preferências
            </Text>
          </View>

          <View style={styles.feature}>
            <Text style={styles.featureIcon}>🎯</Text>
            <Text style={styles.featureTitle}>Recomendações Inteligentes</Text>
            <Text style={styles.featureDescription}>
              Receba sugestões de atividades perfeitas para você
            </Text>
          </View>

          <View style={styles.feature}>
            <Text style={styles.featureIcon}>📅</Text>
            <Text style={styles.featureTitle}>Planejamento Completo</Text>
            <Text style={styles.featureDescription}>
              Organize sua viagem com itinerários detalhados
            </Text>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <LinearGradient
            colors={[colors.accent, colors.accentDark]}
            style={styles.startButton}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            <TouchableOpacity
              style={styles.startButtonTouchable}
              onPress={onStart}
              activeOpacity={0.8}
            >
              <Text style={styles.startButtonText}>Começar Planejamento</Text>
              <Text style={styles.startButtonIcon}>🚀</Text>
            </TouchableOpacity>
          </LinearGradient>
          <Text style={styles.disclaimer}>
            Descubra destinos únicos baseados no seu perfil
          </Text>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  header: {
    alignItems: "center",
    paddingTop: 60,
    paddingBottom: 20,
  },
  logo: {
    fontSize: 60,
    marginBottom: 15,
  },
  appName: {
    fontSize: 32,
    fontWeight: "bold",
    color: colors.surface,
    marginBottom: 12,
    textAlign: "center",
  },
  tagline: {
    fontSize: 16,
    color: colors.surface,
    textAlign: "center",
    lineHeight: 22,
    opacity: 0.9,
    paddingHorizontal: 10,
  },
  featuresContainer: {
    flex: 1,
    justifyContent: "center",
    paddingVertical: 20,
  },
  feature: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: 18,
    marginBottom: 12,
    alignItems: "center",
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.12,
    shadowRadius: 6,
    elevation: 4,
  },
  featureIcon: {
    fontSize: 36,
    marginBottom: 10,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.primary,
    marginBottom: 8,
    textAlign: "center",
  },
  featureDescription: {
    fontSize: 14,
    color: colors.textSecondary,
    textAlign: "center",
    lineHeight: 20,
  },
  buttonContainer: {
    paddingBottom: 30,
    alignItems: "center",
  },
  startButton: {
    borderRadius: 30,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 8,
  },
  startButtonTouchable: {
    paddingVertical: 18,
    paddingHorizontal: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
  },
  startButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.surface,
    marginRight: 10,
  },
  startButtonIcon: {
    fontSize: 20,
  },
  disclaimer: {
    fontSize: 12,
    color: colors.surface,
    textAlign: "center",
    lineHeight: 16,
    opacity: 0.8,
    marginTop: 15,
    paddingHorizontal: 20,
  },
});
