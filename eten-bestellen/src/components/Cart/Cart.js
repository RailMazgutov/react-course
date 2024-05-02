import styles from './Cart.module.css'
import Modal from "../UI/Modal";
import {useContext} from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem/CartItem";

const Cart = (props) => {
    const cartCtx = useContext(CartContext);

    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    };

    const cartItemAddHandler = (item) => {
        cartCtx.addItem({
            ...item,
            amount: 1
        });
    };

    const cartItems = (
        <ul className={styles['cart-items']}>
            {cartCtx.items.map(item =>
                <li>
                    <CartItem
                        key={item.id}
                        name={item.name}
                        price={item.price}
                        amount={item.amount}
                        onRemove={cartItemRemoveHandler.bind(null, item.id)}
                        onAdd={cartItemAddHandler.bind(null, item)}
                        />
                </li>)}
        </ul>);

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;
    return <Modal onClick={props.onClose}>
        {cartItems}
        <div className={styles.total}>
            <span>Total amount</span>
            <span>{totalAmount}</span>
        </div>
        <div className={styles.actions}>
            <button className={styles['button--alt']} onClick={props.onClose}>Close</button>
            {hasItems && <button className={styles.button}>Order</button>}
        </div>
    </Modal>;
}

export default Cart;
