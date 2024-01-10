import { useState } from "react";

import Button from "./Button";

export default function ProjectsSidebar({
  onStartAddProject,
  projects,
  onSelectedProject,
  selectedProjectId,
}) {
  const [displayUl, setDisplayUl] = useState(false);
  const [toggleView, setToggleView] = useState(false);
  const setProjectDisplay = () => {
    setDisplayUl(!displayUl);
  };

  const handleToggleProjectView = () => {
    setToggleView(!toggleView);
  };

  return (
    <aside className="h-1/3 w-full px-8 flex flex-col sm:block py-8 sm:py-16  bg-stone-900 text-stone-50 rounded-xl sm:w-1/3 sm:h-screen md:w-72 ">
      {/* mobile display of projeacts on screen */}
      <label
        htmlFor="projectSelect"
        className="w-full flex items-end justify-between font-bold min-h-[32px] sm:hidden  mt-2 px-2 py-2 text-xs  md:text-base rounded-t-md rounded-b-sm bg-stone-700 text-stone-500 hover:bg-stone-600  hover:text-stone-100 focus:outline-none"
        onClick={setProjectDisplay}
      >
        {/* if no projects then handle the null condition  and toggling the view if user wants to see project
         and when he selects a particular project its info is displayed*/}

        {projects.length === 0
          ? "No projects as of now...."
          : "YOUR PROJECTS..."}
        {toggleView ? (
          <>
            <span
              className="toggleProjectsView"
              onClick={handleToggleProjectView}
            >
              op
            </span>
          </>
        ) : (
          <span
            className="toggleProjectsView"
            onClick={handleToggleProjectView}
          >
            cl
          </span>
        )}
      </label>

      {/* displaying the list of projects for small devices*/}
      {toggleView && projects.length > 0 && (
        <div className="sm:hidden z-10000 bg-stone-600  rounded-b-md  max-h-20">
          <ul className="flex flex-col rounded-md">
            {projects.map((project) => {
              let cssClasses =
                "sm:w-full text-left px-1 py-0.5 hover:text-stone-200 hover:bg-stone-500";
              if (project.id === selectedProjectId) {
                cssClasses += " bg-stone-800 text-stone-200";
              } else {
                cssClasses += " text-stone-400";
              }
              //  here I'm handling two events in one function and then handling that event
              const handleBothClick = () => {
                handleToggleProjectView();
                onSelectedProject(project.id);
              };

              return (
                <li
                  key={project.id}
                  className={cssClasses}
                  onClick={handleBothClick}
                >
                  {project.title}
                </li>
              );
            })}
          </ul>
        </div>
      )}
      <div className="relative top-4 sm:hidden">
        <Button onClick={onStartAddProject}> +Add Button</Button>
      </div>

      <h1 className="hidden sm:block uppercase font-bold text-lg text-white mb-4">
        Your Projects...
      </h1>
      <div className="hidden sm:block relative top-4 sm:mb-4">
        <Button onClick={onStartAddProject}> +Add Button</Button>
      </div>
      {/* displaying projects for medium screens and normal screen */}
      {
        <ul className="mt-8 hidden sm:block">
          {projects.map((project) => {
            let cssClasses =
              "sm:w-full uppercase text-left px-2 py-1 rounded-md my-1  hover:text-stone-200 hover:bg-stone-800";
            if (project.id === selectedProjectId) {
              cssClasses += " bg-stone-800 text-stone-200";
            } else {
              cssClasses += " text-stone-400";
            }

            return (
              <li key={project.id}>
                <button
                  className={cssClasses}
                  onClick={() => onSelectedProject(project.id)}
                >
                  {project.title}
                </button>
              </li>
            );
          })}
        </ul>
      }
    </aside>
  );
}
