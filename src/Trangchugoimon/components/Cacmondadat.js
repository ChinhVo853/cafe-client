import React, { useEffect, useState, useCallback } from "react";
import { DanhSachChiTietHoaDon } from "../API/Api";
import { useParams } from "react-router-dom";
import config from "../../config";
import Load from "../../Load/Load";

const Cacmondadat = () => {
  const { ban } = useParams();
  const [data, setData] = useState();

  const LayData = useCallback(async () => {
    try {
      const result = await DanhSachChiTietHoaDon(ban);
      setData(result.data.data);
    } catch (error) {
      console.error("Failed to fetch data", error);
    }
  }, [ban]);

  useEffect(() => {
    document.title = "CHAOBÍNH";
    LayData();
  }, [LayData]);

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <>
      {data ? (
        <div className="feedback-page">
          <button className="home-button" onClick={handleGoBack}>
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          <div className="feedback-content">
            <h3>Các Món Đã Đặt</h3>
          </div>
          <ul id="cart-items">
            {data.map((item, index) => (
              <li key={index} className="cart-item">
                <img
                  src={config.imageBaseUrl + "/" + item.anh}
                  className="cart-item-image"
                  alt="ảnh sản phầm"
                />
                <div className="cart-item-details">
                  <span className="cart-item-name">Tên: {item.tenMon}</span>
                  <span className="cart-item-size">Size: {item.tenSize}</span>
                  <span className="cart-item-price">
                    Giá: {item.gia.toLocaleString()}đ
                  </span>
                  <span className="cart-item-quantity">
                    Số lượng: {item.so_luong}
                  </span>
                </div>
              </li>
            ))}
          </ul>
          <div className="total-price">
            Tổng tiền: {data[0] ? data[0].tong_tien.toLocaleString() : 0}đ
          </div>
        </div>
      ) : (
        <Load />
      )}
    </>
  );
};

export default Cacmondadat;
