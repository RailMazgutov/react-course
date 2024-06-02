import {useContext} from "react";
import CartContext from "../store/CartContext";
import {currencyFormatter} from "../util/formating";
import Input from "../UI/Input";
import Button from "../UI/Button";
import UserProgressContext from "../store/UserProgressContext";
import Modal from "../UI/Modal.jsx";
import useHttp from "../hooks/useHttp.js";
import Error from "./Error.jsx";

const requestConfig = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    }
}

export default function Checkout() {
    const cartCtx = useContext(CartContext);
    const cartTotal = cartCtx.items.reduce((runningTotal, item) => runningTotal + item.quantity * item.price, 0);

    const {data, isLoading, error, sendRequest, clearData} = useHttp('http://localhost:3000/orders', requestConfig);

    const userProgressCtx = useContext(UserProgressContext);

    function handleCloseCheckout() {
        userProgressCtx.hideCheckout();
    }

    function handleCheckout(event) {
        event.preventDefault();

        const fd = new FormData(event.target);
        const customerData = Object.fromEntries(fd.entries());

        sendRequest(JSON.stringify({
            order: {
                items: cartCtx.items,
                customer: customerData
            }
        }));
    }

    function handleFinish() {
        userProgressCtx.hideCheckout();
        cartCtx.clearCart();
        clearData();
    }

    let actions = (
        <>
            <Button textOnly type="button" onClick={handleCloseCheckout}>Close</Button>
            <Button>Submit Order</Button>
        </>);

    if (isLoading) {
        actions = <span>Sending order data....</span>
    }

    if (data && !error) {
        return <Modal open={userProgressCtx.progress === 'checkout'} onClose={handleCloseCheckout}>
            <h2>Success!</h2>
            <p>Your order was submitted successfully.</p>
            <p>We will get back to you!</p>
            <p className="modal-actions">
                <Button onClick={handleFinish}>Okay</Button>
            </p>
        </Modal>
    }

    return <Modal open={userProgressCtx.progress === "checkout"} onClose={handleCloseCheckout}>
        <form onSubmit={handleCheckout}>
            <h2>Checkout</h2>
            <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>

            <Input label="Full name" type="text" id="name"/>
            <Input label="E-Mail Address" type="email" id="email"/>
            <Input label="Street" type="text" id="street"/>
            <div className="control-row">
                <Input label="Postal Code" type="text" id="postal-code"/>
                <Input label="Ciity" type="text" id="city"/>
            </div>

            {error && <Error title="Failed to submit order" description="error" /> }
            <p className="modal-actions">
                {actions}
            </p>
        </form>
    </Modal>;
}