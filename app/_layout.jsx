import { Stack } from "expo-router";
import { StyleSheet, View } from "react-native";
import CartProvider from "../context/CartContext";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "../context/AuthContext";

const queryClient = new QueryClient();

const RootLayout = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <GestureHandlerRootView>
        <AuthProvider>
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
        </AuthProvider>
      </GestureHandlerRootView>
    </QueryClientProvider>
  );
};

const styles = StyleSheet.create({});

export default RootLayout;
