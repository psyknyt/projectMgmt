import { useRef } from "react";

import Input from "./Input";
import { useState } from "react";

export default function NewProject() {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  const handleSave = () => {
    const enteredTitle = title.current.value;
    const enteredDesc = description.current.value;
    const enteredDueDate = dueDate.current.value;

    // validation...
    if (enteredDesc == "" || enteredDueDate == "" || enteredTitle == "") {
      alert("Check input value's again, cannot input empty value's");
    } else {
      title.current.value = "";
      description.current.value = "";
      dueDate.current.value = "";
    }
  };
  return (
    <div className="h-2/3 sm:w-[35rem] mt-16 ">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950">
            Cancel
          </button>
        </li>
        <li>
          <button
            className="px-4 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            onClick={handleSave}
          >
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input ref={title} label="title" />
        <Input ref={description} label="description" textarea />
        <Input ref={dueDate} label="Due Date" />
      </div>
    </div>
  );
}
