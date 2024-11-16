
import Header from '../others/header'
import CreateTask from '../Task/CreateTask'
import Taskqueue from '../Task/Taskqueue'
function Admin() {
  return (
    <>
    <div className='bg-zinc-800 w-full py-[50px] px-[50px] h-screen text-teal-50 '>
    <Header/>
    <CreateTask/>
    <Taskqueue/>
    </div>
    </>
  )
}

export default Admin