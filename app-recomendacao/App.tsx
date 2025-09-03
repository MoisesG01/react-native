import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { WelcomeScreen } from "./src/screens/WelcomeScreen";
import { GenreSelectionScreen } from "./src/screens/GenreSelectionScreen";
import { ResultsScreen } from "./src/screens/ResultsScreen";
import { genres, generateRecommendations } from "./src/utils/movieData";
import { ScreenType, Movie } from "./src/types";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>("welcome");
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [recommendedMovies, setRecommendedMovies] = useState<Movie[]>([]);

  const handleGenreToggle = (genreId: string) => {
    setSelectedGenres((prev) =>
      prev.includes(genreId)
        ? prev.filter((id) => id !== genreId)
        : [...prev, genreId]
    );
  };

  const handleGenerateRecommendations = () => {
    if (selectedGenres.length === 0) return;

    const recommendations = generateRecommendations(selectedGenres);
    setRecommendedMovies(recommendations);
    setCurrentScreen("results");
  };

  const handleBack = () => {
    setCurrentScreen("genres");
  };

  const handleNewRecommendations = () => {
    setSelectedGenres([]);
    setCurrentScreen("genres");
  };

  const renderCurrentScreen = () => {
    switch (currentScreen) {
      case "welcome":
        return <WelcomeScreen onStart={() => setCurrentScreen("genres")} />;

      case "genres":
        return (
          <GenreSelectionScreen
            genres={genres}
            selectedGenres={selectedGenres}
            onGenreToggle={handleGenreToggle}
            onGenerateRecommendations={handleGenerateRecommendations}
          />
        );

      case "results":
        return (
          <ResultsScreen
            movies={recommendedMovies}
            selectedGenres={selectedGenres}
            onBack={handleBack}
            onNewRecommendations={handleNewRecommendations}
          />
        );

      default:
        return <WelcomeScreen onStart={() => setCurrentScreen("genres")} />;
    }
  };

  return (
    <>
      <StatusBar style="light" />
      {renderCurrentScreen()}
    </>
  );
}
