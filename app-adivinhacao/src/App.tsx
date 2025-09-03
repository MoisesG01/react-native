import React, { useState } from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import WelcomeScreen from "./screens/WelcomeScreen";
import GameScreen from "./screens/GameScreen";
import VictoryScreen from "./screens/VictoryScreen";
import { GameState } from "./types";

function App() {
  const [gameState, setGameState] = useState<GameState>("welcome");
  const [targetNumber, setTargetNumber] = useState<number>(0);
  const [attempts, setAttempts] = useState<number>(0);

  const startNewGame = () => {
    const newNumber = Math.floor(Math.random() * 100) + 1;
    setTargetNumber(newNumber);
    setAttempts(0);
    setGameState("playing");
  };

  const handleVictory = (finalAttempts: number) => {
    setAttempts(finalAttempts);
    setGameState("victory");
  };

  const resetGame = () => {
    setGameState("welcome");
  };

  const renderScreen = () => {
    switch (gameState) {
      case "welcome":
        return <WelcomeScreen onStartGame={startNewGame} />;
      case "playing":
        return (
          <GameScreen
            targetNumber={targetNumber}
            onVictory={handleVictory}
            attempts={attempts}
            setAttempts={setAttempts}
          />
        );
      case "victory":
        return (
          <VictoryScreen
            attempts={attempts}
            onPlayAgain={startNewGame}
            onBackToMenu={resetGame}
          />
        );
      default:
        return <WelcomeScreen onStartGame={startNewGame} />;
    }
  };

  return (
    <LinearGradient colors={["#667eea", "#764ba2"]} style={styles.container}>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="transparent" />
        {renderScreen()}
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
