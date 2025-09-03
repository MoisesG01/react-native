import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Button } from "../components/Button";
import { colors, globalStyles } from "../styles/global";

interface WelcomeScreenProps {
  onStart: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  return (
    <LinearGradient
      colors={[colors.background, colors.surface]}
      style={styles.container}
    >
      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <Text style={styles.logo}>🏥</Text>
          <Text style={styles.appName}>HealthMonitor</Text>
          <Text style={styles.tagline}>Seu companheiro de saúde diário</Text>
        </View>

        <View style={styles.featuresContainer}>
          <View style={styles.feature}>
            <Text style={styles.featureIcon}>📊</Text>
            <Text style={styles.featureTitle}>Monitoramento</Text>
            <Text style={styles.featureDescription}>
              Acompanhe seus níveis de energia, sono e estresse
            </Text>
          </View>

          <View style={styles.feature}>
            <Text style={styles.featureIcon}>💡</Text>
            <Text style={styles.featureTitle}>Dicas Personalizadas</Text>
            <Text style={styles.featureDescription}>
              Receba recomendações baseadas na sua saúde atual
            </Text>
          </View>

          <View style={styles.feature}>
            <Text style={styles.featureIcon}>📈</Text>
            <Text style={styles.featureTitle}>Progresso</Text>
            <Text style={styles.featureDescription}>
              Visualize sua evolução ao longo do tempo
            </Text>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <Button
            title="Começar Agora"
            onPress={onStart}
            variant="primary"
            size="large"
            style={styles.startButton}
          />
          <Text style={styles.disclaimer}>
            Seus dados são mantidos localmente e com privacidade
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
    padding: 20,
    paddingTop: 60,
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 40,
  },
  logo: {
    fontSize: 80,
    marginBottom: 20,
  },
  appName: {
    fontSize: 36,
    fontWeight: "bold",
    color: colors.primary,
    marginBottom: 10,
    textAlign: "center",
  },
  tagline: {
    fontSize: 18,
    color: colors.textSecondary,
    textAlign: "center",
    lineHeight: 24,
  },
  featuresContainer: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  feature: {
    alignItems: "center",
    marginBottom: 30,
  },
  featureIcon: {
    fontSize: 48,
    marginBottom: 15,
  },
  featureTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.text,
    marginBottom: 8,
    textAlign: "center",
  },
  featureDescription: {
    fontSize: 16,
    color: colors.textSecondary,
    textAlign: "center",
    lineHeight: 22,
    paddingHorizontal: 20,
  },
  buttonContainer: {
    alignItems: "center",
    marginBottom: 40,
  },
  startButton: {
    width: "100%",
    marginBottom: 20,
  },
  disclaimer: {
    fontSize: 12,
    color: colors.textLight,
    textAlign: "center",
    lineHeight: 16,
  },
});
