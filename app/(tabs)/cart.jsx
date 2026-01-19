import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useCart } from '../../context/CartContext';


const Cart = () => {
    const { items } = useCart();
    
    if (items.length === 0) 
        return (
            <View>
                <Text>Кошик порожній</Text>
            </View>
        );

    return (
      <View>
        <FlatList
          data={items}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View>
              <Text>{item.title}</Text>
              <Text>{item.quantity} шт.</Text>
            </View>
          )}
        />
      </View>
    );
}

const styles = StyleSheet.create({})

export default Cart;
