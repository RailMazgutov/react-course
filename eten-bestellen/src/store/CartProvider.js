import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
    items: [],
    totalAmount: 0,
};

const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        const existingCartItemIdx = state.items.findIndex(item => item.id === action.item.id);
        const existingItem = state.items[existingCartItemIdx];

        let updatedItems;
        if (existingItem) {
            const updatedItem = {
                ...existingItem,
                amount: existingItem.amount + action.item.amount
            }
            updatedItems = [...state.items];
            updatedItems[existingCartItemIdx] = updatedItem;
        } else {
            updatedItems = state.items.concat(action.item);
        }

        const newTotalAmount = state.totalAmount + action.item.price * action.item.amount;

        return {
            items: updatedItems,
            totalAmount: newTotalAmount
        };
    }

    if (action.type === 'REMOVE') {
        const existingCartItemIdx = state.items.findIndex(item => item.id === action.id);
        const existingItem = state.items[existingCartItemIdx];
        if (!existingItem) {
            return;
        }
        const newTotalAmount = state.totalAmount - existingItem.price;
        if (existingItem.amount === 1) {
            return {
                items: state.items.filter(item => item.id !== action.id),
                totalAmount: newTotalAmount
            };
        }
        const updatedItem = {
            ...existingItem,
            amount: existingItem.amount - 1
        }
        const updatedItems = [...state.items];
        updatedItems[existingCartItemIdx] = updatedItem;

        return {
            items: updatedItems,
            totalAmount: newTotalAmount
        };
    }
    return defaultCartState;
}

const CartProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);
    const addItemToCartHandler = (item) => {
        dispatchCartAction({type: 'ADD', item: item});
    };

    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({type: 'REMOVE', id: id});
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    };

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>;
}

export default CartProvider;
