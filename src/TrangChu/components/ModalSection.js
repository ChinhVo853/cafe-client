import Modal from "react-modal";
import React, { memo } from "react";

function ModalSection({
  data,
  modalIsOpen,
  setModalIsOpen,
  inputName,
  setInputName,
}) {
  const closeModal = () => {
    setModalIsOpen(false);
  };
  const luuTen = () => {
    localStorage.setItem("tenKhachHang", inputName);
    closeModal();
  };
  const handleInputChange = (event) => {
    setInputName(event.target.value);
  };
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
            <h2>Quán {data.data.ten_quan} xin chào quý khách</h2>
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
              value={inputName}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-12">
            <button
              type="button"
              className="btn btn-primary btn-lg"
              onClick={() => luuTen()}
            >
              bắt đầu
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default memo(ModalSection);
