import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useCart } from '../../context/CartContext';
import CartItem from '../../src/components/CartItem';
import { useAuth } from '../../context/AuthContext';
import Button from '../../src/ui/Button/Button';


const Cart = () => {
  const { items } = useCart();
  const { isAuth } = useAuth();
    
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

        {isAuth && <Button text="Оформити замовлення" />}
        
      </View>
    );
}

const styles = StyleSheet.create({})

export default Cart;
