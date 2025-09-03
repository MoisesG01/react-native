import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

interface GameScreenProps {
  targetNumber: number;
  onVictory: (attempts: number) => void;
  attempts: number;
  setAttempts: (attempts: number) => void;
}

const { width } = Dimensions.get("window");

const GameScreen: React.FC<GameScreenProps> = ({
  targetNumber,
  onVictory,
  attempts,
  setAttempts,
}) => {
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<"hint" | "error" | "success">(
    "hint"
  );

  useEffect(() => {
    setMessage("Digite um número entre 1 e 100!");
    setMessageType("hint");
  }, []);

  const handleGuess = () => {
    const numGuess = parseInt(guess);

    if (isNaN(numGuess) || numGuess < 1 || numGuess > 100) {
      setMessage("Por favor, digite um número válido entre 1 e 100!");
      setMessageType("error");
      return;
    }

    const newAttempts = attempts + 1;
    setAttempts(newAttempts);

    if (numGuess === targetNumber) {
      onVictory(newAttempts);
      return;
    }

    if (numGuess < targetNumber) {
      setMessage(`O número é MAIOR que ${numGuess}! 🔺`);
      setMessageType("hint");
    } else {
      setMessage(`O número é MENOR que ${numGuess}! 🔻`);
      setMessageType("hint");
    }

    setGuess("");
  };

  const getMessageStyle = () => {
    switch (messageType) {
      case "error":
        return styles.errorMessage;
      case "success":
        return styles.successMessage;
      default:
        return styles.hintMessage;
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>🎯 Adivinhe o Número!</Text>
          <Text style={styles.subtitle}>Tente descobrir o número secreto</Text>
        </View>

        <View style={styles.gameContainer}>
          <View style={styles.attemptsContainer}>
            <Text style={styles.attemptsLabel}>Tentativas:</Text>
            <Text style={styles.attemptsCount}>{attempts}</Text>
          </View>

          <View style={styles.rangeContainer}>
            <Text style={styles.rangeText}>1 - 100</Text>
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={guess}
              onChangeText={setGuess}
              placeholder="Digite seu palpite..."
              placeholderTextColor="rgba(255, 255, 255, 0.6)"
              keyboardType="numeric"
              maxLength={3}
              onSubmitEditing={handleGuess}
            />
            <TouchableOpacity style={styles.guessButton} onPress={handleGuess}>
              <LinearGradient
                colors={["#4ecdc4", "#44a08d"]}
                style={styles.buttonGradient}
              >
                <Text style={styles.buttonText}>Adivinhar!</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>

          <View style={styles.messageContainer}>
            <Text style={[styles.message, getMessageStyle()]}>{message}</Text>
          </View>
        </View>

        <View style={styles.tipsContainer}>
          <Text style={styles.tipsTitle}>💡 Dicas:</Text>
          <Text style={styles.tipText}>
            • Use as dicas para se aproximar do número
          </Text>
          <Text style={styles.tipText}>• Quanto menos tentativas, melhor!</Text>
        </View>
      </View>
    </KeyboardAvoidingView>
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
  header: {
    alignItems: "center",
    marginTop: 40,
    marginBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 10,
    textShadowColor: "rgba(0, 0, 0, 0.3)",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  subtitle: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
    opacity: 0.9,
  },
  gameContainer: {
    alignItems: "center",
    marginBottom: 40,
  },
  attemptsContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    marginBottom: 30,
  },
  attemptsLabel: {
    fontSize: 16,
    color: "#fff",
    marginRight: 10,
  },
  attemptsCount: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  rangeContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    paddingHorizontal: 25,
    paddingVertical: 12,
    borderRadius: 25,
    marginBottom: 30,
  },
  rangeText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#fff",
  },
  inputContainer: {
    width: "100%",
    alignItems: "center",
    marginBottom: 30,
  },
  input: {
    width: width * 0.7,
    height: 55,
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    borderRadius: 15,
    paddingHorizontal: 20,
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
    marginBottom: 20,
    borderWidth: 2,
    borderColor: "rgba(255, 255, 255, 0.2)",
  },
  guessButton: {
    width: width * 0.6,
    borderRadius: 25,
    overflow: "hidden",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonGradient: {
    paddingVertical: 15,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  messageContainer: {
    minHeight: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  message: {
    fontSize: 16,
    textAlign: "center",
    paddingHorizontal: 20,
    lineHeight: 22,
  },
  hintMessage: {
    color: "#fff",
    fontWeight: "500",
  },
  errorMessage: {
    color: "#ff6b6b",
    fontWeight: "600",
  },
  successMessage: {
    color: "#4ecdc4",
    fontWeight: "600",
  },
  tipsContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
  },
  tipsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 15,
    textAlign: "center",
  },
  tipText: {
    fontSize: 14,
    color: "#fff",
    opacity: 0.9,
    marginBottom: 8,
    lineHeight: 20,
  },
});

export default GameScreen;
