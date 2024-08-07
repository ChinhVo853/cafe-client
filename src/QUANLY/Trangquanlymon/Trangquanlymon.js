import Menuquanly from "../Menuquanly";
import React, { useState, useEffect, useCallback } from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import { LayData as LayDuLieu, SuaTT, TimMon, Xoa } from "./API/Api";
import config from "../../config";
import Load from "../../Load/Load";
function Trangquanlymon() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [tim, setTim] = useState();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  const LayData = useCallback(async () => {
    try {
      const result = await LayDuLieu();
      setData(result.data.data);
      setLoading(true);
    } catch (error) {
      console.error("Failed to fetch data", error);
    }
  }, []);
  useEffect(() => {
    document.title = "Quản lý món";
    if (localStorage.getItem("quyen") === 2) {
      window.location.href = "/Trangchuquanly";
    }
    LayData();
  }, [LayData]);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const SuaTrangThai = async (tt, id) => {
    setLoading(false);
    const data = {
      id: id,
      trangThai: tt,
    };
    await SuaTT(data);
    LayData();
  };
  const XoaMon = async (id) => {
    setLoading(false);
    const data = {
      id: id,
    };
    await Xoa(data);
    LayData();
  };
  const handleNameChange = (e) => {
    setTim(e.target.value);
  };
  const TimM = async () => {
    setLoading(false);
    const data1 = {
      tim: tim,
    };
    try {
      const result = await TimMon(data1);
      setData(result.data.data);
      setLoading(true);
    } catch (error) {
      console.error("Failed to fetch data", error);
    }
  };
  return (
    <div>
      {data && loading ? (
        <>
          <div className="search-container-custom">
            <input
              type="text"
              placeholder="Tìm kiếm..."
              value={tim}
              onChange={handleNameChange}
            />
            <button type="button" onClick={TimM}>
              🔍
            </button>
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
                        <td>
                          {dish.trang_thai === 0 ? (
                            <button
                              className="btn btn-outline-info btn-sm"
                              onClick={() => SuaTrangThai(1, dish.id)}
                            >
                              Còn hàng
                            </button>
                          ) : (
                            <button
                              className="btn btn-outline-info btn-sm"
                              onClick={() => SuaTrangThai(0, dish.id)}
                            >
                              Hết hàng
                            </button>
                          )}
                        </td>
                        <td>
                          <a
                            href={`/Trangcapnhatmon/${dish.id}`}
                            className="btn btn-outline-primary btn-sm"
                          >
                            Cập nhật
                          </a>
                          <button
                            className="btn btn-outline-danger btn-sm"
                            onClick={() => XoaMon(dish.id)}
                          >
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
      ) : (
        <Load />
      )}
    </div>
  );
}

export default Trangquanlymon;
