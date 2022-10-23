import React from "react";

const Modal = ({ content }) => {
  return (
    <section>
      <input type="checkbox" id="skillnao-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          {/* close button */}
          <label
            htmlFor="skillnao-modal"
            className="btn btn-sm btn-square absolute right-2 top-2"
          >
            ✕
          </label>

          {/* modal content */}
          {content}
        </div>
      </div>
    </section>
  );
};

export default Modal;
