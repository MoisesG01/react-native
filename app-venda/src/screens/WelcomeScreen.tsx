import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { colors, globalStyles } from "../styles/global";

const { width, height } = Dimensions.get("window");

interface WelcomeScreenProps {
  onStart: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  return (
    <View style={styles.container}>
      {/* Background com elementos decorativos */}
      <View style={styles.backgroundElements}>
        <View style={[styles.decorativeCircle, styles.circle1]} />
        <View style={[styles.decorativeCircle, styles.circle2]} />
        <View style={[styles.decorativeCircle, styles.circle3]} />
      </View>

      {/* Header premium */}
      <View style={styles.header}>
        <View style={styles.logoSection}>
          <View style={styles.logoContainer}>
            <View style={styles.logoOuterRing}>
              <View style={styles.logoInnerRing}>
                <View style={styles.logoCircle}>
                  <Text style={styles.logoIcon}>💼</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.badgeContainer}>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>PRO</Text>
            </View>
          </View>
        </View>

        <Text style={styles.title}>Sales Calculator</Text>
        <Text style={styles.subtitle}>
          A ferramenta definitiva para cálculos de vendas profissionais
        </Text>

        <View style={styles.ratingContainer}>
          <View style={styles.stars}>
            <Text style={styles.star}>⭐</Text>
            <Text style={styles.star}>⭐</Text>
            <Text style={styles.star}>⭐</Text>
            <Text style={styles.star}>⭐</Text>
            <Text style={styles.star}>⭐</Text>
          </View>
          <Text style={styles.ratingText}>
            4.9/5 - Avaliado por 1.2k+ usuários
          </Text>
        </View>
      </View>

      {/* Conteúdo principal com cards elaborados */}
      <View style={styles.content}>
        {/* Card de estatísticas premium */}
        <View style={styles.premiumStatsCard}>
          <View style={styles.statsHeader}>
            <Text style={styles.statsTitle}>Performance em Números</Text>
            <View style={styles.statsIcon}>
              <Text style={styles.statsEmoji}>📊</Text>
            </View>
          </View>

          <View style={styles.statsGrid}>
            <View style={styles.statCard}>
              <View
                style={[
                  styles.statIconContainer,
                  { backgroundColor: colors.primary },
                ]}
              >
                <Text style={styles.statIcon}>💰</Text>
              </View>
              <Text style={styles.statNumber}>25%</Text>
              <Text style={styles.statLabel}>Desconto Máximo</Text>
              <Text style={styles.statSubtext}>À vista</Text>
            </View>

            <View style={styles.statCard}>
              <View
                style={[
                  styles.statIconContainer,
                  { backgroundColor: colors.secondary },
                ]}
              >
                <Text style={styles.statIcon}>💳</Text>
              </View>
              <Text style={styles.statNumber}>5</Text>
              <Text style={styles.statLabel}>Formas de Pagamento</Text>
              <Text style={styles.statSubtext}>Flexibilidade total</Text>
            </View>

            <View style={styles.statCard}>
              <View
                style={[
                  styles.statIconContainer,
                  { backgroundColor: colors.accent },
                ]}
              >
                <Text style={styles.statIcon}>🎯</Text>
              </View>
              <Text style={styles.statNumber}>100%</Text>
              <Text style={styles.statLabel}>Precisão</Text>
              <Text style={styles.statSubtext}>Cálculos exatos</Text>
            </View>
          </View>
        </View>

        {/* Features premium */}
        <View style={styles.featuresSection}>
          <Text style={styles.featuresTitle}>
            Por que escolher nossa solução?
          </Text>

          <View style={styles.featureList}>
            <View style={styles.featureRow}>
              <View
                style={[
                  styles.featureIcon,
                  { backgroundColor: colors.primary },
                ]}
              >
                <Text style={styles.featureEmoji}>⚡</Text>
              </View>
              <View style={styles.featureContent}>
                <Text style={styles.featureTitle}>Cálculo Instantâneo</Text>
                <Text style={styles.featureDescription}>
                  Resultados em tempo real com precisão matemática
                </Text>
              </View>
            </View>

            <View style={styles.featureRow}>
              <View
                style={[
                  styles.featureIcon,
                  { backgroundColor: colors.secondary },
                ]}
              >
                <Text style={styles.featureEmoji}>🔒</Text>
              </View>
              <View style={styles.featureContent}>
                <Text style={styles.featureTitle}>Segurança Total</Text>
                <Text style={styles.featureDescription}>
                  Seus dados protegidos com criptografia avançada
                </Text>
              </View>
            </View>

            <View style={styles.featureRow}>
              <View
                style={[styles.featureIcon, { backgroundColor: colors.accent }]}
              >
                <Text style={styles.featureEmoji}>📱</Text>
              </View>
              <View style={styles.featureContent}>
                <Text style={styles.featureTitle}>Interface Intuitiva</Text>
                <Text style={styles.featureDescription}>
                  Design moderno e fácil de usar
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      {/* Bottom section premium */}
      <View style={styles.bottomSection}>
        <TouchableOpacity style={styles.primaryButton} onPress={onStart}>
          <Text style={styles.buttonText}>Iniciar Cálculo</Text>
          <Text style={styles.buttonIcon}>→</Text>
        </TouchableOpacity>

        <View style={styles.trustIndicators}>
          <View style={styles.trustItem}>
            <Text style={styles.trustIcon}>🛡️</Text>
            <Text style={styles.trustText}>Seguro</Text>
          </View>
          <View style={styles.trustItem}>
            <Text style={styles.trustIcon}>⚡</Text>
            <Text style={styles.trustText}>Rápido</Text>
          </View>
          <View style={styles.trustItem}>
            <Text style={styles.trustIcon}>💎</Text>
            <Text style={styles.trustText}>Premium</Text>
          </View>
        </View>

        <Text style={styles.footerText}>
          Desenvolvido por especialistas em vendas
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  backgroundElements: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 0,
  },
  decorativeCircle: {
    position: "absolute",
    borderRadius: 1000,
    opacity: 0.1,
  },
  circle1: {
    width: 200,
    height: 200,
    backgroundColor: colors.primary,
    top: -100,
    right: -50,
  },
  circle2: {
    width: 150,
    height: 150,
    backgroundColor: colors.secondary,
    bottom: 200,
    left: -75,
  },
  circle3: {
    width: 100,
    height: 100,
    backgroundColor: colors.accent,
    top: height * 0.3,
    right: 20,
  },
  header: {
    backgroundColor: colors.surface,
    paddingTop: 60,
    paddingBottom: 30,
    paddingHorizontal: 30,
    alignItems: "center",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.2,
    shadowRadius: 25,
    elevation: 12,
    zIndex: 1,
  },
  logoSection: {
    position: "relative",
    marginBottom: 25,
  },
  logoContainer: {
    alignItems: "center",
  },
  logoOuterRing: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 15,
    elevation: 10,
  },
  logoInnerRing: {
    width: 85,
    height: 85,
    borderRadius: 42.5,
    backgroundColor: colors.surface,
    alignItems: "center",
    justifyContent: "center",
  },
  logoCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  logoIcon: {
    fontSize: 32,
    color: colors.surface,
  },
  badgeContainer: {
    position: "absolute",
    top: -5,
    right: -5,
  },
  badge: {
    backgroundColor: colors.accent,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    shadowColor: colors.accent,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  badgeText: {
    fontSize: 10,
    fontWeight: "700",
    color: colors.surface,
    letterSpacing: 0.5,
  },
  title: {
    fontSize: 32,
    fontWeight: "800",
    color: colors.primary,
    marginBottom: 12,
    letterSpacing: 1,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: colors.textSecondary,
    textAlign: "center",
    lineHeight: 24,
    fontWeight: "400",
    marginBottom: 20,
  },
  ratingContainer: {
    alignItems: "center",
  },
  stars: {
    flexDirection: "row",
    marginBottom: 8,
  },
  star: {
    fontSize: 16,
    marginHorizontal: 2,
  },
  ratingText: {
    fontSize: 12,
    color: colors.textLight,
    fontWeight: "500",
  },
  content: {
    flex: 1,
    paddingHorizontal: 25,
    paddingTop: 30,
    paddingBottom: 20,
    zIndex: 1,
  },
  premiumStatsCard: {
    backgroundColor: colors.surface,
    borderRadius: 25,
    padding: 20,
    marginBottom: 20,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 20,
    elevation: 8,
    borderWidth: 1,
    borderColor: colors.border,
  },
  statsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  statsTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: colors.primary,
  },
  statsIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
  statsEmoji: {
    fontSize: 20,
  },
  statsGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  statCard: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 10,
  },
  statIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  statIcon: {
    fontSize: 24,
  },
  statNumber: {
    fontSize: 20,
    fontWeight: "800",
    color: colors.primary,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 11,
    color: colors.text,
    textAlign: "center",
    fontWeight: "600",
    marginBottom: 2,
  },
  statSubtext: {
    fontSize: 9,
    color: colors.textLight,
    textAlign: "center",
  },
  featuresSection: {
    marginBottom: 15,
  },
  featuresTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: colors.primary,
    marginBottom: 15,
    textAlign: "center",
  },
  featureList: {
    gap: 12,
  },
  featureRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.surface,
    borderRadius: 15,
    padding: 12,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  featureIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
  },
  featureEmoji: {
    fontSize: 18,
  },
  featureContent: {
    flex: 1,
  },
  featureTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: colors.text,
    marginBottom: 4,
  },
  featureDescription: {
    fontSize: 12,
    color: colors.textSecondary,
    lineHeight: 16,
  },
  bottomSection: {
    paddingHorizontal: 30,
    paddingBottom: 30,
    paddingTop: 20,
    backgroundColor: colors.surface,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: -5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  primaryButton: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    paddingVertical: 18,
    paddingHorizontal: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 8,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "700",
    color: colors.surface,
    marginRight: 10,
  },
  buttonIcon: {
    fontSize: 20,
    color: colors.surface,
    fontWeight: "700",
  },
  trustIndicators: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 15,
    paddingHorizontal: 20,
  },
  trustItem: {
    alignItems: "center",
    flex: 1,
  },
  trustIcon: {
    fontSize: 18,
    marginBottom: 6,
  },
  trustText: {
    fontSize: 12,
    color: colors.textSecondary,
    fontWeight: "600",
  },
  footerText: {
    fontSize: 12,
    color: colors.textLight,
    textAlign: "center",
    fontWeight: "400",
  },
});
