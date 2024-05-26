import Modal from "react-modal";

function ModalMoCuaSection({ data, modalIsOpen, setModalIsOpen }) {
  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal} // Sử dụng setModalIsOpen trực tiếp
      contentLabel="Example Modal"
      ariaHideApp={false}
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
      <h2>thứ 2: {data.data.thu_hai}</h2>
      <h2>thứ 3: {data.data.thu_ba}</h2>
      <h2>thứ 4: {data.data.thu_tu}</h2>
      <h2>thứ 5: {data.data.thu_nam}</h2>
      <h2>thứ 6: {data.data.thu_sau}</h2>
      <h2>thứ 7: {data.data.thu_bay}</h2>
      <h2>chủ nhật: {data.data.chu_nhat}</h2>
      <button onClick={closeModal}>đóng</button>
    </Modal>
  );
}

export default ModalMoCuaSection;
