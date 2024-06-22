import React from 'react';

function Trangnhapma() {
  return (
    <>
      <div className="container-xxl bg-white p-0">
        {/* Navbar & Hero Start */}
        <div className="container-xxl position-relative p-0">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
            <a href="/" className="navbar-brand p-0">
              <h1 className="text-primary m-0">
                <i className="fa fa-utensils me-3"></i>CHAOBỈNH
              </h1>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="fa fa-bars"></span>
            </button>
          </nav>

          <div className="container-xxl py-5 bg-dark hero-header mb-5">
            <div className="container my-5 py-5">
              <div className="row align-items-center g-5">
                <div className="col-lg-6 text-center text-lg-start">
                  <h1 className="display-3 text-white animated slideInLeft">
                    Welcome to CHAOBỈNH
                  </h1>
                  <p className="text-white animated slideInLeft mb-4 pb-2">
                  </p>
                </div>
                <div className="col-lg-6 text-center text-lg-end overflow-hidden">
                  <div className="xoayxoay"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Navbar & Hero End */}

        {/* Table Code Input Start */}
        <div className="container-xxl py-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="card shadow-sm p-4">
                  <h3 className="mb-4 text-center">VUI LÒNG NHẬP MÃ BÀN</h3>
                  <form>
                    <div className="mb-3">
                      <label htmlFor="tableCode" className="form-label">
                        Mã Bàn
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="tableCode"
                        placeholder="Nhập mã bàn"
                      />
                    </div>
                    <div className="d-grid">
                      <button type="submit" className="btn btn-primary">
                        Xác nhận
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Table Code Input End */}
      </div>
    </>
  );
}

export default Trangnhapma;
