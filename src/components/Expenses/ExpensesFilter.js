import React from 'react'
import './ExpensesFilter.css'

const ExpensesFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    //here we are passing selected year as props to onChangeFilter,which is in expenses.js which hold function FilterChangeHandler
    props.onChangeFilter(event.target.value)
  }
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter By Year</label>
        {/* listening to the change event and forward the data to the highlevel component(expenses.js) &in that component, store data in the state */}
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  )
}
export default ExpensesFilter
