import './Expenses.css'

import { useState } from 'react';

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');
    
    const filterChageHandler = year => {
        setFilteredYear(year);
    }

    const expenses = props.expenses;
    return (
        <Card className='expenses'>
            <ExpensesFilter onChangeFilter={filterChageHandler} selected={filteredYear}/>
            {expenses.map(expense => <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date}/>)}
        </Card>
    )
}

export default Expenses;