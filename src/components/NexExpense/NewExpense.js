import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const expenseDataSavedHandler = expense => {
        const newExpense = {
            ...expense,
            id: Math.random().toString()
        }
        props.onExpenseAdded(newExpense)
    }
    return (
        <div className='new-expense'>
            <ExpenseForm onExpenseDataSaved={expenseDataSavedHandler}/>
        </div>
    );
}

export default NewExpense;