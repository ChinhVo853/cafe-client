import Menuquanly from "../Menuquanly";
import ModalQR from "./ModalQR";
import Quanlyban from "./components/Quanlyban";
import React, { useState, useEffect, useCallback } from "react";
import { XemData, XoaData } from "./API/Api";
function Trangchuquanly() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [maQR, setMaQR] = useState(
    window.location.href.split("/").slice(0, -1).join("/")
  );
  const [tables, setTables] = useState();
  const LayData = useCallback(async () => {
    try {
      const result = await XemData();
      setTables(result.data);
    } catch (error) {
      console.error("Failed to fetch data", error);
    }
  }, []);

  useEffect(() => {
    LayData();
  }, [LayData]);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const changeStatus = (tableId) => {
    setTables((prevTables) =>
      prevTables.map((table) =>
        table.id === tableId
          ? {
              ...table,
              status: table.status === "occupied" ? "vacant" : "occupied",
            }
          : table
      )
    );
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
  const handleQRCode = (code) => {
    console.log(`QR Code for table: ${code}`);
    // Logic để hiển thị hoặc xử lý mã QR
  };

  //--------------------------------------------

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
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
  return (
    <>
      {tables ? (
        <>

          <div>
            
            <div className="search-container-custom">
              <input type="text" placeholder="Tìm kiếm..." />
              <button type="button">🔍</button>
            </div>
            <a href="/Trangthongtinnhanvien" className="btn-trangnhanvien" type="button"><i class="fa-solid fa-user"></i></a>

            <Menuquanly toggleMenu={toggleMenu} menuOpen={menuOpen} />

            <Quanlyban
              tables={tables}
              changeStatus={changeStatus}
              handlePayment={handlePayment}
              handleQRCode={handleQRCode}
              openModal={openModal}
              XoaDuLieu={XoaDuLieu}
              viewOrderHistory={viewOrderHistory}
            />
          </div>
          <ModalQR
            maQR={maQR + "/Trangnhapma/QR/1"}
            modalIsOpen={modalIsOpen}
            afterOpenModal={afterOpenModal}
            closeModal={closeModal}
          />
        </>
      ) : (
        <>load</>
      )}
    </>
  );
}

export default Trangchuquanly;
