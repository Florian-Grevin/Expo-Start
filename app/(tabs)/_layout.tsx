import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";

export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarInactiveTintColor: "#afd7ffff",
                tabBarActiveTintColor: "#ffffffff",
                headerShown: true,
                headerStyle: {
                    backgroundColor: "#3b83cbff",
                },
                headerTintColor: "white",
                headerTitleAlign: "center",
                tabBarStyle: {
                    backgroundColor: "#0a3766",
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
                title: "Explorer",
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="search" size={size} color={color} />
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