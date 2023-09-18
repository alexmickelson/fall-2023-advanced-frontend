import { Modal } from "bootstrap";
import { FC, ReactNode, useEffect, useState } from "react";

export interface CustomModalControl {
  isShowing: boolean;
  isInTransition: boolean;
  show: () => void;
  hide: () => void;
}

export const prettyDate = (date: Date) => {
  return date.toISOString();
};

export const useName = (inputFirstName: string, inputLastName: string) => {
  const [firstName, setFirstName] = useState(inputFirstName);
  const [lastName, setLastName] = useState(inputLastName);

  return {
    firstName,
    lastName,
    fullName: firstName + " " + lastName,
  };
};

export const useCustomModalControl = ({
  onClose,
}: {
  onClose: () => void;
}): CustomModalControl => {
  const [isShowing, setIsShowing] = useState(true);
  const [isInTransition, setIsInTransition] = useState(false);

  useEffect(() => {
    const callback = () => {
      setIsShowing(true);
      setIsInTransition(true);
    };
    const modalElement = document.getElementById("exampleModal");
    if (!modalElement) return;
    modalElement.addEventListener("show.bs.modal", callback);

    return () => {
      modalElement.removeEventListener("show.bs.modal", callback);
    };
  }, []);

  useEffect(() => {
    const callback = () => {
      setIsInTransition(false);
    };
    const modalElement = document.getElementById("exampleModal");
    if (!modalElement) return;
    modalElement.addEventListener("shown.bs.modal", callback);

    return () => {
      modalElement.removeEventListener("shown.bs.modal", callback);
    };
  }, []);

  useEffect(() => {
    const callback = () => {
      setIsInTransition(true);
      onClose();
    };
    const modalElement = document.getElementById("exampleModal");
    if (!modalElement) return;
    modalElement.addEventListener("hide.bs.modal", callback);

    return () => {
      modalElement.removeEventListener("hide.bs.modal", callback);
    };
  }, []);

  useEffect(() => {
    const callback = () => {
      setIsShowing(false);
      setIsInTransition(false);
    };
    const modalElement = document.getElementById("exampleModal");
    if (!modalElement) return;
    modalElement.addEventListener("hidden.bs.modal", callback);

    return () => {
      modalElement.removeEventListener("hidden.bs.modal", callback);
    };
  }, []);

  const show = () => {
    if (isInTransition) return;

    const modalElement = document.getElementById("exampleModal");
    if (!modalElement) return;

    const bootstrapModalObject = Modal.getOrCreateInstance(modalElement);
    bootstrapModalObject.show();
  };

  const hide = () => {
    if (isInTransition) return;

    const modalElement = document.getElementById("exampleModal");
    if (!modalElement) return;

    const bootstrapModalObject = Modal.getOrCreateInstance(modalElement);
    bootstrapModalObject.hide();
  };

  const output: CustomModalControl = {
    isShowing,
    isInTransition,
    show,
    hide,
  };
  return output;
};

export const CustomModal: FC<{
  children: ReactNode;
  control: CustomModalControl;
}> = ({ children, control }) => {
  return (
    <>
      <div
        className={"modal fade"}
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Modal title
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">{children}</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => control.hide()}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
