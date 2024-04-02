import './ExpenseForm.css'
import {useState} from "react";

const ExpenseForm = () => {
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

    return <form>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text' onChange={handleTitleChange}/>
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' min='0.01' step='0.01' onChange={handleAmountChange}/>
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' onChange={handleDateChange}/>
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type='submit'>Add Expense</button>
        </div>
    </form>
}

export default ExpenseForm;