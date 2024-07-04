import React, { useState, useEffect } from "react";
import config from "../../config";
const GioHangSection = ({
  data,
  cartDetailsIsOpen,
  handleCartContainerClick,
  handleCloseCartClick,
  handleIncreaseQuantity,
  handleDecreaseQuantity,
  handleOrderSubmit,
}) => {
  const calculateTotalPrice = () => {
    return data.reduce(
      (tongtien, item) => tongtien + item.so_luong * item.gia,
      0
    );
  };

  const [showScroll, setShowScroll] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className="cart-container"
        id="cart-container"
        onClick={handleCartContainerClick}
      >
        <span>Giỏ hàng:</span>
        <span className="cart-count" id="cart-count">
          {data.length}
        </span>
      </div>
      <div
        className={`cart-details ${cartDetailsIsOpen ? "open" : ""}`}
        id="cart-details"
      >
        <div className="cart-header">
          <h3>Giỏ hàng của bạn</h3>
          <button className="close-cart-button" onClick={handleCloseCartClick}>
            <i className="fas fa-times"></i>
          </button>
        </div>
        <ul id="cart-items">
          {data.map((item, index) => (
            <li key={index} className="cart-item">
              <img
                src={config.imageBaseUrl + "/" + item.anh}
                alt={item.ten_mon}
                className="cart-item-image"
              />
              <div className="cart-item-info">
                <span>{`${item.ten_mon} - Size: ${
                  item.ten_size
                } - Giá: ${item.gia.toLocaleString()}đ`}</span>
                <div className="quantity-controls">
                  <button
                    className="decrease-button"
                    onClick={() =>
                      handleDecreaseQuantity(item.ten_size, item.ten_mon)
                    }
                  >
                    -
                  </button>
                  <span className="quantity-value">{item.so_luong}</span>
                  <button
                    className="increase-button"
                    onClick={() =>
                      handleIncreaseQuantity(item.ten_size, item.ten_mon)
                    }
                  >
                    +
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="total-price">
          Tổng tiền: {calculateTotalPrice().toLocaleString()}đ
        </div>
        <button className="order-button" onClick={handleOrderSubmit}>
          Gọi món
        </button>
      </div>
    </>
  );
};

export default GioHangSection;
