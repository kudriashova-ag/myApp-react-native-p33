import { Tabs } from 'expo-router';
import { StyleSheet } from 'react-native';
import Ionicons from "@expo/vector-icons/Ionicons";
import { useCart } from '../../context/CartContext';

const TabsLayout = () => {
    const { cartTotalQty } = useCart();

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
}

const styles = StyleSheet.create({})

export default TabsLayout;
