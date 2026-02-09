import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function About() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>About</Text>

            <TouchableOpacity
                        style={styles.button}
                        onPress= { () =>
                            router.push({
                            pathname: "../details",
                            params: { title: "Depuis l'explorer" },
                            })
                        }
                    >
                        <Text style={styles.buttonText}>Voir les détails</Text>
            
            </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#0a3766",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 20,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});


