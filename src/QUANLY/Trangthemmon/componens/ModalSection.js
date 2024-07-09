import React from "react";
import Modal from "react-modal";
import QRCode from "react-qr-code";

// Đảm bảo rằng Modal.setAppElement được gọi đúng cách
Modal.setAppElement("#root");

const customStyles = {
  content: {
    with: "80%",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
function ModalSection({
  modalIsOpen,
  closeModal,
  formData,
  setFormData,
  loai,
  size,
  ThemData,
  sizeDuyNhat,
  status,
}) {
  const foodCategoryIndex = parseInt(formData.foodCategory, 10) - 1;
  const tenValue =
    loai && loai[foodCategoryIndex] && loai[foodCategoryIndex].ten;

  const handlePriceChange = (index, event) => {
    const newPrices = [...formData.foodPrice];
    newPrices[index] = event.target.value;
    setFormData({ ...formData, foodPrice: newPrices });
  };
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

            width: "100%",
          }}
        >
          <div className="them-mon-container">
            <div className="header">XÁC NHẬN MÓN</div>

            <div className="mb-3">
              <h4 htmlFor="foodName" className="form-label">
                Tên món: {formData.foodName}
              </h4>
            </div>

            <div className="mb-3">
              <h4 htmlFor="foodCategory" className="form-label">
                Loại: {tenValue}
              </h4>
            </div>
            <div className="form-row mb-3">
              <div className="form-group">
                <h4 htmlFor="foodCategory" className="form-label">
                  Size
                </h4>
                {sizeDuyNhat == true ? (
                  <h5>Loại có 1 size</h5>
                ) : (
                  <>
                    {size &&
                      formData.foodSize.map((item, key) => (
                        <h5 key={key}>{size[item - 1].ten}</h5>
                      ))}
                  </>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="foodPrice" className="form-label">
                  Giá
                </label>
                {sizeDuyNhat ? (
                  <input
                    type="number"
                    className="form-control"
                    id="foodPrice"
                    name="foodPrice"
                    placeholder="Nhập giá món ăn"
                    onChange={(e) => handlePriceChange(0, e)}
                  />
                ) : (
                  <>
                    {formData.foodSize.map((item, key) => (
                      <input
                        type="number"
                        className="form-control"
                        id="foodPrice"
                        name="foodPrice"
                        placeholder="Nhập giá món ăn"
                        key={key}
                        onChange={(e) => handlePriceChange(key, e)}
                      />
                    ))}
                  </>
                )}
              </div>
            </div>

            <button
              type="button"
              className="btn btn-custom w-100"
              onClick={ThemData}
            >
              THÊM
            </button>
            <a
              className="quaylai btn btn-secondary go-back-btn"
              onClick={closeModal}
            >
              Hủy
            </a>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default ModalSection;
