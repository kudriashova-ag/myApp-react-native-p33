import { Slot, Stack } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Feather from "@expo/vector-icons/Feather";

const RootLayout = () => {
  return (
    <View style={{ flex: 1 }}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen
          name="about"
          options={{
            title: "About Us",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "dodgerblue",
            },
            headerTintColor: "#fff",
            headerRight: () => <Feather name="bell" size={24} color="white" />,
            animation: "fade",
          }}
        />
      </Stack>

      <View style={{ backgroundColor: "#ddd", padding: 10 }}>
        <Text>Footer</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default RootLayout;
