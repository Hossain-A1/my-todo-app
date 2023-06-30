import Navber from "./components/Navber";
import Footer from "./components/Footer";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { useEffect, useState } from "react";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const getData = async () => {
    try {
      const res = await fetch("http://localhost:8080/api/text/todo");

      if (!res.ok) throw Error("Somthing went wrong.");

      const data = await res.json();

      setTasks(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className=" w-full min-h-screen bg-gradient-to-t from-sky-500 to-indigo-500 flex- flex-col py-10">
      <Navber />
      <AddTask tasks={tasks} setTasks={setTasks} />
      <TaskList tasks={tasks} />
      <Footer />
    </div>
  );
};

export default App;
