import React, { useState, useEffect, useCallback } from "react";
import Menuquanly from "../Menuquanly";
import { layData, XoaData } from "./API/Api";
const TrangQLnhanvien = () => {
  const [employees, setEmployees] = useState([]);

  const LayData = useCallback(async () => {
    try {
      const result = await layData();
      setEmployees(result.data);
    } catch (error) {
      console.error("Failed to fetch data", error);
    }
  }, []);

  useEffect(() => {
    LayData();
  }, [LayData]);

  const handleDelete = async (id) => {
    const data = {
      id: id,
    };
    const result = await XoaData(data);
    LayData();
  };

  const handleUpdate = (id) => {
    // Thêm logic cập nhật tại đây
    alert("Chức năng cập nhật chưa được triển khai");
  };

  const handleAdd = () => {
    // Thêm logic thêm nhân viên mới tại đây
    alert("Chức năng thêm nhân viên chưa được triển khai");
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
        <a
          href="/Trangthemnhanvien"
          className="btn btn-primary btn-add-employee"
        >
          Thêm nhân viên
        </a>
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
                <th scope="col">Quyền</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.id}</td>
                  <td>{employee.ho_ten}</td>
                  <td>{employee.so_dien_thoai}</td>
                  <td>{employee.email}</td>
                  <td>{employee.ten_quyen}</td>
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
      <Menuquanly toggleMenu={toggleMenu} menuOpen={menuOpen} />
    </div>
  );
};

export default TrangQLnhanvien;
