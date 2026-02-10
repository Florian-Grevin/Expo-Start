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

      <View style={styles.content}>
        <Text style={styles.title}>Ce sont les détails</Text>

        <Text style={styles.description}>
          Cette page est accessible via la navigation stack, pas les ongles
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 60,
    paddingHorizontal: 20,
    marginBottom: 20,
  },

  backButton: {
    padding: 8,
    marginRight: 10,
  },

  headerTitle: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#4ea0c6",
  },

  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },

  description: {
    fontSize: 18,
    fontWeight: "300",
    textAlign: "center",
    marginTop: 10,
  },
});
