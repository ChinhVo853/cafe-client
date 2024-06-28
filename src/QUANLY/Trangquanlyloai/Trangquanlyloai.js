import Menuquanly from "../Menuquanly";
import React, { useState, useCallback, useEffect } from "react";
import HeadLoaiSection from "./components/HeadLoaiSection";
import TimKiemSection from "./components/TimKiemSection";
import ThongTinSection from "./components/ThongTinSection";
import { layData, XoaData } from "./getAPI/GetApi";
function Trangquanlyloai() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [data, setData] = useState();

  const LayDuLieu = useCallback(async () => {
    try {
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
    LayDuLieu();
  }, [LayDuLieu]);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      {data && (
        <div>
          <TimKiemSection />
          <div className="request-container mt-5">
            <HeadLoaiSection />
            <ThongTinSection data={data.data} Xoa={Xoa} />
          </div>
          <Menuquanly toggleMenu={toggleMenu} menuOpen={menuOpen} />
        </div>
      )}
    </>
  );
}

export default Trangquanlyloai;
