import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { TaoYeuCau } from "./API/Api"; // Ensure this import is correct

function Trangchugoimon() {
  const { ban } = useParams();
  const [yeuCau, setYeuCau] = useState(null);
  const [noiDung, setNoiDung] = useState();

  const [showCallStaffForm, setShowCallStaffForm] = useState(false);
  const toggleCallStaffForm = () => {
    setShowCallStaffForm(!showCallStaffForm);
  };

  const handleCallStaffClick = () => {
    setShowCallStaffForm(true);
  };

  const [showGoiThanhToan, setShowGoiThanhToan] = useState(false);

  const toggleGoiThanhToan = () => {
    setShowGoiThanhToan(!showGoiThanhToan);
  };

  const handleGoiThanhToanClick = () => {
    setShowGoiThanhToan(true);
  };

  const YeuCau = (value) => {
    setYeuCau(value);
  };

  const YeucauGoiNhanVien = async () => {
    const data = {
      yeuCau: "Gọi nhân viên",
      noiDung: "Gọi nhân viên: " + noiDung,
      ban: ban,
    };

    await TaoYeuCau(data);
    window.location.href = "/Phanhoi/" + ban;
  };

  const YeuCauThanhToan = async () => {
    let data = {};
    if (yeuCau === 1) {
      data = {
        yeuCau: "Thanh toán",
        noiDung: "Gọi thanh toán: thanh toán bằng tiền mặt",
        ban: ban,
      };
    } else if (yeuCau === 2) {
      data = {
        yeuCau: "Thanh toán",
        noiDung: "Gọi thanh toán: thanh toán chuyển khoản",
        ban: ban,
      };
    } else {
      data = {
        yeuCau: "Thanh toán",
        noiDung: "Gọi thanh toán: thanh toán bằng thẻ",
        ban: ban,
      };
    }

    await TaoYeuCau(data);
    window.location.href = "/Phanhoi/" + ban;
  };

  const handleNameChange = (e) => {
    setNoiDung(e.target.value);
  };

  return (
    <>
      <div
        className={`container-xxl bg-white p-0 ${
          showCallStaffForm ? "blur-background" : ""
        }`}
      >
        <div className="container-xxl position-relative p-0">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
            <a href="/" className="navbar-brand p-0">
              <h1 className="text-primary m-0">
                {" "}
                <i className="fa fa-utensils me-3"></i>CHAOBỈNH
              </h1>
            </a>
            <div className="collapse navbar-collapse" id="navbarCollapse"></div>
          </nav>

          <div className="container-xxl py-5 bg-dark hero-header mb-5">
            <div className="container my-5 py-5">
              <div className="row align-items-center g-5">
                <div className="col-lg-6 text-center text-lg-start">
                  <h1 className="display-3 text-white animated slideInLeft">
                    BÀN: A001
                    <br />
                    MÃ BÀN: XM115
                  </h1>
                </div>
                <div className="col-lg-6 text-center text-lg-end overflow-hidden">
                  <div className="xoayxoay"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="welcomeabouus col-lg-6">
          <h1 className="mb-4">
            Welcome to <i className="fa fa-utensils text-primary me-2"></i>
            CHAOBỈNH
          </h1>
        </div>

        <div className="container-xxl py-5">
          <div className="container">
            <div className="iconchucnangcha row g-4">
              <div
                className="col-lg-4 col-sm-6 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="service-item rounded pt-3">
                  <div className="p-4">
                    <a
                      className="service-button"
                      onClick={handleCallStaffClick}
                    >
                      <i className="iconchucnang fa fa-3x fa-user-tie text-primary mb-4"></i>
                      <h5>GỌI NHÂN VIÊN</h5>
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-sm-6 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="service-item rounded pt-3">
                  <div className="p-4">
                    <a href={`/Menu/${ban}`}>
                      <i className="iconchucnang fa fa-3x fa-utensils text-primary mb-4"></i>
                      <h5>MENU</h5>
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-sm-6 wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <div className="service-item rounded pt-3">
                  <div className="p-4">
                    <a
                      className="service-button"
                      onClick={handleGoiThanhToanClick}
                    >
                      <i className="iconchucnang fa fa-3x fa-cart-plus text-primary mb-4"></i>
                      <h5>GỌI THANH TOÁN</h5>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-xxl py-5">
          <div className="container">
            <div className="row g-5 align-items-center"></div>
          </div>
        </div>

        <a href={`/Phanhoi/${ban}`} className="fixed-button">
          <i className="fa fa-bullhorn"></i>
        </a>
      </div>

      {showCallStaffForm && (
        <div className="call-staff-form">
          <div className="form-content">
            <h2>Gọi Nhân Viên</h2>
            <textarea
              placeholder="Nhập yêu cầu của bạn..."
              rows="4"
              onChange={handleNameChange}
            ></textarea>
            <div className="request-items">
              {/* Add your checkbox items here */}
            </div>
            <button
              className="btn btn-primary mt-3"
              onClick={YeucauGoiNhanVien}
            >
              <i className="fa fa-paper-plane"></i> Gửi Yêu Cầu
            </button>
            <button
              className="btn btn-secondary mt-3"
              onClick={toggleCallStaffForm}
            >
              <i className="fa fa-times"></i> Đóng
            </button>
          </div>
        </div>
      )}

      {showGoiThanhToan && (
        <div className="call-staff-form">
          <div className="form-content">
            <h2>CHỌN CÁCH THANH TOÁN</h2>
            <div className="request-items" style={{ display: "flex" }}>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  value={1}
                  checked={yeuCau === 1}
                  onChange={(e) => YeuCau(Number(e.target.value))}
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Tiền mặt
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  value={2}
                  checked={yeuCau === 2}
                  onChange={(e) => YeuCau(Number(e.target.value))}
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  Chuyển khoản
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  value={3}
                  checked={yeuCau === 3}
                  onChange={(e) => YeuCau(Number(e.target.value))}
                  name="flexRadioDefault"
                  id="flexRadioDefault3"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault3">
                  Thẻ
                </label>
              </div>
            </div>
            <button className="btn btn-primary mt-3" onClick={YeuCauThanhToan}>
              <i className="fa fa-paper-plane"></i> Gửi Yêu Cầu
            </button>
            <button
              className="btn btn-secondary mt-3"
              onClick={toggleGoiThanhToan}
            >
              <i className="fa fa-times"></i> Đóng
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Trangchugoimon;
