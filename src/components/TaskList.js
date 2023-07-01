import TaskItem from "./TaskItem";
const TaskList = ({
  tasks,
  loading,
  error,
  handleEditSubmit,
  editText,
  setEditText,
}) => {
  return (
    <div className="flex flex-col gap-2 bg-violet-900 container mx-auto p-10">
      {loading ? (
        <p className="text-violet-400">{error ? error : "Loading..."}</p>
      ) : (
        tasks.length === 0 && (
          <p className="text-center text-violet-400 text-lg">
            No task display.
          </p>
        )
      )}
      {
        tasks.map((task) => (
          <TaskItem
            key={task._id}
            task={task}
            _id={task._id}
            handleEditSubmit={handleEditSubmit}
            editText={editText}
            isEditable={task.isEditable}
            setEditText={setEditText}
          />
        ))}
    </div>
  );
};

export default TaskList;
