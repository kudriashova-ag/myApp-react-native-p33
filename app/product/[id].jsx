import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { PRODUCTS } from "../../data/products";
import Button from "../../src/ui/Button/Button";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { useCart } from "../../context/CartContext";
import { useQuery } from "@tanstack/react-query";
import { getProductById } from "../../services/products.service";
import useDimensions from "../../hooks/useDimensions";

const ProductScreen = () => {
  const { id } = useLocalSearchParams();
  const { bottom } = useSafeAreaInsets();
  const { addToCart } = useCart();
  const router = useRouter();
  const { isLandscape, width } = useDimensions();

  const { data: product = {}, isLoading } = useQuery({
    queryKey: ["product", id],
    queryFn: () => getProductById(id),
    enabled: !!id,
  });

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        style={{
          flex: 1,
          marginBottom: bottom + 60,
        }}
      >
        <View
          style={{ flexDirection: isLandscape ? "row" : "column", gap: 12 }}
        >
          <View style={{ flex: 1 }}>
            <Image
              source={{ uri: product.image }}
              style={[
                styles.image,
                { flex: 1, height: isLandscape ? width * 0.3 : 400 },
              ]}
            />
          </View>
          <View style={{ flex: 2 }}>
            <Text style={styles.title}>{product.title}</Text>
            <Text>{product.description}</Text>
          </View>
        </View>
      </ScrollView>

      <View style={[styles.footer, { bottom: bottom }]}>
        <Text style={styles.price}>{product.price} грн</Text>
        <Button
          text="В кошик"
          onPress={() => {
            addToCart(product);
            router.push("/cart");
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 400,
    flex: 1,
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
