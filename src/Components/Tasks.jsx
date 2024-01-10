import NewTask from "./NewTask.jsx";

const Tasks = ({ onAdd, onDelete, tasks }) => {
  return (
    <div className="">
      <h2 className="text-stone-800 my-2">Tasks</h2>
      <NewTask onAdd={onAdd} onDelete={onDelete} />
      {tasks.length === 0 && <p className="my-2 ">No tasks for this project</p>}
      {tasks.length > 0 && (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {tasks.map((task) => {
            return (
              <li key={task.id} className="flex justify-between my-4">
                <span>{task.text}</span>
                <button
                  className="text-stone-700 hover:text-red-500"
                  onClick={() => onDelete(task.id)}
                >
                  Clear!
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Tasks;
