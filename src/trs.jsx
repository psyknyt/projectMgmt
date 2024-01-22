import React from "react";
import { useState, useContext, useEffect } from "react";

import ProjectsSidebar from "./Components/ProjectsSidebar";
import NewProject from "./Components/NewProject";
import NoProjectSelected from "./Components/NoProjectSelected";
import SelectedProject from "./Components/SelectedProject";

import { ProjectContext } from "./Components/Context";
import ContextProvider from "./Components/ContextProvider";

function Trs() {
  const ctx = useContext(ProjectContext);
  const [projectState, setProjectState] = useState({
    projects: [],
    tasks: [],
  });

  //  --> adding tasks to the selected project...
  const handleAddTask = (text) => {
    setProjectState((prevState) => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: ctx.selectedProjectId,
        id: taskId,
      };
      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask],
      };
    });
  };

  // --> handling deleting tasks...
  const handleDeleteTask = (id) => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
  };

  useEffect(() => {
    let CONTENT = (
      <SelectedProject
        onAddTask={handleAddTask}
        onDeleteTask={handleDeleteTask}
        tasks={projectState.tasks}
      />
    );
    const [content, setContent] = useState({
      content: CONTENT,
    });
    if (ctx.selectedProjectId === null) {
      CONTENT = <NewProject />;
    } else if (ctx.selectedProjectId === undefined) {
      CONTENT = <NoProjectSelected />;
    }
    setContent({
      content: CONTENT,
    });
  }, [ctx.selectedProjectId, ctx.projects]);

  return (
    <ContextProvider>
      <main className="flex flex-col m-8 h-screen my-8 sm:flex-row gap-8">
        <ProjectsSidebar />
        {Content.content}
      </main>
    </ContextProvider>
  );
}
