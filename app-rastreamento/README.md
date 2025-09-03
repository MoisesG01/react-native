# FitTracker - App de Rastreamento de Exercícios

## Descrição

FitTracker é um aplicativo móvel desenvolvido em React Native que permite aos usuários rastrearem suas atividades físicas e exercícios. O aplicativo oferece uma interface moderna e intuitiva para monitorar o progresso em relação a metas de condicionamento físico e sugerir exercícios adicionais com base nos objetivos individuais do usuário.

## Funcionalidades

### 🎯 Rastreamento de Treinos

- Monitore cada exercício, série e repetição
- Registre duração e calorias queimadas
- Acompanhe seu progresso ao longo do tempo

### 📊 Dashboard Inteligente

- Visualize estatísticas semanais
- Acompanhe streaks de treinos
- Métricas de performance personalizadas

### 💪 Biblioteca de Exercícios

- Exercícios categorizados por tipo e dificuldade
- Instruções detalhadas para cada movimento
- Filtros por grupo muscular e equipamento

### 🎯 Treinos Personalizados

- Treinos pré-definidos para diferentes níveis
- Criação de treinos customizados
- Recomendações baseadas no seu perfil

### 🔥 Metas e Objetivos

- Defina metas semanais e mensais
- Acompanhe o progresso em tempo real
- Sistema de gamificação com streaks

## Tecnologias Utilizadas

- **React Native** - Framework principal
- **Expo** - Plataforma de desenvolvimento
- **TypeScript** - Tipagem estática
- **Linear Gradient** - Efeitos visuais
- **React Navigation** - Navegação entre telas

## Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Button.tsx      # Botão customizado
│   ├── ExerciseCard.tsx # Card de exercício
│   ├── WorkoutCard.tsx # Card de treino
│   └── StatsCard.tsx   # Card de estatísticas
├── screens/            # Telas da aplicação
│   ├── WelcomeScreen.tsx    # Tela de boas-vindas
│   ├── DashboardScreen.tsx  # Dashboard principal
│   └── WorkoutsScreen.tsx   # Lista de treinos
├── styles/             # Estilos globais
│   └── global.ts       # Cores e estilos base
├── types/              # Definições de tipos
│   └── index.ts        # Interfaces e tipos
└── utils/              # Utilitários e dados
    └── fitnessData.ts   # Dados de exercícios e treinos
```

## Paleta de Cores

O aplicativo utiliza uma paleta de cores que remete a exercícios físicos:

- **Primária**: Laranja vibrante (#FF6B35) - Energia e motivação
- **Secundária**: Azul (#2196F3) - Confiança e estabilidade
- **Accent**: Verde (#4CAF50) - Sucesso e progresso
- **Background**: Cinza claro (#F5F5F5) - Fundo neutro

## Como Executar

### Pré-requisitos

- Node.js (versão 16 ou superior)
- Expo CLI
- Android Studio ou Xcode (para desenvolvimento nativo)

### Instalação

```bash
# Clone o repositório
git clone [url-do-repositorio]

# Entre na pasta do projeto
cd fitness-tracker-app

# Instale as dependências
npm install

# Execute o projeto
npm start
```

### Desenvolvimento

```bash
# Para Android
npm run android

# Para iOS
npm run ios

# Para web
npm run web
```

## Funcionalidades Futuras

- [ ] Sincronização com wearables
- [ ] Comunidade e rankings
- [ ] Planos de treino avançados
- [ ] Integração com redes sociais
- [ ] Sistema de conquistas
- [ ] Análise de dados avançada

## Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## Contato

- **Desenvolvedor**: [Seu Nome]
- **Email**: [seu-email@exemplo.com]
- **LinkedIn**: [seu-linkedin]

---

**FitTracker** - Transformando sua jornada fitness em resultados reais! 💪
