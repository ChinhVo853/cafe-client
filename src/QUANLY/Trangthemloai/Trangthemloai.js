import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemData } from "./getAPI/API";
function Trangthemloai() {
  const [typeName, settypeName] = useState("");
  const [size, setSize] = useState(false);
  const handleNameChange = (e) => {
    settypeName(e.target.value);
  };
  const handleSize = (e) => {
    setSize(e.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle the form submission
    const data = {
      ten: typeName,
      sizeDuyNhat: size,
    };
    try {
      await ThemData(data);
      // window.location.href = "/Trangquanlyloai";
    } catch (error) {
      console.error("Failed to submit data", error);
    }
  };

  return (
    <div className="them-mon-container">
      <div className="header">THÊM LOẠI</div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="typeName" className="form-label">
            Tên loại
          </label>
          <input
            type="text"
            className="form-control"
            id="typeName"
            placeholder="Nhập tên loại"
            value={typeName}
            onChange={handleNameChange}
          />
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value={size}
            id="flexCheckDefault"
            onClick={handleSize}
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Loại chỉ có 1 size
          </label>
        </div>

        <button type="submit" className="btn btn-custom w-100">
          Thêm loại
        </button>
        <a
          href="/Trangquanlyloai"
          className="quaylai btn btn-secondary go-back-btn"
          onClick={() => window.history.back()}
        >
          Hủy
        </a>
      </form>
    </div>
  );
}

export default Trangthemloai;
