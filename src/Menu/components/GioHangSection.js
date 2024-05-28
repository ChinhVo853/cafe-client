import React from "react";
const GioHangSection = ({
  cart,
  cartItemCount,
  cartDetailsIsOpen,
  handleCartContainerClick,
}) => {
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
        <h3>Giỏ hàng của bạn</h3>
        <ul id="cart-items">
          {cart.map((item, index) => (
            <li key={index}>
              {`${item.name} - Size: ${item.size} - Số lượng: ${item.quantity} - Giá: ${item.price}`}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default GioHangSection;
