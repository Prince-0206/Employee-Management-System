import React from 'react'

const TaskDetails = ({data}) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 gap-5 mt-10 w-full'>
        <div className='rounded-xl py-6 px-8 bg-linear-to-br from-blue-600 to-blue-700 border border-blue-500/10 shadow-lg shadow-blue-950/20'>
            <h2 className='text-3xl font-bold tracking-tight'>{data.taskCounts.newTask}</h2>
            <h3 className='text-lg font-medium text-blue-100 mt-1'>New Task</h3>
        </div>
        <div className='rounded-xl py-6 px-8 bg-linear-to-br from-emerald-600 to-emerald-700 border border-emerald-500/10 shadow-lg shadow-emerald-950/20'>
            <h2 className='text-3xl font-bold tracking-tight'>{data.taskCounts.completed}</h2>
            <h3 className='text-lg font-medium text-emerald-100 mt-1'>Completed Task</h3>
        </div>
        <div className='rounded-xl py-6 px-8 bg-linear-to-br from-yellow-600 to-yellow-700 border border-yellow-500/10 shadow-lg shadow-yellow-950/20'>
            <h2 className='text-3xl font-bold tracking-tight'>{data.taskCounts.active}</h2>
            <h3 className='text-lg font-medium text-yellow-100 mt-1'>Accepted Task</h3>
        </div>
        <div className='rounded-xl py-6 px-8 bg-linear-to-br from-rose-600 to-rose-700 border border-rose-500/10 shadow-lg shadow-rose-950/20'>
            <h2 className='text-3xl font-bold tracking-tight'>{data.taskCounts.failed}</h2>
            <h3 className='text-lg font-medium text-rose-100 mt-1'>Failed Task</h3>
        </div>
    </div>
  )
}

export default TaskDetails