import { useContext, useState } from "react";
import { ProjectContext } from "./Context";

const NewTask = () => {
  const ctx = useContext(ProjectContext);
  const [enteredTask, setEnteredTask] = useState("");

  const handleChange = (event) => {
    setEnteredTask(event.target.value);
  };

  const handleClick = () => {
    if (enteredTask.trim() === "") {
      return;
    }
    ctx.handleAddTask(enteredTask);
    setEnteredTask("");
  };
  return (
    <div className="flex items-center">
      <input
        className="bg-stone-200 rounded-sm border-blue-500 w-64 pr-2 py-1 mr-2"
        type="text"
        onChange={handleChange}
        value={enteredTask}
      />
      <button
        className="text-stone-700 hover:text-stone-950"
        onClick={handleClick}
      >
        Add Task
      </button>
    </div>
  );
};

export default NewTask;
