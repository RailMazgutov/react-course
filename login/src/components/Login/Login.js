import styles from './Login.module.css';

import {useContext, useEffect, useReducer, useState} from 'react';

import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import AuthContext from '../../store/auth-context';

const emailReducer = (state, action) => {
    if (action.type === 'USER_INPUT') {
        return {value: action.value, isValid: action.value.includes('@')};
    }

    if (action.type === 'INPUT_BLUR') {
        return {value: state.value, isValid: state.value.includes('@')};
    }
    return {value: '', isValid: null};
}

const passwordReducer = (state, action) => {
    if (action.type === 'USER_INPUT') {
        return {value: action.value, isValid: action.value.trim().length > 6};
    }

    if (action.type === 'INPUT_BLUR') {
        return {value: state.value, isValid: state.value.trim().length > 6};
    }
    return {value: '', isValid: null};
}

const Login = (props) => {
    const ctx = useContext(AuthContext);

    const [formIsValid, setFormIsValid] = useState(false);

    const [emailState, dispatchEmail] = useReducer(emailReducer, {value: '', isValid: null});
    const [passwordState, dispatchPassword] = useReducer(passwordReducer, {value: '', isValid: null});

    const {isValid: emailIsValid} = emailState;
    const {isValid: passwordIsValid} = passwordState;

    useEffect(() => {
        const handler = setTimeout(() => {
            setFormIsValid(emailIsValid && passwordIsValid);
        }, 500);
        return () => { clearTimeout(handler); };
    }, [emailIsValid, passwordIsValid]);

    const emailChangeHandler = (event) => {
        dispatchEmail({value: event.target.value, type: "USER_INPUT"});
    };

    const passwordChangeHandler = (event) => {
        dispatchPassword({value: event.target.value, type: "USER_INPUT"});
    };

    const validateEmailHandler = () => {
        dispatchEmail({type: "INPUT_BLUR"});
    };

    const validatePasswordHandler = () => {
        dispatchPassword({type: "INPUT_BLUR"});
    };

    const submitHandler = (event) => {
        event.preventDefault();
        ctx.onLogin(emailState.value, passwordState.value);
    };

    return (
        <Card className={styles.login}>
            <form onSubmit={submitHandler}>
                <div
                    className={`${styles.control} ${
                        emailState.isValid === false ? styles.invalid : ''
                    }`}
                >
                    <label htmlFor="email">E-Mail</label>
                    <input
                        type="email"
                        id="email"
                        value={emailState.value}
                        onChange={emailChangeHandler}
                        onBlur={validateEmailHandler}
                    />
                </div>
                <div
                    className={`${styles.control} ${
                        passwordState.isValid === false ? styles.invalid : ''
                    }`}
                >
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={passwordState.value}
                        onChange={passwordChangeHandler}
                        onBlur={validatePasswordHandler}
                    />
                </div>
                <div className={styles.actions}>
                    <Button type="submit" className={styles.btn} disabled={!formIsValid}>
                        Login
                    </Button>
                </div>
            </form>
        </Card>
    );
};

export default Login;
