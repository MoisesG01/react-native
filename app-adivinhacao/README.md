# 🎯 Jogo da Adivinhação

Um jogo interativo e divertido de adivinhação de números desenvolvido em React Native com Expo.

## ✨ Características

- **Interface moderna e responsiva** com gradientes e design profissional
- **Jogo de adivinhação** com números de 1 a 100
- **Sistema de dicas inteligentes** que indica se o número é maior ou menor
- **Contador de tentativas** para acompanhar seu progresso
- **Tela de vitória personalizada** com avaliação de performance
- **Animações suaves** e transições entre telas
- **Design adaptativo** para diferentes tamanhos de tela

## 🚀 Como Jogar

1. **Tela de Boas-vindas**: Clique em "Começar Jogo" para iniciar
2. **Jogo Principal**: Digite um número entre 1 e 100 e clique em "Adivinhar!"
3. **Receba Dicas**: O jogo te dirá se o número secreto é maior ou menor
4. **Continue Tentando**: Use as dicas para se aproximar do número correto
5. **Vitória**: Quando acertar, veja suas estatísticas e performance!

## 🎨 Design Features

- **Gradientes modernos** com cores vibrantes
- **Elementos translúcidos** para um visual elegante
- **Tipografia clara** e hierarquia visual bem definida
- **Ícones e emojis** para tornar a experiência mais divertida
- **Sombras e elevações** para profundidade visual

## 🛠️ Tecnologias Utilizadas

- **React Native** - Framework principal
- **Expo** - Plataforma de desenvolvimento
- **TypeScript** - Tipagem estática
- **Expo Linear Gradient** - Gradientes personalizados
- **React Native Reanimated** - Animações fluidas

## 📱 Instalação e Execução

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn
- Expo CLI

### Passos para instalação

1. **Clone o repositório**

   ```bash
   git clone <url-do-repositorio>
   cd app-adivinhacao
   ```

2. **Instale as dependências**

   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Execute o projeto**

   ```bash
   npm start
   # ou
   yarn start
   ```

4. **Abra no dispositivo**
   - Use o app Expo Go no seu smartphone
   - Escaneie o QR code que aparece no terminal
   - Ou pressione 'a' para Android ou 'i' para iOS no simulador

## 🎮 Funcionalidades do Jogo

### Sistema de Dicas

- **Maior (🔺)**: O número secreto é maior que seu palpite
- **Menor (🔻)**: O número secreto é menor que seu palpite

### Sistema de Performance

- **5 tentativas ou menos**: 🏆 Incrível! Você é um gênio!
- **6-10 tentativas**: ⭐ Excelente! Muito bem jogado!
- **11-15 tentativas**: 🎯 Bom trabalho! Você se saiu bem!
- **16-20 tentativas**: 💪 Parabéns! Você conseguiu!
- **Mais de 20 tentativas**: 🎊 Ufa! Mas você conseguiu!

### Curiosidade

O jogo inclui uma dica interessante: com uma estratégia de busca binária, é possível encontrar qualquer número entre 1 e 100 em no máximo 7 tentativas!

## 📁 Estrutura do Projeto

```
src/
├── App.tsx                 # Componente principal do jogo
├── screens/
│   ├── WelcomeScreen.tsx   # Tela de boas-vindas
│   ├── GameScreen.tsx      # Tela principal do jogo
│   └── VictoryScreen.tsx   # Tela de vitória
├── styles/
│   └── global.ts          # Estilos globais
└── types/
    └── index.ts           # Definições de tipos TypeScript
```

## 🎯 Melhorias Futuras

- [ ] Sistema de pontuação e ranking
- [ ] Diferentes níveis de dificuldade
- [ ] Modo multiplayer local
- [ ] Sons e efeitos sonoros
- [ ] Temas visuais alternativos
- [ ] Estatísticas de jogos anteriores
- [ ] Modo desafio com tempo limite

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Reportar bugs
2. Sugerir novas funcionalidades
3. Enviar pull requests
4. Melhorar a documentação

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

---

**Divirta-se jogando! 🎉**
