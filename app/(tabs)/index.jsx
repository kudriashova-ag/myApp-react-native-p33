import { FlatList, StyleSheet, Text, View } from "react-native";
// import { PRODUCTS } from "../../data/products";
import ProductCard from "../../src/components/ProductCard";
import { useQuery } from "@tanstack/react-query";
import { api } from "../../api/axios";
import { getProducts } from "../../services/products.service";

// export const getProducts = async () => {
//     const { data } = await api.get('/products');
//     return data.data.map(product=>({...product, id:product._id}));
// }

const Index = () => {
  const { data: products=[], isLoading } = useQuery({
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
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        renderItem={({ item }) => <ProductCard product={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
  },
  row: {
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
});

export default Index;
