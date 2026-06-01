import React from 'react'
import Header from '../Parts/Header'
import Createtask from '../Parts/Createtask'
import Alltask from '../Parts/Alltask'

const AdminDashBoard = () => {
  return (
    <div className='h-screen w-full bg-[#111111] p-10 text-white font-sans'>
      <Header />
    <Createtask />
    <Alltask />
     
    </div>
  )
}

export default AdminDashBoard