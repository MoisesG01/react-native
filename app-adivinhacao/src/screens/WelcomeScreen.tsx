import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

interface WelcomeScreenProps {
  onStartGame: () => void;
}

const { width, height } = Dimensions.get("window");

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStartGame }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.titleContainer}>
          <Text style={styles.emoji}>🎯</Text>
          <Text style={styles.title}>Jogo da Adivinhação</Text>
          <Text style={styles.subtitle}>
            Tente adivinhar o número entre 1 e 100!
          </Text>
        </View>

        <View style={styles.featuresContainer}>
          <View style={styles.featureItem}>
            <Text style={styles.featureEmoji}>🎲</Text>
            <Text style={styles.featureText}>Número aleatório</Text>
          </View>
          <View style={styles.featureItem}>
            <Text style={styles.featureEmoji}>💡</Text>
            <Text style={styles.featureText}>Dicas inteligentes</Text>
          </View>
          <View style={styles.featureItem}>
            <Text style={styles.featureEmoji}>🏆</Text>
            <Text style={styles.featureText}>Contador de tentativas</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.button} onPress={onStartGame}>
          <LinearGradient
            colors={["#ff6b6b", "#ee5a24"]}
            style={styles.buttonGradient}
          >
            <Text style={styles.buttonText}>Começar Jogo</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  content: {
    alignItems: "center",
    width: "100%",
  },
  titleContainer: {
    alignItems: "center",
    marginBottom: 60,
  },
  emoji: {
    fontSize: 80,
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 15,
    textShadowColor: "rgba(0, 0, 0, 0.3)",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  subtitle: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
    opacity: 0.9,
    lineHeight: 24,
  },
  featuresContainer: {
    marginBottom: 60,
    width: "100%",
  },
  featureItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    padding: 15,
    borderRadius: 15,
    marginBottom: 15,
  },
  featureEmoji: {
    fontSize: 24,
    marginRight: 15,
  },
  featureText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "500",
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
});

export default WelcomeScreen;
