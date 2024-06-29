import React, { useState } from "react";
import Logout from "../Logout";

function ThongTinNhanVien() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    account: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="Body-thongtin">
      <div className="container rounded bg-white mt-5 mb-5">
        <div className="header">THÔNG TIN NHÂN VIÊN</div>
        <a href="/Trangchuquanly">
          <button className="btn-quayve" type="button">
            <i className="fa-solid fa-circle-chevron-left"></i>
          </button>
        </a>
        <div className="row">
          <div className="col-md-7 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
              <img
                className="rounded-circle mt-5"
                width="150px"
                src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                alt="Profile"
              />
              <span className="font-weight-bold">Edogaru</span>
              <span className="text-black-50">edogaru@mail.com.my</span>
            </div>
          </div>
          <div className="col-md-5 border-right">
            <div className="p-3 py-5">
              <div className="row mt-2">
                <div className="col-md-6">
                  <label className="labels">HỌ VÀ TÊN</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="..."
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-md-6">
                  <label className="labels">SỐ ĐIỆN THOẠI</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="..."
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-md-6">
                  <label className="labels">EMAIL</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="..."
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-md-6">
                  <label className="labels">TÀI KHOẢN</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="..."
                    name="account"
                    value={formData.account}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-md-6">
                  <label className="labels">MẬT KHẨU</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="..."
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
          <button className="btn btn-success mx-2">Cập nhật</button>
          <Logout/>
        </div>
      </div>
    </div>
  );
}

export default ThongTinNhanVien;
