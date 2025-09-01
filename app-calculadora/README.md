# Calculadora de IMC Interativa

Uma aplicação React Native elegante e moderna para calcular o Índice de Massa Corporal (IMC) com design inovador e funcionalidades avançadas.

## 🚀 Características

- **Design Elegante**: Interface moderna com gradientes e animações suaves
- **Cálculo Preciso**: Algoritmo de cálculo de IMC com validação robusta
- **Categorização Inteligente**: Classificação automática em categorias de peso
- **Mensagens Personalizadas**: Dicas e orientações específicas para cada categoria
- **Validação de Entrada**: Verificação em tempo real dos dados inseridos
- **Animações Fluidas**: Transições suaves e feedback visual
- **Responsivo**: Adaptável a diferentes tamanhos de tela
- **Acessível**: Interface intuitiva e fácil de usar

## 📱 Funcionalidades

### Cálculo de IMC

- Entrada de peso (kg) e altura (cm)
- Cálculo automático do IMC
- Classificação em categorias:
  - Abaixo do peso (IMC < 18.5)
  - Peso normal (IMC 18.5 - 24.9)
  - Sobrepeso (IMC 25 - 29.9)
  - Obesidade (IMC ≥ 30)

### Interface

- Design moderno com gradientes
- Cards informativos
- Animações de entrada
- Feedback visual imediato
- Botões interativos
- Ícones expressivos

### Validação

- Verificação de dados em tempo real
- Mensagens de erro claras
- Limites de entrada seguros
- Prevenção de valores inválidos

## 🛠️ Tecnologias Utilizadas

- **React Native** - Framework principal
- **Expo** - Plataforma de desenvolvimento
- **TypeScript** - Tipagem estática
- **Expo Linear Gradient** - Gradientes visuais
- **React Native Reanimated** - Animações
- **React Native Gesture Handler** - Gestos
- **React Native Safe Area Context** - Área segura

## 📦 Instalação

1. Clone o repositório:

```bash
git clone <url-do-repositorio>
cd app-calculadora
```

2. Instale as dependências:

```bash
npm install
```

3. Inicie o servidor de desenvolvimento:

```bash
npm start
```

4. Execute no dispositivo/emulador:

```bash
# Android
npm run android

# iOS (apenas no macOS)
npm run ios

# Web
npm run web
```

## 🎨 Design System

### Cores

- **Primária**: Indigo (#6366F1)
- **Secundária**: Purple (#8B5CF6)
- **Fundo**: Slate 50 (#F8FAFC)
- **Superfície**: Branco (#FFFFFF)
- **Texto**: Slate 800 (#1E293B)
- **Sucesso**: Emerald 500 (#10B981)
- **Aviso**: Amber 500 (#F59E0B)
- **Erro**: Red 500 (#EF4444)

### Tipografia

- **H1**: 32px, peso 700
- **H2**: 24px, peso 600
- **H3**: 20px, peso 600
- **Body**: 16px, peso 400
- **Caption**: 14px, peso 400

### Espaçamento

- **XS**: 4px
- **SM**: 8px
- **MD**: 16px
- **LG**: 24px
- **XL**: 32px
- **XXL**: 48px

## 🏗️ Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Input.tsx       # Campo de entrada
│   ├── Button.tsx      # Botão customizado
│   ├── Card.tsx        # Card container
│   └── BMIResultCard.tsx # Card de resultado
├── screens/            # Telas da aplicação
│   └── BMICalculatorScreen.tsx
├── styles/             # Estilos e tema
│   ├── theme.ts        # Configuração do tema
│   └── globalStyles.ts # Estilos globais
├── types/              # Definições TypeScript
│   └── index.ts        # Interfaces e tipos
└── utils/              # Utilitários
    └── bmiCalculator.ts # Lógica de cálculo
```

## 🧮 Fórmula do IMC

```
IMC = Peso (kg) / Altura (m)²
```

### Categorias

- **Abaixo do peso**: IMC < 18.5
- **Peso normal**: 18.5 ≤ IMC < 25
- **Sobrepeso**: 25 ≤ IMC < 30
- **Obesidade**: IMC ≥ 30

## 📱 Como Usar

1. **Abra o aplicativo**
2. **Insira seu peso** em quilogramas
3. **Insira sua altura** em centímetros
4. **Toque em "Calcular IMC"**
5. **Visualize o resultado** com categoria e dicas
6. **Use "Limpar"** para nova consulta

## 🔧 Desenvolvimento

### Scripts Disponíveis

- `npm start` - Inicia o servidor de desenvolvimento
- `npm run android` - Executa no Android
- `npm run ios` - Executa no iOS
- `npm run web` - Executa no navegador

### Estrutura de Componentes

- **Input**: Campo de entrada com validação
- **Button**: Botão com variantes e estados
- **Card**: Container com sombras e gradientes
- **BMIResultCard**: Exibição do resultado do IMC

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para:

- Reportar bugs
- Sugerir melhorias
- Enviar pull requests
- Compartilhar feedback

## 📞 Suporte

Para dúvidas ou suporte, entre em contato através dos issues do repositório.

---

**Desenvolvido com ❤️ usando React Native e Expo**
