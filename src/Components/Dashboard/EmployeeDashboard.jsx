import React from 'react'
import Header from '../Parts/Header'
import TaskDetails from '../Parts/TaskDetails'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = () => {
  return (
    <div className='p-10 bg-slate-900 h-screen'>
       <Header />
       <TaskDetails />
       <TaskList />
    </div>
  )
}

export default EmployeeDashboard