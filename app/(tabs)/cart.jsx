import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useCart } from '../../context/CartContext';
import CartItem from '../../src/components/CartItem';


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
            <CartItem item={item} />
          )}
        />
      </View>
    );
}

const styles = StyleSheet.create({})

export default Cart;
