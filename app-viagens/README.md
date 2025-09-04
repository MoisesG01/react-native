# TravelPlanner - Aplicativo de Planejamento de Viagens

Um aplicativo React Native que ajuda os usuários a planejarem suas viagens com recomendações personalizadas baseadas em suas preferências.

## ✨ Funcionalidades

- **Preferências Personalizadas**: Configure seu orçamento, duração, estilo de viagem e interesses
- **Recomendações Inteligentes**: Receba sugestões de destinos baseadas no seu perfil
- **Atividades Detalhadas**: Explore atividades e atrações específicas para cada destino
- **Interface Intuitiva**: Design moderno e profissional com cores temáticas de viagem
- **Sistema de Pontuação**: Veja o quão bem cada destino se adequa às suas preferências

## 🎨 Design

O aplicativo utiliza uma paleta de cores inspirada em viagens:

- **Azul Profundo** (#1E3A8A) - Céu e oceano
- **Verde Esmeralda** (#059669) - Natureza
- **Âmbar Dourado** (#F59E0B) - Sol e praia
- **Azul Claro** (#F0F9FF) - Fundo inspirado no céu

## 🏗️ Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Button.tsx      # Botão customizado
│   ├── DestinationCard.tsx  # Card de destino
│   └── ActivityCard.tsx     # Card de atividade
├── screens/            # Telas do aplicativo
│   ├── WelcomeScreen.tsx           # Tela de boas-vindas
│   ├── TravelPreferencesScreen.tsx # Configuração de preferências
│   ├── TravelRecommendationsScreen.tsx # Lista de destinos
│   └── ActivitiesScreen.tsx        # Atividades do destino
├── styles/             # Estilos globais
│   └── global.ts       # Cores e estilos compartilhados
├── types/              # Definições TypeScript
│   └── index.ts        # Interfaces e tipos
└── utils/              # Lógica de negócio
    └── travelData.ts   # Dados e algoritmos de recomendação
```

## 🚀 Como Executar

1. **Instalar dependências**:

   ```bash
   npm install
   ```

2. **Executar o projeto**:

   ```bash
   npm start
   ```

3. **Executar em dispositivo específico**:
   ```bash
   npm run android  # Android
   npm run ios      # iOS
   npm run web      # Web
   ```

## 📱 Fluxo do Aplicativo

1. **Tela de Boas-vindas**: Apresentação do app e suas funcionalidades
2. **Preferências**: Usuário configura:

   - Orçamento (Econômico, Intermediário, Confortável, Luxo)
   - Duração (Fim de semana, Uma semana, Duas semanas, Um mês)
   - Estilo de viagem (Relaxamento, Aventura, Cultura, Natureza, Urbano)
   - Interesses (Praias, Montanhas, Florestas, etc.)
   - Estação preferida
   - Tamanho do grupo
   - Tipo de acomodação

3. **Recomendações**: Lista de destinos com:

   - Pontuação de compatibilidade (0-100%)
   - Informações básicas (país, descrição, custo)
   - Categorias e destaques
   - Razões para a recomendação

4. **Atividades**: Detalhes das atividades disponíveis:
   - Informações completas (duração, custo, dificuldade)
   - Destaques e dicas
   - Possibilidade de seleção para itinerário

## 🎯 Algoritmo de Recomendação

O sistema calcula a compatibilidade baseado em:

- **Orçamento** (25 pontos): Verifica se o destino está dentro do orçamento
- **Interesses** (15 pontos por interesse): Pontua destinos que atendem aos interesses
- **Estação** (20 pontos): Considera a melhor época para visitar
- **Estilo de viagem** (20 pontos): Alinha com o tipo de experiência desejada
- **Duração** (15 pontos): Verifica se o destino é adequado para a duração

## 🌍 Destinos Disponíveis

- **Fernando de Noronha** (Brasil) - Praias e natureza
- **Chapada Diamantina** (Brasil) - Aventura e cachoeiras
- **Amazônia** (Brasil) - Ecoturismo e floresta
- **Paris** (França) - Cultura e arte
- **Machu Picchu** (Peru) - História e aventura
- **Santorini** (Grécia) - Praias e cultura

## 🛠️ Tecnologias Utilizadas

- **React Native** - Framework mobile
- **Expo** - Plataforma de desenvolvimento
- **TypeScript** - Tipagem estática
- **Expo Linear Gradient** - Gradientes visuais

## 📄 Licença

Este projeto é privado e desenvolvido para fins educacionais.

---

**TravelPlanner** - Transforme seus sonhos de viagem em realidade! ✈️🌍
