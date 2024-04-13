import styles from './AddUser.module.css'

const AddUser = (props) => {
    const formSubmitHandler = (event) => {
        event.preventDefault();
    };
    return (<form onSubmit={formSubmitHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text"/>
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number"/>
        <button type="submit">Add User</button>
    </form>);
}

export default AddUser;
