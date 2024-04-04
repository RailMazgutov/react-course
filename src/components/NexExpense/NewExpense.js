import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";
import {useState} from "react";

const NewExpense = (props) => {
    const [isEditing, setEditing] = useState(false);
    const expenseDataSavedHandler = expense => {
        const newExpense = {
            ...expense,
            id: Math.random().toString()
        }
        setEditing(false);
        props.onExpenseAdded(newExpense)
    }

    const expenseEditingCanceledHandler = () => {
        setEditing(false);
    };

    const addExpenseHandler = () => {
        setEditing(true);
    };

    return (
        <div className='new-expense'>
            {!isEditing && <button type="button" onClick={addExpenseHandler}>Add Expense</button>}
            {isEditing &&
                <ExpenseForm
                    onCancel={expenseEditingCanceledHandler}
                    onExpenseDataSaved={expenseDataSavedHandler}/>
            }
        </div>
    );
}

export default NewExpense;