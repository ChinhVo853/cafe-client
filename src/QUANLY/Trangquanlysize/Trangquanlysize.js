import Menuquanly from "../Menuquanly";
import React,{useState} from "react";
function Trangquanlysize() {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
  return (
    <div>
      <div className="search-container-custom">
        <input type="text" placeholder="Tìm kiếm..." />
        <button type="button">🔍</button>
      </div>
      <div className="request-container mt-5">
        <div className="header">QUẢN LÝ SIZE</div>
        <div className="col text-end">
          <a href='/Trangthemsize' className="btn btn-primary">Thêm size</a>
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
                <tr>
                  <td>S</td>
                  <td>
                    <a href="/Trangcapnhatloai" className="btn btn-outline-primary btn-sm">Cập nhật</a>
                    <button className="btn btn-outline-danger btn-sm">Xóa</button>
                  </td>
                </tr>
                <tr>
                  <td>M</td>
                  <td>
                    <button className="btn btn-outline-primary btn-sm">Cập nhật</button>
                    <button className="btn btn-outline-danger btn-sm">Xóa</button>
                  </td>
                </tr>
                {/* Add more rows for other dishes */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Menuquanly
    toggleMenu={toggleMenu}
    menuOpen={menuOpen}
    />
    </div>
    
  );
}

export default Trangquanlysize;
