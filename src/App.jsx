import Employee from './Dashboard/employee'
import Login from './components/Auth/login'
import Admin from './Dashboard/Admin'
import { useEffect } from 'react'
import { getlocalStorage, setlocalStorage } from './Utils/Localstorage'
function App() {
  useEffect(() => {
    // setlocalStorage()
    getlocalStorage()
  
    
  })
  
  return (
    <>
     <Login/> 
     {/* <Employee/> 
    <Admin/> */}
    </>
  )
}

export default App