import React from "react";
import config from "../../config";
function ButtonSection() {
  const handleClick = () => {
    window.location.href = "/Menu";
  };
  return (
    <div className="col">
      <button type="button" className="btn btn-outline-primary b-select">
        <img
          src={`${config.imageBaseUrl}/nhanvien.jpg`}
          alt="..."
          className="bd-r w-10 w-30 "
        />
        <br />
        gọi nhân viên
      </button>
      <button type="button" className="btn btn-outline-danger b-select">
        <img
          src={`${config.imageBaseUrl}/thanhtoan.png`}
          alt=""
          className="bd-r w-10 w-30 "
        />
        <br />
        thanh toán
      </button>
      <button
        type="button"
        className="btn btn-outline-warning b-select"
        onClick={handleClick}
      >
        <img
          src={`${config.imageBaseUrl}/thucdon.png`}
          alt=""
          className="bd-r w-10 w-30 "
        />
        <br />
        thưc đơn
      </button>
    </div>
  );
}

export default ButtonSection;
