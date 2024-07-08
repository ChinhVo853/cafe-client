import React, { useState, useCallback, useEffect } from "react";
import { LayDSHoaDon } from "../API/Api";
import { useParams } from "react-router-dom";
import { format } from "date-fns";
const Lichsuhoadon = () => {
  const { id } = useParams();
  const [tables, setTables] = useState();
  const LayData = useCallback(async () => {
    try {
      const result = await LayDSHoaDon(id);
      setTables(result.data);
    } catch (error) {
      console.error("Failed to fetch data", error);
    }
  }, []);

  useEffect(() => {
    document.title = "Lịch sử hoá đơn";
    LayData();
  }, [LayData]);
  console.log(tables);

  return (
    <>
      {tables && (
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
            <div className="header">LỊCH SỬ HÓA ĐƠN BÀN 1</div>
            <div className="row">
              <div className="col">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">MÃ</th>
                      <th scope="col">TỔNG TIỀN</th>
                      <th scope="col">NGÀY</th>
                      <th scope="col">THỜI GIAN</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {tables.map((request) => (
                      <tr key={request.id}>
                        <td>{request.id}</td>
                        <td>{request.tong_tien}</td>
                        <td>
                          {format(new Date(request.created_at), "dd-MM-yyyy ")}
                        </td>
                        <td>
                          {format(new Date(request.created_at), " HH:mm:ss")}
                        </td>
                        <td>
                          <a
                            href={`/Chitiethoadon/${request.id}`}
                            className="btn btn-success mx-2"
                          >
                            CHI TIẾT HÓA ĐƠN
                          </a>
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

export default Lichsuhoadon;
