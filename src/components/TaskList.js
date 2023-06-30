import TaskItem from "./TaskItem"
const TaskList = ({tasks}) => {
  return (
    <div className="flex flex-col gap-2 bg-violet-900 container mx-auto p-10">
   {
    tasks && tasks.map((text)=>(
      <TaskItem key={text._id} text={text} />
    ))
   }
    </div>
  )
}

export default TaskList