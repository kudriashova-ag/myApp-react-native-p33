import { useRouter } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import useDimensions from "../../hooks/useDimensions";
import { ThemedText } from "../ui/Themed";

const ProductCard = ({ product }) => {  
  const { isLandscape } = useDimensions();

  const router = useRouter();

  return (
    <Pressable
      style={[styles.card, { width: isLandscape ? "32%" : "48%" }]}
      onPress={() => router.push(`/product/${product.id}`)}
    >
      <Image source={{ uri: product.image }} style={styles.image} />

      <View style={styles.info}>
        <ThemedText style={styles.title} numberOfLines={2}>
          {product.title}
        </ThemedText>
        <Text style={styles.price}>{product.price}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 16,
    elevation: 3, // Android shadow
    width: "48%",
  },
  image: {
    width: "100%",
    height: 160,
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
});

export default ProductCard;
