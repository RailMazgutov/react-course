import styles from './AddUser.module.css'

import {useState, useRef} from 'react';

import Card from "../UI/Card";
import Button from '../UI/Button';
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
    const [error, setError] = useState();

    const usernameInputRef = useRef();
    const ageInputRef = useRef();

    const formSubmitHandler = (event) => {
        event.preventDefault();
        const enteredUsername = usernameInputRef.current.value;
        const enteredAge = ageInputRef.current.value;
        if (enteredAge.trim().length === 0 || enteredUsername.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (not empty)'
            })
            return;
        }
        if (+enteredAge < 1) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid age (>0)'
            })
            return;
        }
        props.onAddUser({name: enteredUsername, age: enteredAge, id:Math.random.toString()});
        usernameInputRef.current.value = '';
        ageInputRef.current.value = '';
    };

    const errorHandler = () => {
        setError(null);
    }

    return (
        <>
            {error && <ErrorModal onConfirm={errorHandler} title={error.title} message={error.message}/>}
            <Card className={styles.input}>
                <form onSubmit={formSubmitHandler}>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" ref={usernameInputRef}/>
                    <label htmlFor="age">Age (Years)</label>
                    <input id="age" type="number" ref={ageInputRef}/>
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </>);
}

export default AddUser;
