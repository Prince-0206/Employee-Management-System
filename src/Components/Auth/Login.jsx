import React, { useState } from 'react'

const Login = ({handelLogin}) => {


    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const submithandler = (e)=>{
        e.preventDefault()
        handelLogin(email,password)
        setemail('')
        setpassword('')
    }

  return (
    <div className='flex h-screen w-screen items-center justify-center p'> 
        <div className=' rounded-2xl border-2 border-emerald-600 p-20'>
           <form onSubmit={(e)=>{
            submithandler(e)
           }} className='flex flex-col items-center justify-center' >
            <input value={email} 
                   onChange={(e)=>{
                   setemail(e.target.value) 
            }} required className='text-white outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-grey-400' type="email" placeholder='Enter your email' />
            <input value={password}
                   onChange={(e)=>{
                    setpassword(e.target.value)
                   }}
                   required className='text-white outline-none mt-4 bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-grey-400' type="password" placeholder='Enter your password' />
            <button className='text-white outline-none mt-5 bg-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-white'>Log in</button>
           </form>
        </div>
    </div>
  )
}

export default Login