import React, { useState } from 'react'

const Createtask = () => {

  const [taskTitle, settaskTitle] = useState('')
  const [taskDate, settaskDate] = useState('')
  const [assignto, setassignto] = useState('')
  const [category, setcategory] = useState('')
  const [taskDescription, settaskDescription] = useState('')  

  const [task, settask] = useState({})

const submithandler = (e)=>{
  e.preventDefault()
   settask({taskTitle, taskDate, category, taskDescription , active:false, newTask:true, completedTask:false, failedTask:false})

}

  return (
    <div className='mt-10 bg-[#1C1C1C] p-8 rounded-xl shadow-lg'>
        <form onSubmit={(e)=>{
          submithandler(e)
        }} className='flex flex-wrap w-full items-start justify-between'>
          
          <div className='w-[45%] flex flex-col gap-4'>
            <div>
              <label className='text-sm text-gray-300 block mb-1 font-medium'>Task Title</label>
              <input 
              value = {taskTitle}
              onChange={(e)=>[
                settaskTitle(e.target.value)
              ]}  
                className='w-full bg-transparent border border-gray-600 rounded px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 transition' 
                type="text" 
                placeholder='Make a UI design' 
              />
            </div>

            <div>
              <label className='text-sm text-gray-300 block mb-1 font-medium'>Date</label>
              <input 
              value={taskDate}
              onChange={(e)=>[
                settaskDate(e.target.value)
              ]}
                className='w-full bg-transparent border border-gray-600 rounded px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 transition' 
                type="date" 
              />
            </div>

            <div>
              <label className='text-sm text-gray-300 block mb-1 font-medium'>Assign to</label>
              <input 
              value={assignto}
              onChange={(e)=>[
                setassignto(e.target.value)
              ]}
                className='w-full bg-transparent border border-gray-600 rounded px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 transition' 
                type="text" 
                placeholder='employee name' 
              />
            </div>

            <div>
              <label className='text-sm text-gray-300 block mb-1 font-medium'>Category</label>
              <input 
              value={category}
              onChange={(e)=>[
                setcategory(e.target.value)
              ]}
                className='w-full bg-transparent border border-gray-600 rounded px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 transition' 
                type="text" 
                placeholder='design, dev, etc' 
              />
            </div>
          </div>

          <div className='w-[45%] flex flex-col gap-4 h-full justify-between'>
            <div className='flex flex-col h-full'>
              <label className='text-sm text-gray-300 block mb-1 font-medium'>Description</label>
              <textarea 
              value={taskDescription}
              onChange={(e)=>[
                settaskDescription(e.target.value)
              ]}
                className='w-full h-48 bg-transparent border border-gray-600 rounded px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 transition resize-none'
                name="" 
                id="" 
                placeholder='Detailed description of the task...'
              ></textarea>
            </div>

            <button className='w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-4 rounded transition-all duration-200 mt-4 shadow-md'>
              Create Task
            </button>
          </div>

        </form>
      </div>
  )
}

export default Createtask