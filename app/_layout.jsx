import {  Stack } from "expo-router";
import { StyleSheet, View } from "react-native";

const RootLayout = () => {
  return (
    <View style={{ flex: 1 }}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="product/[id]" options={{ title: "Опис товару" }} />
      </Stack>
    </View>
  );
};

const styles = StyleSheet.create({});

export default RootLayout;
