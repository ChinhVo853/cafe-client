import React, { useState } from "react";

const GioHangSection = ({
  cart,
  cartItemCount,
  cartDetailsIsOpen,
  handleCartContainerClick,
  handleCloseCartClick,
  handleIncreaseQuantity,
  handleDecreaseQuantity,
}) => {
  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };
  const [showScroll, setShowScroll] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  
  return (
    <>
      <div
        className="cart-container"
        id="cart-container"
        onClick={handleCartContainerClick}
      >
        <span>Giỏ hàng:</span>
        <span className="cart-count" id="cart-count">
          {cartItemCount}
        </span>
      </div>
      <div
        className={`cart-details ${cartDetailsIsOpen ? "open" : ""}`}
        id="cart-details"
      >
        <div className="cart-header">
          <h3>Giỏ hàng của bạn</h3>
          <button
            className="close-cart-button"
            onClick={handleCloseCartClick}
          >
            <i className="fas fa-times"></i>
          </button>
        </div>
        <ul id="cart-items">
          {cart.map((item, index) => (
            <li key={index} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <span>{`${item.name} - Size: ${item.size} - Giá: ${item.price.toLocaleString()}đ`}</span>
              <div className="quantity-controls">
                <button
                  className="decrease-button"
                  onClick={() => handleDecreaseQuantity(item.id)}
                >
                  -
                </button>
                <span className="quantity-value">{item.quantity}</span>
                <button
                  className="increase-button"
                  onClick={() => handleIncreaseQuantity(item.id)}
                >
                  +
                </button>
              </div>
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

export default GioHangSection;
