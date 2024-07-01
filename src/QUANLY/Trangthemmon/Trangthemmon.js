import React, { useState, useEffect, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { XemLoai, XemSize, ThemMon } from "./API/Api";
import ModalSection from "./componens/ModalSection";
function Trangthemmon() {
  const [formData, setFormData] = useState({
    foodImage: null,
    foodName: "",
    foodPrice: [],
    foodReviews: "",
    foodCategory: "1",
    foodSize: [],
    foodStatus: "Còn hàng",
  });

  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const [loai, setLoai] = useState();
  const [size, setSize] = useState();
  const [sizeDuyNhat, setSizeDuyNhat] = useState(false);
  useEffect(() => {
    LayDuLieu();
  }, []);
  function closeModal() {
    setIsOpen(false);
  }

  const LayDuLieu = useCallback(async () => {
    try {
      const result = await XemLoai();
      setLoai(result.data.data);
      const result1 = await XemSize();
      setSize(result1.data.data);
    } catch (error) {
      console.error("Failed to fetch data", error);
    }
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  function openModal() {
    setIsOpen(true);
  }

  const handleChangeLoai = (e, itemId) => {
    const { name, value } = e.target;
    if (itemId == 1) {
      setSizeDuyNhat(true);
    } else {
      setSizeDuyNhat(false);
    }
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
  };

  const handleSize = (e) => {
    const sizeValue = e.target.value; // Giá trị của size được chọn từ checkbox
    const isChecked = e.target.checked; // Trạng thái của checkbox: true nếu đã check, false nếu chưa
    let updatedSizes = [...formData.foodSize]; // Tạo một bản sao của mảng foodSize hiện tại

    if (isChecked) {
      // Nếu checkbox được check, thêm sizeValue vào mảng updatedSizes nếu chưa tồn tại
      if (!updatedSizes.includes(sizeValue)) {
        updatedSizes.push(sizeValue);
      }
    } else {
      // Nếu checkbox bị bỏ check, xoá sizeValue khỏi mảng updatedSizes nếu tồn tại
      updatedSizes = updatedSizes.filter((size) => size !== sizeValue);
    }

    // Cập nhật state foodSize với mảng updatedSizes mới
    setFormData({
      ...formData,
      foodSize: updatedSizes,
    });
  };

  const ThemData = async () => {
    const truyenDuLieu = new FormData();
    truyenDuLieu.append("foodImage", selectedImage);
    truyenDuLieu.append("foodName", formData.foodName);
    truyenDuLieu.append("foodCategory", formData.foodCategory);
    truyenDuLieu.append("foodStatus", formData.foodStatus);
    truyenDuLieu.append("sizeDuyNhat", sizeDuyNhat);

    formData.foodPrice.forEach((price, index) => {
      truyenDuLieu.append(`foodPrice[${index}]`, price);
    });

    formData.foodSize.forEach((size, index) => {
      truyenDuLieu.append(`foodSize[${index}]`, size);
    });
    const result = await ThemMon(truyenDuLieu);
  };
  return (
    <div className="them-mon-container">
      <a href="/Trangquanlymon" className="btn-back">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-arrow-left"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M5.854 3.646a.5.5 0 0 1 0 .708L2.707 7.5H14.5a.5.5 0 0 1 0 1H2.707l3.147 3.146a.5.5 0 0 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 0 1 .708 0z"
          />
        </svg>
      </a>
      <div className="header">THÊM MÓN</div>

      <div className="mb-3">
        <label htmlFor="foodName" className="form-label">
          Tên món
        </label>
        <input
          type="text"
          className="form-control"
          id="foodName"
          name="foodName"
          placeholder="Nhập tên món ăn"
          value={formData.foodName}
          onChange={handleChange}
        />
      </div>
      {/* <div className="mb-3">
                    <label htmlFor="foodPrice" className="form-label">Giá</label>
                    <input type="number" className="form-control" id="foodPrice" name="foodPrice" placeholder="Nhập giá món ăn" value={formData.foodPrice} onChange={handleChange} />
                </div> */}

      <div className="mb-3">
        <label htmlFor="foodCategory" className="form-label">
          Loại
        </label>
        <select
          type="text"
          className="form-control"
          id="foodCategory"
          name="foodCategory"
          placeholder="Nhập loại món ăn"
          value={formData.foodCategory}
          onChange={(e) =>
            handleChangeLoai(
              e,
              loai.find((item) => item.id == e.target.value).size_duy_nhat
            )
          }
        >
          {loai &&
            loai.map((item) => (
              <option key={item.id} value={item.id}>
                {item.ten}
              </option>
            ))}
        </select>
      </div>
      {sizeDuyNhat == false ? (
        <div className="mb-3">
          <label htmlFor="foodSize" className="form-label">
            Size
          </label>
          {size &&
            size.map((item) => (
              <div key={item.id}>
                {item.id != 1 && (
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value={item.id} // Assuming you want to use item.id as the checkbox value
                      id={`checkbox_${item.id}`}
                      onClick={handleSize}
                      // Conditionally disable checkbox
                    />
                    <label
                      className="form-check-label"
                      htmlFor={`checkbox_${item.id}`}
                    >
                      {item.ten}
                    </label>
                  </div>
                )}
              </div>
            ))}

          {/* <input type="text" className="form-control" id="foodSize" name="foodSize" placeholder="Nhập size món ăn" value={formData.foodSize} onChange={handleChange} /> */}
        </div>
      ) : (
        <p>Loại này chỉ có 1 size</p>
      )}

      <div className="mb-3">
        <label htmlFor="foodStatus" className="form-label">
          Trạng thái
        </label>
        <select
          className="form-control"
          id="foodStatus"
          name="foodStatus"
          value={formData.foodStatus}
          onChange={handleChange}
        >
          <option value="Còn hàng">Còn hàng</option>
          <option value="Hết hàng">Hết hàng</option>
        </select>
      </div>
      <button
        type="button"
        className="btn btn-custom w-100"
        onClick={openModal}
      >
        Thêm món
      </button>
      <a
        href="/Trangquanlymon"
        className="quaylai btn btn-secondary go-back-btn"
      >
        Hủy
      </a>

      <ModalSection
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        formData={formData}
        setFormData={setFormData}
        loai={loai}
        size={size}
        ThemData={ThemData}
        sizeDuyNhat={sizeDuyNhat}
      />
    </div>
  );
}

export default Trangthemmon;
