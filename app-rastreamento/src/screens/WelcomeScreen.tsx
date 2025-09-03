import React from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Button } from "../components/Button";
import { colors, globalStyles } from "../styles/global";

interface WelcomeScreenProps {
  onStart: () => void;
}

const { width, height } = Dimensions.get("window");

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <LinearGradient
        colors={[colors.gradientStart, colors.gradientEnd]}
        style={styles.gradientBackground}
      >
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <View style={styles.placeholder} />
            <Text style={styles.headerTitle}>FitTracker</Text>
            <View style={styles.placeholder} />
          </View>
          <Text style={styles.logo}>💪</Text>
          <Text style={styles.title}>FitTracker</Text>
          <Text style={styles.subtitle}>Seu companheiro de treino pessoal</Text>
        </View>

        <View style={styles.featuresContainer}>
          <View style={styles.featureItem}>
            <Text style={styles.featureIcon}>🎯</Text>
            <Text style={styles.featureTitle}>Rastreie Seus Treinos</Text>
            <Text style={styles.featureDescription}>
              Monitore cada exercício, série e repetição para maximizar seus
              resultados
            </Text>
          </View>

          <View style={styles.featureItem}>
            <Text style={styles.featureIcon}>📊</Text>
            <Text style={styles.featureTitle}>Acompanhe o Progresso</Text>
            <Text style={styles.featureDescription}>
              Visualize suas estatísticas e veja como está evoluindo em sua
              jornada fitness
            </Text>
          </View>

          <View style={styles.featureItem}>
            <Text style={styles.featureIcon}>🎯</Text>
            <Text style={styles.featureTitle}>Metas Personalizadas</Text>
            <Text style={styles.featureDescription}>
              Defina objetivos específicos e receba sugestões personalizadas de
              exercícios
            </Text>
          </View>

          <View style={styles.featureItem}>
            <Text style={styles.featureIcon}>🔥</Text>
            <Text style={styles.featureTitle}>Treinos Variados</Text>
            <Text style={styles.featureDescription}>
              Acesse uma biblioteca completa de exercícios e treinos para todos
              os níveis
            </Text>
          </View>
        </View>

        <View style={styles.bottomContainer}>
          <Button
            title="Começar Agora"
            onPress={onStart}
            variant="primary"
            size="large"
            fullWidth
          />

          <Text style={styles.disclaimer}>
            Ao continuar, você concorda com nossos termos de uso e política de
            privacidade
          </Text>
        </View>
      </LinearGradient>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flexGrow: 1,
  },
  gradientBackground: {
    flex: 1,
    minHeight: height,
  },
  header: {
    alignItems: "center",
    paddingTop: height * 0.1,
    paddingBottom: 40,
    paddingHorizontal: 20,
  },
  headerTop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.surface,
  },
  placeholder: {
    width: 40,
  },
  logo: {
    fontSize: 80,
    marginBottom: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: colors.surface,
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    color: colors.surface,
    textAlign: "center",
    opacity: 0.9,
    lineHeight: 24,
  },
  featuresContainer: {
    paddingHorizontal: 20,
    flex: 1,
  },
  featureItem: {
    backgroundColor: colors.surface,
    borderRadius: 20,
    padding: 20,
    marginBottom: 15,
    alignItems: "center",
    shadowColor: colors.cardShadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 6,
  },
  featureIcon: {
    fontSize: 40,
    marginBottom: 15,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.text,
    marginBottom: 10,
    textAlign: "center",
  },
  featureDescription: {
    fontSize: 14,
    color: colors.textSecondary,
    textAlign: "center",
    lineHeight: 20,
  },
  bottomContainer: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  disclaimer: {
    fontSize: 12,
    color: colors.surface,
    textAlign: "center",
    marginTop: 15,
    opacity: 0.7,
    lineHeight: 16,
  },
});
