import Menuquanly from "../Menuquanly";
import React, { useState, useCallback, useEffect } from "react";
import HeadLoaiSection from "./components/HeadLoaiSection";
import ThongTinSection from "./components/ThongTinSection";
import { layData, XoaData } from "./getAPI/GetApi";
import Load from "../../Load/Load";
function Trangquanlyloai() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [data, setData] = useState();

  const LayDuLieu = useCallback(async () => {
    try {
      document.title = "Quản lý loại";
      const result = await layData();
      setData(result);
    } catch (error) {
      console.error("Failed to fetch data", error);
    }
  }, []);
  const Xoa = async (id) => {
    const data = {
      id: id,
    };
    try {
      await XoaData(data);
      LayDuLieu();
    } catch (error) {
      console.error("Failed to fetch data", error);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("quyen") === 2) {
      window.location.href = "/Trangchuquanly";
    }
    LayDuLieu();
  }, [LayDuLieu]);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      {data ? (
        <div>
          <div className="request-container mt-5">
            <HeadLoaiSection />
            <ThongTinSection data={data.data} Xoa={Xoa} />
          </div>
          <Menuquanly toggleMenu={toggleMenu} menuOpen={menuOpen} />
        </div>
      ) : (
        <Load />
      )}
    </>
  );
}

export default Trangquanlyloai;
