import {
  HealthTip,
  HealthAssessment,
  EnergyLevel,
  SleepQuality,
  StressLevel,
} from "../types";

// Dados para níveis de energia
export const energyLevels: EnergyLevel[] = [
  {
    value: 1,
    label: "Muito Baixa",
    color: "#F44336",
    description: "Exausto, sem energia",
  },
  {
    value: 2,
    label: "Baixa",
    color: "#FF9800",
    description: "Cansado, pouca disposição",
  },
  {
    value: 3,
    label: "Moderada",
    color: "#FFC107",
    description: "Energia equilibrada",
  },
  {
    value: 4,
    label: "Alta",
    color: "#4CAF50",
    description: "Bem disposto, ativo",
  },
  {
    value: 5,
    label: "Muito Alta",
    color: "#2E7D32",
    description: "Super energizado!",
  },
];

// Dados para qualidade do sono
export const sleepQualities: SleepQuality[] = [
  {
    value: 1,
    label: "Muito Ruim",
    color: "#F44336",
    description: "Dormiu mal, acordou cansado",
  },
  {
    value: 2,
    label: "Ruim",
    color: "#FF9800",
    description: "Sono agitado, pouco repousante",
  },
  {
    value: 3,
    label: "Regular",
    color: "#FFC107",
    description: "Sono aceitável",
  },
  {
    value: 4,
    label: "Bom",
    color: "#4CAF50",
    description: "Dormiu bem, descansou",
  },
  {
    value: 5,
    label: "Excelente",
    color: "#2E7D32",
    description: "Sono profundo e reparador!",
  },
];

// Dados para níveis de estresse
export const stressLevels: StressLevel[] = [
  {
    value: 1,
    label: "Muito Baixo",
    color: "#4CAF50",
    description: "Relaxado, sem preocupações",
  },
  {
    value: 2,
    label: "Baixo",
    color: "#8BC34A",
    description: "Calmo, tranquilo",
  },
  {
    value: 3,
    label: "Moderado",
    color: "#FFC107",
    description: "Estresse controlado",
  },
  {
    value: 4,
    label: "Alto",
    color: "#FF9800",
    description: "Tenso, preocupado",
  },
  {
    value: 5,
    label: "Muito Alto",
    color: "#F44336",
    description: "Estressado, sobrecarregado",
  },
];

// Dicas de saúde personalizadas
export const healthTips: HealthTip[] = [
  // Dicas para energia
  {
    id: "1",
    category: "energy",
    title: "Hidratação é fundamental",
    description:
      "Beba 8 copos de água por dia para manter sua energia. A desidratação pode causar fadiga e falta de concentração.",
    icon: "💧",
    priority: "high",
  },
  {
    id: "2",
    category: "energy",
    title: "Exercícios matinais",
    description:
      "15 minutos de exercício pela manhã podem aumentar seus níveis de energia durante todo o dia.",
    icon: "🏃‍♂️",
    priority: "medium",
  },
  {
    id: "3",
    category: "energy",
    title: "Evite picos de açúcar",
    description:
      "Prefira alimentos com baixo índice glicêmico para manter energia constante ao longo do dia.",
    icon: "🍎",
    priority: "medium",
  },

  // Dicas para sono
  {
    id: "4",
    category: "sleep",
    title: "Ritual do sono",
    description:
      "Crie uma rotina relaxante antes de dormir: leitura, meditação ou música suave.",
    icon: "🌙",
    priority: "high",
  },
  {
    id: "5",
    category: "sleep",
    title: "Ambiente ideal",
    description:
      "Mantenha o quarto escuro, silencioso e com temperatura entre 18-22°C.",
    icon: "🛏️",
    priority: "medium",
  },
  {
    id: "6",
    category: "sleep",
    title: "Evite telas antes de dormir",
    description:
      "Não use dispositivos eletrônicos 1 hora antes de dormir para melhorar a qualidade do sono.",
    icon: "📱",
    priority: "high",
  },

  // Dicas para estresse
  {
    id: "7",
    category: "stress",
    title: "Respiração consciente",
    description:
      "Pratique respiração 4-7-8: inspire por 4s, segure por 7s, expire por 8s.",
    icon: "🫁",
    priority: "high",
  },
  {
    id: "8",
    category: "stress",
    title: "Pausas regulares",
    description:
      "Faça pausas de 5 minutos a cada hora de trabalho para reduzir o estresse.",
    icon: "⏰",
    priority: "medium",
  },
  {
    id: "9",
    category: "stress",
    title: "Atividade física",
    description:
      "Exercícios regulares liberam endorfinas que reduzem naturalmente o estresse.",
    icon: "💪",
    priority: "high",
  },

  // Dicas gerais
  {
    id: "10",
    category: "general",
    title: "Alimentação balanceada",
    description:
      "Inclua frutas, verduras, proteínas magras e grãos integrais em suas refeições.",
    icon: "🥗",
    priority: "high",
  },
  {
    id: "11",
    category: "general",
    title: "Socialização",
    description:
      "Mantenha contato com amigos e família. Conexões sociais são essenciais para o bem-estar.",
    icon: "👥",
    priority: "medium",
  },
  {
    id: "12",
    category: "general",
    title: "Gratidão diária",
    description:
      "Anote 3 coisas pelas quais você é grato todos os dias para melhorar o humor.",
    icon: "🙏",
    priority: "low",
  },
];

// Função para calcular pontuação geral de saúde
export const calculateHealthScore = (
  energyLevel: number,
  sleepQuality: number,
  stressLevel: number,
  mood: number,
  waterIntake: number,
  exerciseMinutes: number
): HealthAssessment => {
  // Normalizar estresse (inverter escala)
  const normalizedStress = 6 - stressLevel;

  // Calcular pontuação base (0-100)
  let baseScore =
    energyLevel * 2 +
    sleepQuality * 2 +
    normalizedStress * 2 +
    mood * 2 +
    Math.min((waterIntake / 8) * 10, 10) + // Máximo 10 pontos para água
    Math.min((exerciseMinutes / 30) * 10, 10); // Máximo 10 pontos para exercício

  // Determinar status baseado na pontuação
  let status: "excellent" | "good" | "fair" | "needs-improvement";
  if (baseScore >= 80) status = "excellent";
  else if (baseScore >= 60) status = "good";
  else if (baseScore >= 40) status = "fair";
  else status = "needs-improvement";

  // Filtrar dicas relevantes baseado nos dados
  const recommendations = healthTips.filter((tip) => {
    if (tip.category === "general") return true;
    if (tip.category === "energy" && energyLevel <= 3) return true;
    if (tip.category === "sleep" && sleepQuality <= 3) return true;
    if (tip.category === "stress" && stressLevel >= 4) return true;
    return false;
  });

  // Ordenar por prioridade
  const priorityOrder = { high: 3, medium: 2, low: 1 };
  recommendations.sort(
    (a, b) => priorityOrder[b.priority] - priorityOrder[a.priority]
  );

  return {
    overallScore: Math.round(baseScore),
    recommendations: recommendations.slice(0, 5), // Máximo 5 recomendações
    status,
  };
};

// Função para obter dicas por categoria
export const getTipsByCategory = (category: string): HealthTip[] => {
  return healthTips.filter((tip) => tip.category === category);
};

// Função para obter dicas por prioridade
export const getTipsByPriority = (
  priority: "low" | "medium" | "high"
): HealthTip[] => {
  return healthTips.filter((tip) => tip.priority === priority);
};
