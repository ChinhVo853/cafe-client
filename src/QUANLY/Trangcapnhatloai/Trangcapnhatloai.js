import React, { useState, useEffect, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { layData, Sua } from "./API/Api";
import { useParams } from "react-router-dom";
import Load from "../../Load/Load";
function Trangcapnhatloai() {
  const [typeName, settypeName] = useState("");
  const { id } = useParams();
  const LayDuLieu = useCallback(async () => {
    try {
      const result = await layData(id);
      if (localStorage.getItem("quyen") == 2) {
        window.location.href = "/Trangchuquanly";
      }
      settypeName(result.data.ten);
    } catch (error) {
      console.error("Failed to fetch data", error);
    }
  }, []);
  useEffect(() => {
    LayDuLieu();
  }, [LayDuLieu]);

  const handleNameChange = (e) => {
    settypeName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      ten: typeName,
      id: id,
    };
    // Handle the form submission
    try {
      await Sua(data);
      //window.location.href = "/Trangquanlyloai";
    } catch (error) {
      console.error("Failed to submit data", error);
    }
  };

  return (
    <>
      {typeName ? (
        <div className="them-mon-container">
          <div className="header">CẬP NHẬT LOẠI</div>
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
            <button type="submit" className="btn btn-custom w-100">
              Cập nhật
            </button>
            <a
              href="/Trangquanlyloai"
              className="quaylai btn btn-secondary go-back-btn"
            >
              Hủy
            </a>
          </form>
        </div>
      ) : (
        <Load />
      )}
    </>
  );
}

export default Trangcapnhatloai;
