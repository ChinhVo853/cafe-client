import React, { useState, useEffect } from "react";
import { DangNhap, Me } from "./API/Api";
function Trangdangnhap() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "username") setUsername(value);
    if (name === "password") setPassword(value);
  };
  const KiemTra = async () => {
    const result = await Me();
    if (result.data.id) {
      window.location.href = "/Trangchuquanly";
    }
  };
  useEffect(() => {
    KiemTra();
  }, []);
  const Login = async () => {
    const data = {
      email: username,
      password: password,
    };
    await DangNhap(data);
    window.location.href = "/Trangchuquanly";
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Đăng Nhập</h2>
        <input
          type="text"
          name="username"
          placeholder="Tên đăng nhập"
          value={username}
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Mật khẩu"
          value={password}
          onChange={handleInputChange}
        />
        <div className="login-buttons" onClick={Login}>
          <button>Đăng nhập </button>
        </div>
      </div>
    </div>
  );
}

export default Trangdangnhap;
