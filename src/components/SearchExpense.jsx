import React from 'react';
import { useState } from 'react';
import ExpenseTable from './ExpenseTable';

export default function searchExpense({expenses}) {

  const [searchTerm, setSearchTerm] = useState("");

  const foundExpensesArray = expenses.filter((expense) => expense.expenseCategory.includes(searchTerm) || expense.expenseDescription.includes(searchTerm));

  return (
    <div className='flex flex-col gap-1'>    
      <form className="max-w-md mx-auto ml-0">   
          <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                      <path stroke="currentColor" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                  </svg>
              </div>
              <input type="search" onChange={(e) => setSearchTerm(e.target.value)} id="default-search" className="appearance-none focus:outline-none block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search expenss" required />
          </div>
      </form>

      <ExpenseTable expenses={expenses} onlyFoundExpenses={foundExpensesArray}/>
    </div>
  )
};
