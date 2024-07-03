import React, { useState, useEffect, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";
import { ThemBanData } from "../API/Api";
function Trangthemban() {
  const [sizeName, setsizeName] = useState("");

  const handleNameChange = (e) => {
    setsizeName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      ten_ban: sizeName,
    };
    try {
      await ThemBanData(data);
    } catch (error) {
      console.error("Failed to submit data", error);
    }
  };

  return (
    <div className="them-mon-container">
      <div className="header">THÊM BÀN</div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="sizeName" className="form-label">
            Tên bàn
          </label>
          <input
            type="text"
            className="form-control"
            id="sizeName"
            placeholder="Nhập tên bàn"
            value={sizeName}
            onChange={handleNameChange}
          />
        </div>

        <button type="submit" className="btn btn-custom w-100">
          Thêm
        </button>
        <a
          href="/Trangchuquanly"
          className="quaylai btn btn-secondary go-back-btn"
        >
          Hủy
        </a>
      </form>
    </div>
  );
}

export default Trangthemban;
