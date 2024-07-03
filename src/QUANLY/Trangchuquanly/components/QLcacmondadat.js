import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { DanhSachChiTietHoaDon } from "../API/Api";
import Load from "../../../Load/Load";
import config from "../../../config";
const QLcacmondadat = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      ten_mon: "Tên món 1",
      ten_size: "L",
      gia: 100000,
      so_luong: 2,
      image: "link-to-image1.jpg",
      isConfirmed: false,
    },
    {
      id: 2,
      ten_mon: "Tên món 2",
      ten_size: "M",
      gia: 80000,
      so_luong: 1,
      image: "link-to-image2.jpg",
      isConfirmed: false,
    },
  ]);

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

  const handleConfirm = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, isConfirmed: !item.isConfirmed } : item
      )
    );
  };

  const calculateTotalPrice = () => {
    return items.reduce((total, item) => total + item.so_luong * item.gia, 0);
  };

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
