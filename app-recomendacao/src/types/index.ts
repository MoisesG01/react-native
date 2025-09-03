export interface Movie {
  id: number;
  title: string;
  genre: string;
  year: number;
  rating: number;
  description: string;
  imageUrl: string;
}

export interface Genre {
  id: string;
  name: string;
  icon: string;
  selected: boolean;
}

export type ScreenType = "welcome" | "genres" | "results";
