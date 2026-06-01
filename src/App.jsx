import React, { useContext, useEffect, useState } from 'react'
import Login from './Components/Auth/Login'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
import AdminDashBoard from './Components/Dashboard/AdminDashBoard'
import { getlocalstorage, setlocalstorage } from './Utils/localStorage'
import { Authcontext } from './context/Authprovider'


const App = () => {

  const [user, setUser] = useState(null)
  const authdata = useContext(Authcontext)
  useEffect(() => {
    if(authdata){
      const logedInUser = localStorage.getItem('loggedInUser')
      if(logedInUser){
        setUser(logedInUser.role)
      }
    }
  }, [authdata])
  
  

  const handelLogin = (email, password) => {
      if(authdata && authdata.admin.find((adm)=>
    adm.email === email && adm.password === password
  )){
        setUser("admin")    
        localStorage.setItem("loggedInUser",JSON.stringify({email,password,role:"admin"}))    
  }
  else if(authdata && authdata.employees.find((emp)=>
    emp.email === email && emp.password === password
  )){
    setUser("employee")
    localStorage.setItem("loggedInUser",JSON.stringify({email,password,role:"employee"}))
  }
  else{
    alert("invalid credentials")
  }
}

  return (
    <>
     
{user ? '' : <Login handelLogin={handelLogin} />}
{user == 'admin' ? <AdminDashBoard /> : <EmployeeDashboard />}

    </>
  )
}

export default App