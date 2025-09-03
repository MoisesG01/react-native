import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Button } from "../components/Button";
import { HealthScore } from "../components/HealthScore";
import { HealthTipCard } from "../components/HealthTipCard";
import { colors, globalStyles } from "../styles/global";
import { HealthAssessment } from "../types";

interface HealthAssessmentScreenProps {
  assessment: HealthAssessment;
  onNewAssessment: () => void;
  onViewTips: () => void;
}

export const HealthAssessmentScreen: React.FC<HealthAssessmentScreenProps> = ({
  assessment,
  onNewAssessment,
  onViewTips,
}) => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={globalStyles.headerTitle}>Sua Avaliação de Saúde</Text>
        <Text style={globalStyles.headerSubtitle}>
          {new Date().toLocaleDateString("pt-BR", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </Text>
      </View>

      <View style={styles.content}>
        <HealthScore assessment={assessment} />

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>💡 Dicas Personalizadas</Text>
          <Text style={styles.sectionSubtitle}>
            Baseado na sua avaliação de hoje, aqui estão algumas sugestões para
            melhorar sua saúde:
          </Text>
        </View>

        {assessment.recommendations.map((tip) => (
          <HealthTipCard key={tip.id} tip={tip} />
        ))}

        {assessment.recommendations.length === 0 && (
          <View style={styles.noTipsContainer}>
            <Text style={styles.noTipsIcon}>🎉</Text>
            <Text style={styles.noTipsTitle}>Parabéns!</Text>
            <Text style={styles.noTipsDescription}>
              Sua saúde está em excelente estado. Continue mantendo esses bons
              hábitos!
            </Text>
          </View>
        )}

        <View style={styles.actionsContainer}>
          <Button
            title="Ver Mais Dicas"
            onPress={onViewTips}
            variant="secondary"
            style={styles.actionButton}
          />
          <Button
            title="Nova Avaliação"
            onPress={onNewAssessment}
            variant="primary"
            size="large"
            style={styles.actionButton}
          />
        </View>

        <View style={styles.insightsContainer}>
          <Text style={styles.insightsTitle}>💭 Insights do Dia</Text>
          <View style={styles.insightCard}>
            <Text style={styles.insightText}>
              {assessment.overallScore >= 80
                ? "Você está no caminho certo! Sua rotina de saúde está funcionando perfeitamente."
                : assessment.overallScore >= 60
                ? "Bom trabalho! Com algumas pequenas mudanças, você pode melhorar ainda mais."
                : assessment.overallScore >= 40
                ? "Há espaço para melhorias, mas você está no caminho certo. Foque nas dicas acima."
                : "Não se preocupe! Cada dia é uma nova oportunidade para melhorar sua saúde."}
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    ...globalStyles.header,
    backgroundColor: colors.primary,
  },
  headerTitle: {
    ...globalStyles.headerTitle,
    color: colors.surface,
  },
  headerSubtitle: {
    ...globalStyles.headerSubtitle,
    color: colors.surface,
    opacity: 0.9,
  },
  content: {
    padding: 20,
  },
  section: {
    marginBottom: 25,
    alignItems: "center",
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: colors.primary,
    marginBottom: 8,
    textAlign: "center",
  },
  sectionSubtitle: {
    fontSize: 16,
    color: colors.textSecondary,
    textAlign: "center",
    lineHeight: 22,
    paddingHorizontal: 20,
  },
  noTipsContainer: {
    alignItems: "center",
    padding: 30,
    backgroundColor: colors.surface,
    borderRadius: 20,
    marginHorizontal: 20,
    marginBottom: 20,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  noTipsIcon: {
    fontSize: 48,
    marginBottom: 15,
  },
  noTipsTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.success,
    marginBottom: 8,
  },
  noTipsDescription: {
    fontSize: 16,
    color: colors.textSecondary,
    textAlign: "center",
    lineHeight: 22,
  },
  actionsContainer: {
    marginTop: 30,
    marginBottom: 30,
  },
  actionButton: {
    marginBottom: 15,
  },
  insightsContainer: {
    marginBottom: 40,
  },
  insightsTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.primary,
    marginBottom: 15,
    textAlign: "center",
  },
  insightCard: {
    backgroundColor: colors.surface,
    padding: 20,
    borderRadius: 15,
    borderLeftWidth: 5,
    borderLeftColor: colors.accent,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  insightText: {
    fontSize: 16,
    color: colors.textSecondary,
    lineHeight: 22,
    fontStyle: "italic",
    textAlign: "center",
  },
});
