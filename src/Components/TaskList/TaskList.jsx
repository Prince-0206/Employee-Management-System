import React from 'react'
import AcceptTask from './AcceptTask'
import CompleteTask from './CompleteTask'
import NewTask from './NewTask'
import FailedTask from './FailedTask'

const TaskList = ({ data }) => {
    return (
        <div id='tasklist' className='overflow-x-auto flex items-stretch justify-start gap-6 flex-nowrap h-[55%] py-4 px-1 w-full mt-8 [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-slate-800 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-indigo-500/30 snap-x snap-mandatory scroll-smooth'>
            {data.tasks.map((elem, idx) => {
                if (elem.newTask) {
                    return <NewTask key={idx} data={elem} />
                }
                if (elem.active) {
                    return <AcceptTask key={idx} data={elem} />
                }
                if (elem.completedTask) {
                    return <CompleteTask key={idx} data={elem} />
                }
                if (elem.failedTask) {
                    return <FailedTask key={idx} data={elem} />
                }
                return null
            })}
        </div>
    )
}

export default TaskList