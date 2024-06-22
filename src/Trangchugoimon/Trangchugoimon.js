import React, { useState } from 'react';

function Trangchugoimon() {
    const [showCallStaffForm, setShowCallStaffForm] = useState(false);
    const [requestItems, setRequestItems] = useState({
        tương_ớt: false,
        tương_cà: false,
        giấy: false,
        tăm: false,
        nước_tương: false,
        // Thêm các mục yêu cầu khác ở đây
    });
    

    const toggleCallStaffForm = () => {
        setShowCallStaffForm(!showCallStaffForm);
      };

      
    const handleCallStaffClick = () => {
        setShowCallStaffForm(true);
    };

   
    const handleCheckboxChange = (itemName) => {
        setRequestItems((prevItems) => ({
            ...prevItems,
            [itemName]: !prevItems[itemName],
        }));
    };

    const handleSubmitForm = () => {
        // Xử lý khi submit form (ở đây có thể gửi yêu cầu lên server hoặc xử lý logic khác)
        console.log('Submitted request items:', requestItems);
        setShowCallStaffForm(false);
        // Thêm các logic xử lý khác tại đây nếu cần
    };
/**********************************THANHTOAN*************************************** */
    const [showGoiThanhToan, setShowGoiThanhToan] = useState(false);
    const [requestItemsthanhtoan, setRequestItemsthanhtoan] = useState({
        tien_mat: false,
        chuyen_khoang: false,
        the: false,
        
        // Thêm các mục yêu cầu khác ở đây
    });

    const toggleGoiThanhToan = () => {
        setShowGoiThanhToan(!showGoiThanhToan);
      };

      
    const handleGoiThanhToanClick = () => {
        setShowGoiThanhToan(true);
    };

   
    const handleCheckboxChangethanhtoan = (itemName) => {
        setRequestItemsthanhtoan((prevItems) => ({
            ...prevItems,
            [itemName]: !prevItems[itemName],
        }));
    };

    const handleSubmitFormthanhtoan = () => {
        // Xử lý khi submit form (ở đây có thể gửi yêu cầu lên server hoặc xử lý logic khác)
        console.log('Submitted request items:', requestItems);
        setShowGoiThanhToan(false);
        // Thêm các logic xử lý khác tại đây nếu cần
    };
/***************************************************************************************/    
    return (<>
        <div className={`container-xxl bg-white p-0 ${showCallStaffForm ? 'blur-background' : ''}`}>


            {/* <!-- Navbar & Hero Start --> */}
            <div className="container-xxl position-relative p-0">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
                    <a href="" className="navbar-brand p-0">
                        <h1 className="text-primary m-0"> <i className="fa fa-utensils me-3"></i>CHAOBỈNH</h1>
                        {/* <!-- <img src="img/logo.png" alt="Logo"> --> */}
                    </a>
                    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="fa fa-bars"></span>
                    </button> */}
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        {/* <div className="navbar-nav ms-auto py-0 pe-4">
                        <a href="index.html" className="nav-item nav-link active">Home</a>
                        <a href="about.html" className="nav-item nav-link">About</a>
                        <a href="service.html" className="nav-item nav-link">Service</a>
                        <a href="menu.html" className="nav-item nav-link">Menu</a>
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                            <div className="dropdown-menu m-0">
                                <a href="booking.html" className="dropdown-item">Booking</a>
                                <a href="team.html" className="dropdown-item">Our Team</a>
                                <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                            </div>
                        </div>
                        <a href="contact.html" className="nav-item nav-link">Contact</a>
                    </div> */}
                    </div>
                </nav>

                <div className="container-xxl py-5 bg-dark hero-header mb-5">
                    <div className="container my-5 py-5">
                        <div className="row align-items-center g-5">
                            <div className="col-lg-6 text-center text-lg-start">
                                <h1 className="display-3 text-white animated slideInLeft">BÀN: A001<br />MÃ BÀN: XM115</h1>

                            </div>
                            <div className="col-lg-6 text-center text-lg-end overflow-hidden">
                                <div className="xoayxoay"></div>
                                {/* <img className="img-fluid" src="src/img/hero.png" alt=""/> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Navbar & Hero End --> */}
            <div className="welcomeabouus col-lg-6">
                <h1 className="mb-4">Welcome to <i className="fa fa-utensils text-primary me-2"></i>CHAOBỈNH</h1>


            </div>
            {/* <!-- Service Start --> */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="iconchucnangcha row g-4">
                        <div className="col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="service-item rounded pt-3">
                                <div className="p-4">
                                    <a className="service-button" onClick={handleCallStaffClick}>
                                        <i className="iconchucnang fa fa-3x fa-user-tie text-primary mb-4"></i>
                                        <h5>GỌI NHÂN VIÊN</h5>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="service-item rounded pt-3">
                                <div className="p-4">
                                    <a href="/Trangchugoimon">

                                        <i className="iconchucnang fa fa-3x fa-utensils text-primary mb-4"></i>
                                        <h5>MENU</h5>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="service-item rounded pt-3">
                                <div className="p-4">
                                <a className="service-button" onClick={handleGoiThanhToanClick}>

                                        <i className="iconchucnang fa fa-3x fa-cart-plus text-primary mb-4"></i>
                                        <h5>GỌI THANH TOÁN</h5>
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                        <div className="service-item rounded pt-3">
                            <div className="p-4">
                                <i className="iconchucnang fa fa-3x fa-headset text-primary mb-4"></i>
                                <h5>24/7 Service</h5>
                            </div>
                        </div>
                    </div> */}
                    </div>
                </div>
            </div>
            {/* <!-- Service End --> */}

            {/* <!-- About Start --> */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5 align-items-center">
                    </div>
                </div>
            </div>
            {/* <!-- About End --> */}

            <button className="fixed-button">
                <i className="fa fa-bullhorn"></i>
            </button>

        </div>
         {/* GỌI NHÂN VIÊN */}
      {showCallStaffForm && (
        <div className="call-staff-form">
          <div className="form-content">
            <h2>Gọi Nhân Viên</h2>
            <textarea placeholder="Nhập yêu cầu của bạn..." rows="4"></textarea>
            <div className="request-items">
              {/* <label>
                <input
                  type="checkbox"
                  checked={requestItems.tương_ớt}
                  onChange={() => handleCheckboxChange('tương_ớt')}
                />
                Tương ớt
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={requestItems.tương_cà}
                  onChange={() => handleCheckboxChange('tương_cà')}
                />
                Tương cà
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={requestItems.giấy}
                  onChange={() => handleCheckboxChange('giấy')}
                />
                Giấy
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={requestItems.tăm}
                  onChange={() => handleCheckboxChange('tăm')}
                />
                Tăm
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={requestItems.nước_tương}
                  onChange={() => handleCheckboxChange('nước_tương')}
                />
                Nước tương
              </label> */}
              {/* Thêm các mục yêu cầu khác ở đây */}
            </div>
            <button className="btn btn-primary mt-3" onClick={handleSubmitForm}>
              <i className="fa fa-paper-plane"></i> Gửi Yêu Cầu
            </button>
            <button className="btn btn-secondary mt-3" onClick={toggleCallStaffForm}>
              <i className="fa fa-times"></i> Đóng
            </button>
          </div>
        </div>
      )}



      {/* GỌI THANH TOÁN */}
      {showGoiThanhToan && (
        <div className="call-staff-form">
          <div className="form-content">
            <h2>CHỌN CÁCH THANH TOÁN</h2>
            
            <div className="request-items">
              <label>
                <input
                  type="checkbox"
                  checked={requestItemsthanhtoan.tien_mat}
                  onChange={() => handleCheckboxChangethanhtoan('tien_mat')}
                />
                Tiền mặt
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={requestItemsthanhtoan.chuyen_khoang}
                  onChange={() => handleCheckboxChangethanhtoan('chuyen_khoang')}
                />
                Chuyển khoảng
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={requestItemsthanhtoan.the}
                  onChange={() => handleCheckboxChangethanhtoan('the')}
                />
                Thẻ
              </label>
              
            </div>
            <button className="btn btn-primary mt-3" onClick={handleSubmitFormthanhtoan}>
              <i className="fa fa-paper-plane"></i> Gửi Yêu Cầu
            </button>
            <button className="btn btn-secondary mt-3" onClick={toggleGoiThanhToan}>
              <i className="fa fa-times"></i> Đóng
            </button>
          </div>
        </div>
      )}
    </>);

} export default Trangchugoimon;