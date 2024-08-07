import React, { useEffect, useState, useCallback } from "react";
import { DanhSachChiTietHoaDon } from "../API/Api";
import { useParams } from "react-router-dom";
import config from "../../config";
import Load from "../../Load/Load";

const Cacmondadat = () => {
  const { ban } = useParams();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  const LayData = useCallback(async () => {
    try {
      const result = await DanhSachChiTietHoaDon(ban);
      setData(result.data.data);
      setLoading(true);
    } catch (error) {
      console.error("Failed to fetch data", error);
    }
  }, [ban]);

  useEffect(() => {
    document.title = "CHAOBÍNH";

    LayData();
    const interval = setInterval(() => {
      LayData();
    }, 5000); // 5000 milliseconds = 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [LayData]);

  const handleGoBack = () => {
    window.history.back();
  };
  const TongTien = () => {
    return data.reduce(
      (tongTien, item) => tongTien + item.gia * item.so_luong,
      0
    );
  };

  return (
    <>
      {data && loading ? (
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
            Tổng tiền: {TongTien().toLocaleString()}đ
          </div>
        </div>
      ) : (
        <Load />
      )}
    </>
  );
};

export default Cacmondadat;
