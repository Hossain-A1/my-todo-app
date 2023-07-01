import { useRef, useState } from "react";

const AddTask = ({ tasks, setTasks }) => {
  const [task, setTask] = useState([]);

  const inputRef = useRef(null);

  const postData = async (text) => {
    const res = await fetch("http://localhost:8080/api/text/todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    });

    const data = await res.json();
    //  real time data updating
    setTasks([...tasks, data]);
  };

  const addTaskHandler = (e) => {
    e.preventDefault();
    postData(task);
    setTask("");
    inputRef.current.blur();
  };

  return (
    <form
      onSubmit={addTaskHandler}
      className="bg-violet-900 container mx-auto p-10 text-gray-300 font-semibold overflow-x-hidden"
    >

      
      <div className="flex  lg:justify-between justify-between lg:gap-0 gap-5 items-center">
        <input
          required
          ref={inputRef}
          value={task}
          onChange={(e) => setTask(e.target.value)}
          type="text"
          placeholder="What things todo?"
          className=" bg-violet-700/25 py-3 lg:px-12 px-2 lg:w-[50%] w-[90%] outline-none border-b-2 border-gray-500 focus:border-teal-600 duration-300 rounded"
        />

        <button
          type="submit"
          className=" bg-violet-700/25 py-3 lg:px-6 px-4 text-teal-500 hover:text-teal-600 duration-300 lg:text-xl text-sm lg:font-bold font-medium rounded"
        >
          Add task
        </button>
      </div>
    </form>
  );
};

export default AddTask;
