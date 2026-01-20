import {  Stack } from "expo-router";
import { StyleSheet, View } from "react-native";
import CartProvider from "../context/CartContext";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const RootLayout = () => {
  return (
    <GestureHandlerRootView>
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
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({});

export default RootLayout;
