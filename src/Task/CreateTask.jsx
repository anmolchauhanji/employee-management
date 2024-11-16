import React from 'react'

const CreateTask = () => {
  return (
    <>
    <div className='flex justify-between py-[70px] px-[70px]  ' >
        <div>
        <form> 
            <h3 className='text-xl font-semibold  mt-[5px]'>Task title</h3>
          <input  className='text-stone-800 w-[20vw] rounded-md	h-[4vh] py-5 mt-[5px] px-5 outline-none' type='text' placeholder='Task Name'  />
          <h3 className='text-xl font-semibold  mt-[5px]' >Date</h3>
          <input  className='text-stone-800	 h-[4vh] rounded-md	h-[4vh] py-5  px-5 outline-none'  type='date' />
          <h3 className='text-xl font-semibold  mt-[5px]'>Employee name</h3>
          <input  className='text-stone-800	w-[20vw] h-[4vh] rounded-md	h-[4vh]  py-5 px-5 outline-none' type='text' placeholder='Employee Name' />
          <h3 className='text-xl font-semibold  mt-[5px]'>Category</h3>
          <input  className='text-stone-800	w-[20vw] h-[4vh] rounded-md 	h-[4vh] py-5 px-5 outline-none  ' type='text' placeholder='Category' />
         
        </form>
        </div>
        <div>
            <form >
                <h3 className='text-xl font-semibold mb-[10px] mt-[5px]'>Description</h3>
                <textarea       className='text-stone-800 h-[240px] 	w-[20vw] h-[4vh] rounded-md textarea	h-[4vh] py-5 px-5 outline-none   ' type="text" placeholder=''></textarea>
                <br />
                <input className='text-xl font-semibold bg-green-500 h-[40px] w-[20vw] mt-[20px] rounded-md px-5' type="submit"/>
            </form>
        </div>
    </div>
    </>
  )
}

export default CreateTask