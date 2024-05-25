import logoImg from '../assets/logo.jpg'
import Button from '../UI/Button'
import {useContext} from "react";
import CartContext from "../store/CartContext.jsx";

export default function Header() {
    const cartCtx = useContext(CartContext);
    return <header id="main-header">
        <div id="title">
            <img src={logoImg}/>
            <h1>React Food</h1>
        </div>
        <nav>
            <Button textOnly>Cart ({cartCtx.items.reduce((total, item) => {
                return total + item.quantity;
            }, 0)})</Button>
        </nav>
    </header>
}