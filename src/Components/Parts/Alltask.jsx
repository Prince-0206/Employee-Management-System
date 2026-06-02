import React, { useContext } from 'react'
import { Authcontext } from '../../context/Authprovider'

const Alltask = () => {
    const authdata = useContext(Authcontext)
    
  return (
    <div className='bg-[#111827] border border-slate-800 p-6 mt-6 rounded-2xl shadow-2xl shadow-black/40 w-full'>
        
        {/* Table Header Row - Vibrant Indigo Tint */}
        <div className='bg-linear-to-r from-indigo-950/40 to-slate-900/40 border border-indigo-500/20 py-3.5 px-5 flex justify-between items-center rounded-xl mb-4 backdrop-blur-sm'>
            <h2 className='w-1/5 text-xs font-bold text-indigo-300 uppercase tracking-widest text-left'>Employee Name</h2>
            <h3 className='w-1/5 text-xs font-bold text-blue-400 uppercase tracking-widest text-center'>New Task</h3>
            <h5 className='w-1/5 text-xs font-bold text-yellow-400 uppercase tracking-widest text-center'>Active Task</h5>
            <h5 className='w-1/5 text-xs font-bold text-emerald-400 uppercase tracking-widest text-center'>Completed</h5>
            <h5 className='w-1/5 text-xs font-bold text-rose-400 uppercase tracking-widest text-center'>Failed</h5>
        </div>
        
        {/* Table Body Container */}
        <div className='max-h-85 overflow-y-auto pr-1 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-slate-800 [&::-webkit-scrollbar-thumb]:rounded-full'>
            {authdata.employees.map((elem, idx)=>{
                return (
                    <div key={idx} className='bg-[#1f2937]/40 hover:bg-[#1f2937]/80 border border-slate-800 hover:border-indigo-500/30 py-3.5 px-5 flex justify-between items-center rounded-xl mt-3 transition-all duration-300 shadow-sm hover:shadow-indigo-500/5 group'>
                        
                        {/* Employee Name with a soft slate-tint text */}
                        <h2 className='w-1/5 text-base font-semibold text-slate-100 group-hover:text-indigo-300 transition-colors text-left'>{elem.firstName}</h2>
                        
                        {/* New Task - Glassmorphic Blue Badge Look */}
                        <div className='w-1/5 flex justify-center'>
                            <span className='w-12 py-1 text-center font-bold text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-lg text-sm group-hover:scale-105 transition-transform duration-200'>
                                {elem.taskCounts.newTask}
                            </span>
                        </div>
                        
                        {/* Active Task - Glassmorphic Yellow Badge Look */}
                        <div className='w-1/5 flex justify-center'>
                            <span className='w-12 py-1 text-center font-bold text-yellow-400 bg-yellow-500/10 border border-yellow-500/20 rounded-lg text-sm group-hover:scale-105 transition-transform duration-200'>
                                {elem.taskCounts.active}
                            </span>
                        </div>
                        
                        {/* Completed Task - Glassmorphic Emerald Badge Look */}
                        <div className='w-1/5 flex justify-center'>
                            <span className='w-12 py-1 text-center font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-lg text-sm group-hover:scale-105 transition-transform duration-200'>
                                {elem.taskCounts.completed}
                            </span>
                        </div>
                        
                        {/* Failed Task - Glassmorphic Rose Badge Look */}
                        <div className='w-1/5 flex justify-center'>
                            <span className='w-12 py-1 text-center font-bold text-rose-400 bg-rose-500/10 border border-rose-500/20 rounded-lg text-sm group-hover:scale-105 transition-transform duration-200'>
                                {elem.taskCounts.failed}
                            </span>
                        </div>

                    </div>
                )
            })}
        </div>
        
    </div>
  )
}

export default Alltask