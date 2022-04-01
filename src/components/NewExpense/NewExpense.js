import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = (props) => {
  //we just neeed true/false state which says,should show form or not(initially false)
  const [isEditing, setIsEditing] = useState(false)

  // function saveExpenseDataHandler passing enteredexpensedata as argument,we creating object enteredData
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      //copy in the enteredexpensedata,which we pull out all the key values
      ...enteredExpenseData,
      //we add new key id
      id: Math.random().toString(),
    }
    props.onAddExpense(expenseData)
    // we want to close form when it is submitted
    setIsEditing(false)
  }
  //when we click the button,this function should trigger and set setIsEditing to true
  const startEditingHandler = () => {
    setIsEditing(true)
  }
  const stopEditingHandler = () => {
    setIsEditing(false)
  }

  return (
    <div className='new-expense'>
      {/* isEditing is use to control des 2 element,I simply have 2 dynamic expression down there,check if isediting is false,in which case we shown button & check if editing is true,in which case we shown form*/}
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expenses</button>
      )}
      {/*onSaveExpenseDate prop in this custom component receives this function(saveExpenseDataHandler) as value, is passed to ExpenseForm */}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseDate={saveExpenseDataHandler}
          onCancle={stopEditingHandler}
        />
      )}
      {/*this is how child component(ExpenseForm) communicate with parent component(NewExpense),saveExpenseDataHandler is executed in child component even tho it is not specified just pointed*/}
    </div>
  )
}

export default NewExpense
