import Button from "./Button";
import { ProjectContext } from "./Context";
import Tasks from "./Tasks";
import { useContext } from "react";

import NoProjectSelected from "./NoProjectSelected";

export default function SelectedProject() {
  const { projects, selectedProjectId, deleteProject, projectNew } =
    useContext(ProjectContext);

  if (selectedProjectId === undefined && projectNew === undefined) {
    return <NoProjectSelected />;
  }

  const project = projects.find((project) => project.id === selectedProjectId);

  const formattedDate = new Date(project.dueDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="w-full sm:w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl uppercase font-bold text-stone-600 mb-2">
            {project.title}
          </h1>
          <Button onClick={deleteProject}>Delete</Button>
        </div>
        <p className="mb-4  text-stone-400">{formattedDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap">
          {project.description}
        </p>
      </header>
      <Tasks />
    </div>
  );
}
