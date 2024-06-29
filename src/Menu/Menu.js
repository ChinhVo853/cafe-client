import React, { useState, useCallback, useEffect } from "react";
import DanhSachMenuSection from "./components/DanhSachMenuSection";
import SanPhamSection from "./components/SanPhamSection";
import GioHangSection from "./components/GioHangSection";
import { getSomeData } from "./getAPI.js/API";
function Menu() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [productOptions, setProductOptions] = useState({});
  const [data, setData] = useState();

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

  const handleCloseButtonClick = (productId) => {
    setProductOptions((prevOptions) => ({
      ...prevOptions,
      [productId]: false,
    }));
  };

  const handleCloseCartClick = () => {
    setCartDetailsIsOpen(false);
  };

  const handleIncreaseQuantity = (productId) => {
    const newCart = cart.map((item) => {
      if (item.id === productId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCart(newCart);
    setCartItemCount(cartItemCount + 1);
  };

  const handleDecreaseQuantity = (productId) => {
    const newCart = cart.map((item) => {
      if (item.id === productId && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCart(newCart);
    setCartItemCount(cartItemCount - 1);
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
    setCartItemCount(cartItemCount + 1);
  };
  const handleOrderSubmit = () => {
    // Xử lý logic khi gọi món
    console.log("Order submitted!");
  };
  return (
    <>
      {data && (
        <>
          <DanhSachMenuSection
            data={data}
            menuIsOpen={menuIsOpen}
            handleMenuToggle={handleMenuToggle}
          />
          <div className="search-container-custom">
            <input type="text" placeholder="Tìm kiếm..." />
            <button type="button">🔍</button>
          </div>
          {Object.entries(data.data).map(([key, item]) => (
            <div key={key}>
              <div className="category-container">
                <div className="category row" id={item.ten_loai}>
                  <div className="category-title ">{item.ten_loai}</div>
                  {Object.entries(item.mon).map(([monKey, monValue]) => (
                    <SanPhamSection
                      data={monValue}
                      handleAddButtonClick={handleAddButtonClick}
                      handleAddToCart={handleAddToCart}
                      handleCloseButtonClick={handleCloseButtonClick}
                      productOptions={productOptions}
                      productId={monValue.ten_mon}
                      name={monValue.ten_mon}
                      price={monValue.gia}
                      key={monKey}
                    />
                  ))}
                </div>
              </div>

              {/* <h2>{item.ten_loai}</h2> */}
            </div>
          ))}

          <GioHangSection
            cart={cart}
            cartItemCount={cartItemCount}
            cartDetailsIsOpen={cartDetailsIsOpen}
            handleCartContainerClick={handleCartContainerClick}
            handleCloseCartClick={handleCloseCartClick}
            handleIncreaseQuantity={handleIncreaseQuantity}
            handleDecreaseQuantity={handleDecreaseQuantity}
            handleOrderSubmit={handleOrderSubmit}
          />
        </>
      )}
    </>
  );
}

export default Menu;
