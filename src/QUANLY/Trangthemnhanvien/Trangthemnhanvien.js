import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemData } from "./API/Api";
function Trangthemnhanvien() {
  const [formData, setFormData] = useState({
    ten: "",
    soDienThoai: "",
    email: "",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    // Logic to handle form submission
    const result = await ThemData(formData);
    console.log(result.message);
    window.location.href = "/TrangQLnhanvien";
  };

  return (
    <>
      <div className="add-employee-wrapper">
        <div className="add-employee-header">THÊM NHÂN VIÊN</div>

        <form className="add-employee-form" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="ten" className="add-employee-form-label">
              Họ tên
            </label>
            <input
              type="text"
              className="form-control"
              id="ten"
              name="ten"
              value={formData.ten}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="soDienThoai" className="add-employee-form-label">
              SĐT
            </label>
            <input
              type="tel"
              className="form-control"
              id="soDienThoai"
              name="soDienThoai"
              value={formData.soDienThoai}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="add-employee-form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="mb-3">
            <label htmlFor="password" className="add-employee-form-label">
              Mật khẩu
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn add-employee-btn-custom">
            Thêm nhân viên
          </button>
          <a
            href="/TrangQLnhanvien"
            className="quaylai btn btn-secondary go-back-btn"
          >
            Hủy
          </a>
        </form>
      </div>
    </>
  );

}

export default Trangthemnhanvien;
