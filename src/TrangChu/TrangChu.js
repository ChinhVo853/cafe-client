import React from "react";
import ThongTin from "./components/ThongTin";
import ButtonSection from "./components/ButtonSection";
import BanChaySection from "./components/BanChaySection";
import MoiSection from "./components/MoiSection";
import ModalSection from "./components/ModalSection";

function TrangChu() {
  return (
    <>
      <div className="container">
        <div className="head">
          <ThongTin />
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
      <ModalSection />
    </>
  );
}
export default TrangChu;
