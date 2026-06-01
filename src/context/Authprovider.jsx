import React, { createContext, useEffect, useState } from 'react'
import { getlocalstorage } from '../Utils/localStorage'
export const Authcontext = createContext()

const Authprovider = ({children}) => {
    const [userdata, setuserdata] = useState(null)
    useEffect(() => {
      const {employees,admin} = getlocalstorage()
        setuserdata({employees , admin})
    },[]);
    
  return (
    <div>
        <Authcontext.Provider value={userdata}>
            {children}
        </Authcontext.Provider>
    </div>
  )
}

export default Authprovider