import React, { useState } from 'react'

const Header = () => {
//   const [username, setusername] = useState('')
//   if(!username)
//   setusername("hello admin")
// else 
//     {setusername(data.firstName)}
const logout = () => {
    localStorage.removeItem("loggedInUser")
    window.location.reload()
}
  return (
    <div className='flex items-end justify-between border-b border-gray-800 pb-6'>
        <h1 className='text-xl font-medium text-gray-400'>Hello <br /><span className='text-3xl font-bold text-white tracking-wide mt-1 block'>username</span> </h1>
        <button onClick={logout} className='bg-rose-600 hover:bg-rose-700 active:scale-[0.98] transition-all text-sm font-semibold text-white px-5 py-2.5 rounded-xl shadow-md shadow-rose-950/20 tracking-wide'>Log Out</button>
    </div>
  )
}

export default Header