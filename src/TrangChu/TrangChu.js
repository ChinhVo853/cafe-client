import React, { useState, useEffect, useCallback, memo } from "react";
import ThongTin from "./components/ThongTin";
import ButtonSection from "./components/ButtonSection";
import BanChaySection from "./components/BanChaySection";
import MoiSection from "./components/MoiSection";
import ModalSection from "./components/ModalSection";
import { getSomeData } from "./getAPI/api";
function TrangChu() {
  const [modalIsOpen, setModalIsOpen] = useState(true);
  const [data, setData] = useState();
  const [inputName, setInputName] = useState("");

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
    if (localStorage.getItem("tenKhachHang") != null) {
      setModalIsOpen(false);
    }
    const timeoutId = setTimeout(() => {
      localStorage.removeItem("tenKhachHang");
    }, 600000);

    return () => clearTimeout(timeoutId); // Cleanup timeout on component unmount
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
