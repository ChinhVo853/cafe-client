import React, { useState, useCallback, useEffect } from "react";
import DanhSachMenuSection from "./components/DanhSachMenuSection";
import SanPhamSection from "./components/SanPhamSection";
import GioHangSection from "./components/GioHangSection";
import { getSomeData } from "./getAPI.js/API";
function Menu() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [productOptions, setProductOptions] = useState({});
  const [data, setData] = useState(null);
  const [cart, setCart] = useState(() => {
    // Khôi phục giỏ hàng từ localStorage nếu có
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const LayDuLieu = useCallback(async () => {
    try {
      const result = await getSomeData();
      setData(result);
    } catch (error) {
      console.error("Failed to fetch data", error);
    }
  }, []);
  useEffect(() => {
    LayDuLieu();
  }, [LayDuLieu]);

  const [cartItemCount, setCartItemCount] = useState(() => {
    // Khôi phục số lượng sản phẩm trong giỏ hàng từ localStorage nếu có
    const savedItemCount = localStorage.getItem("cartItemCount");
    return savedItemCount ? parseInt(savedItemCount, 10) : 0;
  });

  const xoa = () => {
    localStorage.removeItem("cartItemCount");
  };

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

  return (
    <>
      {data ? (
        <>
          <DanhSachMenuSection
            data={data.data}
            menuIsOpen={menuIsOpen}
            handleMenuToggle={handleMenuToggle}
          />
          <div className="search-container">
            <input type="text" placeholder="Tìm kiếm..." />
            <button type="button">🔍</button>
          </div>

          <div className="category-container">
            {data.data.map((item, index) => {
              return (
                <div key={index} className="category row" id="milk-tea">
                  <div className="category-title">{item.ten_loai}</div>

                  <SanPhamSection
                    handleAddButtonClick={handleAddButtonClick}
                    handleAddToCart={handleAddToCart}
                    productOptions={productOptions}
                    data={item}
                    productId={item.ten_mon}
                    name={item.ten_mon}
                    price={10000}
                  />
                </div>
              );
            })}
            <button onClick={xoa()}> xoá</button>
          </div>
          <GioHangSection
            cart={cart}
            cartItemCount={cartItemCount}
            cartDetailsIsOpen={cartDetailsIsOpen}
            handleCartContainerClick={handleCartContainerClick}
          />
        </>
      ) : (
        <p>loading...</p>
      )}
    </>
  );
}

export default Menu;
