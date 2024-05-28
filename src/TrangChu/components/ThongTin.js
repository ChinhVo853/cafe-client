import React, { useState } from "react";
import ModalMoCuaSection from "./ModalMoCuaSection";
import config from "../../config";
function ThongTin({ data }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <img
        src={`${config.imageBaseUrl}/giaodien.webp`}
        className="w-100"
        alt="Giao diện"
      />
      <br />
      <br />
      <p className="wel-come">XIN CHÀO ĐẾN VỚI {data.ten_quan}</p>

      <div className="row">
        <div className="col-sm-4 introduce">
          <p>{data.data.ten_ban}</p>
        </div>
        <div className="col-sm-4 introduce">
          <div className="btn-group dropend" role="group">
            <button
              type="button"
              className="dropdown-toggle introduce"
              onClick={() => setModalIsOpen(true)}
            >
              Mở cửa
            </button>
          </div>
        </div>
        <div className="col-sm-4 introduce">
          <p>{localStorage.getItem("tenKhachHang")}</p>
        </div>
      </div>
      <ModalMoCuaSection
        data={data}
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
      />
    </>
  );
}

export default ThongTin;
