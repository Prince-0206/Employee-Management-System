import React from 'react'

const NewTask = ({data}) => {
  return (
    <div className='shrink-0 h-full w-75 p-6 bg-[#1C1C1C] border border-blue-500/10 rounded-2xl flex flex-col justify-between hover:border-blue-500/30 transition-all duration-300 shadow-xl group'>
        <div>
            <div className='flex justify-between items-center'>
                <span className='px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-md'>
                    {data.category}
                </span>
                <span className='text-xs font-medium text-gray-500'>
                    {data.taskDate}
                </span>
            </div>
            
            <h2 className='mt-5 text-xl font-semibold text-gray-100 group-hover:text-white transition-colors duration-200'>
                {data.taskTitle}
            </h2>
            
            <p className='text-sm mt-2 text-gray-400 leading-relaxed lines-clamp-3'>
                {data.taskDescription}
            </p>
        </div>

        <div className='mt-6 w-full'>
            <button className='w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs uppercase tracking-wider py-2.5 px-4 rounded-xl transition-all duration-200 shadow-md shadow-blue-600/10 active:scale-[0.98]'>
                Accept Task
            </button>
        </div>
    </div>
  )
}

export default NewTask