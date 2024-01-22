import React from "react";

export const ProjectContext = React.createContext({
  selectedProjectId: undefined,
  projectNew: undefined,
  projects: [],
  tasks: [],
  onStartAdd: () => {},
  addProject: (project) => {},
  cancelAddingProject: () => {},
  deleteProject: (id) => {},
  selectProject: () => {},
  handleStartAddingProject: () => {},
  handleAddTask: (text) => {},
  deleteTask: () => {},
});
