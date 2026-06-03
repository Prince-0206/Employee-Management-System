import React from 'react'
import Header from '../Parts/Header'
import TaskDetails from '../Parts/TaskDetails'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {
  return (
    <div className='p-10 bg-slate-900 h-screen'>
       <Header changeuser={props.changeuser} data={props.data}/>
       <TaskDetails data={props.data}/>
       <TaskList data={props.data}/>
    </div>
  )
}

export default EmployeeDashboard

{/* <h1>Welcome, {data?.name}</h1> */}