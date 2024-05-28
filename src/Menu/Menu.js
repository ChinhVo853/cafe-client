import React, { useState, useCallback, useEffect } from "react";
import DanhSachMenuSection from "./components/DanhSachMenuSection";
import SanPhamSection from "./components/SanPhamSection";
import GioHangSection from "./components/GioHangSection";

function Menu() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [productOptions, setProductOptions] = useState({});

  const [cart, setCart] = useState(() => {
    // Khôi phục giỏ hàng từ localStorage nếu có
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [cartItemCount, setCartItemCount] = useState(() => {
    // Khôi phục số lượng sản phẩm trong giỏ hàng từ localStorage nếu có
    const savedItemCount = localStorage.getItem("cartItemCount");
    return savedItemCount ? parseInt(savedItemCount, 10) : 0;
  });

  const [cartDetailsIsOpen, setCartDetailsIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuIsOpen((prev) => !prev);
  };

  const handleAddButtonClick = (productId) => {
    setProductOptions((prev) => ({
      ...prev,
      [productId]: !prev[productId],
    }));
  };

  const handleAddToCart = (productId, size, quantity, price, name) => {
    // Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng chưa
    const existingProductIndex = cart.findIndex(
      (item) => item.id === productId && item.size === size
    );

    let newCart;
    if (existingProductIndex !== -1) {
      // Nếu sản phẩm đã tồn tại, tăng số lượng của sản phẩm đó
      newCart = cart.map((item, index) => {
        if (index === existingProductIndex) {
          return { ...item, quantity: item.quantity + quantity };
        }
        return item;
      });
    } else {
      // Nếu sản phẩm chưa tồn tại, thêm sản phẩm mới vào giỏ hàng
      newCart = [...cart, { id: productId, size, quantity, price, name }];
    }

    // Cập nhật giỏ hàng và lưu vào localStorage
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));

    // Tăng số lượng sản phẩm trong giỏ hàng và lưu vào localStorage
    const newCartItemCount = cartItemCount + quantity;
    setCartItemCount(newCartItemCount);
    localStorage.setItem("cartItemCount", newCartItemCount.toString());

    // Đóng product options sau khi thêm vào giỏ hàng
    setProductOptions((prev) => ({
      ...prev,
      [productId]: false,
    }));
  };

  const handleCartContainerClick = () => {
    setCartDetailsIsOpen((prev) => !prev);
  };

  const updateCartDetails = useCallback(() => {
    // Function logic to update cart details can go here if needed
  }, [cart]);

  useEffect(() => {
    updateCartDetails();
  }, [cart, updateCartDetails]);

  return (
    <>
      <DanhSachMenuSection
        menuIsOpen={menuIsOpen}
        handleMenuToggle={handleMenuToggle}
      />
      <div className="search-container">
        <input type="text" placeholder="Tìm kiếm..." />
        <button type="button">🔍</button>
      </div>
      <div className="category-container">
        <div className="category row" id="milk-tea">
          <div className="category-title ">Trà sữa</div>

          <SanPhamSection
            handleAddButtonClick={handleAddButtonClick}
            handleAddToCart={handleAddToCart}
            productOptions={productOptions}
            productId={1}
            name="Trà sữa 1"
            price={10000}
          />
          <SanPhamSection
            handleAddButtonClick={handleAddButtonClick}
            handleAddToCart={handleAddToCart}
            productOptions={productOptions}
            productId={1}
            name="Trà sữa 1"
            price={10000}
          />
          <SanPhamSection
            handleAddButtonClick={handleAddButtonClick}
            handleAddToCart={handleAddToCart}
            productOptions={productOptions}
            productId={1}
            name="Trà sữa 1"
            price={10000}
          />
        </div>
        <div className="category" id="fruit-tea">
          <div className="category-title">Trà trái cây</div>
          <SanPhamSection
            handleAddButtonClick={handleAddButtonClick}
            handleAddToCart={handleAddToCart}
            productOptions={productOptions}
            productId={2}
            name="Trà trái cây 1"
            price={8000}
          />
        </div>
      </div>
      <GioHangSection
        cart={cart}
        cartItemCount={cartItemCount}
        cartDetailsIsOpen={cartDetailsIsOpen}
        handleCartContainerClick={handleCartContainerClick}
      />
    </>
  );
}

export default Menu;
