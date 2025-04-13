# Expense Tracker

A lightweight and responsive React-based expense tracker that allows users to add expenses, search/filter them in real time,view, and search through their spending all in one clean interface.

---

## Live Demo

👉 [Click here to view the live app](https://your-deployment-url.vercel.app)

---

## Features

- Add expenses using a simple form
- Filter/search expenses in real time
- Display expenses in a clean, styled table
- React component-based architecture with props and state management
- Built using Vite for fast dev experience
---

## How It Works

1. **App.jsx** holds the main state for `expenses`.
2. **ExpenseForm.jsx** allows users to add new expenses. On submission:
   - The expense is added to the existing `expenses` array via state.
3. **SearchExpense.jsx** receives the `expenses` as props:
   - Maintains a `searchTerm` state from user input.
   - Filters the original `expenses` array and creates `foundExpensesArray`.
   - Passes both `expenses` and `foundExpensesArray` down to `ExpenseTable.jsx`.
4. **ExpenseTable.jsx** receives filtered data and renders it in a table.

---

## Technologies Used

- React
- Vite
- Tailwind CSS 
- JavaScript (ES6+)

---

## How to Use

Clone the repo:

   ```bash
   git clone https://github.com/yourusername/expense-tracker-app.git
   cd expense-tracker-app

Install dependencies:

   ```bash
npm install

```
Run the app:

   ```bash
npm run dev
Visit http://localhost:5173 to view the app.

```

-**To configure Tailwind css:* follow instructions at: https://tailwindcss.com/docs/installation/using-vite

---

## Project Structure

```

expense-tracker/
├── public/
├── src/
│   ├── assets/
│   │   └── my-icon.svg
│   ├── components/
│   │   ├── ExpenseTable.jsx
│   │   └── SearchExpense.jsx
│   ├── App.jsx
│   ├── ExpenseForm.jsx
│   ├── index.css
│   ├── main.jsx
├── index.html
├── tailwind.config.js
├── vite.config.js
├── package.json
└── README.md


```


## Component Code (Mock example)

   ```bash
// SearchExpense.jsx 

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

```

export default SearchExpense;
### Contact

Have feedback, suggestions, or want to collaborate?

> **Email:** dedanomondi2@gmail.com  
> **GitHub:** [@DedanOpiyo](https://github.com/DedanOpiyo)  
> **LinkedIn:** [Dedan Opiyo]


### License
This project is open source and available under the MIT License.