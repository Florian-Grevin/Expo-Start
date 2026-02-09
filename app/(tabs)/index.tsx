import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>Accueil</Text>

      <Text style={{ fontSize: 12, fontWeight: "light" }}>Bienvenue sur la page d'accueil</Text>
    </View>
  );
}