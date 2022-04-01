import React, { useState } from 'react'
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense'

function App() {
  const DUMMY_EXPENSES = [
    {
      id: 'e1',
      title: 'Books',
      amount: 14.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Keyboard',
      amount: 24.67,
      date: new Date(2022, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ]
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      // ...spread operator to pull out all the existing array of element and update with new element
      return [expense, ...prevExpenses]
    })
  }

  return (
    <div>
      {/* we pass pointer at this function to newExpense,so ie inside of NewExpense we can call this function & pass ie expensedata up to the App component */}
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  )
}

export default App
