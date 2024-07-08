import React, { useState, useCallback, useEffect } from "react";
import { LayLaiMatKhau } from "./API/Api";
import Load from "../../Load/Load";
function Tranglaymatkhau() {
  const [matKhauMoi, setMatKhauMoi] = useState();
  const [trangthaiLoad, settrangthaiLoad] = useState(true);

  const handleNewPasswordChange = (e) => {
    setMatKhauMoi(e.target.value);
  };
  const Doi = async () => {
    settrangthaiLoad(false);

    try {
      const data1 = {
        email: matKhauMoi,
      };
      await LayLaiMatKhau(data1);
      settrangthaiLoad(true);
    } catch (error) {
      console.log(error);
    }
  };

  document.title = "Lấy mật khẩu";
  return (
    <>
      {trangthaiLoad ? (
        <div className="login-container">
          <div className="login-form">
            <h2>Lấy mật khẩu</h2>

            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Nhập email"
              onChange={handleNewPasswordChange}
            />
            <div className="login-buttons">
              <button onClick={Doi}>Thực hiện </button>
            </div>
          </div>
        </div>
      ) : (
        <Load />
      )}
    </>
  );
}

export default Tranglaymatkhau;
