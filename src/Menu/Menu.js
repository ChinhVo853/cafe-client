import React, { useState, useCallback, useEffect } from "react";
import DanhSachMenuSection from "./components/DanhSachMenuSection";
import SanPhamSection from "./components/SanPhamSection";
import GioHangSection from "./components/GioHangSection";
import {
  getSomeData,
  ThemData,
  ThemSL,
  GiamSL,
  GoiMon,
  KiemTraBan,
} from "./getAPI.js/API";
import { useParams } from "react-router-dom";
import Load from "../Load/Load";
function Menu() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [productOptions, setProductOptions] = useState({});
  const [data, setData] = useState();
  const { ban } = useParams();
  const LayDuLieu = useCallback(async () => {
    try {
      const result2 = await KiemTraBan(ban);
      if (result2.data.data.trang_thai_id === 1) {
        window.location.href = "/TrangnhapMa/" + ban;
      }
      const result = await getSomeData(ban);
      setData(result);
    } catch (error) {
      console.error("Failed to fetch data", error);
    }
  }, []);

  useEffect(() => {
    document.title = "CHAOBÍNH";
    LayDuLieu();
    const interval = setInterval(() => {
      LayDuLieu();
    }, 5000); // 5000 milliseconds = 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
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

  const handleAddToCart = async (size, quantity, name, productId) => {
    const data = {
      tenMon: name,
      tenSize: size,
      soLuong: quantity,
      id: ban,
    };
    await ThemData(data);
    await LayDuLieu();
    handleCloseButtonClick(productId);
  };

  const handleCartContainerClick = () => {
    setCartDetailsIsOpen((prev) => !prev);
  };

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
    await GiamSL(data);
    await LayDuLieu();
  };
  const handleOrderSubmit = async () => {
    await GoiMon(ban);
    LayDuLieu();
  };
  return (
    <>
      {data ? (
        <>
          <DanhSachMenuSection
            data={data}
            menuIsOpen={menuIsOpen}
            handleMenuToggle={handleMenuToggle}
          />

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
      ) : (
        <Load />
      )}
    </>
  );
}

export default Menu;
