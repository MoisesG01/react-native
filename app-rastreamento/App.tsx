import React, { useState } from "react";
import { SafeAreaView, StatusBar, View, Text } from "react-native";
import { WelcomeScreen } from "./src/screens/WelcomeScreen";
import { DashboardScreen } from "./src/screens/DashboardScreen";
import { WorkoutsScreen } from "./src/screens/WorkoutsScreen";
import { ExercisesScreen } from "./src/screens/ExercisesScreen";
import { ProgressScreen } from "./src/screens/ProgressScreen";
import { ProfileScreen } from "./src/screens/ProfileScreen";
import { Button } from "./src/components/Button";
import { ScreenType, Workout, Exercise } from "./src/types";
import { colors } from "./src/styles/global";

function App(): React.JSX.Element {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>("welcome");
  const [currentWorkout, setCurrentWorkout] = useState<Workout | null>(null);

  const handleStart = () => {
    setCurrentScreen("dashboard");
  };

  const handleNavigate = (screen: ScreenType) => {
    setCurrentScreen(screen);
  };

  const handleStartWorkout = (workout: Workout) => {
    console.log("handleStartWorkout chamado com:", workout.name);
    console.log("workout:", workout);
    setCurrentWorkout(workout);
    setCurrentScreen("workoutSession");
    console.log("Tela alterada para workoutSession");
  };

  const handleExercisePress = (exercise: Exercise) => {
    setCurrentScreen("exerciseDetail");
  };

  const renderScreen = () => {
    console.log("renderScreen chamado, currentScreen:", currentScreen);
    switch (currentScreen) {
      case "welcome":
        return <WelcomeScreen onStart={handleStart} />;

      case "dashboard":
        return (
          <DashboardScreen
            onNavigate={handleNavigate}
            onStartWorkout={handleStartWorkout}
          />
        );

      case "workouts":
        return (
          <WorkoutsScreen
            onNavigate={handleNavigate}
            onStartWorkout={handleStartWorkout}
          />
        );

      case "exercises":
        return (
          <ExercisesScreen
            onNavigate={handleNavigate}
            onExercisePress={handleExercisePress}
          />
        );

      case "progress":
        return <ProgressScreen onNavigate={handleNavigate} />;

      case "profile":
        return <ProfileScreen onNavigate={handleNavigate} />;

      case "workoutSession":
        return (
          <View
            style={{
              flex: 1,
              backgroundColor: colors.background,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 24,
                fontWeight: "bold",
                color: colors.text,
                marginBottom: 20,
              }}
            >
              Sessão de Treino
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: colors.textSecondary,
                marginBottom: 30,
                textAlign: "center",
              }}
            >
              {currentWorkout
                ? `Treino: ${currentWorkout.name}`
                : "Nenhum treino selecionado"}
            </Text>
            <Button
              title="Voltar ao Dashboard"
              onPress={() => setCurrentScreen("dashboard")}
              variant="primary"
              size="large"
            />
          </View>
        );

      case "exerciseDetail":
        return (
          <View
            style={{
              flex: 1,
              backgroundColor: colors.background,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 24,
                fontWeight: "bold",
                color: colors.text,
                marginBottom: 20,
              }}
            >
              Detalhes do Exercício
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: colors.textSecondary,
                marginBottom: 30,
                textAlign: "center",
              }}
            >
              Funcionalidade em desenvolvimento
            </Text>
            <Button
              title="Voltar ao Dashboard"
              onPress={() => setCurrentScreen("dashboard")}
              variant="primary"
              size="large"
            />
          </View>
        );

      default:
        return <WelcomeScreen onStart={handleStart} />;
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
      {renderScreen()}
    </SafeAreaView>
  );
}

export default App;
