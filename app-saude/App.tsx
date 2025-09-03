import React, { useState } from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { WelcomeScreen } from "./src/screens/WelcomeScreen";
import { HealthInputScreen } from "./src/screens/HealthInputScreen";
import { HealthAssessmentScreen } from "./src/screens/HealthAssessmentScreen";
import { HealthTipsScreen } from "./src/screens/HealthTipsScreen";
import { ScreenType, HealthAssessment } from "./src/types";
import { calculateHealthScore } from "./src/utils/healthData";
import { colors } from "./src/styles/global";

function App(): React.JSX.Element {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>("welcome");
  const [healthAssessment, setHealthAssessment] =
    useState<HealthAssessment | null>(null);

  const handleStart = () => {
    setCurrentScreen("input");
  };

  const handleHealthSubmit = (data: {
    energyLevel: number;
    sleepQuality: number;
    stressLevel: number;
    mood: number;
    waterIntake: number;
    exerciseMinutes: number;
  }) => {
    const assessment = calculateHealthScore(
      data.energyLevel,
      data.sleepQuality,
      data.stressLevel,
      data.mood,
      data.waterIntake,
      data.exerciseMinutes
    );

    setHealthAssessment(assessment);
    setCurrentScreen("assessment");
  };

  const handleNewAssessment = () => {
    setCurrentScreen("input");
  };

  const handleViewTips = () => {
    setCurrentScreen("tips");
  };

  const handleBackToAssessment = () => {
    setCurrentScreen("assessment");
  };

  const handleBackToInput = () => {
    setCurrentScreen("input");
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case "welcome":
        return <WelcomeScreen onStart={handleStart} />;

      case "input":
        return (
          <HealthInputScreen
            onSubmit={handleHealthSubmit}
            onBack={() => setCurrentScreen("welcome")}
          />
        );

      case "assessment":
        return healthAssessment ? (
          <HealthAssessmentScreen
            assessment={healthAssessment}
            onNewAssessment={handleNewAssessment}
            onViewTips={handleViewTips}
          />
        ) : null;

      case "tips":
        return <HealthTipsScreen onBack={handleBackToAssessment} />;

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
