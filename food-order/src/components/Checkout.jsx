import { useContext } from "react";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../util/formating";
import Input from "../UI/Input";
import Button from "../UI/Button";
import UserProgressContext from "../store/UserProgressContext";

export default function Checkout() {
    const cartCtx = useContext(CartContext);
    const cartTotal = cartCtx.items.reduce((runningTotal, item) => runningTotal + item.quantity * item.price, 0);

    const userProgressCtx = useContext(UserProgressContext);

    function handleCloseCheckout() {
        userProgressCtx.hideCheckout();
    }

    function handleCheckout(event) {
        event.preventDefault();
    }

    return <Modal open={userProgressCtx.progress === "checkout"} onClose={handleCloseCheckout}>
        <form>
            <h2>Checkout</h2>
            <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>

            <Input label="Full name" type="text" id="full-name"/>
            <Input label="E-Mail Address" type="email" id="email"/>
            <Input label="Street" type="text" id="street"/>
            <div className="control-row">
                <Input label="Postal Code" type="text" id="postal-code"/>
                <Input label="Ciity" type="text" id="city"/>
            </div>

            <p className="modal-actions">
                <Button textOnly type="button" onClick={handleCloseCheckout}>Close</Button>
                <Button onClick={handleCheckout}>Submit Order</Button>
            </p>
        </form>
    </Modal>;
}