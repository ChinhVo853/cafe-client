import Menuquanly from "../Menuquanly";
import ModalQR from "./ModalQR";
import Quanlyban from "./components/Quanlyban";
import React, { useState, useEffect, useCallback } from "react";
import { XemData, XoaData, DSTrangThaiBan, LamTrong } from "./API/Api";
import Load from "../../Load/Load";
import Menunhanvien from "../Menunhanvien";
function Trangchuquanly() {
  const [quyen, setQuyen] = useState();
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  const [maQR, setMaQR] = useState(
    window.location.href.split("/").slice(0, -1).join("/")
  );
  const [tables, setTables] = useState();
  const LayData = useCallback(async () => {
    try {
      const result = await XemData();
      setQuyen(localStorage.getItem("quyen"));
      setTables(result.data);
      setLoading(true);
    } catch (error) {
      console.error("Failed to fetch data", error);
    }
  }, []);
  const fetchData = async () => {
    try {
      await LayData();
      // Continue with other actions or fetch more data if needed
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    document.title = "Thống kê";
    LayData();
    const id = setInterval(() => {
      fetchData();
    }, 5000); // 5000 milliseconds = 5 seconds

    setIntervalId(id);

    return () => clearInterval(id); // Cleanup interval on component unmount
  }, [LayData]);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handlePayment = (tableId) => {
    const orders = {
      1: [
        {
          image: "link_to_image1.jpg",
          name: "Món ăn 1",
          price: 100,
          quantity: 2,
        },
        {
          image: "link_to_image2.jpg",
          name: "Món ăn 2",
          price: 200,
          quantity: 1,
        },
      ],
      2: [
        {
          image: "link_to_image3.jpg",
          name: "Món ăn 3",
          price: 150,
          quantity: 3,
        },
        {
          image: "link_to_image4.jpg",
          name: "Món ăn 4",
          price: 120,
          quantity: 2,
        },
      ],
      3: [
        {
          image: "link_to_image5.jpg",
          name: "Món ăn 5",
          price: 180,
          quantity: 1,
        },
        {
          image: "link_to_image6.jpg",
          name: "Món ăn 6",
          price: 250,
          quantity: 2,
        },
      ],
    };
    const orderData = JSON.stringify(orders[tableId]);
    localStorage.setItem(`table-${tableId}-order`, orderData);
    window.location.href = `Thanhtoan?table=${tableId}`;
  };

  //--------------------------------------------

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal(ban) {
    setMaQR(
      window.location.href.split("/").slice(0, -1).join("/") +
        "/Trangnhapma/QR/" +
        ban
    );
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  const XoaDuLieu = async (id) => {
    const data = {
      id: id,
    };
    await XoaData(data);
    LayData();
  };
  const viewOrderHistory = (tableId) => {
    // Logic để hiển thị lịch sử hóa đơn
    console.log(`Xem lịch sử hóa đơn cho bàn ${tableId}`);
  };
  const TrangThai = async (trangthai) => {
    setLoading(false);
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
    const result = await DSTrangThaiBan(trangthai);
    setTables(result.data.data);
    setLoading(true);
  };
  const LamTrongBan = async (ban, datmon) => {
    setLoading(false);
    const data = {
      ban: ban,
      dat_mon_id: datmon,
    };
    await LamTrong(data);
    LayData();
  };
  return (
    <>
      {tables && loading ? (
        <>
          <div>
            <a
              href="/Trangthongtinnhanvien"
              className="btn-trangnhanvien"
              type="button"
            >
              <i className="fa-solid fa-user"></i>
            </a>
            {quyen == 1 ? (
              <Menuquanly toggleMenu={toggleMenu} menuOpen={menuOpen} />
            ) : (
              <Menunhanvien toggleMenu={toggleMenu} menuOpen={menuOpen} />
            )}

            <Quanlyban
              tables={tables}
              TrangThai={TrangThai}
              handlePayment={handlePayment}
              openModal={openModal}
              XoaDuLieu={XoaDuLieu}
              viewOrderHistory={viewOrderHistory}
              maQR={maQR}
              modalIsOpen={modalIsOpen}
              afterOpenModal={afterOpenModal}
              closeModal={closeModal}
              LamTrongBan={LamTrongBan}
            />
          </div>
        </>
      ) : (
        <>
          <Load />
        </>
      )}
    </>
  );
}

export default Trangchuquanly;
