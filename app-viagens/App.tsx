import React, { useState } from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { WelcomeScreen } from "./src/screens/WelcomeScreen";
import { TravelPreferencesScreen } from "./src/screens/TravelPreferencesScreen";
import { TravelRecommendationsScreen } from "./src/screens/TravelRecommendationsScreen";
import { ActivitiesScreen } from "./src/screens/ActivitiesScreen";
import {
  ScreenType,
  TravelPreferences,
  TravelRecommendation,
} from "./src/types";
import { colors } from "./src/styles/global";

function App(): React.JSX.Element {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>("welcome");
  const [travelPreferences, setTravelPreferences] =
    useState<TravelPreferences | null>(null);
  const [selectedRecommendation, setSelectedRecommendation] =
    useState<TravelRecommendation | null>(null);

  const handleStart = () => {
    setCurrentScreen("preferences");
  };

  const handlePreferencesSubmit = (preferences: TravelPreferences) => {
    setTravelPreferences(preferences);
    setCurrentScreen("recommendations");
  };

  const handleDestinationSelect = (recommendation: TravelRecommendation) => {
    setSelectedRecommendation(recommendation);
    setCurrentScreen("activities");
  };

  const handleNewSearch = () => {
    setCurrentScreen("preferences");
  };

  const handleBackToRecommendations = () => {
    setCurrentScreen("recommendations");
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case "welcome":
        return <WelcomeScreen onStart={handleStart} />;

      case "preferences":
        return (
          <TravelPreferencesScreen
            onSubmit={handlePreferencesSubmit}
            onBack={() => setCurrentScreen("welcome")}
          />
        );

      case "recommendations":
        return travelPreferences ? (
          <TravelRecommendationsScreen
            preferences={travelPreferences}
            onDestinationSelect={handleDestinationSelect}
            onBack={() => setCurrentScreen("preferences")}
            onNewSearch={handleNewSearch}
          />
        ) : null;

      case "activities":
        return selectedRecommendation ? (
          <ActivitiesScreen
            recommendation={selectedRecommendation}
            onBack={handleBackToRecommendations}
          />
        ) : null;

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
