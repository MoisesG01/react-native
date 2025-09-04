# 🛒 Calculadora de Vendas

Um aplicativo React Native para calcular o valor final de vendas com descontos automáticos baseados na forma de pagamento.

## 📱 Funcionalidades

- **Cálculo Automático**: Insira o valor e quantidade do produto para calcular o total
- **Múltiplas Formas de Pagamento**: Suporte para diferentes métodos de pagamento
- **Descontos Automáticos**: Aplicação automática de descontos conforme a forma de pagamento
- **Interface Intuitiva**: Design moderno e profissional
- **Compartilhamento**: Compartilhe os resultados da venda

## 💳 Formas de Pagamento e Descontos

| Código | Forma de Pagamento     | Desconto |
| ------ | ---------------------- | -------- |
| 0      | À Vista                | 25%      |
| 1      | Cheque (30 dias)       | 20%      |
| 2      | Cartão de Crédito (2x) | 10%      |
| 3      | Cartão de Crédito (3x) | 5%       |
| 4      | Negociado com Vendedor | 0%       |

## 🚀 Como Usar

1. **Iniciar**: Toque em "Iniciar Cálculo" na tela de boas-vindas
2. **Dados do Produto**: Insira o valor unitário e a quantidade
3. **Forma de Pagamento**: Selecione o método de pagamento desejado
4. **Resultado**: Visualize o valor final com desconto aplicado
5. **Compartilhar**: Compartilhe o resultado ou inicie uma nova venda

## 🎨 Design

O aplicativo utiliza uma paleta de cores profissional focada em:

- **Azul**: Confiança e profissionalismo
- **Verde**: Dinheiro e sucesso
- **Amarelo Dourado**: Valor e premium

## 🛠️ Tecnologias

- React Native
- TypeScript
- Expo
- React Native Linear Gradient

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Iniciar o projeto
npm start

# Executar no Android
npm run android

# Executar no iOS
npm run ios
```

## 📱 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
├── screens/            # Telas do aplicativo
│   ├── WelcomeScreen.tsx
│   ├── ProductInputScreen.tsx
│   ├── PaymentSelectionScreen.tsx
│   └── ResultScreen.tsx
├── styles/             # Estilos globais
│   └── global.ts
├── types/              # Definições de tipos TypeScript
│   └── index.ts
└── utils/              # Utilitários e lógica de negócio
    └── salesData.ts
```

## 🔧 Funcionalidades Técnicas

- **Validação de Dados**: Validação completa dos inputs do usuário
- **Formatação de Moeda**: Formatação automática para Real brasileiro
- **Cálculos Precisos**: Cálculos matemáticos precisos para descontos
- **Navegação Fluida**: Navegação intuitiva entre telas
- **Responsividade**: Interface adaptável a diferentes tamanhos de tela

## 📊 Exemplo de Uso

1. Produto: R$ 100,00
2. Quantidade: 2 unidades
3. Subtotal: R$ 200,00
4. Pagamento: À Vista (25% de desconto)
5. Desconto: R$ 50,00
6. **Valor Final: R$ 150,00**

## 🎯 Características do Design

- Interface limpa e profissional
- Cores que remetem ao ambiente comercial
- Ícones intuitivos para cada forma de pagamento
- Cards com sombras e bordas arredondadas
- Tipografia clara e legível
- Feedback visual para interações

---

Desenvolvido com ❤️ para facilitar cálculos de vendas e proporcionar uma experiência profissional.
