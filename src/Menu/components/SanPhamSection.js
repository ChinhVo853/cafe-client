import React from "react";

const SanPhamSection = ({
  handleAddButtonClick,
  handleAddToCart,
  handleCloseButtonClick,
  productOptions,
  productId,
  name,
  price,
}) => {
  return (
    <div className="product-container col-sm-3">
      <div className="product-card">
        <img
          src="https://via.placeholder.com/200"
          alt={`Sản phẩm ${productId}`}
          className="product-image"
        />
        <div className="product-info">
          <div className="product-name">{name}</div>
          <div className="product-price">{price.toLocaleString()}đ</div>
          <button
            className="add-button"
            onClick={() => handleAddButtonClick(productId)}
          >
            +
          </button>
          <div
            className={`product-options ${productOptions[productId] ? "open" : ""
              }`}
          >
            <div className="cart-header">
              <button
                className="close-button"
                onClick={() => handleCloseButtonClick(productId)}
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            <label htmlFor={`size-${productId}`}>Size:</label>
            <select id={`size-${productId}`}>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
            </select>
            <label htmlFor={`quantity-${productId}`}>Số lượng:</label>
            <input
              type="number"
              id={`quantity-${productId}`}
              defaultValue="1"
              min="1"
            />
            <button
              className="add-to-cart-button"
              onClick={() =>
                handleAddToCart(
                  productId,
                  document.getElementById(`size-${productId}`).value,
                  parseInt(
                    document.getElementById(`quantity-${productId}`).value
                  ),
                  price,
                  name
                )
              }
            >
              Thêm vào giỏ hàng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SanPhamSection;
