import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import { Image } from "react-native";
import SimpsonsLogo from "../../assets/images/logo.png";

export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarInactiveTintColor: "#bfe7fb",
                tabBarActiveTintColor: "#FFD90F",
                headerShown: true,
                headerStyle: {
                    backgroundColor: "#2782bb",
                },
                headerTintColor: "#white",
                headerTitleAlign: "center",
                tabBarStyle: {
                    backgroundColor: "#4ea0c6",
                },
            }
            }
        >

            <Tabs.Screen    
                name="index"
                options={{
                    title: "Accueil",
                    tabBarIcon: ({ color, size }) => (
                    <Ionicons name="home" size={size} color={color} />),
                }}
            />     

            <Tabs.Screen
            name="explore"
            options={{
                headerTitle: () => (
                <Image
                    source={SimpsonsLogo}
                    style={{
                    width: 140,
                    height: 50,
                    resizeMode: "contain",
                    }}
                />
                ),
                tabBarIcon: ({ size, color }) => (
                <Image
                    source={SimpsonsLogo}
                    style={{
                    width: size + 10,
                    height: size + 10,
                    tintColor: color,
                    resizeMode: "contain",
                    }}
                />
                ),
            }}
            />



            <Tabs.Screen    
                name="about"
                options={{
                    title: "À propos",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="information-circle" size={size} color={color} />
                    ),
                    
                }}
            />

            <Tabs.Screen    
                name="auth"
                options={{
                    title: "S'authentifier",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="person" size={size} color={color} />
                    ),
                    
                }}
            />
        </Tabs>
    )
}