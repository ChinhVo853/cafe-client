import React, { useState, useEffect, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";
import { LayData, SuaData } from "./API/Api";
import Load from "../../Load/Load";

function Trangcapnhatsize() {
  const [sizeName, setsizeName] = useState("");
  const [loadding, setLoadding] = useState(false);
  const { id } = useParams();

  const LayDuLieu = useCallback(async () => {
    try {
      const result = await LayData(id);
      setsizeName(result.data.ten);
      setLoadding(true);
    } catch (error) {
      console.error("Failed to fetch data", error);
    }
  }, [id]);

  useEffect(() => {
    document.title = "Cập nhật size";
    if (localStorage.getItem("quyen") === "2") {
      window.location.href = "/Trangchuquanly";
    }
    LayDuLieu();
  }, [LayDuLieu]);

  const handleNameChange = (e) => {
    setsizeName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      ten: sizeName,
      id: id,
    };
    setLoadding(false);
    try {
      await SuaData(data);
      setLoadding(true);
    } catch (error) {
      console.error("Failed to submit data", error);
      alert("Cập nhật thất bại!");
    }
  };

  return (
    <>
      {loadding ? (
        <>
          <div className="them-mon-container">
            <div className="header">CẬP NHẬT SIZE</div>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="sizeName" className="form-label">
                  Tên size
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="sizeName"
                  placeholder="Nhập tên loại"
                  value={sizeName}
                  onChange={handleNameChange}
                />
              </div>
              <button type="submit" className="btn btn-custom w-100">
                Cập nhật
              </button>
              <a
                href="/Trangquanlysize"
                className="quaylai btn btn-secondary go-back-btn"
              >
                Hủy
              </a>
            </form>
          </div>
        </>
      ) : (
        <Load />
      )}
    </>
  );
}

export default Trangcapnhatsize;
