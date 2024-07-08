import React, { useState, useEffect, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { layData, Sua } from "./API/Api";
import { useParams } from "react-router-dom";
import Load from "../../Load/Load";
function Trangcapnhatloai() {
  const [typeName, settypeName] = useState("");
  const { id } = useParams();
  const [loadding, setLoadding] = useState(false);

  const LayDuLieu = useCallback(async () => {
    try {
      const result = await layData(id);
      if (localStorage.getItem("quyen") == 2) {
        window.location.href = "/Trangchuquanly";
      }
      settypeName(result.data.ten);
      setLoadding(true);
    } catch (error) {
      console.error("Failed to fetch data", error);
    }
  }, []);
  useEffect(() => {
    document.title = "Cập nhật loai";
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
      setLoadding(false);
      await Sua(data);
      setLoadding(true);
      //window.location.href = "/Trangquanlyloai";
    } catch (error) {
      console.error("Failed to submit data", error);
    }
  };

  return (
    <>
      {loadding ? (
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
