import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Button } from "../components/Button";

interface WelcomeScreenProps {
  onStart: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  return (
    <LinearGradient colors={["#667eea", "#764ba2"]} style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>🎬 Movie Recommendations</Text>
        <Text style={styles.subtitle}>
          Descubra seus próximos filmes favoritos baseado em suas preferências!
        </Text>
        <Button
          title="Começar"
          onPress={onStart}
          variant="primary"
          style={styles.startButton}
          textStyle={styles.startButtonText}
        />
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
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
    marginBottom: 40,
    opacity: 0.9,
  },
  startButton: {
    backgroundColor: "#fff",
    paddingHorizontal: 40,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  startButtonText: {
    color: "#667eea",
    fontSize: 18,
    fontWeight: "bold",
  },
});
