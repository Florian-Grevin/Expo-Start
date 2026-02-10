import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { FlatList, Image, Pressable, Text, View } from "react-native";
import { fetchAnUser, fetchUsers } from "../services/simpsonsService";


export default function Explore() {

  type Character = {
    id: number;
    name: string;
    occupation: string;
    gender: string;
    age: number;
    birthdate: number;
    portrait_path: string;
    phrases: string[];
    status: string;
  };


  const [name, setName] = useState("");
  const [result, setResult] = useState<Character[] | null>(null);
  const [selected, setSelected] = useState<Character | null>(null);
  const [error, setError] = useState(null);

  async function handleFetch() {
    setError(null);
    setSelected(null);

    const response = await fetchUsers(name);

    if (!response.ok) {
      setError(response.error);
      return;
    }

    setResult(response.data.results);
  }

  async function handleSelectCharacter(id : number) {
    setError(null);

    const response = await fetchAnUser(id);

    if (!response.ok) {
      setError(response.error);
      return;
    }

    // L’API renvoie un OBJET, pas un tableau
    setSelected(response.data);
  }

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      
      {error && <Text style={{ color: "red" }}>Erreur: {error}</Text>}

      {/* 🟡 FICHE PERSONNAGE */}
      {selected && (
        <View style={{ marginTop: 20, width: "95%", alignItems: "center" }}>

          {/* 🔙 Bouton retour */}
          <Pressable
            onPress={() => setSelected(null)}
            style={{
              alignSelf: "flex-start",
              marginBottom: 10,
              padding: 6,
            }}
          >
            <Ionicons name="arrow-back" size={28} color="#4ea0c6" />
          </Pressable>

            <Image
              source={{ uri: `https://cdn.thesimpsonsapi.com/500${selected.portrait_path}` }}
              style={{
                width: 150,
                height: 150,
                borderRadius: 500,
                backgroundColor: "#2782bb",
              }}
            />

          <Text style={{ fontSize: 22, fontWeight: "bold", marginTop: 10 }}>
            {selected.name}
          </Text>

          <View
            style={{
              backgroundColor: "#fff",
              marginTop: 20,
              marginBottom: 10,
              padding: 15,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: "#ddd",
              width: "100%",
            }}
          >
            {/* Occupation */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "flex-start",
                marginBottom: 8,
                flexWrap: "wrap",
              }}
            >
              <Ionicons name="briefcase" size={20} color="#4ea0c6" />
              <Text style={{ fontSize: 14, marginLeft: 8, fontWeight: "bold" }}>
                Occupation :
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  marginLeft: 5,
                  flex: 1,
                  flexWrap: "wrap",
                }}
              >
                {selected?.occupation ?? "Unknown"}
              </Text>
            </View>

            {/* Gender */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "flex-start",
                marginBottom: 8,
                flexWrap: "wrap",
              }}
            >
              <Ionicons name="male-female" size={20} color="#4ea0c6" />
              <Text style={{ fontSize: 14, marginLeft: 8, fontWeight: "bold" }}>
                Genre :
              </Text>
              <Text style={{ fontSize: 14, marginLeft: 5, flex: 1, flexWrap: "wrap" }}>
                {selected?.gender ?? "?"}
              </Text>
            </View>

            {/* Age */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "flex-start",
                marginBottom: 8,
                flexWrap: "wrap",
              }}
            >
              <Ionicons name="hourglass" size={20} color="#4ea0c6" />
              <Text style={{ fontSize: 14, marginLeft: 8, fontWeight: "bold" }}>
                Âge :
              </Text>
              <Text style={{ fontSize: 14, marginLeft: 5, flex: 1, flexWrap: "wrap" }}>
                {selected?.age ?? "?"}
              </Text>
            </View>

            {/* Birthdate */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "flex-start",
                flexWrap: "wrap",
              }}
            >
              <Ionicons name="calendar" size={20} color="#4ea0c6" />
              <Text style={{ fontSize: 14, marginLeft: 8, fontWeight: "bold" }}>
                Naissance :
              </Text>
              <Text style={{ fontSize: 14, marginLeft: 5, flex: 1, flexWrap: "wrap" }}>
                {selected?.birthdate ?? "?"}
              </Text>
            </View>

            {/* Status */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "flex-start",
                flexWrap: "wrap",
              }}
            >
              <Ionicons name="information-circle" size={20} color="#4ea0c6" />
              <Text style={{ fontSize: 14, marginLeft: 8, fontWeight: "bold" }}>
                Status :
              </Text>
              <Text style={{ fontSize: 14, marginLeft: 5, flex: 1, flexWrap: "wrap" }}>
                {selected?.status ?? "?"}
              </Text>
            </View>
          </View>

          <Text style={{ fontSize: 18, fontWeight: "bold", marginTop: 10 }}>
            Quote
          </Text>
          <FlatList
            style={{
              marginTop: 10,
              marginBottom: 430,
              width: "100%",
            }}
            contentContainerStyle={{
              paddingBottom: 40,
              paddingHorizontal: 5,
            }}
            data={selected.phrases}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View
                style={{
                  backgroundColor: "#fff",
                  marginVertical: 5,
                  padding: 15,
                  borderRadius: 10,
                  borderWidth: 1,
                  borderColor: "#ddd",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  width: "100%",
                }}
              >
                <Ionicons name="chatbubble-ellipses" size={18} color="#4ea0c6" />

                <Text
                  style={{
                    marginLeft: 10,
                    fontSize: 14,
                    flex: 1,
                    flexWrap: "wrap",
                  }}
                >
                  {item}
                </Text>
              </View>
            )}
          />

        </View>
      )}

      {/* 🟡 LISTE DES PERSONNAGES */}
      {!selected && result && (
        <View style={{ marginTop: 10, width: "90%" }}>
          <FlatList
            data={result}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <Pressable
                onPress={() => handleSelectCharacter(item.id)}
                style={({ pressed }) => ({
                  opacity: pressed ? 0.6 : 1,
                  padding: 10,
                  marginVertical: 5,
                  borderWidth: 1,
                  borderColor: "#ccc",
                  borderRadius: 5,
                  flexDirection: "row",
                  alignItems: "center",
                })}
              >
                <Image
                  source={{ uri: `https://cdn.thesimpsonsapi.com/500${item.portrait_path}` }}
                  style={{
                    width: 65,
                    height: 65,
                    borderRadius: 500,
                    backgroundColor: "#2782bb",
                  }}
                />

                <View style={{ marginLeft: 10, flex: 1 }}>
                  <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
                  <Text numberOfLines={3} ellipsizeMode="tail" style={{ fontSize: 12 }}>
                    {item?.occupation ?? "Unknown"}
                  </Text>
                </View>
              </Pressable>
            )}
          />
        </View>
      )}
    </View>
  );
}
