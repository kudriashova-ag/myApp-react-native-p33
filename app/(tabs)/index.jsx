import { FlatList, StyleSheet, Text, View } from "react-native";
// import { PRODUCTS } from "../../data/products";
import ProductCard from "../../src/components/ProductCard";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../services/products.service";
import useDimensions from "../../hooks/useDimensions";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";

const Index = () => {
  const { isLandscape } = useDimensions();
  const { theme } = useSelector((state) => state.theme);

  const { data: products = [], isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
    retry: 5,
  });

  if (isLoading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme === "light" ? "#fff" : "#000" }]}>
      <FlatList
        data={products}
        key={isLandscape ? "landscape" : "portrait"}
        keyExtractor={(item) => item.id}
        numColumns={isLandscape ? 3 : 2}
        columnWrapperStyle={styles.row}
        renderItem={({ item }) => <ProductCard product={item} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    
  },
  row: {
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
});

export default Index;
