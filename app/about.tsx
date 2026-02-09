import { router } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>This is the about.</Text>
      <Button title="Go to Index" onPress={()=>router.push("/")}/>
    </View>
  );
}