import React, { useState } from 'react';
import Menuquanly from '../Menuquanly';
const TrangQLnhanvien = () => {
  const [employees, setEmployees] = useState([
    { id: 1, name: 'Nguyễn Văn A', phone: '0123456789', email: 'a@example.com', password: '******' },
    { id: 2, name: 'Trần Thị B', phone: '0987654321', email: 'b@example.com', password: '******' },
    { id: 3, name: 'Lê Văn C', phone: '0912345678', email: 'c@example.com', password: '******' },
  ]);

  const handleDelete = (id) => {
    setEmployees(employees.filter(employee => employee.id !== id));
  };

  const handleUpdate = (id) => {
    // Thêm logic cập nhật tại đây
    alert('Chức năng cập nhật chưa được triển khai');
  };

  const handleAdd = () => {
    // Thêm logic thêm nhân viên mới tại đây
    alert('Chức năng thêm nhân viên chưa được triển khai');
  };
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
      setMenuOpen(!menuOpen);
  };
  return (
    <div className="request-container mt-5">
        <div className="search-container-custom">
        <input type="text" placeholder="Tìm kiếm..." />
        <button type="button">🔍</button>
      </div>
      <div className="header">QUẢN LÝ NHÂN VIÊN</div>
      <div className="text-end mb-3">
        <a href='/Trangthemnhanvien' className="btn btn-primary btn-add-employee" >Thêm nhân viên</a>
      </div>
      <div className="row">
        <div className="col">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Họ tên</th>
                <th scope="col">SĐT</th>
                <th scope="col">Email</th>
                <th scope="col">Mật khẩu</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {employees.map(employee => (
                <tr key={employee.id}>
                  <td>{employee.id}</td>
                  <td>{employee.name}</td>
                  <td>{employee.phone}</td>
                  <td>{employee.email}</td>
                  <td>{employee.password}</td>
                  <td>
                    <button
                      className="btn btn-outline-primary btn-sm me-2"
                      onClick={() => handleUpdate(employee.id)}
                    >
                      Cập nhật
                    </button>
                    <button
                      className="btn btn-outline-danger btn-sm"
                      onClick={() => handleDelete(employee.id)}
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
      <Menuquanly
    toggleMenu={toggleMenu}
    menuOpen={menuOpen}
    />
    </div>
  );
};

export default TrangQLnhanvien;
