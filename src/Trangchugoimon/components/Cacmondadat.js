import React, { useEffect, useState, useCallback } from "react";
import { DanhSachChiTietHoaDon } from "../API/Api";
import { useParams } from "react-router-dom";
import config from "../../config";
const Cacmondadat = () => {
  const { ban } = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    LayData();
  }, [ban]);

  const LayData = useCallback(async () => {
    try {
      const result = await DanhSachChiTietHoaDon(ban);
      setData(result.data.data);
    } catch (error) {
      console.error("Failed to fetch data", error);
    }
  }, []);

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <>
      {data && (
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
                  alt={item.tenMon}
                  className="cart-item-image"
                />
                <span>{`${item.tenMon} - Size: ${
                  item.tenSize
                } - Giá: ${item.gia.toLocaleString()}đ`}</span>
                <div className="quantity-controls">
                  <span className="quantity-value">
                    Số lượng: {item.so_luong}
                  </span>
                </div>
              </li>
            ))}
          </ul>
          <div className="total-price">
            Tổng tiền: {data[0].tong_tien.toLocaleString()}đ
          </div>
        </div>
      )}
    </>
  );
};

export default Cacmondadat;
