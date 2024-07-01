import React,{useState} from "react";

import "bootstrap/dist/css/bootstrap.min.css";

function Quanlyban({
  tables,
  changeStatus,
  handlePayment,
  handleQRCode,
  openModal,
  XoaDuLieu,
  viewOrderHistory,
}) {
  const [filter, setFilter] = useState("all");

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const filteredTables = tables.filter((table) => {
    if (filter === "all") return true;
    return table.ten_trang_thai === filter;
  });
  console.log(tables);
  return (
    <div className="request-container mt-5">
      <div className="header">THỐNG KÊ</div>
      <div className="col text-end mb-3">
        <button
          className="btn btn-primary"
          onClick={() => {
            /* Logic để thêm bàn mới */
          }}
        >
          Thêm bàn
        </button>
      </div>
      <div>
          <button
            className="btn btn-outline-secondary me-2"
            onClick={() => handleFilterChange("Trống")}
          >
            Trống
          </button>
          <button
            className="btn btn-outline-secondary me-2"
            onClick={() => handleFilterChange("Đang sử dụng")}
          >
            Đang sử dụng
          </button>
          <button
            className="btn btn-outline-secondary me-2"
            onClick={() => handleFilterChange("Đang chờ thanh toán")}
          >
            Đang chờ thanh toán
          </button>
          <button
            className="btn btn-outline-secondary"
            onClick={() => handleFilterChange("Đang dọn bàn")}
          >
            Đang dọn bàn
          </button>
        </div>
      <div className="container">
        <div className="row">
          {tables.map((table) => (
            <div className="col-md-4" key={table.ban_id}>
              <div className="card mb-3">
                <div
                  className={`card-body ${table.ten_trang_thai}`}
                  id={`table-${table.id}`}
                >
                  <h5 className="card-title">Bàn {table.ten_ban}</h5>
                  <p className="card-text">Mã bàn: {table.dat_mon_id}</p>
                  <p className="card-text">
                    Trạng thái: {table.ten_trang_thai}
                  </p>

                  <button className="btn btn-info qr-btn" onClick={openModal}>
                    QR
                  </button>
                  <button
                    className="btn btn-warning payment-btn"
                    onClick={() => handlePayment(table.ban_id)}
                  >
                    Yêu cầu
                  </button>
                  <button
                    href="#"
                    className="btn btn-danger delete-btn"
                    onClick={() => XoaDuLieu(table.ban_id)}
                  >
                    Xóa
                  </button>
                  <button
                    className="btn btn-secondary history-btn"
                    onClick={() => viewOrderHistory(table.ban_id)}
                  >
                    Lịch sử hóa đơn
                  </button>
                  <button
                    className="btn btn-primary history-btn"
                    onClick={() => viewOrderHistory(table.ban_id)}
                  >
                    Cập nhật
                  </button>
                  <button
                    className="btn btn-info history-btn"
                    onClick={() => viewOrderHistory(table.ban_id)}
                  >
                    Trạng thái
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Quanlyban;
