import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function DetailsScreen() {
  const router = useRouter();
  const params = useLocalSearchParams<{ id?: string; title?: string }>();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#007AAF" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Détails</Text>
      </View>

      <Text style={styles.subtitle}>Ce sont les détails</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: "#ffffff",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },

  backButton: {
    padding: 8,
    marginRight: 10,
  },

  headerTitle: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#0a3766",
  },

  subtitle: {
    fontSize: 20,
    color: "#333",
    marginTop: 20,
    textAlign: "center",
  },
});
