import Menuquanly from "../Menuquanly";
import React,{useState} from "react";
function Trangquanlyloai() {
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
        <div className="header">QUẢN LÝ LOẠI</div>
        <div className="col text-end">
          <a href='/Trangthemloai' className="btn btn-primary">Thêm loại</a>
        </div>
        <div className="row">
          <div className="col">
            <table className="table">
              <thead>
                <tr>
                  
                  <th scope="col">Tên loại</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Bún chả</td>
                  <td>
                    <a href="/Trangcapnhatloai" className="btn btn-outline-primary btn-sm">Cập nhật</a>
                    <button className="btn btn-outline-danger btn-sm">Xóa</button>
                  </td>
                </tr>
                <tr>
                  <td>Phở bò</td>
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

export default Trangquanlyloai;
