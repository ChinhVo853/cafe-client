import React, { useState, useCallback, useEffect } from "react";
import { Me, DoiMatKhau } from "./API/Api";
function TrangDoiMatKhau() {
  const [matKhauMoi, setMatKhauMoi] = useState();
  const [matKhauCu, setMatKhauCu] = useState();
  const [data, setData] = useState();
  const handleOldPasswordChange = (e) => {
    setMatKhauCu(e.target.value);
  };
  const KiemTra = async () => {
    const result = await Me();
    setData(result.data);
  };
  useEffect(() => {
    KiemTra();
  }, []);
  const handleNewPasswordChange = (e) => {
    setMatKhauMoi(e.target.value);
  };
  const Doi = async () => {
    const data1 = {
      email: data?.email,
      password: matKhauCu,
      NewPassword: matKhauMoi,
    };
    await DoiMatKhau(data1);
  };
  document.title = "Đổi mật khẩu";
  return (
    <div className="login-container">
      <a href="/Trangthongtinnhanvien">
              <button className="btn-quayve" type="button">
                <i className="fa-solid fa-circle-chevron-left"></i>
              </button>
            </a>
      <div className="login-form">
        <h2>Đổi mật khẩu</h2>
        <input
          type="password"
          placeholder="Mật khẩu cũ"
          name="password"
          onChange={handleOldPasswordChange}
        />
        <input
          type="password"
          className="form-control"
          id="password"
          name="password"
          placeholder="Mật khẩu mới"
          onChange={handleNewPasswordChange}
        />
        <div className="login-buttons">
          <button onClick={Doi}>Thực hiện </button>
        </div>
      </div>
    </div>
  );
}

export default TrangDoiMatKhau;
