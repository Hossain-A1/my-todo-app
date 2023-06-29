import {CiEdit} from "react-icons/ci"
import {MdDeleteForever} from "react-icons/md"
const TaskItem = ({task}) => {
  return (
    <div className='task-item flex justify-between bg-violet-700/25 p-5 rounded hover:bg-gradient-to-r hover:from-violet-500 hover:to-violet-800 duration-300 text-teal-500 hover:text-teal-300'>
      <div className="task-left flex items-center gap-3">
      <span >  <input type="checkbox" className="text-teal-700"/></span>
        <p>{task.text}</p>

      </div>


      <div className="task-right cursor-pointer text-gray-400 text-2xl flex items-center gap-3">
        <span><CiEdit/></span>
        <span><MdDeleteForever/></span>
      </div>
    </div>
  )
}

export default TaskItem