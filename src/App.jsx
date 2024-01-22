import React from "react";
import { useState, useContext, useEffect } from "react";

import ProjectsSidebar from "./Components/ProjectsSidebar";
import NewProject from "./Components/NewProject";
import NoProjectSelected from "./Components/NoProjectSelected";
import SelectedProject from "./Components/SelectedProject";

import { ProjectContext } from "./Components/Context";

function App() {
  const ctx = useContext(ProjectContext);

  const [content, setContent] = useState(null);

  // learned appliying useEffect...
  // but here I'm not using the cleanup function and I would love to learn about that too...

  useEffect(() => {
    // this is our base case
    setContent(<SelectedProject />);

    if (ctx.projectNew === null) {
      // this is the case in which projects are been added
      setContent(<NewProject />);
    } else if (
      (ctx.selectedProjectId === undefined || ctx.selectedProjectId === null) &&
      ctx.projectNew === undefined
    ) {
      // this is the case of deleting a project or when we start our project
      setContent(<NoProjectSelected />);
    }
  }, [ctx.selectedProjectId, ctx.projects, ctx.projectNew, ctx.tasks]);

  return (
    <main className="flex flex-col m-8 h-screen my-8 sm:flex-row gap-8">
      <ProjectsSidebar />
      {content}
    </main>
  );
}

export default App;
