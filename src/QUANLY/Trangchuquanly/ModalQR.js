import React from "react";
import Modal from "react-modal";
import QRCode from "react-qr-code";

// Đảm bảo rằng Modal.setAppElement được gọi đúng cách
Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function ModalQR({ maQR, modalIsOpen, afterOpenModal, closeModal }) {
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div
          style={{
            height: "auto",
            margin: "0 auto",
            maxWidth: 256,
            width: "100%",
          }}
        >
          <QRCode
            size={256}
            style={{ height: "auto", maxWidth: "100%", width: "100%" }}
            value={maQR}
            viewBox={`0 0 256 256`}
          />
        </div>
      </Modal>
    </div>
  );
}

export default ModalQR;
