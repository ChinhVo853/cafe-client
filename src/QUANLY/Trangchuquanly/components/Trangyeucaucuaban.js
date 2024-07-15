import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { LayData, XacNhanYeuCau } from "../API/Api";

const Trangyeucaucuaban = () => {
  const [data, setData] = useState();
  const { id } = useParams();
  const LayDuLieu = useCallback(async () => {
    try {
      const result = await LayData(id);
      setData(result.data);
    } catch (error) {
      console.error("Failed to fetch data", error);
    }
  }, []);
  useEffect(() => {
    LayDuLieu();
  }, [LayData]);

  const handleStatusChange = async (i_d, ban) => {
    const data = {
      id: i_d,
      ban: ban,
    };
    await XacNhanYeuCau(data);
    LayDuLieu();
  };
  document.title = "Yêu cầu bàn";
  return (
    <>
      {data && (
        <div>
          <div className="search-container-custom">
            <input type="text" placeholder="Tìm kiếm..." />
            <button type="button">🔍</button>
          </div>
          <a href="/Trangchuquanly">
            <button className="btn-quayve" type="button">
              <i className="fa-solid fa-circle-chevron-left"></i>
            </button>
          </a>
          <div className="request-container mt-5">
            <div className="header">
              QUẢN LÝ YÊU CẦU CỦA {data[0] && data[0].ten_ban}
            </div>
            <div className="row">
              <div className="col">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">Tên bàn</th>
                      <th scope="col">Nội dung</th>
                      <th scope="col">Thời gian yêu cầu</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((request, key) => (
                      <tr key={key}>
                        <td>{request.ten_ban}</td>
                        <td>{request.noi_dung}</td>
                        <td>
                          {(() => {
                            const timeString = request.thoi_gian.split(" ")[1];
                            const [hours, minutes] = timeString.split(":");
                            return `${hours} giờ ${minutes} phút`;
                          })()}
                        </td>
                        <td>
                          {request.trang_thai === 0
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
                                handleStatusChange(
                                  request.yeu_cau_id,
                                  request.ban_id
                                )
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
        </div>
      )}
    </>
  );
};

export default Trangyeucaucuaban;
