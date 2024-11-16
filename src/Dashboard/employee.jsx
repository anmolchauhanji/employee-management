import Header from "../others/header"
import Tasklist from "../others/Tasklist"
import BreifTask from "../Task/BreifTask"

function employee() {
  return (
    <div className="w-full h-screen bg-zinc-800 py-[70px] px-[100px] text-zinc-50">
       <Header/>
        <Tasklist/>
        <BreifTask/>
    </div>
  )
}

export default employee