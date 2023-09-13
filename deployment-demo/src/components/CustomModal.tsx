import { Modal } from "bootstrap";
import { FC, ReactNode, useEffect, useState } from "react";



export const CustomModal: FC<{
  children: ReactNode;
  onChange: (s: boolean) => void;
}> = ({ children, onChange }) => {
  const [show, setShow] = useState(true);
  const [isInTransition, setIsInTransition] = useState(false);

  useEffect(() => {
    const modalElement = document.getElementById("exampleModal");
    if (!modalElement) return;

    const bootstrapModalObject = Modal.getOrCreateInstance(modalElement);
    bootstrapModalObject.show();
  }, []);

  useEffect(() => {
    const callback = () => {
      onChange(true);
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
      onChange(false);
      setIsInTransition(false);
    };
    const modalElement = document.getElementById("exampleModal");
    if (!modalElement) return;
    modalElement.addEventListener("hidden.bs.modal", callback);

    return () => {
      modalElement.removeEventListener("hidden.bs.modal", callback);
    };
  }, []);
  return (
    <>
      {/* <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        onClick={() => setShow(true)}
      >
        Launch demo modal
      </button> */}
      <div
        className={"modal fade"}
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden={show}
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
                onClick={() => setShow(false)}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => setShow(false)}
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
