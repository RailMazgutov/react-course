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
            <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}/>
            <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}/>
            <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}/>
            <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}/>
        </Card>
    )
}

export default Expenses;