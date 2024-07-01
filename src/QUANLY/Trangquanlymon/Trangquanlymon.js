import Menuquanly from "../Menuquanly";
import React, { useState, useEffect, useCallback } from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import { LayData as LayDuLieu } from "./API/Api";
import config from "../../config";
function Trangquanlymon() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [data, setData] = useState();
  const LayData = useCallback(async () => {
    try {
      const result = await LayDuLieu();
      setData(result.data.data);
    } catch (error) {
      console.error("Failed to fetch data", error);
    }
  }, []);
  useEffect(() => {
    LayData();
  }, [LayData]);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      {data && (
        <>
          <div className="search-container-custom">
            <input type="text" placeholder="Tìm kiếm..." />
            <button type="button">🔍</button>
          </div>
          <div className="request-container mt-5">
            <div className="header">QUẢN LÝ MÓN</div>
            <div className="col text-end">
              <a href="/Trangthemmon" className="btn btn-primary">
                Thêm món
              </a>
            </div>
            <div className="row">
              <div className="col">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Hình ảnh</th>
                      <th scope="col">Tên món</th>
                      <th scope="col">Loại</th>
                      <th scope="col">Size</th>
                      <th scope="col">Giá</th>
                      <th scope="col">Số lượng đánh giá</th>
                      <th scope="col">Trạng thái</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((dish) => (
                      <tr key={dish.id}>
                        <td>{dish.id}</td>
                        <td>
                          <img
                            src={config.imageBaseUrl + "/" + dish.anh}
                            alt="Hình ảnh món ăn"
                            style={{ maxWidth: "100px" }}
                          />
                        </td>
                        <td>{dish.tenMon}</td>
                        <td>{dish.tenLoai}</td>
                        <td>{dish.tenSize}</td>

                        <td>{dish.gia.toLocaleString("vi-VN")}</td>
                        <td>{dish.so_luong_danh_gia}</td>
                        <td>
                          <button className="btn btn-outline-info btn-sm">
                            {dish.trang_thai == 0 ? "Còn hàng" : "Hết hàng"}
                          </button>
                        </td>
                        <td>
                          <a
                            href={`/Trangcapnhatmon/${dish.id}`}
                            className="btn btn-outline-primary btn-sm"
                          >
                            Cập nhật
                          </a>
                          <button className="btn btn-outline-danger btn-sm">
                            Xóa
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <Menuquanly toggleMenu={toggleMenu} menuOpen={menuOpen} />
        </>
      )}
    </div>
  );
}

export default Trangquanlymon;
