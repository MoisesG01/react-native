import React, { useState } from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { WelcomeScreen } from "./src/screens/WelcomeScreen";
import { ProductInputScreen } from "./src/screens/ProductInputScreen";
import { PaymentSelectionScreen } from "./src/screens/PaymentSelectionScreen";
import { ResultScreen } from "./src/screens/ResultScreen";
import { ScreenType, ProductData, SaleCalculation } from "./src/types";
import { calculateSale } from "./src/utils/salesData";
import { colors } from "./src/styles/global";

function App(): React.JSX.Element {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>("welcome");
  const [productData, setProductData] = useState<ProductData | null>(null);
  const [saleCalculation, setSaleCalculation] =
    useState<SaleCalculation | null>(null);

  const handleStart = () => {
    setCurrentScreen("product-input");
  };

  const handleProductSubmit = (data: ProductData) => {
    setProductData(data);
    setCurrentScreen("payment-selection");
  };

  const handlePaymentSelect = (paymentCode: number) => {
    if (productData) {
      try {
        const calculation = calculateSale(productData, paymentCode);
        setSaleCalculation(calculation);
        setCurrentScreen("result");
      } catch (error) {
        console.error("Erro ao calcular venda:", error);
        // Aqui você poderia mostrar um alerta de erro
      }
    }
  };

  const handleNewCalculation = () => {
    setProductData(null);
    setSaleCalculation(null);
    setCurrentScreen("product-input");
  };

  const handleBackToProductInput = () => {
    setCurrentScreen("product-input");
  };

  const handleBackToPaymentSelection = () => {
    setCurrentScreen("payment-selection");
  };

  const handleBackToWelcome = () => {
    setProductData(null);
    setSaleCalculation(null);
    setCurrentScreen("welcome");
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case "welcome":
        return <WelcomeScreen onStart={handleStart} />;

      case "product-input":
        return (
          <ProductInputScreen
            onSubmit={handleProductSubmit}
            onBack={handleBackToWelcome}
          />
        );

      case "payment-selection":
        return productData ? (
          <PaymentSelectionScreen
            productData={productData}
            onSelectPayment={handlePaymentSelect}
            onBack={handleBackToProductInput}
          />
        ) : null;

      case "result":
        return saleCalculation ? (
          <ResultScreen
            calculation={saleCalculation}
            onNewCalculation={handleNewCalculation}
            onBack={handleBackToPaymentSelection}
          />
        ) : null;

      default:
        return <WelcomeScreen onStart={handleStart} />;
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
      {renderScreen()}
    </SafeAreaView>
  );
}

export default App;
