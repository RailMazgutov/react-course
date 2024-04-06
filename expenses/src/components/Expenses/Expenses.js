import './Expenses.css'

import { useState } from 'react';

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

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
            <ExpensesChart expenses={expenses} />
            <ExpensesList items={expenses}/>
        </Card>
    )
}

export default Expenses;