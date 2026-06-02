  import React, { useContext, useEffect, useState } from 'react'
  import Login from './Components/Auth/Login'
  import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
  import AdminDashBoard from './Components/Dashboard/AdminDashBoard'
  import { getlocalstorage, setlocalstorage } from './Utils/localStorage'
  import { Authcontext } from './context/Authprovider'


  const App = () => {

    const [user, setUser] = useState(null)
    const authdata = useContext(Authcontext)
    const [loginuserdata, setloginuserdata] = useState(null)

    useEffect(() => {
    const logedInUser = localStorage.getItem('loggedInUser')
    if (logedInUser) {
      const userdata = JSON.parse(logedInUser)
      setUser(userdata.role)
      setloginuserdata(userdata.data)
    }
    }, [])

    const handelLogin = (email, password) => {
        if(email === "admin@example.com" && password === '123'){
          setUser("admin")    
          localStorage.setItem("loggedInUser",JSON.stringify({role:"admin" }))    
    }
    else if(authdata){
      const employee = authdata.employees.find((emp)=>
      emp.email === email && emp.password === password
    )
    if(employee){
      setUser("employee")
      setloginuserdata(employee)
      localStorage.setItem("loggedInUser",JSON.stringify({role:"employee" , data:employee }))
    }
    }
    else{ 
      alert("invalid credentials")
    }
  }

    return (
      <>
      
  {user ? '' : <Login handelLogin={handelLogin} />}
  {user == 'admin' ? <AdminDashBoard /> : (user == 'employee' ? <EmployeeDashboard data={loginuserdata} /> : null)}



      </>
    )
  }

  export default App