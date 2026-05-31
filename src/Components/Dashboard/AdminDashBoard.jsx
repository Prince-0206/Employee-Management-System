import React from 'react'
import Header from '../Parts/Header'
import Createtask from '../Parts/Createtask'

const AdminDashBoard = () => {
  return (
    <div className='h-screen w-full bg-[#111111] p-10 text-white font-sans'>
      <Header />
    <Createtask />
     
    </div>
  )
}

export default AdminDashBoard