import React, { useState, useEffect, useCallback, memo } from "react";
import ThongTin from "./components/ThongTin";
import ButtonSection from "./components/ButtonSection";
import BanChaySection from "./components/BanChaySection";
import MoiSection from "./components/MoiSection";
import ModalSection from "./components/ModalSection";
import axios from "axios";

function TrangChu() {
  const [modalIsOpen, setModalIsOpen] = useState(true);
  const [data, setData] = useState();
  const [inputName, setInputName] = useState("");

  const LayDuLieu = useCallback(() => {
    axios
      .get("http://127.0.0.1:8000/api/Trang-Chu/1")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    LayDuLieu();
    if (localStorage.getItem("tenKhachHang") != null) {
      setModalIsOpen(false);
    }
    setTimeout(() => {
      localStorage.removeItem("tenKhachHang");
    }, 600000);
  }, [LayDuLieu]);

  return (
    <>
      {data ? (
        <>
          {localStorage.getItem("tenKhachHang") ? (
            <div className="container">
              <div className="head">
                <ThongTin data={data} />
              </div>
              <br />
              <br />
              <div className="content">
                <div className="row">
                  <ButtonSection />
                  <BanChaySection />
                </div>
                <br />
                <br />
                <MoiSection />
              </div>
            </div>
          ) : (
            <ModalSection
              data={data}
              modalIsOpen={modalIsOpen}
              setModalIsOpen={setModalIsOpen}
              inputName={inputName}
              setInputName={setInputName}
            />
          )}
        </>
      ) : (
        <p>Loading...</p> // Display a loading message or spinner until data is fetched
      )}
    </>
  );
}

export default memo(TrangChu);
