import {  Stack } from "expo-router";
import { StyleSheet, View } from "react-native";
import CartProvider from "../context/CartContext";

const RootLayout = () => {
  return (
    <CartProvider>
      <View style={{ flex: 1 }}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen
            name="product/[id]"
            options={{ title: "Опис товару" }}
          />
        </Stack>
      </View>
    </CartProvider>
  );
};

const styles = StyleSheet.create({});

export default RootLayout;
