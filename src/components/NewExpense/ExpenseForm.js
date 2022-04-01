import React, { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {
  // updating value by using useState by passing 2 variables by destructer,eneteredTitle is initial value which is empty & setEnteredTitle function holds value typed by user in textbox
  const [enteredTitle, setEnteredTitle] = useState('')
  const [enteredAmount, setEnteredAmount] = useState('')
  const [enteredDate, setEnteredDate] = useState('')

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value)
  }
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value)
  }
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value)
  }
  const submitHandler = (event) => {
    // preventDefault is built into javascript bhaviour,we can prevent the default of this request being sent,since request is not sent the page will not reload beacuse we stay on currently loaded page without sending any request anywhere
    event.preventDefault()
    //we create expenseData object,here we combine all data entered by user,set user enteredtitle into title,into anount,into date
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      // we pass date string into dateObject
      date: new Date(enteredDate),
    }
    //the value we get on onSaveExpenseDate key will be the function
    props.onSaveExpenseDate(expenseData)
    // when we submit the form we can set back to empty string by calling setEnteredTitle ,by doing that we can overide what the user entered after form was submited & therefor clear the input
    setEnteredTitle('')
    setEnteredAmount('')
    setEnteredDate('')
  }
  // ALTERNATIVE APPROACH TO WRITE WHEN WE NEED TO DEPEND ON PREVIOUS STATE OBJECTS & BY using single useState
  // const [userInput, setUserInput] = useSate({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate:'',
  // });
  // const titleChangeHandler = (event) => {
  //   setUserInput((prevState) => {
  //     return { ...prevState, enteredTitle: event.target.value};
  //   });
  // }
  // same way implies to other two enteredAmount & enteredDate

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          {/* for inputs we just not look after changes but we can pass we value back into input so we can reset or change input programatically by,value: this will set internal value property &we can set it to new value  */}
          <input
            type='text'
            value={enteredTitle}
            // we are listening to user input,changes to title input & whenever user types here this function execute & here we get this default event object
            onChange={titleChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2021-01-01'
            max='2022-12-31'
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>

      <div className='new-expense__actions'>
        {/* when form is submited we also stop editing */}
        <button type='button' onClick={props.onCancle}>
          Cancle
        </button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm
