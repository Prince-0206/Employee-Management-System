import React from 'react'
import Header from '../Parts/Header'
import TaskDetails from '../Parts/TaskDetails'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = ({data}) => {
  return (
    <div className='p-10 bg-slate-900 h-screen'>
       <Header data={data}/>
       <TaskDetails data={data}/>
       <TaskList data={data}/>
    </div>
  )
}

export default EmployeeDashboard

{/* <h1>Welcome, {data?.name}</h1> */}