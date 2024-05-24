import React from "react";
function ThongTin() {
  return (
    <>
      <img
        src="http://127.0.0.1:8000/anh/giaodien.webp"
        className="w-100"
        alt="Giao diện"
      />
      <br />
      <br />
      <p className="wel-come">XIN CHÀO ĐẾN VỚI BLACK CAT</p>

      <div className="row">
        <div className="col-sm-4 introduce">
          <p>203</p>
        </div>
        <div className="col-sm-4 introduce">
          <div className="btn-group dropend" role="group">
            <button
              type="button"
              className="btn dropdown-toggle introduce"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Mở cửa
            </button>
          </div>
        </div>
        <div className="col-sm-4 introduce">
          <p>abc</p>
        </div>
      </div>
    </>
  );
}

export default ThongTin;
