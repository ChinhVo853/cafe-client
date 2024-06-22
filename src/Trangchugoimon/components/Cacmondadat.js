import React from "react";

const Cacmondadat = () => {
  const handleGoBack = () => {
    window.history.back();
  };

  const cart = [
    { id: 1, name: "Trà sữa", size: "L", price: 50000, quantity: 2, image: "path/to/trasua.jpg" },
    { id: 2, name: "Cà phê", size: "M", price: 30000, quantity: 1, image: "path/to/cafe.jpg" },
    // Thêm các món khác vào đây
  ];

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="feedback-page">
      <button className="home-button" onClick={handleGoBack}>
        <i className="fa-solid fa-arrow-left"></i>
      </button>
      <div className="feedback-content">
        <h3>Các Món Đã Đặt</h3>
      </div>
      <ul id="cart-items">
        {cart.map((item, index) => (
          <li key={index} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <span>{`${item.name} - Size: ${item.size} - Giá: ${item.price.toLocaleString()}đ`}</span>
            <div className="quantity-controls">
              <span className="quantity-value">Số lượng: {item.quantity}</span>
            </div>
          </li>
        ))}
      </ul>
      <div className="total-price">
        Tổng tiền: {calculateTotalPrice().toLocaleString()}đ
      </div>
    </div>
  );
};

export default Cacmondadat;
