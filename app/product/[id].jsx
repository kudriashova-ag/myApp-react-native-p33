import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { PRODUCTS } from "../../data/products";
import Button from "../../src/ui/Button/Button";

const ProductScreen = () => {
  const { id } = useLocalSearchParams();

  const product = PRODUCTS.find((product) => product.id === id);

  return (
    <View style={{flex:1}}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>{product.price} грн</Text>

      <View style={styles.footer}>
        <Text style={styles.price}>{product.price} грн</Text>
        <Button text="В кошик" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 400,
  },
  info: {
    padding: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 6,
  },
  price: {
    fontSize: 18,
    fontWeight: "600",
    color: "#2563eb",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 12,
    backgroundColor: "#fff",
    borderTopColor: "#ccc",
    borderTopWidth: 1,
  },
});

export default ProductScreen;
