import React from 'react'
import Header from '../Parts/Header'
import Createtask from '../Parts/Createtask'
import Alltask from '../Parts/Alltask'

const AdminDashBoard = (props) => {
  return (
    <div className='min-h-screen w-full bg-[#0F172A] p-6 md:p-10 text-white font-sans overflow-y-auto selection:bg-indigo-500/30'>
        <Header changeuser={props.changeuser} />
        <Createtask />
        <Alltask />
    </div>
  )
}

export default AdminDashBoard