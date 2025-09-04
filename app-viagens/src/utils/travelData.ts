import {
  TravelPreferences,
  TravelInterest,
  Destination,
  Activity,
  TravelRecommendation,
  TravelCategory,
  BudgetRange,
  DurationOption,
  TravelStyle,
} from "../types";

// Dados de interesses de viagem
export const travelInterests: TravelInterest[] = [
  { id: "1", name: "Praias", category: "beach", icon: "🏖️", color: "#0EA5E9" },
  {
    id: "2",
    name: "Montanhas",
    category: "mountain",
    icon: "🏔️",
    color: "#6B7280",
  },
  {
    id: "3",
    name: "Florestas",
    category: "forest",
    icon: "🌲",
    color: "#059669",
  },
  {
    id: "4",
    name: "Desertos",
    category: "desert",
    icon: "🏜️",
    color: "#F59E0B",
  },
  { id: "5", name: "Cidades", category: "city", icon: "🏙️", color: "#374151" },
  {
    id: "6",
    name: "História",
    category: "historical",
    icon: "🏛️",
    color: "#7C2D12",
  },
  {
    id: "7",
    name: "Cultura",
    category: "cultural",
    icon: "🎭",
    color: "#7C3AED",
  },
  {
    id: "8",
    name: "Aventura",
    category: "adventure",
    icon: "🧗",
    color: "#DC2626",
  },
  {
    id: "9",
    name: "Gastronomia",
    category: "food",
    icon: "🍽️",
    color: "#EA580C",
  },
  {
    id: "10",
    name: "Vida Noturna",
    category: "nightlife",
    icon: "🌃",
    color: "#1F2937",
  },
  { id: "11", name: "Arte", category: "art", icon: "🎨", color: "#EC4899" },
  {
    id: "12",
    name: "Natureza",
    category: "nature",
    icon: "🌿",
    color: "#10B981",
  },
];

// Opções de orçamento
export const budgetOptions: BudgetRange[] = [
  {
    value: "low",
    label: "Econômico",
    color: "#10B981",
    description: "Até R$ 2.000 por pessoa",
    minAmount: 0,
    maxAmount: 2000,
  },
  {
    value: "medium",
    label: "Intermediário",
    color: "#3B82F6",
    description: "R$ 2.000 - R$ 5.000 por pessoa",
    minAmount: 2000,
    maxAmount: 5000,
  },
  {
    value: "high",
    label: "Confortável",
    color: "#F59E0B",
    description: "R$ 5.000 - R$ 10.000 por pessoa",
    minAmount: 5000,
    maxAmount: 10000,
  },
  {
    value: "luxury",
    label: "Luxo",
    color: "#8B5CF6",
    description: "Acima de R$ 10.000 por pessoa",
    minAmount: 10000,
    maxAmount: 50000,
  },
];

// Opções de duração
export const durationOptions: DurationOption[] = [
  {
    value: "weekend",
    label: "Fim de Semana",
    days: 2,
    description: "2-3 dias",
  },
  { value: "week", label: "Uma Semana", days: 7, description: "5-7 dias" },
  {
    value: "two-weeks",
    label: "Duas Semanas",
    days: 14,
    description: "10-14 dias",
  },
  { value: "month", label: "Um Mês", days: 30, description: "20-30 dias" },
];

// Estilos de viagem
export const travelStyles: TravelStyle[] = [
  {
    value: "relaxation",
    label: "Relaxamento",
    description: "Spa, praias, descanso",
    icon: "🧘",
    color: "#10B981",
  },
  {
    value: "adventure",
    label: "Aventura",
    description: "Esportes radicais, trilhas",
    icon: "🏃",
    color: "#DC2626",
  },
  {
    value: "culture",
    label: "Cultura",
    description: "Museus, história, arte",
    icon: "🎭",
    color: "#7C3AED",
  },
  {
    value: "nature",
    label: "Natureza",
    description: "Parques, vida selvagem",
    icon: "🌿",
    color: "#059669",
  },
  {
    value: "city",
    label: "Urbano",
    description: "Cidades, compras, vida noturna",
    icon: "🏙️",
    color: "#374151",
  },
];

// Base de dados de destinos
export const destinations: Destination[] = [
  {
    id: "1",
    name: "Fernando de Noronha",
    country: "Brasil",
    continent: "América do Sul",
    description:
      "Arquipélago paradisíaco com praias cristalinas e vida marinha abundante.",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800",
    categories: ["beach", "nature", "adventure"],
    bestSeason: ["spring", "summer", "autumn"],
    budgetLevel: "high",
    activities: [],
    highlights: [
      "Praia do Sancho",
      "Mergulho com golfinhos",
      "Trilha do Atalaia",
    ],
    averageCost: { budget: 3000, midRange: 5000, luxury: 8000 },
    travelTime: "2-3 horas de voo",
    visaRequired: false,
    language: ["Português"],
    currency: "BRL",
    safety: "high",
    popularity: 9,
  },
  {
    id: "2",
    name: "Chapada Diamantina",
    country: "Brasil",
    continent: "América do Sul",
    description:
      "Parque nacional com cachoeiras, grutas e paisagens únicas do sertão baiano.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
    categories: ["nature", "adventure", "mountain"],
    bestSeason: ["spring", "autumn", "winter"],
    budgetLevel: "medium",
    activities: [],
    highlights: [
      "Cachoeira da Fumaça",
      "Gruta da Pratinha",
      "Morro do Pai Inácio",
    ],
    averageCost: { budget: 1500, midRange: 2500, luxury: 4000 },
    travelTime: "1-2 horas de voo",
    visaRequired: false,
    language: ["Português"],
    currency: "BRL",
    safety: "high",
    popularity: 8,
  },
  {
    id: "3",
    name: "Amazônia",
    country: "Brasil",
    continent: "América do Sul",
    description:
      "Floresta tropical com biodiversidade única e experiências de ecoturismo.",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800",
    categories: ["forest", "nature", "adventure"],
    bestSeason: ["spring", "autumn", "winter"],
    budgetLevel: "medium",
    activities: [],
    highlights: [
      "Encontro das Águas",
      "Observação de animais",
      "Passeios de barco",
    ],
    averageCost: { budget: 2000, midRange: 3500, luxury: 6000 },
    travelTime: "2-4 horas de voo",
    visaRequired: false,
    language: ["Português"],
    currency: "BRL",
    safety: "medium",
    popularity: 7,
  },
  {
    id: "4",
    name: "Paris",
    country: "França",
    continent: "Europa",
    description:
      "Cidade da luz com arte, cultura, gastronomia e arquitetura icônica.",
    image: "https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=800",
    categories: ["city", "cultural", "art", "food"],
    bestSeason: ["spring", "summer", "autumn"],
    budgetLevel: "high",
    activities: [],
    highlights: ["Torre Eiffel", "Louvre", "Notre-Dame", "Champs-Élysées"],
    averageCost: { budget: 4000, midRange: 7000, luxury: 12000 },
    travelTime: "10-12 horas de voo",
    visaRequired: true,
    language: ["Francês"],
    currency: "EUR",
    safety: "high",
    popularity: 10,
  },
  {
    id: "5",
    name: "Machu Picchu",
    country: "Peru",
    continent: "América do Sul",
    description:
      "Cidade inca perdida nas montanhas dos Andes, patrimônio mundial.",
    image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=800",
    categories: ["historical", "mountain", "cultural", "adventure"],
    bestSeason: ["spring", "autumn"],
    budgetLevel: "medium",
    activities: [],
    highlights: [
      "Trilha Inca",
      "Templo do Sol",
      "Intihuatana",
      "Huayna Picchu",
    ],
    averageCost: { budget: 2500, midRange: 4000, luxury: 7000 },
    travelTime: "4-6 horas de voo",
    visaRequired: false,
    language: ["Espanhol", "Quíchua"],
    currency: "PEN",
    safety: "high",
    popularity: 9,
  },
  {
    id: "6",
    name: "Santorini",
    country: "Grécia",
    continent: "Europa",
    description:
      "Ilha vulcânica com casas brancas, pôr do sol espetacular e vinícolas.",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800",
    categories: ["beach", "cultural", "food"],
    bestSeason: ["spring", "summer", "autumn"],
    budgetLevel: "high",
    activities: [],
    highlights: ["Oia", "Fira", "Vulcão", "Vinícolas"],
    averageCost: { budget: 3500, midRange: 6000, luxury: 10000 },
    travelTime: "12-15 horas de voo",
    visaRequired: true,
    language: ["Grego"],
    currency: "EUR",
    safety: "high",
    popularity: 9,
  },
];

// Base de dados de atividades
export const activities: Activity[] = [
  {
    id: "1",
    name: "Mergulho com Golfinhos",
    description: "Nade com golfinhos selvagens em seu habitat natural.",
    category: "adventure",
    duration: "3-4 horas",
    cost: "high",
    difficulty: "medium",
    season: ["spring", "summer", "autumn"],
    location: "Fernando de Noronha",
    highlights: [
      "Interação com golfinhos",
      "Vida marinha",
      "Fotografia subaquática",
    ],
    tips: ["Leve câmera subaquática", "Use protetor solar biodegradável"],
  },
  {
    id: "2",
    name: "Trilha da Cachoeira da Fumaça",
    description: "Caminhada até uma das mais altas cachoeiras do Brasil.",
    category: "adventure",
    duration: "6-8 horas",
    cost: "low",
    difficulty: "hard",
    season: ["spring", "autumn", "winter"],
    location: "Chapada Diamantina",
    highlights: [
      "Vista panorâmica",
      "Cachoeira de 340m",
      "Natureza preservada",
    ],
    tips: ["Leve bastante água", "Use calçado adequado", "Comece cedo"],
  },
  {
    id: "3",
    name: "Tour pelo Louvre",
    description: "Explore uma das maiores coleções de arte do mundo.",
    category: "art",
    duration: "4-6 horas",
    cost: "medium",
    difficulty: "easy",
    season: ["spring", "summer", "autumn", "winter"],
    location: "Paris",
    highlights: ["Mona Lisa", "Vênus de Milo", "Arte egípcia"],
    tips: ["Compre ingressos online", "Use audioguia", "Evite fins de semana"],
  },
  {
    id: "4",
    name: "Trilha Inca",
    description: "Caminhada de 4 dias até Machu Picchu pela trilha histórica.",
    category: "adventure",
    duration: "4 dias",
    cost: "high",
    difficulty: "hard",
    season: ["spring", "autumn"],
    location: "Peru",
    highlights: ["Ruínas incas", "Paisagens andinas", "Machu Picchu"],
    tips: [
      "Reserve com antecedência",
      "Prepare-se fisicamente",
      "Leve roupas quentes",
    ],
  },
];

// Função para calcular recomendações baseadas nas preferências
export function calculateTravelRecommendations(
  preferences: TravelPreferences
): TravelRecommendation[] {
  const recommendations: TravelRecommendation[] = [];

  destinations.forEach((destination) => {
    let matchScore = 0;
    const reasons: string[] = [];

    // Verificar orçamento
    const budgetMatch = checkBudgetMatch(
      preferences.budget,
      destination.budgetLevel
    );
    matchScore += budgetMatch.score;
    if (budgetMatch.reason) reasons.push(budgetMatch.reason);

    // Verificar interesses
    const interestMatches = preferences.interests.filter((interest) =>
      destination.categories.includes(interest.category)
    );
    matchScore += interestMatches.length * 15;
    if (interestMatches.length > 0) {
      reasons.push(
        `Perfeito para: ${interestMatches.map((i) => i.name).join(", ")}`
      );
    }

    // Verificar estação
    if (destination.bestSeason.includes(preferences.season)) {
      matchScore += 20;
      reasons.push(`Melhor época para visitar: ${preferences.season}`);
    }

    // Verificar estilo de viagem
    const styleMatch = checkTravelStyleMatch(
      preferences.travelStyle,
      destination.categories
    );
    matchScore += styleMatch.score;
    if (styleMatch.reason) reasons.push(styleMatch.reason);

    // Verificar duração
    const durationMatch = checkDurationMatch(preferences.duration, destination);
    matchScore += durationMatch.score;
    if (durationMatch.reason) reasons.push(durationMatch.reason);

    if (matchScore > 30) {
      const relevantActivities = activities.filter(
        (activity) =>
          destination.categories.includes(activity.category) &&
          activity.season.includes(preferences.season)
      );

      recommendations.push({
        destination,
        matchScore: Math.min(matchScore, 100),
        reasons,
        suggestedActivities: relevantActivities.slice(0, 5),
        estimatedCost: calculateEstimatedCost(destination, preferences),
        bestTimeToVisit: destination.bestSeason.join(", "),
        itinerary: generateSampleItinerary(destination, preferences.duration),
      });
    }
  });

  return recommendations.sort((a, b) => b.matchScore - a.matchScore);
}

function checkBudgetMatch(
  userBudget: string,
  destinationBudget: string
): { score: number; reason?: string } {
  const budgetLevels = { low: 1, medium: 2, high: 3, luxury: 4 };
  const userLevel = budgetLevels[userBudget as keyof typeof budgetLevels];
  const destLevel =
    budgetLevels[destinationBudget as keyof typeof budgetLevels];

  if (userLevel >= destLevel) {
    return { score: 25, reason: "Dentro do seu orçamento" };
  } else if (userLevel === destLevel - 1) {
    return { score: 15, reason: "Ligeiramente acima do orçamento" };
  } else {
    return { score: 0 };
  }
}

function checkTravelStyleMatch(
  style: string,
  categories: TravelCategory[]
): { score: number; reason?: string } {
  const styleMappings = {
    relaxation: ["beach", "nature"],
    adventure: ["adventure", "mountain", "forest"],
    culture: ["cultural", "historical", "art"],
    nature: ["nature", "forest", "mountain"],
    city: ["city", "cultural", "food", "nightlife"],
  };

  const relevantCategories =
    styleMappings[style as keyof typeof styleMappings] || [];
  const matches = categories.filter((cat) => relevantCategories.includes(cat));

  if (matches.length > 0) {
    return { score: 20, reason: `Ideal para viagem de ${style}` };
  }
  return { score: 0 };
}

function checkDurationMatch(
  duration: string,
  destination: Destination
): { score: number; reason?: string } {
  const durationMappings = {
    weekend: ["low", "medium"],
    week: ["low", "medium", "high"],
    "two-weeks": ["medium", "high", "luxury"],
    month: ["high", "luxury"],
  };

  const suitableBudgets =
    durationMappings[duration as keyof typeof durationMappings] || [];

  if (suitableBudgets.includes(destination.budgetLevel)) {
    return { score: 15, reason: `Perfeito para ${duration}` };
  }
  return { score: 5 };
}

function calculateEstimatedCost(
  destination: Destination,
  preferences: TravelPreferences
): number {
  const budgetLevels = { low: "budget", medium: "midRange", high: "luxury" };
  const costKey = budgetLevels[preferences.budget as keyof typeof budgetLevels];
  return destination.averageCost[
    costKey as keyof typeof destination.averageCost
  ];
}

function generateSampleItinerary(
  destination: Destination,
  duration: string
): any[] {
  // Implementação simplificada de itinerário
  const days = duration === "weekend" ? 2 : duration === "week" ? 7 : 14;
  const itinerary = [];

  for (let i = 1; i <= days; i++) {
    itinerary.push({
      day: i,
      activities: destination.activities.slice(0, 2),
      meals: ["Café da manhã", "Almoço", "Jantar"],
      notes: [`Dia ${i} em ${destination.name}`],
    });
  }

  return itinerary;
}
