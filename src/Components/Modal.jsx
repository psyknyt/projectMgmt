import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

import Button from "./Button";

// -->the ref received here in the forwardRef will be passed onto the useImperativeHandle function..
const Modal = forwardRef(function Modal({ children, btnCaption }, ref) {
  // this is used as a ref to the dialog element.
  const dialog = useRef();

  // -->with the help of useImperativeHandle we customized that ref here..
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog
      ref={dialog}
      className="backdrop:bg-stone-900/90 shadow-md px-10 py-5 rounded-md  bg-stone-300"
    >
      {children}
      {/* method = "dialog" ||  */}
      <form method="dialog" className="mt-4 text-right">
        <Button>{btnCaption}</Button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;
