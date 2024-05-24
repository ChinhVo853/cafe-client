import React from "react";

function ButtonSection() {
  return (
    <div className="col">
      <button type="button" className="btn btn-outline-primary b-select">
        <img
          src="http://127.0.0.1:8000/anh/nhanvien.jpg"
          alt="..."
          className="bd-r w-10 w-30 "
        />
        <br />
        gọi nhân viên
      </button>
      <button type="button" className="btn btn-outline-danger b-select">
        <img
          src="http://127.0.0.1:8000/anh/thanhtoan.png"
          alt=""
          className="bd-r w-10 w-30 "
        />
        <br />
        thanh toán
      </button>
      <button type="button" className="btn btn-outline-warning b-select">
        <img
          src="http://127.0.0.1:8000/anh/thucdon.png"
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
