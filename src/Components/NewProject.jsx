import Input from "./Input";
import Modal from "./Modal";

import { useRef } from "react";
import { useState } from "react";

export default function NewProject({ onAddNew }) {
  const modal = useRef();
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  const handleSave = () => {
    const enteredTitle = title.current.value;
    const enteredDesc = description.current.value;
    const enteredDueDate = dueDate.current.value;

    // validation...
    if (
      enteredDesc.trim() === "" ||
      enteredDueDate.trim() === "" ||
      enteredTitle.trim() === ""
    ) {
      // --> this open function references to the dialog.showModal() method in Modal compoennt
      modal.current.open();
      return;
    }

    // --> Adding new project details to our managed state in App component
    onAddNew({
      title: enteredTitle,
      description: enteredDesc,
      dueDate: enteredDueDate,
    });
  };
  return (
    <>
      <Modal ref={modal} btnCaption="Close">
        <h2 className="uppercase text-xl font-bold text-stone-700 my-4">
          Invalid Input
        </h2>
        <p className="text-stone-600 my-4">
          OOps!! I think you forgot to input some value .&nbsp;.&nbsp;.
        </p>
        <p className="text-stone-600 mb-4">
          Please make sure you provide a valid value for every input field
        </p>
      </Modal>
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
          <Input type="text" ref={title} label="title" />
          <Input ref={description} label="description" textarea />
          <Input type="date" ref={dueDate} label="Due Date" />
        </div>
      </div>
    </>
  );
}
