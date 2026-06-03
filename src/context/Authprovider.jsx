import React, { createContext, useEffect, useState } from 'react'
import { getlocalstorage, setlocalstorage } from '../Utils/localStorage'
export const Authcontext = createContext()

const Authprovider = ({children}) => {
    const [userdata, setuserdata] = useState(null)
    useEffect(() => {
      setlocalstorage()
      const {employees} = getlocalstorage()
        setuserdata(employees)
    },[]);
    
  return (
    <div>
        <Authcontext.Provider value={[userdata , setuserdata]}>
            {children}
        </Authcontext.Provider>
    </div>
  )
}

export default Authprovider