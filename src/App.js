import Navber from "./components/Navber";
import Footer from "./components/Footer";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { createContext, useEffect, useState } from "react";
export const DeleteHandleContext = createContext();
export const EditHandleContext = createContext();

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [editText, setEditText] = useState("");
  const [editMode, setEditMode] = useState(true);
  const getData = async () => {
    try {
      setLoading(true);
      const res = await fetch("http://localhost:8080/api/text/todo");

      if (!res.ok) throw Error("Somthing went wrong.");

      const data = await res.json();

      setTasks(data);
      
      setLoading(false);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // deleted data
  const deleteTask = async (_id) => {
    await fetch(`http://localhost:8080/api/text/todo/${_id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const handleDelete = (_id) => {
    deleteTask(_id);
    setTasks(tasks.filter((task) => task._id !== _id));
  };

  // edit data===========

  const handleEdit = (_id) => {
    // set a target el
    const [editableTask] = tasks.filter((task) => task._id === _id);
    editableTask.isEditable = true;
    setEditText(editableTask.text);
    setTasks([...tasks]);
    setEditMode(false);

    // re arrange
    tasks
      .filter((task) => task._id !== _id)
      .map((target) => (target.isEditable = false));
  };

  // editing handler
  const handleEditSubmit = (e, _id) => {
    e.preventDefault();

    setEditMode(!editMode);

    const editNewValue = {
      text:editText,
      _id:_id
    }
    

    // put req
    putingReq(_id, editNewValue);

    // real time update
    const [editableTask] = tasks.filter((task) => task._id === _id);

    editableTask.isEditable = false;
    editableTask.text = editNewValue.text

    setTasks([...tasks]);
  };

  const putingReq = async (_id, editNewValue) => {
    await fetch(`http://localhost:8080/api/text/todo/${_id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(editNewValue),
    });
  };

  return (
    <div className=" w-full min-h-screen bg-gradient-to-t from-sky-500 to-indigo-500 flex- flex-col py-10 px-1 lg:px-0 overflow-x-hidden">
      <DeleteHandleContext.Provider value={handleDelete}>
        <EditHandleContext.Provider value={handleEdit}>
          <Navber />
          <AddTask tasks={tasks} setTasks={setTasks} />
          <TaskList
            tasks={tasks}
            loading={loading}
            error={error}
            handleEditSubmit={handleEditSubmit}
            editText={editText}
            setEditText={setEditText}
          />
          <Footer />
        </EditHandleContext.Provider>
      </DeleteHandleContext.Provider>
    </div>
  );
};

export default App;
