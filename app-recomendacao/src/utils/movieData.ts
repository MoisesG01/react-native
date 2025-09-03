import { Movie, Genre } from "../types";

export const genres: Genre[] = [
  { id: "action", name: "Ação", icon: "💥", selected: false },
  { id: "comedy", name: "Comédia", icon: "😂", selected: false },
  { id: "drama", name: "Drama", icon: "🎭", selected: false },
  { id: "horror", name: "Terror", icon: "👻", selected: false },
  { id: "romance", name: "Romance", icon: "💕", selected: false },
  { id: "scifi", name: "Ficção Científica", icon: "🚀", selected: false },
  { id: "thriller", name: "Suspense", icon: "😱", selected: false },
  { id: "adventure", name: "Aventura", icon: "🗺️", selected: false },
  { id: "animation", name: "Animação", icon: "🎨", selected: false },
  { id: "documentary", name: "Documentário", icon: "📹", selected: false },
];

export const moviesDatabase: Movie[] = [
  {
    id: 1,
    title: "Mad Max: Fury Road",
    genre: "action",
    year: 2015,
    rating: 8.1,
    description: "Uma jornada épica através de um mundo pós-apocalíptico.",
    imageUrl: "https://picsum.photos/300/200?random=1",
  },
  {
    id: 2,
    title: "The Grand Budapest Hotel",
    genre: "comedy",
    year: 2014,
    rating: 8.1,
    description: "Uma comédia elegante sobre as aventuras de um concierge.",
    imageUrl: "https://picsum.photos/300/200?random=2",
  },
  {
    id: 3,
    title: "The Shawshank Redemption",
    genre: "drama",
    year: 1994,
    rating: 9.3,
    description: "Uma história de esperança e amizade na prisão.",
    imageUrl: "https://picsum.photos/300/200?random=3",
  },
  {
    id: 4,
    title: "Get Out",
    genre: "horror",
    year: 2017,
    rating: 7.7,
    description: "Um thriller psicológico sobre racismo e horror social.",
    imageUrl: "https://picsum.photos/300/200?random=4",
  },
  {
    id: 5,
    title: "La La Land",
    genre: "romance",
    year: 2016,
    rating: 8.0,
    description: "Um musical romântico sobre sonhos e amor em Los Angeles.",
    imageUrl: "https://picsum.photos/300/200?random=5",
  },
  {
    id: 6,
    title: "Interstellar",
    genre: "scifi",
    year: 2014,
    rating: 8.6,
    description: "Uma jornada espacial para salvar a humanidade.",
    imageUrl: "https://picsum.photos/300/200?random=6",
  },
  {
    id: 7,
    title: "Gone Girl",
    genre: "thriller",
    year: 2014,
    rating: 8.1,
    description:
      "Um thriller psicológico sobre um casamento que não é o que parece.",
    imageUrl: "https://picsum.photos/300/200?random=7",
  },
  {
    id: 8,
    title: "Indiana Jones: Raiders of the Lost Ark",
    genre: "adventure",
    year: 1981,
    rating: 8.4,
    description: "Uma aventura clássica em busca de artefatos perdidos.",
    imageUrl: "https://picsum.photos/300/200?random=8",
  },
  {
    id: 9,
    title: "Spirited Away",
    genre: "animation",
    year: 2001,
    rating: 8.6,
    description: "Uma animação mágica sobre uma jornada espiritual.",
    imageUrl: "https://picsum.photos/300/200?random=9",
  },
  {
    id: 10,
    title: "Planet Earth II",
    genre: "documentary",
    year: 2016,
    rating: 9.5,
    description: "Uma série documental sobre a vida selvagem da Terra.",
    imageUrl: "https://picsum.photos/300/200?random=10",
  },
];

export const generateRecommendations = (selectedGenres: string[]): Movie[] => {
  if (selectedGenres.length === 0) return [];

  return moviesDatabase
    .filter((movie) => selectedGenres.includes(movie.genre))
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 6);
};
