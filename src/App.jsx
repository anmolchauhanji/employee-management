import Employee from './Dashboard/employee'
import Login from './components/Auth/login'
import Admin from './Dashboard/Admin'
import { useContext, useState } from'react'
import { useEffect } from 'react'
import { getlocalStorage, setlocalStorage } from './Utils/Localstorage'
import {Authcontext} from './contexts/Authprovide'
function App() {
  useEffect(() => {
    setlocalStorage()
    getlocalStorage()
  
    
  })
  const [user, Setuser] = useState(null)
  const handleevent = (email,password) => {
if (email ==="E" && password ==="sher") {
  Setuser('employee')
  
} else if (email ==="A" && password ==="sher"){
  Setuser('admin')
}else {
  alert("invalid")
}
  }
  const data = useContext(Authcontext)
  console.log(data.employee); 
  return (

    <>
     {!user ?<Login handleevent={handleevent}/>:""}
     {user == 'employee'?<Employee/>:""}
     {user == 'admin'?<Admin/>:""}
    </>
  )
}

export default App