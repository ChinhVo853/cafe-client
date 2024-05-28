import React from "react";

const SanPhamSection = ({
  handleAddButtonClick,
  handleAddToCart,
  productOptions,
  data,
  price,
}) => {
  return (
    <div className="product-container col-sm-3">
      <div className="product-card">
        <img
          src="https://via.placeholder.com/200"
          alt={`Sản phẩm ${data.ten_mon}`}
          className="product-image"
        />
        <div className="product-info">
          <div className="product-name">{data.ten_mon}</div>
          <div className="product-price">{price.toLocaleString()}đ</div>
          <button
            className="add-button"
            onClick={() => handleAddButtonClick(data.ten_mon)}
          >
            +
          </button>
          <div
            className={`product-options ${
              productOptions[data.ten_mon] ? "open" : ""
            }`}
          >
            <label htmlFor={`size-${data.ten_mon}`}>Size:</label>

            <select id={`size-${data.ten_mon}`}>
              {data.sizes.map((item, index) => {
                return (
                  <option value={item} key={index}>
                    {item}
                  </option>
                );
              })}
            </select>

            <label htmlFor={`quantity-${data.ten_mon}`}>Số lượng:</label>
            <input
              type="number"
              id={`quantity-${data.ten_mon}`}
              defaultValue="1"
              min="1"
            />
            <button
              className="add-to-cart-button"
              onClick={() =>
                handleAddToCart(
                  data.ten_mon,
                  document.getElementById(`size-${data.ten_mon}`).value,
                  parseInt(
                    document.getElementById(`quantity-${data.ten_mon}`).value
                  ),
                  price,
                  data.ten_mon
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
