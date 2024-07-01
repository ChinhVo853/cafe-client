import React, { useState, useCallback, useEffect } from "react";
import DanhSachMenuSection from "./components/DanhSachMenuSection";
import SanPhamSection from "./components/SanPhamSection";
import GioHangSection from "./components/GioHangSection";
import { getSomeData, ThemData, ThemSL, GiamSL } from "./getAPI.js/API";
import { useParams } from "react-router-dom";

function Menu() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [productOptions, setProductOptions] = useState({});
  const [data, setData] = useState();
  const { ban } = useParams();
  const [cart, setCart] = useState(() => {
    // Khôi phục giỏ hàng từ localStorage nếu có
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const LayDuLieu = useCallback(async () => {
    try {
      const result = await getSomeData(ban);
      setData(result);
    } catch (error) {
      console.error("Failed to fetch data", error);
    }
  }, []);

  useEffect(() => {
    LayDuLieu();
  }, [LayDuLieu]);

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

  const handleAddToCart = async (size, quantity, name) => {
    const data = {
      tenMon: name,
      tenSize: size,
      soLuong: quantity,
      id: ban,
    };
    await ThemData(data);
    await LayDuLieu();
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

  const handleIncreaseQuantity = async (size, name) => {
    const data = {
      tenMon: name,
      tenSize: size,
      id: ban,
    };
    await ThemSL(data);
    await LayDuLieu();
  };

  const handleDecreaseQuantity = async (size, name) => {
    const data = {
      tenMon: name,
      tenSize: size,
      id: ban,
    };
    console.log(1);
    await GiamSL(data);
    await LayDuLieu();
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
            data={data.dat_mon}
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
