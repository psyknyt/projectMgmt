import { useState } from "react";

const NewTask = ({ onAdd, onDelete }) => {
  const [enteredTask, setEnteredTask] = useState("");

  const handleChange = (event) => {
    setEnteredTask(event.target.value);
  };

  const handleClick = () => {
    if (enteredTask.trim() === "") {
      return;
    }
    onAdd(enteredTask);
    setEnteredTask("");
  };
  return (
    <div className="flex items-center">
      <input
        className="bg-stone-200 rounded-sm border-blue-500 w-64 px-2 py-1 mx-2"
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
