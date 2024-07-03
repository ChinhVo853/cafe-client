import React, { useEffect, useState } from "react";

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
      <div className="feedback-page">
        <button className="home-button" onClick={handleGoBack}>
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <div className="feedback-content">
          <h3>Các Món Đã Đặt</h3>
        </div>
        <ul id="cart-items">
          {items.map((item) => (
            <li key={item.id} className={`cart-item ${item.isConfirmed ? "confirmed" : ""}`}>
              <img src={item.image} alt={item.ten_mon} className="cart-item-image" />
              <div className="cart-item-details">
                <span className="cart-item-name">Tên: {item.ten_mon}</span>
                <span className="cart-item-size">Size: {item.ten_size}</span>
                <span className="cart-item-price">Giá: {item.gia.toLocaleString()}đ</span>
                <span className="cart-item-quantity">Số lượng: {item.so_luong}</span>
              </div>
              <button className="confirm-button" onClick={() => handleConfirm(item.id)}>
                {item.isConfirmed ? "✔" : "Xác nhận"}
              </button>
            </li>
          ))}
        </ul>
        <div className="total-price">
          Tổng tiền: {calculateTotalPrice().toLocaleString()}đ
        </div>
      </div>
    </>
  );
};

export default QLcacmondadat;
