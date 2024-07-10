import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import ModalQR from "../ModalQR";

function Quanlyban({
  tables,
  TrangThai,
  handlePayment,
  openModal,
  XoaDuLieu,
  viewOrderHistory,
  maQR,
  modalIsOpen,
  afterOpenModal,
  closeModal,
  LamTrongBan,
}) {
  return (
    <div className="request-container mt-5">
      <div className="header">THỐNG KÊ</div>

      <div>
        <button
          className="btn btn-outline-secondary me-2"
          onClick={() => TrangThai(1)}
        >
          Trống
        </button>
        <button
          className="btn btn-outline-secondary me-2"
          onClick={() => TrangThai(2)}
        >
          Đang sử dụng
        </button>
        <button
          className="btn btn-outline-secondary me-2"
          onClick={() => TrangThai(3)}
        >
          Đang chờ thanh toán
        </button>
        <button
          className="btn btn-outline-secondary"
          onClick={() => TrangThai(4)}
        >
          Đang dọn bàn
        </button>
      </div>
      <br />
      <h3>CHÚ Ý:</h3>
      <p className="chu-y">
        *KHI CÓ YÊU CẦU TỪ KHÁCH HÀNG THÌ BÀN SẼ ĐỔI SANG MÀU VÀNG!!!
      </p>

      <p className="chu-y">
        *KHI CÓ ORDER NÚT "CÁC MÓN ĐƯỢC ORDER" SẼ ĐỔI SANG MÀU CAM!!!
      </p>
      <div className="container">
        <div className="row">
          {tables.map((table) => (
            <div className="col-md-4" key={table.ban_id}>
              <div className="card mb-3">
                <div
                  className={`card-body ${table.ten_trang_thai} ta-ct `}
                  id={`table-${table.id}`}
                  style={table.yeuCau > 0 ? { background: "#FFFF99" } : {}}
                >
                  <h5 className="card-title">Tên bàn: {table.ten_ban}</h5>
                  <p className="card-text">
                    Mã bàn: {table.trang_thai_id != 1 && table.dat_mon_id}
                  </p>
                  <p className="card-text">
                    Trạng thái: {table.ten_trang_thai}
                  </p>
                  <button
                    className="btn btn-info qr-btn"
                    onClick={() => openModal(table.ban_id)}
                  >
                    QR
                  </button>
                  {table.dat_mon_id && table.trang_thai_id != 1 && (
                    <a
                      href={`/Trangyeucaucuaban/${table.dat_mon_id}`}
                      className="btn btn-warning payment-btn"
                      onClick={() => handlePayment(table.ban_id)}
                    >
                      Yêu cầu
                    </a>
                  )}

                  <button
                    className="btn btn-info history-btn"
                    onClick={() => LamTrongBan(table.ban_id, table.dat_mon_id)}
                  >
                    Làm trống bàn
                  </button>
                  <a
                    href={`/QLcacmondadat/${table.ban_id}`}
                    className="btn btn-outline-secondary"
                    style={table.hd > 0 ? { background: "#f4a261" } : {}}
                  >
                    Các món được order
                  </a>
                </div>
              </div>
              <ModalQR
                maQR={maQR}
                modalIsOpen={modalIsOpen}
                afterOpenModal={afterOpenModal}
                closeModal={closeModal}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Quanlyban;
