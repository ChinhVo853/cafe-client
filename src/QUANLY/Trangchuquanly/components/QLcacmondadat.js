import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { DanhSachChiTietHoaDon, ChiTietXN } from "../API/Api";
import Load from "../../../Load/Load";
import config from "../../../config";
const QLcacmondadat = () => {
  const { ban } = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    document.title = "Các món đã order";
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
  const XAcNhanChiTiet = async (id) => {
    await ChiTietXN(id);
    LayData();
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
            {data.map((item, key) => (
              <li
                key={key}
                className={`cart-item ${item.isConfirmed ? "confirmed" : ""}`}
              >
                <img
                  src={config.imageBaseUrl + "/" + item.anh}
                  alt={item.ten_mon}
                  className="cart-item-image"
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
                  {item.xac_nhan == 0 ? (
                    <button
                      type="button"
                      className="btn btn-sm btn-request-confirm"
                      onClick={() => XAcNhanChiTiet(item.chiTietID)}
                    >
                      Xác nhận
                    </button>
                  ) : (
                    <span>Đã xác nhận</span>
                  )}
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

export default QLcacmondadat;
