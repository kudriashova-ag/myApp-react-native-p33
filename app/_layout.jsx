import { Stack } from "expo-router";
import { StyleSheet, View } from "react-native";
import CartProvider from "../context/CartContext";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "../context/AuthContext";
import { Provider } from "react-redux";
import { store } from "../store/store";

const queryClient = new QueryClient();

const RootLayout = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <GestureHandlerRootView>
        <Provider store={store}>
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
        </Provider>
      </GestureHandlerRootView>
    </QueryClientProvider>
  );
};

const styles = StyleSheet.create({});

export default RootLayout;
