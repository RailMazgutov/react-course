import styles from './AddUser.module.css'

import {useState} from 'react';

import Card from "../UI/Card";
import Button from '../UI/Button';

const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const formSubmitHandler = (event) => {
        event.preventDefault();
        if (enteredAge.trim().length === 0 || +enteredAge < 1) {
            return;
        }
        if (enteredUsername.trim().length === 0) {
            return;
        }
        console.log(enteredUsername, enteredAge);
        setEnteredUsername('');
        setEnteredAge('');
    };

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    };

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    return (
        <Card className={styles.input}>
            <form onSubmit={formSubmitHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler}/>
                <label htmlFor="age">Age (Years)</label>
                <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler}/>
                <Button type="submit">Add User</Button>
            </form>
        </Card>);
}

export default AddUser;
