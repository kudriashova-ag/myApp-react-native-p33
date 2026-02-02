import { Tabs } from "expo-router";
import { Pressable, StyleSheet, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useCart } from "../../context/CartContext";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../features/ThemeSlice";

const TabsLayout = () => {
  const { cartTotalQty } = useCart();
  const { theme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();


  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Магазин",
          tabBarIcon: ({ color }) => (
            <Ionicons name="home-outline" size={24} color={color} />
          ),
          tabBarActiveTintColor: "tomato",
          headerRight: () => <Pressable onPress={() => dispatch(toggleTheme())}>
            <Text>{theme}</Text>
          </Pressable>,
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: "Кошик",
          tabBarIcon: ({ color }) => (
            <Ionicons name="cart-outline" size={24} color={color} />
          ),
          tabBarActiveTintColor: "tomato",
          tabBarBadge: cartTotalQty > 0 ? cartTotalQty : undefined,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Профіль",
          tabBarIcon: ({ color }) => (
            <Ionicons name="person-outline" size={24} color={color} />
          ),
          tabBarActiveTintColor: "tomato",
        }}
      />
    </Tabs>
  );
};

const styles = StyleSheet.create({});

export default TabsLayout;
