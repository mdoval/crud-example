import React, { ReactNode } from "react";

const ModalWindow = ({children,open, title}:{children: ReactNode,open: boolean, title: string}) => {
  return (
    <dialog id="my_modal_1" className={`modal ${open? 'modal-open': ''}`}>
      <div className="modal-box w-2/5 max-w-5xl h-3/5">
        <h3 className="font-bold text-lg">{title}</h3>
        <div className="modal-action">
          {/*<form method="dialog">*/}
            {children}
          {/*</form>*/}
        </div>
      </div>
    </dialog>
  );
};

export default ModalWindow;
