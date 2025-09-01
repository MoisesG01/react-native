import { BMIResult, BMICategory } from "../types";
import { bmiCategories } from "../styles/theme";

export const calculateBMI = (weight: number, height: number): BMIResult => {
  // Converter altura de cm para metros
  const heightInMeters = height / 100;

  // Calcular IMC
  const bmi = weight / (heightInMeters * heightInMeters);

  // Encontrar categoria
  const category =
    bmiCategories.find((cat) => bmi >= cat.min && bmi < cat.max) ||
    bmiCategories[bmiCategories.length - 1]; // Fallback para obesidade

  // Gerar mensagem personalizada
  const message = generateBMIMessage(bmi, category);

  return {
    value: Math.round(bmi * 10) / 10, // Arredondar para 1 casa decimal
    category,
    message,
  };
};

const generateBMIMessage = (bmi: number, category: BMICategory): string => {
  const messages = {
    "Abaixo do peso": [
      "Seu IMC indica que você está abaixo do peso ideal. Considere consultar um nutricionista para uma dieta balanceada.",
      "É importante manter uma alimentação nutritiva e equilibrada para alcançar o peso ideal.",
      "Consulte um profissional de saúde para orientações sobre ganho de peso saudável.",
    ],
    "Peso normal": [
      "Parabéns! Seu IMC está na faixa ideal. Continue mantendo hábitos saudáveis!",
      "Excelente! Você está no peso ideal. Mantenha uma alimentação balanceada e exercícios regulares.",
      "Perfeito! Seu IMC está saudável. Continue com os bons hábitos!",
    ],
    Sobrepeso: [
      "Seu IMC indica sobrepeso. Considere ajustar sua alimentação e aumentar a atividade física.",
      "É importante focar em uma alimentação mais equilibrada e exercícios regulares.",
      "Consulte um nutricionista para orientações sobre perda de peso saudável.",
    ],
    Obesidade: [
      "Seu IMC indica obesidade. É importante buscar orientação médica e nutricional.",
      "Consulte um médico e nutricionista para um plano de perda de peso saudável.",
      "É fundamental buscar acompanhamento profissional para sua saúde.",
    ],
  };

  const categoryMessages = messages[category.label as keyof typeof messages];
  const randomIndex = Math.floor(Math.random() * categoryMessages.length);

  return categoryMessages[randomIndex];
};

export const validateInput = (
  weight: string,
  height: string
): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];

  // Validar peso
  const weightNum = parseFloat(weight);
  if (!weight || isNaN(weightNum)) {
    errors.push("Peso deve ser um número válido");
  } else if (weightNum <= 0) {
    errors.push("Peso deve ser maior que zero");
  } else if (weightNum < 20 || weightNum > 300) {
    errors.push("Peso deve estar entre 20kg e 300kg");
  }

  // Validar altura
  const heightNum = parseFloat(height);
  if (!height || isNaN(heightNum)) {
    errors.push("Altura deve ser um número válido");
  } else if (heightNum <= 0) {
    errors.push("Altura deve ser maior que zero");
  } else if (heightNum < 100 || heightNum > 250) {
    errors.push("Altura deve estar entre 100cm e 250cm");
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};

export const getBMITips = (category: BMICategory): string[] => {
  const tips = {
    "Abaixo do peso": [
      "Consuma mais calorias saudáveis",
      "Faça refeições regulares",
      "Inclua proteínas em cada refeição",
      "Consulte um nutricionista",
    ],
    "Peso normal": [
      "Mantenha uma alimentação equilibrada",
      "Pratique exercícios regularmente",
      "Beba bastante água",
      "Durma bem todas as noites",
    ],
    Sobrepeso: [
      "Reduza o consumo de calorias",
      "Aumente a atividade física",
      "Evite alimentos processados",
      "Consulte um nutricionista",
    ],
    Obesidade: [
      "Busque acompanhamento médico",
      "Siga um plano alimentar personalizado",
      "Inicie exercícios gradualmente",
      "Considere terapia comportamental",
    ],
  };

  return tips[category.label as keyof typeof tips] || [];
};
