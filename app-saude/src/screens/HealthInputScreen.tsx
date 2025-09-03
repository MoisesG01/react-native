import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Alert,
  TouchableOpacity,
} from "react-native";
import { Button } from "../components/Button";
import { colors, globalStyles } from "../styles/global";
import {
  energyLevels,
  sleepQualities,
  stressLevels,
} from "../utils/healthData";

interface HealthInputScreenProps {
  onSubmit: (data: {
    energyLevel: number;
    sleepQuality: number;
    stressLevel: number;
    mood: number;
    waterIntake: number;
    exerciseMinutes: number;
  }) => void;
  onBack: () => void;
}

export const HealthInputScreen: React.FC<HealthInputScreenProps> = ({
  onSubmit,
  onBack,
}) => {
  const [energyLevel, setEnergyLevel] = useState<number>(3);
  const [sleepQuality, setSleepQuality] = useState<number>(3);
  const [stressLevel, setStressLevel] = useState<number>(3);
  const [mood, setMood] = useState<number>(3);
  const [waterIntake, setWaterIntake] = useState<string>("8");
  const [exerciseMinutes, setExerciseMinutes] = useState<string>("30");

  const handleSubmit = () => {
    const water = parseInt(waterIntake) || 0;
    const exercise = parseInt(exerciseMinutes) || 0;

    if (water < 0 || water > 20) {
      Alert.alert("Erro", "Consumo de água deve estar entre 0 e 20 copos");
      return;
    }

    if (exercise < 0 || exercise > 300) {
      Alert.alert(
        "Erro",
        "Tempo de exercício deve estar entre 0 e 300 minutos"
      );
      return;
    }

    onSubmit({
      energyLevel,
      sleepQuality,
      stressLevel,
      mood,
      waterIntake: water,
      exerciseMinutes: exercise,
    });
  };

  const renderLevelSelector = (
    title: string,
    value: number,
    onValueChange: (value: number) => void,
    levels: Array<{
      value: number;
      label: string;
      color: string;
      description: string;
    }>
  ) => (
    <View style={styles.levelContainer}>
      <Text style={globalStyles.label}>{title}</Text>
      <Text style={styles.currentValue}>Valor atual: {value}</Text>
      <View style={styles.levelsRow}>
        {levels.map((level) => (
          <TouchableOpacity
            key={level.value}
            style={[
              styles.levelButton,
              { backgroundColor: level.color },
              value === level.value && styles.selectedLevel,
            ]}
            onPress={() => onValueChange(level.value)}
            activeOpacity={0.8}
          >
            <Text
              style={[
                styles.levelButtonText,
                value === level.value && styles.selectedLevelText,
              ]}
            >
              {level.value}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <Text style={styles.levelDescription}>
        {levels.find((l) => l.value === value)?.description}
      </Text>
    </View>
  );

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={globalStyles.headerTitle}>Como você está hoje?</Text>
        <Text style={globalStyles.headerSubtitle}>
          Avalie seus indicadores de saúde para receber dicas personalizadas
        </Text>
      </View>

      <View style={styles.content}>
        {renderLevelSelector(
          "Nível de Energia",
          energyLevel,
          setEnergyLevel,
          energyLevels
        )}

        {renderLevelSelector(
          "Qualidade do Sono",
          sleepQuality,
          setSleepQuality,
          sleepQualities
        )}

        {renderLevelSelector(
          "Nível de Estresse",
          stressLevel,
          setStressLevel,
          stressLevels
        )}

        <View style={styles.levelContainer}>
          <Text style={globalStyles.label}>Humor Geral</Text>
          <Text style={styles.currentValue}>Valor atual: {mood}</Text>
          <View style={styles.levelsRow}>
            {[1, 2, 3, 4, 5].map((value) => (
              <TouchableOpacity
                key={value}
                style={[
                  styles.moodButton,
                  {
                    backgroundColor:
                      value <= 2
                        ? colors.danger
                        : value <= 3
                        ? colors.warning
                        : colors.success,
                  },
                  mood === value && styles.selectedMood,
                ]}
                onPress={() => {
                  setMood(value);
                }}
                activeOpacity={0.8}
              >
                <Text
                  style={[
                    styles.moodButtonText,
                    mood === value && styles.selectedMoodText,
                  ]}
                >
                  {value === 1
                    ? "😢"
                    : value === 2
                    ? "😕"
                    : value === 3
                    ? "😐"
                    : value === 4
                    ? "🙂"
                    : "😄"}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <View style={styles.selectionIndicator}>
          <Text style={styles.selectionText}>
            ✅ Humor:{" "}
            {mood === 1
              ? "Muito Triste"
              : mood === 2
              ? "Triste"
              : mood === 3
              ? "Neutro"
              : mood === 4
              ? "Feliz"
              : "Muito Feliz"}
          </Text>
        </View>

        <View style={styles.inputContainer}>
          <Text style={globalStyles.label}>Copos de água hoje</Text>
          <TextInput
            style={[globalStyles.input, styles.numberInput]}
            value={waterIntake}
            onChangeText={setWaterIntake}
            keyboardType="numeric"
            placeholder="Ex: 8"
            placeholderTextColor={colors.textLight}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={globalStyles.label}>Minutos de exercício hoje</Text>
          <TextInput
            style={[globalStyles.input, styles.numberInput]}
            value={exerciseMinutes}
            onChangeText={setExerciseMinutes}
            keyboardType="numeric"
            placeholder="Ex: 30"
            placeholderTextColor={colors.textLight}
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            title="Voltar"
            onPress={onBack}
            variant="outline"
            style={styles.backButton}
          />
          <Button
            title="Avaliar Saúde"
            onPress={handleSubmit}
            variant="primary"
            size="large"
            style={styles.submitButton}
          />
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
  levelContainer: {
    marginBottom: 25,
  },
  levelsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  levelButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  selectedLevel: {
    borderWidth: 5,
    borderColor: colors.surface,
    transform: [{ scale: 1.3 }],
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.6,
    shadowRadius: 10,
    elevation: 15,
  },
  levelButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.surface,
  },
  selectedLevelText: {
    color: colors.surface,
    fontSize: 20,
    fontWeight: "900",
  },
  levelDescription: {
    fontSize: 14,
    color: colors.textSecondary,
    textAlign: "center",
    fontStyle: "italic",
  },
  currentValue: {
    fontSize: 16,
    color: colors.text,
    textAlign: "center",
    marginBottom: 10,
  },
  moodButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  selectedMood: {
    borderWidth: 5,
    borderColor: colors.surface,
    transform: [{ scale: 1.3 }],
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.6,
    shadowRadius: 10,
    elevation: 15,
  },
  moodButtonText: {
    fontSize: 20,
  },
  selectedMoodText: {
    fontSize: 24,
    fontWeight: "900",
  },
  inputContainer: {
    marginBottom: 20,
  },
  numberInput: {
    textAlign: "center",
    fontSize: 18,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    marginBottom: 40,
  },
  backButton: {
    flex: 0.48,
  },
  submitButton: {
    flex: 0.48,
  },
  selectionIndicator: {
    backgroundColor: colors.success,
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
    marginBottom: 20,
    alignItems: "center",
  },
  selectionText: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.surface,
  },
});
