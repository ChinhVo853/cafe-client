import Menuquanly from "../Menuquanly";
import React, { useState, useEffect, useCallback } from "react";
import { layData, XoaData } from "./API/Api";
function Trangquanlysize() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [data, setData] = useState();

  const LayDuLieu = useCallback(async () => {
    try {
      const result = await layData();
      setData(result.data);
    } catch (error) {
      console.error("Failed to fetch data", error);
    }
  }, []);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  useEffect(() => {
    LayDuLieu();
  }, [LayDuLieu]);

  const handleDelete = async (id) => {
    const data = {
      id: id,
    };
    // Handle the form submission
    try {
      await XoaData(data);
      window.location.href = "/Trangquanlysize";
    } catch (error) {
      console.error("Failed to submit data", error);
    }
  };
  return (
    <>
      {data && (
        <div>
          <div className="search-container-custom">
            <input type="text" placeholder="Tìm kiếm..." />
            <button type="button">🔍</button>
          </div>
          <div className="request-container mt-5">
            <div className="header">QUẢN LÝ SIZE</div>
            <div className="col text-end">
              <a href="/Trangthemsize" className="btn btn-primary">
                Thêm size
              </a>
            </div>
            <div className="row">
              <div className="col">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Tên size</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item, index) => (
                      <tr key={index}>
                        <td>{item.ten}</td>
                        <td>
                          <a
                            href={`/Trangcapnhatsize/${item.id}`}
                            className="btn btn-outline-primary btn-sm"
                          >
                            Cập nhật
                          </a>
                          <button
                            className="btn btn-outline-danger btn-sm"
                            onClick={() => handleDelete(item.id)}
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
      )}
    </>
  );
}

export default Trangquanlysize;
