import { useState } from "react";
import noProjectImg from "../assets/no-projects.png";

import Button from "./Button";

export default function NoProjectSelected({ onStartAddProject }) {
  return (
    <div className="h-2/3 w-full mt-24 text-center sm:w-2/3 sm:h-screen">
      <img
        src={noProjectImg}
        alt="An empty task list"
        className="w-60 h-16 object-contain mx-auto"
      />
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No Project Selected
      </h2>
      <p className="mb-4 text-slate-400">
        Please select a project from the list on the left.
      </p>
      <p>
        <Button onClick={onStartAddProject}>Create new project.</Button>
      </p>
    </div>
  );
}
