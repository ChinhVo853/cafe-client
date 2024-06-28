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

  const [ma, setMa] = useState();
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
  return (
    <>
      {tables ? (
        <>
          <div>
            <div className="search-container-custom">
              <input type="text" placeholder="Tìm kiếm..." />
              <button type="button">🔍</button>
            </div>

            <Menuquanly toggleMenu={toggleMenu} menuOpen={menuOpen} />

            <Quanlyban
              tables={tables}
              handlePayment={handlePayment}
              openModal={openModal}
              XoaDuLieu={XoaDuLieu}
              maQR={maQR}
              modalIsOpen={modalIsOpen}
              afterOpenModal={afterOpenModal}
              closeModal={closeModal}
            />
          </div>
        </>
      ) : (
        <>load</>
      )}
    </>
  );
}

export default Trangchuquanly;
