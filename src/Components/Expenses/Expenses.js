import React from "react";

import ExpensesFilter from "./ExpensesFilter";

import ExpensesList from './ExpensesList.js';

import './Expenses.css'
import ExpensesChart from "./ExpensesChart";
import './Expenses.css';

import { useState } from 'react';

function Expenses(props)
{

    const [filteredYear, setFilteredYear] = useState('2022');

    const filterChangedHandler = (slectedYear) =>
    {
      setFilteredYear(slectedYear);
      console.log(filteredYear);
    }

    const filteredExpenses = props.items.filter(expense =>
      {
          return expense.date.getFullYear().toString() === filteredYear;
      });

      

    return(     
          <div className="expenses">
            <ExpensesFilter 
             selected={filteredYear} 
             onchangeFilter={filterChangedHandler}>
            </ExpensesFilter>
            <ExpensesChart expenses={filteredExpenses}/> 
          <ExpensesList items = {filteredExpenses} />
        </div>
        
      );

}

export default Expenses;