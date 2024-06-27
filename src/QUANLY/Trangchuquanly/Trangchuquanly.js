import Menuquanly from "../Menuquanly";
import ModalQR from "./ModalQR";
import Quanlyban from "./components/Quanlyban";
import React, { useState } from "react";
function Trangchuquanly() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [maQR, setMaQR] = useState(
    window.location.href.split("/").slice(0, -1).join("/")
  );
  const [tables, setTables] = useState([
    { id: 1, code: "T001", status: "occupied" },
    { id: 2, code: "T002", status: "vacant" },
    { id: 3, code: "T003", status: "occupied" },
  ]);

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
  console.log(maQR);
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

  return (
    <>
      <div>
        <div className="search-container-custom">
          <input type="text" placeholder="Tìm kiếm..." />
          <button type="button">🔍</button>
        </div>

        <Menuquanly toggleMenu={toggleMenu} menuOpen={menuOpen} />

        <Quanlyban
          tables={tables}
          changeStatus={changeStatus}
          handlePayment={handlePayment}
          handleQRCode={handleQRCode}
          openModal={openModal}
        />
      </div>
      <ModalQR
        maQR={maQR + "/QR/1"}
        modalIsOpen={modalIsOpen}
        afterOpenModal={afterOpenModal}
        closeModal={closeModal}
      />
    </>
  );
}

export default Trangchuquanly;
