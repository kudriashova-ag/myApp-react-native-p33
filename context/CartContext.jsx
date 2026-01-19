import { createContext, useContext, useReducer } from 'react';
import { StyleSheet, View } from 'react-native';
import CartReducer from '../reducer/CartReducer';
import { CART_TYPES } from '../reducer/cart.types';


const CartContext = createContext([]);


const CartProvider = ({ children }) => {
    const [items, dispatch] = useReducer(CartReducer, []);

    const addToCart = product => dispatch({ type: CART_TYPES.ADD_ITEM, payload: product });
    const removeFromCart = id => dispatch({ type: CART_TYPES.REMOVE_ITEM, payload: id });
    const clearCart = () => dispatch({ type: CART_TYPES.CLEAR_CART });
    const increaseQty = id => dispatch({ type: CART_TYPES.INCREASE_QUANTITY, payload: id });
    const decreaseQty = id => dispatch({ type: CART_TYPES.DECREASE_QUANTITY, payload: id });

    const cartTotalQty = items.length

    const value = {
        items,
        cartTotalQty,
        addToCart,
        removeFromCart,
        clearCart,
        increaseQty,
        decreaseQty
    }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
}

const styles = StyleSheet.create({})

export const useCart = () => useContext(CartContext);

export default CartProvider;
