import Menuquanly from "../Menuquanly";
import React,{useState} from "react";
function Trangquanlymon() {
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
        <div className="header">QUẢN LÝ MÓN</div>
        <div className="col text-end">
          <a href='/Trangthemmon' className="btn btn-primary">Thêm món</a>
        </div>
        <div className="row">
          <div className="col">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Hình ảnh</th>
                  <th scope="col">Tên món</th>
                  <th scope="col">Giá</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><img src="path_to_image" alt="Hình ảnh món ăn" style={{ maxWidth: '100px' }} /></td>
                  <td>Bún chả</td>
                  <td>50,000 VND</td>
                  <td>
                    <a href="/Trangcapnhatmon" className="btn btn-outline-primary btn-sm">Cập nhật</a>
                    <button className="btn btn-outline-danger btn-sm">Xóa</button>
                  </td>
                </tr>
                <tr>
                  <td><img src="path_to_image" alt="Hình ảnh món ăn" style={{ maxWidth: '100px' }} /></td>
                  <td>Phở bò</td>
                  <td>40,000 VND</td>
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

export default Trangquanlymon;
