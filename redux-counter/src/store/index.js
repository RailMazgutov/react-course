import {configureStore} from '@reduxjs/toolkit'
import authReducer from "./auth";
import counterReducer from "./counter";

const store = configureStore({
    reducer: {
        counter: authReducer,
        auth: counterReducer
    }
});

export default store;
