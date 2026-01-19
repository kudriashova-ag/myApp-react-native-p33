import { CART_TYPES } from "./cart.types";

const CartReducer = (state, action) => {
    switch (action.type) {
        case CART_TYPES.ADD_ITEM:
            const exists = state.find(item => item.id === action.payload.id);
            if (exists)
                return state.map(item => item.id === exists.id ? { ...item, quantity: item.quantity + 1 } : item);
            return [...state, { ...action.payload, quantity: 1 }];

        case CART_TYPES.REMOVE_ITEM:
            return state.filter(item => item.id !== action.payload);

        case CART_TYPES.CLEAR_CART:
            return [];

        case CART_TYPES.INCREASE_QUANTITY:
            return state.map(item => item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item);

        case CART_TYPES.DECREASE_QUANTITY:
            return state.map(item => item.id === action.payload ? { ...item, quantity: item.quantity - 1 } : item);
        default:
            return state;
    }
}

export default CartReducer
