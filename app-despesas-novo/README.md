# 📱 App de Controle de Despesas

Um aplicativo React Native para controle financeiro pessoal que calcula automaticamente a porcentagem de economia mensal e fornece orientações de investimento.

## ✨ Funcionalidades

- **Entrada de Dados**: Interface intuitiva para inserir receitas e despesas mensais
- **Cálculo Automático**: Calcula automaticamente a economia e porcentagem de economia
- **Orientação de Investimento**: Fornece mensagens personalizadas baseadas na porcentagem de economia:
  - 🎯 **15% ou mais**: "Invista seu dinheiro!"
  - ⚠️ **10% a 15%**: "Vamos investir no próximo mês!"
  - 💪 **Menos de 10%**: "Vamos continuar tentando!"
- **Interface Moderna**: Design responsivo e intuitivo com tema de cores consistente
- **Validação de Dados**: Verifica entradas inválidas e fornece feedback ao usuário

## 🚀 Como Executar

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn
- Expo CLI instalado globalmente

### Instalação

```bash
# Clone o repositório
git clone <url-do-repositorio>
cd app-despesas-novo

# Instale as dependências
npm install

# Inicie o projeto
npm start
```

### Comandos Disponíveis

```bash
npm start          # Inicia o servidor de desenvolvimento
npm run android    # Executa no Android
npm run ios        # Executa no iOS
npm run web        # Executa na web
```

## 🏗️ Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Button.tsx      # Botão customizável
│   ├── InputField.tsx  # Campo de entrada
│   └── ResultCard.tsx  # Card de resultados
├── screens/            # Telas do aplicativo
│   └── HomeScreen.tsx  # Tela principal
├── styles/             # Estilos e temas
│   └── colors.ts       # Paleta de cores
├── types/              # Definições TypeScript
│   └── index.ts        # Interfaces e tipos
├── utils/              # Funções utilitárias
│   └── calculations.ts # Lógica de cálculos
└── index.ts            # Arquivo de exportações
```

## 🎨 Design System

### Cores

- **Primary**: Verde (#2E7D32) - Representa sucesso e finanças
- **Secondary**: Azul (#1976D2) - Complementar e confiável
- **Success**: Verde escuro (#388E3C) - Para mensagens positivas
- **Warning**: Laranja (#F57C00) - Para alertas moderados
- **Info**: Azul claro (#0288D1) - Para informações gerais

### Componentes

- **InputField**: Campo de entrada com validação e estilização
- **Button**: Botão com múltiplas variantes (primary, secondary, outline)
- **ResultCard**: Card para exibir resultados financeiros

## 📱 Funcionalidades Técnicas

### Validações

- Campos obrigatórios preenchidos
- Valores numéricos válidos
- Valores não negativos
- Receita maior que zero

### Cálculos

- **Economia**: Receita - Despesas
- **Porcentagem de Economia**: (Economia / Receita) × 100

### Estados da Interface

- Loading durante cálculos
- Exibição condicional de resultados
- Botão de reset para novo cálculo
- Tratamento de erros com Alert

## 🔧 Tecnologias Utilizadas

- **React Native**: Framework principal
- **Expo**: Plataforma de desenvolvimento
- **TypeScript**: Tipagem estática
- **React Hooks**: Gerenciamento de estado
- **StyleSheet**: Estilização nativa

## 📱 Compatibilidade

- ✅ Android (API 21+)
- ✅ iOS (11.0+)
- ✅ Web (navegadores modernos)

## 🚀 Próximas Funcionalidades

- [ ] Histórico de cálculos
- [ ] Gráficos de evolução financeira
- [ ] Categorização de despesas
- [ ] Metas de economia
- [ ] Backup na nuvem
- [ ] Notificações de lembretes

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👨‍💻 Autor

Desenvolvido como projeto de estudo em React Native para controle financeiro pessoal.

---

**💡 Dica**: Use este app regularmente para acompanhar suas finanças e desenvolver bons hábitos de economia!
