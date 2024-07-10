import React, { useState, useEffect, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";
import { XemData, XoaData, TimBan, SuaBan } from "../API/Api";
import Load from "../../../Load/Load";
function Trangcapnhatban() {
  const [sizeName, setsizeName] = useState("");
  const { id } = useParams();
  const LayDuLieu = useCallback(async () => {
    try {
      const result = await TimBan(id);
      setsizeName(result.data.data);
    } catch (error) {
      console.error("Failed to fetch data", error);
    }
  }, []);
  useEffect(() => {
    document.title = "Cập nhật bàn";
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

  const Sua = async () => {
    const data = {
      ten_ban: sizeName,
      id: id,
    };
    await SuaBan(data);
  };

  return (
    <>
      {sizeName ? (
        <div className="them-mon-container">
          <div className="header">CẬP NHẬT BÀN</div>

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
          <button type="button" className="btn btn-custom w-100" onClick={Sua}>
            Cập nhật
          </button>
          <a
            href="/TrangQLban"
            className="quaylai btn btn-secondary go-back-btn"
          >
            Hủy
          </a>
        </div>
      ) : (
        <Load />
      )}
    </>
  );
}

export default Trangcapnhatban;
