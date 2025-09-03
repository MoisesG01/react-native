import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { GenreCard } from "../components/GenreCard";
import { Button } from "../components/Button";
import { globalStyles } from "../styles/global";
import { Genre } from "../types";

interface GenreSelectionScreenProps {
  genres: Genre[];
  selectedGenres: string[];
  onGenreToggle: (genreId: string) => void;
  onGenerateRecommendations: () => void;
}

export const GenreSelectionScreen: React.FC<GenreSelectionScreenProps> = ({
  genres,
  selectedGenres,
  onGenreToggle,
  onGenerateRecommendations,
}) => {
  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.header}>
        <Text style={globalStyles.headerTitle}>
          Selecione seus gêneros favoritos
        </Text>
        <Text style={globalStyles.headerSubtitle}>
          Escolha pelo menos um gênero para receber recomendações personalizadas
        </Text>
      </View>

      <ScrollView
        style={styles.genresContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.genresGrid}>
          {genres.map((genre) => (
            <GenreCard
              key={genre.id}
              genre={genre}
              isSelected={selectedGenres.includes(genre.id)}
              onPress={() => onGenreToggle(genre.id)}
            />
          ))}
        </View>
      </ScrollView>

      <View style={globalStyles.bottomContainer}>
        <Button
          title={`Gerar Recomendações (${selectedGenres.length})`}
          onPress={onGenerateRecommendations}
          variant="primary"
          disabled={selectedGenres.length === 0}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  genresContainer: {
    flex: 1,
    padding: 20,
  },
  genresGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});
