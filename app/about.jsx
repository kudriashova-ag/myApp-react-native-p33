import { Link } from "expo-router";
import React, { useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import Button from "../src/ui/Button/Button";

import Modal from "../src/ui/Modal/Modal";

const products = [
  { id: 1, name: "Product 1" },
  { id: 2, name: "Product 2" },
  { id: 3, name: "Product 3" },
    { id: 4, name: "Product 4" },
    { id: 5, name: "Product 5" },
    { id: 6, name: "Product 6" },
];

const About = () => {
  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Button text="Open Modal" onPress={() => setVisible(true)} />
      <Modal visible={visible} closeModal={() => setVisible(false)}>
        <Text>This is a modal</Text>
        <Text>This is a modal</Text>
      </Modal>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  heading: {
    fontSize: 30,
  },
  link: {
    textDecorationColor: "dodgerblue",
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    color: "dodgerblue",
  },
});

export default About;
