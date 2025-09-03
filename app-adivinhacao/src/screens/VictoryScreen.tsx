import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

interface VictoryScreenProps {
  attempts: number;
  onPlayAgain: () => void;
  onBackToMenu: () => void;
}

const { width } = Dimensions.get("window");

const VictoryScreen: React.FC<VictoryScreenProps> = ({
  attempts,
  onPlayAgain,
  onBackToMenu,
}) => {
  const getPerformanceMessage = () => {
    if (attempts <= 5) return "🎯 Incrível! Você é um gênio!";
    if (attempts <= 10) return "🌟 Excelente! Muito bem jogado!";
    if (attempts <= 15) return "👍 Bom trabalho! Você se saiu bem!";
    if (attempts <= 20) return "💪 Parabéns! Você conseguiu!";
    return "🎉 Ufa! Mas você conseguiu!";
  };

  const getPerformanceEmoji = () => {
    if (attempts <= 5) return "🏆";
    if (attempts <= 10) return "⭐";
    if (attempts <= 15) return "🎯";
    if (attempts <= 20) return "👍";
    return "🎊";
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.victoryContainer}>
          <Text style={styles.victoryEmoji}>🎉</Text>
          <Text style={styles.victoryTitle}>Parabéns!</Text>
          <Text style={styles.victorySubtitle}>
            Você acertou o número secreto!
          </Text>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>Tentativas</Text>
            <Text style={styles.statValue}>{attempts}</Text>
          </View>

          <View style={styles.performanceContainer}>
            <Text style={styles.performanceEmoji}>{getPerformanceEmoji()}</Text>
            <Text style={styles.performanceText}>
              {getPerformanceMessage()}
            </Text>
          </View>
        </View>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button} onPress={onPlayAgain}>
            <LinearGradient
              colors={["#4ecdc4", "#44a08d"]}
              style={styles.buttonGradient}
            >
              <Text style={styles.buttonText}>Jogar Novamente</Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.secondaryButton}
            onPress={onBackToMenu}
          >
            <LinearGradient
              colors={["rgba(255, 255, 255, 0.2)", "rgba(255, 255, 255, 0.1)"]}
              style={styles.secondaryButtonGradient}
            >
              <Text style={styles.secondaryButtonText}>Voltar ao Menu</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        <View style={styles.funFactContainer}>
          <Text style={styles.funFactTitle}>💡 Você sabia?</Text>
          <Text style={styles.funFactText}>
            Com uma estratégia de busca binária, é possível encontrar qualquer
            número entre 1 e 100 em no máximo 7 tentativas!
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: "space-between",
  },
  victoryContainer: {
    alignItems: "center",
    marginTop: 60,
    marginBottom: 40,
  },
  victoryEmoji: {
    fontSize: 100,
    marginBottom: 20,
  },
  victoryTitle: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 15,
    textShadowColor: "rgba(0, 0, 0, 0.3)",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  victorySubtitle: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
    opacity: 0.9,
    lineHeight: 24,
  },
  statsContainer: {
    alignItems: "center",
    marginBottom: 40,
  },
  statItem: {
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderRadius: 20,
    marginBottom: 25,
    minWidth: 150,
  },
  statLabel: {
    fontSize: 16,
    color: "#fff",
    opacity: 0.9,
    marginBottom: 8,
  },
  statValue: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
  },
  performanceContainer: {
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    padding: 20,
    borderRadius: 15,
    maxWidth: width * 0.8,
  },
  performanceEmoji: {
    fontSize: 40,
    marginBottom: 15,
  },
  performanceText: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
    fontWeight: "500",
    lineHeight: 22,
  },
  buttonsContainer: {
    alignItems: "center",
    marginBottom: 30,
  },
  button: {
    width: width * 0.8,
    borderRadius: 25,
    overflow: "hidden",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    marginBottom: 15,
  },
  buttonGradient: {
    paddingVertical: 18,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  secondaryButton: {
    width: width * 0.6,
    borderRadius: 20,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.3)",
  },
  secondaryButtonGradient: {
    paddingVertical: 15,
    alignItems: "center",
  },
  secondaryButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
  },
  funFactContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
  },
  funFactTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
    textAlign: "center",
  },
  funFactText: {
    fontSize: 14,
    color: "#fff",
    opacity: 0.9,
    textAlign: "center",
    lineHeight: 20,
  },
});

export default VictoryScreen;
