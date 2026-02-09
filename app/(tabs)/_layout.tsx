import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";

export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarInactiveTintColor: "#007AFF",
                headerShown: true,
            }}  
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
        </Tabs>
    )
}