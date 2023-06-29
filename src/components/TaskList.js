import TaskItem from "./TaskItem"
const TaskList = ({tasks}) => {
  return (
    <div className="flex flex-col gap-2 bg-violet-900 container mx-auto p-10">
   {
    tasks && tasks.map((task)=>(
      <TaskItem key={task._id} task={task} />
    ))
   }
    </div>
  )
}

export default TaskList