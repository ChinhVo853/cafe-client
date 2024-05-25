import Modal from "react-modal";
import React, { useState } from "react";

function ModalSection() {
  const [modalIsOpen, setModalIsOpen] = useState(true);
  function closeModal() {
    setModalIsOpen(false);
  }
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        ariaHideApp={false}
        shouldCloseOnOverlayClick={false}
        style={{
          content: {
            width: "60%",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            justifyContent: "center",
            alignItems: "center",
          },
        }}
      >
        <form className="container modal-form row g-3">
          <div className="col-12">
            <h2>Quán ABC xin chào quý khách</h2>
            <p>
              Bạn vui lòng cho nhà hàng biết tên để phục vụ nhanh chóng và chính
              xác hơn nhé!
            </p>
          </div>
          <div className="col-12">
            <input
              type="text"
              className="form-control"
              placeholder="tên của bạn"
            />
          </div>

          <div className="col-12">
            <button className="btn btn-primary btn-lg" onClick={closeModal}>
              bắt đầu
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default ModalSection;
