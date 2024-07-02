
import React, { useState, useEffect, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";
import { XemData,XoaData } from "../API/Api";
function Trangcapnhatban() {
  const [sizeName, setsizeName] = useState("");
  const { id } = useParams();
  const LayDuLieu = useCallback(async () => {
    try {
      const result = await XemData();
      setsizeName(result.data.ten);
    } catch (error) {
      console.error("Failed to fetch data", error);
    }
  }, []);
  useEffect(() => {
    LayDuLieu();
  }, [LayDuLieu]);

  const handleNameChange = (e) => {
    setsizeName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      
      id: id,

    };
    // Handle the form submission
    try {
      await XoaData(data);
      window.location.href = "/Trangquanlysize";
    } catch (error) {
      console.error("Failed to submit data", error);
    }
  };


  return (
    <div className="them-mon-container">
      <div className="header">CẬP NHẬT BÀN</div>
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
          Cập nhật
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

export default Trangcapnhatban;
