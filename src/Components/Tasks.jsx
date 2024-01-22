import { useContext, useState } from "react";

import NewTask from "./NewTask.jsx";
import { ProjectContext } from "./Context.jsx";

const Tasks = () => {
  const { tasks, selectedProjectId } = useContext(ProjectContext);
  const ctx = useContext(ProjectContext);

  //--> filtering tasks for the selected project
  const selectedProjectTasks = tasks.filter(
    (task) => task.projectId === selectedProjectId
  );

  return (
    <div className="">
      <h2 className="text-stone-800 my-2">Tasks</h2>
      <NewTask />
      {/* if no task for selcted project then render this... */}
      {selectedProjectTasks.length === 0 && (
        <p className="my-2 ">No tasks for this project</p>
      )}
      {/* if there are tasks present in the selected project then render this... */}
      {selectedProjectTasks.length > 0 && (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {tasks.map((task) => {
            if (task.projectId === selectedProjectId) {
              return (
                <li key={task.id} className="flex justify-between my-4">
                  <span>{task.text}</span>
                  <button
                    className="text-stone-700 hover:text-red-500"
                    onClick={() => ctx.deleteTask(task.id)}
                  >
                    Clear!
                  </button>
                </li>
              );
            }
          })}
        </ul>
      )}
    </div>
  );
};

export default Tasks;
