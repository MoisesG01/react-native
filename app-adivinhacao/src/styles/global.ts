import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  // Estilos específicos do jogo
  gameContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  gameCard: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 20,
    padding: 25,
    alignItems: "center",
    width: "100%",
    maxWidth: 350,
  },
  input: {
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 15,
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "rgba(255, 255, 255, 0.2)",
    marginBottom: 20,
    width: "100%",
  },
  gradientButton: {
    borderRadius: 25,
    overflow: "hidden",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  message: {
    fontSize: 16,
    textAlign: "center",
    paddingHorizontal: 20,
    lineHeight: 22,
    marginTop: 20,
  },
});
