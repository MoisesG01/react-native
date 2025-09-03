export type GameState = "welcome" | "playing" | "victory";

export interface GameStats {
  attempts: number;
  bestScore?: number;
  gamesPlayed: number;
}

export interface GameSettings {
  range: {
    min: number;
    max: number;
  };
  maxAttempts?: number;
}
