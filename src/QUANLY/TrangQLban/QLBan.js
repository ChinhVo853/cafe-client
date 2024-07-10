import React, { useCallback, useEffect, useState } from "react";
import { XemData, XoaData } from "./API/Api";
import Menuquanly from "../Menuquanly";
import Load from "../../Load/Load";
function QLBan() {
  const [tables, setTables] = useState();
  const [menuOpen, setMenuOpen] = useState(false);

  const LayData = useCallback(async () => {
    try {
      const result = await XemData();
      setTables(result.data);
    } catch (error) {
      console.error("Failed to fetch data", error);
    }
  }, []);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    document.title = "Quản lý bàn";
    LayData();
  }, [LayData]);

  const XoaDuLieu = async (id) => {
    const data = {
      id: id,
    };
    await XoaData(data);
    LayData();
  };
  return (
    <>
      {tables ? (
        <div>
          <div className="request-container mt-5">
            <div className="header">QUẢN LÝ BÀN</div>
            <div className="col text-end">
              <a href="/Trangthemban" className="btn btn-primary">
                Thêm bàn
              </a>
            </div>
            <div className="row">
              <div className="col">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Tên bàn</th>
                      <th>Lịch sử hoá đơn</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {tables.map((item, index) => (
                      <tr key={index}>
                        <td>{item.ten_ban}</td>
                        <td>
                          {" "}
                          <a
                            href={`/Lichsuhoadon/${item.ban_id}`}
                            className="btn btn-primary history-btn"
                          >
                            Xem danh sách hoá đơn
                          </a>
                        </td>
                        <td>
                          <a
                            href={`/Trangcapnhatban/${item.ban_id}  `}
                            className="btn btn-primary history-btn"
                          >
                            Cập nhật
                          </a>
                          <button
                            href="#"
                            className="btn btn-danger delete-btn"
                            onClick={() => XoaDuLieu(item.ban_id)}
                          >
                            Xóa
                          </button>
                        </td>
                      </tr>
                    ))}

                    {/* Add more rows for other dishes */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <Menuquanly toggleMenu={toggleMenu} menuOpen={menuOpen} />
        </div>
      ) : (
        <Load />
      )}
    </>
  );
}
export default QLBan;
