import { CiEdit } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";
import { useContext } from "react";
import { DeleteHandleContext,EditHandleContext } from "../App";

const TaskItem = ({
  task,
  _id,
  handleEditSubmit,
  isEditable,
  editText,
  setEditText,
}) => {
  const handleDelete = useContext(DeleteHandleContext);
  const handleEdit = useContext(EditHandleContext);

  return (
    <div className="task-item overflow-x-hidden flex justify-between bg-violet-700/25 p-5 rounded hover:bg-gradient-to-r hover:from-violet-500 hover:to-violet-800 duration-300 text-gray-300 hover:text-teal-300">
      <div className="task-left flex items-center gap-3">
        <span>
          {" "}
          <input type="checkbox" className="text-teal-700" />
        </span>

        {
          isEditable && (
            <form onSubmit={(e)=>handleEditSubmit(e,_id)}>

              <input className="bg-transparent overflow-x-hidden border-b-2 lg:w-[235%] w-20 pb-1 focus:border-teal-500 outline-none duration-300" type="text" required value={editText} onChange={(e)=>setEditText(e.target.value)} />
            </form>
          )
        }

        {
          !isEditable && (

            <p>{task.text}</p>
          )
        }
      </div>

      <div className="task-right cursor-pointer overflow-x-hidden text-gray-400 text-2xl flex items-center gap-3">
        <button onClick={() => handleEdit(_id)}>
          <CiEdit className="hover:text-gray-500 duration-300" />
        </button>
        <button onClick={() => handleDelete(_id)}>
          <MdDeleteForever className="hover:text-rose-700 duration-300" />
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
