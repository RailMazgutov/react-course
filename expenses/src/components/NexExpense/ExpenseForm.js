import './ExpenseForm.css'
import {useState} from "react";

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const handleDateChange = (event) => {
        setEnteredDate(event.target.value)
    }
    const handleAmountChange = (event) => {
        setEnteredAmount(event.target.value)
    }
    const handleTitleChange = (event) => {
        setEnteredTitle(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const expense = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        props.onExpenseDataSaved(expense);
        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')
    }

    return <form onSubmit={handleSubmit}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text' value={enteredTitle} onChange={handleTitleChange}/>
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' value={enteredAmount} min='0.01' step='0.01' onChange={handleAmountChange}/>
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' value={enteredDate} onChange={handleDateChange}/>
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type="button" onClick={props.onCancel}>Cancel</button>
            <button type='submit'>Add Expense</button>
        </div>
    </form>
}

export default ExpenseForm;