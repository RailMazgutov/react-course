import logoImg from '../assets/logo.jpg'
import Button from '../UI/Button'
import {useContext} from "react";
import CartContext from "../store/CartContext.jsx";
import UserProgressContext from "../store/UserProgressContext.jsx";

export default function Header() {
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);

    function handleCartClick() {
        userProgressCtx.showCart();
    }

    const cartItems = cartCtx.items.reduce((total, item) => {
        return total + item.quantity;
    }, 0);

    return <header id="main-header">
        <div id="title">
            <img src={logoImg}/>
            <h1>React Food</h1>
        </div>
        <nav>
            <Button textOnly onClick={handleCartClick}>Cart ({cartItems})</Button>
        </nav>
    </header>
}