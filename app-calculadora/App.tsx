import React from "react";
import { StatusBar } from "expo-status-bar";
import { BMICalculatorScreen } from "./src/screens/BMICalculatorScreen";

export default function App() {
  return (
    <>
      <BMICalculatorScreen />
      <StatusBar style="dark" backgroundColor="#F8FAFC" />
    </>
  );
}
