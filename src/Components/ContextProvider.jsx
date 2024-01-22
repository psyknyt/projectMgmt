import { ProjectContext } from "./Context";

import { useReducer } from "react";

const defaultState = {
  selectedProjectId: undefined,
  projects: [],
  tasks: [],
};

const projectReducer = (state, action) => {
  if (action.type === "addProject") {
    const projectId = Math.random();

    const newProject = {
      ...action.payload,
      id: projectId,
    };

    return {
      ...state,
      selectedProjectId: null,
      projects: [...state.projects, newProject],
    };
  }
  if (action.type === "cancelAdd") {
    //  --> handling delete project
    return {
      ...state,
      projectNew: undefined,
    };
  }

  if (action.type === "deleteProject") {
    //  --> handling delete project
    return {
      ...state,
      selectedProjectId: undefined,
      projectNew: undefined,
      projects: state.projects.filter(
        (project) => project.id !== state.selectedProjectId
      ),
    };
  }

  if (action.type === "select") {
    return {
      ...state,
      selectedProjectId: action.payload,
    };
  }

  if (action.type === "addNewProject") {
    return {
      ...state,
      projectNew: action.payload,
    };
  }

  if (action.type === "addTask") {
    const taskId = Math.random();
    const newTask = {
      text: action.payload,
      projectId: state.selectedProjectId,
      id: taskId,
    };

    return {
      ...state,
      tasks: [...state.tasks, newTask],
    };
  }

  if (action.type === "deleteTask") {
    console.log(state.tasks.filter((task) => task.id !== action.payload));
    return {
      ...state,
      tasks: state.tasks.filter((task) => task.id !== action.payload),
    };
  }
};
const ContextProvider = (props) => {
  const [projectState, dispatchAction] = useReducer(
    projectReducer,
    defaultState
  );

  const addProject = (project) => {
    dispatchAction({ type: "addProject", payload: project });
  };

  const cancelAddingProject = () => {
    dispatchAction({ type: "cancelAdd" });
  };

  const deleteProject = (id) => {
    dispatchAction({ type: "deleteProject", payload: id });
  };

  const handleSelect = (id) => {
    dispatchAction({ type: "select", payload: id });
  };

  // here id is undefined or null or selected project id
  // based on wht component needs to be re-render
  const handleAddNew = (id) => {
    dispatchAction({ type: "addNewProject", payload: id });
  };

  const handleAddTask = (text) => {
    dispatchAction({ type: "addTask", payload: text });
  };

  const deleteTask = (id) => {
    dispatchAction({ type: "deleteTask", payload: id });
  };

  const context = {
    selectedProjectId: projectState.selectedProjectId,
    projectNew: projectState.projectNew,
    projects: projectState.projects,
    tasks: projectState.tasks,
    addProject: addProject,
    cancelAddingProject: cancelAddingProject,
    deleteProject: deleteProject,
    handleSelect: handleSelect,
    handleStartAddingProject: handleAddNew,
    handleAddTask: handleAddTask,
    deleteTask: deleteTask,
  };

  return (
    <ProjectContext.Provider value={context}>
      {props.children}
    </ProjectContext.Provider>
  );
};

export default ContextProvider;
