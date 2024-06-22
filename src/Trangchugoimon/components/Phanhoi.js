import React from "react";

const Phanhoi = () => {
    const handleGoBack = () => {
        window.history.back();
    };

    const handleViewOrders = () => {
        // Xử lý khi người dùng bấm vào xem các món đã đặt
        console.log("View orders clicked");
        // Thực hiện các hành động khác nếu cần thiết
    };

    return (

        <div className="feedback-page">
            <button className="home-button" onClick={handleGoBack}>
                <i className="fas fa-home"></i>
            </button>
            <div className="feedback-content">
                <h3>Phản hồi từ nhà hàng</h3>
                <a className="form-datmon" href="/Cacmondadat" onClick={handleViewOrders}>
                    Các món đã đặt...
                </a>
                {/* Nội dung phản hồi và các phần khác có thể được thêm vào đây */}
            </div>
            <div className="bodyphanhoi">
            <div className="message-box">
          <div className="message">
            <p>Yêu cầu của bạn đã được gửi.</p>
          </div>
        </div>
            </div>

        </div>

    );
};

export default Phanhoi;
