
import { useState } from 'react'
function login() {
  const [email, Setemail] = useState("")
  const [password, Setpassword] = useState("")
  const prevent = (event) => {
    event.preventDefault()
    console.log(`email is ${email}`);
    console.log(`password is ${password}`);
    Setemail("")
      Setpassword("")
    
  }
  return (
    <>
    <div className='w-full h-screen flex  items-center justify-center bg-zinc-900 relative'>
      <h4 className='absolute text-xl top-5 left-1/2 transform -translate-x-1/2 text-green-500  min-[380px]:text-center whitespace-nowrap	'>EMPLOYEE MANAGEMENT</h4>
      <div className='rounded-[12px] border-2 border-green-600 overflow-hidden  '>
      <form className='flex flex-col h-[190px] items-center flex py-5 px-5 justify-center' >
            <input
            value={email}
            onChange={(e)=>{
              Setemail(e.target.value)
            }}
             required className='border-green-600 outline-none text-center	 border-2 text-xl  rounded-[12px] py-1 px-1 mb-2 placeholder:text-green-900'  type="text" placeholder='EMAIL' />
            <input
            value={password}
            onChange={(e)=>{
              Setpassword(e.target.value)
            }}
             required className='border-green-600 outline-none text-center	 border-2 text-xl  rounded-[12px] py-1 px-1 mb-5 placeholder:text-green-900' type="password" placeholder='PASSWORD' />
            <button onClick={()=>{
              prevent(event)
            }} className={` border-2 rounded-full bg-green-500 w-20`}>Log in</button>
        </form>
      </div>
    </div>
    </>
  )
}

export default login
