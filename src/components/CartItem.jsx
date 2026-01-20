import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "../ui/Button/Button";
import { useCart } from "../../context/CartContext";
import ReanimatedSwipeable from "react-native-gesture-handler/ReanimatedSwipeable";

const RightAction = ({ progress, item }) => {
  const { removeFromCart } = useCart();

  return (
    <Button
      text="Remove"
      variant="danger"
      onPress={() => removeFromCart(item.id)}
    />
  );
};

const CartItem = ({ item }) => {
  const { increaseQty, decreaseQty } = useCart();

  return (
    <ReanimatedSwipeable
      renderRightActions={(progress) => (
        <RightAction progress={progress} item={item} />
      )}
    >
      <View style={styles.card}>
        <View style={styles.row}>
          <View>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.price}>{item.price * item.quantity}</Text>
          </View>
          <View style={styles.qtyRow}>
            <Button
              text="-"
              onPress={() => decreaseQty(item.id)}
              style={{ paddingHorizontal: 16 }}
            />
            <Text>{item.quantity}</Text>
            <Button
              text="+"
              onPress={() => increaseQty(item.id)}
              style={{ paddingHorizontal: 16 }}
            />
          </View>
        </View>
      </View>
    </ReanimatedSwipeable>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  qtyRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: { fontSize: 16, fontWeight: "600", marginBottom: 4 },
  price: { fontSize: 16, fontWeight: "700", color: "#2563eb" },
});

export default CartItem;
