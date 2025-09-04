export interface TravelPreferences {
  id: string;
  budget: "low" | "medium" | "high" | "luxury";
  duration: "weekend" | "week" | "two-weeks" | "month";
  travelStyle: "relaxation" | "adventure" | "culture" | "nature" | "city";
  interests: TravelInterest[];
  season: "spring" | "summer" | "autumn" | "winter";
  groupSize: "solo" | "couple" | "family" | "friends" | "group";
  accommodation: "budget" | "mid-range" | "luxury" | "unique";
}

export interface TravelInterest {
  id: string;
  name: string;
  category: TravelCategory;
  icon: string;
  color: string;
}

export type TravelCategory =
  | "beach"
  | "mountain"
  | "forest"
  | "desert"
  | "city"
  | "historical"
  | "cultural"
  | "adventure"
  | "food"
  | "nightlife"
  | "art"
  | "nature";

export interface Destination {
  id: string;
  name: string;
  country: string;
  continent: string;
  description: string;
  image: string;
  categories: TravelCategory[];
  bestSeason: string[];
  budgetLevel: "low" | "medium" | "high" | "luxury";
  activities: Activity[];
  highlights: string[];
  averageCost: {
    budget: number;
    midRange: number;
    luxury: number;
  };
  travelTime: string;
  visaRequired: boolean;
  language: string[];
  currency: string;
  safety: "low" | "medium" | "high";
  popularity: number; // 1-10
}

export interface Activity {
  id: string;
  name: string;
  description: string;
  category: TravelCategory;
  duration: string;
  cost: "free" | "low" | "medium" | "high";
  difficulty: "easy" | "medium" | "hard";
  season: string[];
  location: string;
  highlights: string[];
  tips: string[];
}

export interface TravelRecommendation {
  destination: Destination;
  matchScore: number; // 0-100
  reasons: string[];
  suggestedActivities: Activity[];
  estimatedCost: number;
  bestTimeToVisit: string;
  itinerary: ItineraryDay[];
}

export interface ItineraryDay {
  day: number;
  date?: string;
  activities: Activity[];
  meals: string[];
  accommodation?: string;
  notes: string[];
}

export interface TravelPlan {
  id: string;
  name: string;
  destination: Destination;
  startDate: string;
  endDate: string;
  travelers: number;
  budget: number;
  preferences: TravelPreferences;
  itinerary: ItineraryDay[];
  status: "planning" | "booked" | "completed";
  createdAt: string;
  updatedAt: string;
}

export type ScreenType =
  | "welcome"
  | "preferences"
  | "recommendations"
  | "destination-detail"
  | "activities"
  | "itinerary"
  | "my-trips";

export interface BudgetRange {
  value: string;
  label: string;
  color: string;
  description: string;
  minAmount: number;
  maxAmount: number;
}

export interface DurationOption {
  value: string;
  label: string;
  days: number;
  description: string;
}

export interface TravelStyle {
  value: string;
  label: string;
  description: string;
  icon: string;
  color: string;
}
