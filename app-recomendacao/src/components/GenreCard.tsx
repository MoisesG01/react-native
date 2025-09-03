import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Genre } from "../types";

interface GenreCardProps {
  genre: Genre;
  isSelected: boolean;
  onPress: () => void;
}

export const GenreCard: React.FC<GenreCardProps> = ({
  genre,
  isSelected,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[styles.genreCard, isSelected && styles.genreCardSelected]}
      onPress={onPress}
    >
      <Text style={styles.genreIcon}>{genre.icon}</Text>
      <Text style={[styles.genreName, isSelected && styles.genreNameSelected]}>
        {genre.name}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  genreCard: {
    width: "48%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
    alignItems: "center",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  genreCardSelected: {
    backgroundColor: "#667eea",
    transform: [{ scale: 1.05 }],
  },
  genreIcon: {
    fontSize: 40,
    marginBottom: 10,
  },
  genreName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    textAlign: "center",
  },
  genreNameSelected: {
    color: "#fff",
  },
});
