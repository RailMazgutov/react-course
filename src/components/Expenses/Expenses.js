import './Expenses.css'

import { useState } from 'react';

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');
    
    const filterChangeHandler = year => {
        setFilteredYear(year);
    }

    const expenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <Card className='expenses'>
            <ExpensesFilter onChangeFilter={filterChangeHandler} selected={filteredYear}/>
            <ExpensesList items={expenses}/>
        </Card>
    )
}

export default Expenses;