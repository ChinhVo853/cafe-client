import React, { useState, useCallback, useEffect } from "react";
import Menuquanly from "../Menuquanly";
import { LayYeuCau, XacNhanYeuCau } from "./API/Api";
import Load from "../../Load/Load";
import Menunhanvien from "../Menunhanvien";
const TrangQLyeucaucuakhachhang = () => {
  const [quyen, setQuyen] = useState();
  const [requests, setRequests] = useState();
  useEffect(() => {
    document.title = "Quản lý yêu cầu";
    LayData();
    const interval = setInterval(() => {
      LayData();
    }, 5000); // 5000 milliseconds = 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const LayData = useCallback(async () => {
    try {
      const result = await LayYeuCau();
      setRequests(result);
      setQuyen(localStorage.getItem("quyen"));
    } catch (error) {
      console.error("Failed to fetch data", error);
    }
  }, []);
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
      {requests ? (
        <div>
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
          {quyen == 1 ? (
            <Menuquanly toggleMenu={toggleMenu} menuOpen={menuOpen} />
          ) : (
            <Menunhanvien toggleMenu={toggleMenu} menuOpen={menuOpen} />
          )}
        </div>
      ) : (
        <Load />
      )}
    </>
  );
};

export default TrangQLyeucaucuakhachhang;
