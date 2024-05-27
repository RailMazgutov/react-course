import {createContext, useState} from "react";

const UserProgressContext = createContext({
    progress: "",
    showCart: () => {
    },
    hideCart: () => {
    },
    showCheckout: () => {
    },
    hideCheckout: () => {
    },
});

export default UserProgressContext;

export function UserProgressContextProvider({children}) {
    const [userProgress, setUserProgress] = useState('');

    function showCart() {
        setUserProgress('cart');
    }

    function hideCart() {
        setUserProgress('');
    }

    function showCheckout() {
        setUserProgress('checkout');
    }

    function hideCheckout() {
        setUserProgress('');
    }

    return <UserProgressContext.Provider
        value={{
            progress: userProgress,
            showCart: showCart,
            hideCart: hideCart,
            showCheckout: showCheckout,
            hideCheckout: hideCheckout,
        }}>
        {children}
    </UserProgressContext.Provider>;
}