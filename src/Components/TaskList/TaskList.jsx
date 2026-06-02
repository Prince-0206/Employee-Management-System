    import React from 'react'
    import AcceptTask from './AcceptTask'
    import CompleteTask from './CompleteTask'
    import NewTask from './NewTask'
    import FailedTask from './FailedTask'

    const TaskList = ({data}) => {
        console.log(data)
    return (
    <div 
    id='tasklist'  
    className='overflow-x-auto flex items-center justify-start gap-5 flex-nowrap h-[55%] py-5 px-2 w-full mt-10 [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-[#111111] [&::-webkit-scrollbar-thumb]:bg-gray-800 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-gray-700'
    >
        {data.tasks.map((elem , idx)=>{
            if(elem.active){
                return <AcceptTask key={idx} data={elem} />
            }
            if(elem.newTask){
                    return <NewTask key={idx} data={elem} />
            }
                if(elem.completedTask){
                    return <CompleteTask key={idx} data={elem} />
                }
                if(elem.failedTask){
                    return <FailedTask key={idx} data={elem} />
                }
            
            return null;
        })}
    </div>
    )
    }

    export default TaskList