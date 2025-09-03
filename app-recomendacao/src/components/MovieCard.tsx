import React, { useState } from "react";
import { View, Text, Image, StyleSheet, ActivityIndicator } from "react-native";
import { Movie } from "../types";

interface MovieCardProps {
  movie: Movie;
}

export const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const [imageLoading, setImageLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  const handleImageError = () => {
    setImageLoading(false);
    setImageError(true);
  };

  const renderImage = () => {
    if (imageError) {
      return (
        <View style={[styles.movieImage, styles.errorImage]}>
          <Text style={styles.errorText}>🎬</Text>
          <Text style={styles.errorSubText}>{movie.title}</Text>
        </View>
      );
    }

    return (
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: movie.imageUrl }}
          style={styles.movieImage}
          onLoad={handleImageLoad}
          onError={handleImageError}
        />
        {imageLoading && (
          <View style={styles.loadingOverlay}>
            <ActivityIndicator size="large" color="#667eea" />
          </View>
        )}
      </View>
    );
  };

  return (
    <View style={styles.movieCard}>
      {renderImage()}
      <View style={styles.movieInfo}>
        <Text style={styles.movieTitle}>{movie.title}</Text>
        <Text style={styles.movieYear}>{movie.year}</Text>
        <Text style={styles.movieRating}>⭐ {movie.rating}</Text>
        <Text style={styles.movieDescription}>{movie.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  movieCard: {
    backgroundColor: "#fff",
    borderRadius: 15,
    marginBottom: 20,
    overflow: "hidden",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  imageContainer: {
    position: "relative",
  },
  movieImage: {
    width: "100%",
    height: 200,
    backgroundColor: "#f0f0f0",
  },
  errorImage: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
  },
  errorText: {
    fontSize: 48,
    marginBottom: 10,
  },
  errorSubText: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    paddingHorizontal: 20,
  },
  loadingOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    justifyContent: "center",
    alignItems: "center",
  },
  movieInfo: {
    padding: 20,
  },
  movieTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  movieYear: {
    fontSize: 16,
    color: "#666",
    marginBottom: 5,
  },
  movieRating: {
    fontSize: 16,
    color: "#f39c12",
    marginBottom: 10,
  },
  movieDescription: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
  },
});
