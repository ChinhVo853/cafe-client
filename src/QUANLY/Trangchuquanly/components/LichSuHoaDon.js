import React, { useState, useCallback, useEffect } from "react";
import { LayDSHoaDon, TimNgayHoaDon } from "../API/Api";
import { useParams } from "react-router-dom";
import { format } from "date-fns";
const Lichsuhoadon = () => {
  const { id } = useParams();
  const [tables, setTables] = useState();
  const [ngayBatDau, setNgayBatDay] = useState();
  const [ngayKetThuc, setNgayKetThuc] = useState();

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

  const LayNgayBD = (e) => {
    const rawDate = e.target.value;
    const formattedDate = new Date(rawDate)
      .toLocaleString("sv-SE")
      .replace("T", " ");
    setNgayBatDay(formattedDate);
  };
  const LayNgayKT = (e) => {
    const rawDate = e.target.value;
    const formattedDate = new Date(rawDate)
      .toLocaleString("sv-SE")
      .replace("T", " ");
    setNgayKetThuc(formattedDate);
  };

  const TimN = async () => {
    const data = {
      ban: id,
      ngayDB: ngayBatDau,
      ngayKT: ngayKetThuc,
    };
    try {
      const result = await TimNgayHoaDon(data);
      setTables(result.data.data);
    } catch (error) {
      console.error("Failed to fetch data", error);
    }
  };

  return (
    <>
      {tables && (
        <div>
          <a href="/Trangchuquanly">
            <button className="btn-quayve" type="button">
              <i className="fa-solid fa-circle-chevron-left"></i>
            </button>
          </a>
          <div className="request-container mt-5">
            <div className="header">LỊCH SỬ HÓA ĐƠN {tables[0].ten_ban}</div>
            <div className="row">
              <div className="col">
                <div className="ta-ct">
                  <label htmlFor="ngaybatdau">Ngày bắt đầu</label>
                  <input
                    name="ngaybatdau"
                    type="datetime-local"
                    placeholder="Tìm kiếm..."
                    onChange={LayNgayBD}
                  />
                  <span className="mg-0-20 d-b">-</span>
                  <label htmlFor="ngaykhetthuc">Ngày kết thúc</label>

                  <input
                    name="ngayketthuc"
                    type="datetime-local"
                    placeholder="Tìm kiếm..."
                    onChange={LayNgayKT}
                  />
                  <br></br>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={TimN}
                  >
                    Tìm
                  </button>
                </div>
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
