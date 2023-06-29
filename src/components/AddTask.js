import { useRef, useState } from "react";

const AddTask = () => {
  const [text, setText] = useState("");

  const inputRef = useRef(null);

  const postData = async (text) => {
    const res = await fetch("http://localhost:8080/api/text/todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({text}),
    });

   
  };

  const addTaskHandler = (e) => {
    e.preventDefault();
    postData(text);
    setText("");
    inputRef.current.blur();
  };

  return (
    <form
      onSubmit={addTaskHandler}
      className="bg-violet-900 container mx-auto p-10 text-gray-300 font-semibold"
    >
      <div className="flex  lg:justify-between lg:gap-0 gap-2 items-center">
        <input
          required
          ref={inputRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
          className=" bg-violet-700/25 py-3 lg:px-12 px-2 outline-none border-b-2 border-gray-500 focus:border-teal-600 duration-300 rounded"
        />

        <button
          type="submit"
          className=" bg-violet-700/25 py-3 lg:px-6 px-3 text-teal-500 hover:text-teal-600 duration-300 lg:text-xl text-sm font-bold rounded"
        >
          Add tasks
        </button>
      </div>
    </form>
  );
};

export default AddTask;
