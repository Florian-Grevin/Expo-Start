import { router } from "expo-router";
import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";


export default function Index() {
    
  const [name, setName] = useState('');
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
    
        <TextInput
            placeholder="Enter Name"
            value={name}
            onChangeText={setName}
            style={{ 
                borderWidth: 1,
                borderColor: "black",
                padding: 10,
                margin: 10,
                width: "80%",
            }}
        />
        <Text style={{ margin: 10, width: "80%" }}>Name: {name}</Text>
    </View>
  );
}