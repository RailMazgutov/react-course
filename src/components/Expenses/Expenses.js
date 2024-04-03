import './Expenses.css'

import { useState } from 'react';

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');
    
    const filterChangeHandler = year => {
        setFilteredYear(year);
    }

    const expenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });
    let expensesContent = <p>No expenses.</p>
    if (expenses.length > 0) {
        expensesContent = expenses.map(expense =>
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}/>)
    }

    return (
        <Card className='expenses'>
            <ExpensesFilter onChangeFilter={filterChangeHandler} selected={filteredYear}/>
            {expensesContent}
        </Card>
    )
}

export default Expenses;