import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { MovieCard } from "../components/MovieCard";
import { Button } from "../components/Button";
import { globalStyles } from "../styles/global";
import { Movie } from "../types";

interface ResultsScreenProps {
  movies: Movie[];
  selectedGenres: string[];
  onBack: () => void;
  onNewRecommendations: () => void;
}

export const ResultsScreen: React.FC<ResultsScreenProps> = ({
  movies,
  selectedGenres,
  onBack,
  onNewRecommendations,
}) => {
  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.header}>
        <Text style={globalStyles.headerTitle}>Filmes Recomendados</Text>
        <Text style={globalStyles.headerSubtitle}>
          Baseado nos gêneros: {selectedGenres.join(", ")}
        </Text>
      </View>

      <ScrollView
        style={styles.resultsContainer}
        showsVerticalScrollIndicator={false}
      >
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ScrollView>

      <View style={globalStyles.bottomContainer}>
        <Button
          title="Voltar"
          onPress={onBack}
          variant="secondary"
          style={styles.backButton}
        />
        <Button
          title="Novas Recomendações"
          onPress={onNewRecommendations}
          variant="success"
          style={styles.newRecommendationsButton}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  resultsContainer: {
    flex: 1,
    padding: 20,
  },
  backButton: {
    marginBottom: 10,
  },
  newRecommendationsButton: {
    marginTop: 5,
  },
});
