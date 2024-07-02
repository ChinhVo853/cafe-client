import React from "react";
import config from "../../config";
const SanPhamSection = ({
  data,
  handleAddButtonClick,
  handleAddToCart,
  handleCloseButtonClick,
  productOptions,
  productId,
  name,
  price,
}) => {
  return (
    <>
      {data.trang_thai == 0 && (
        <div className="product-container col-sm-3">
          <div className="product-card">
            {data.anh ? (
              <img
                src={config.imageBaseUrl + "/" + data.anh}
                alt={`Sản phẩm ${productId}`}
                className="product-image"
              />
            ) : (
              <img
                src="https://via.placeholder.com/200"
                alt={`Sản phẩm ${productId}`}
                className="product-image"
              />
            )}

            <div className="product-info">
              <div className="product-name">{name}</div>
              <div className="product-price">
                {price.map((item, key) => (
                  <p key={key}>{item.toLocaleString()}đ</p>
                ))}
              </div>
              <button
                className="add-button"
                onClick={() => handleAddButtonClick(productId)}
              >
                +
              </button>
              <div
                className={`product-options ${
                  productOptions[productId] ? "open" : ""
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
                  {data.sizes.map((item, index) => (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  ))}
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
                      document.getElementById(`size-${productId}`).value,
                      parseInt(
                        document.getElementById(`quantity-${productId}`).value
                      ),
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
      )}
    </>
  );
};

export default SanPhamSection;
