import React, { useState, useCallback, useEffect } from "react";
import Menuquanly from "../Menuquanly";
import { LayYeuCau, XacNhanYeuCau } from "./API/Api";
const TrangQLyeucaucuakhachhang = () => {
  const [requests, setRequests] = useState();
  useEffect(() => {
    LayData();
  }, []);

  const LayData = useCallback(async () => {
    try {
      const result = await LayYeuCau();
      setRequests(result);
    } catch (error) {
      console.error("Failed to fetch data", error);
    }
  }, []);
  console.log(requests);
  const handleStatusChange = async (id) => {
    await XacNhanYeuCau(id);
    LayData();
  };
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      {requests && (
        <div>
          <div className="search-container-custom">
            <input type="text" placeholder="Tìm kiếm..." />
            <button type="button">🔍</button>
          </div>
          <div className="request-container mt-5">
            <div className="header">QUẢN LÝ YÊU CẦU KHÁCH HÀNG</div>
            <div className="row">
              <div className="col">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">Tên bàn</th>
                      <th scope="col">Nội Dung</th>
                      <th scope="col">Thời gian yêu cầu</th>
                      <th scope="col">Trạng thái</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {requests.data.map((request, key) => (
                      <tr key={key}>
                        <td>{request.ten_ban}</td>
                        <td>{request.noi_dung}</td>
                        <td>
                          {" "}
                          {(() => {
                            const timeString = request.thoi_gian.split(" ")[1];
                            const [hours, minutes] = timeString.split(":");
                            return `${hours} giờ ${minutes} phút`;
                          })()}
                        </td>
                        <td>
                          {request.trang_thai == 0
                            ? "Chờ xác nhận"
                            : "Đã phục vụ"}
                        </td>
                        <td>
                          {request.trang_thai === 0 && (
                            <button
                              className={`btn btn-sm ${
                                request.trang_thai === 0
                                  ? "btn-request-confirm"
                                  : "btn-request-undo"
                              }`}
                              onClick={() =>
                                handleStatusChange(request.yeu_cau_id)
                              }
                            >
                              Xác nhận
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <Menuquanly toggleMenu={toggleMenu} menuOpen={menuOpen} />
        </div>
      )}
    </>
  );
};

export default TrangQLyeucaucuakhachhang;
