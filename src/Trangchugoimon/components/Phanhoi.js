import React, { useEffect, useState, useCallback } from "react";
import { LayYeuCau } from "../API/Api";
import { useParams } from "react-router-dom";
import Load from "../../Load/Load";
const Phanhoi = () => {
  const { ban } = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    LayData();
  }, [ban]);

  const LayData = useCallback(async () => {
    try {
      const result = await LayYeuCau(ban);
      setData(result);
    } catch (error) {
      console.error("Failed to fetch data", error);
    }
  }, []);

  const handleGoBack = () => {
    window.history.back();
  };

  const handleViewOrders = () => {
    // Xử lý khi người dùng bấm vào xem các món đã đặt
    console.log("View orders clicked");
    // Thực hiện các hành động khác nếu cần thiết
  };

  return (
    <>
      {data ? (
        <div className="feedback-page">
          <button className="home-button" onClick={handleGoBack}>
            <i className="fas fa-home"></i>
          </button>
          <div className="feedback-content">
            <h3>Phản hồi từ nhà hàng</h3>
            <a
              className="form-datmon"
              href={`/Cacmondadat/${ban}`}
              onClick={handleViewOrders}
            >
              Các món đã đặt...
            </a>
            {/* Nội dung phản hồi và các phần khác có thể được thêm vào đây */}
          </div>
          <div className="bodyphanhoi">
            {data.data &&
              data.data.map((item, key) => (
                <div key={key}>
                  <div className="message-box">
                    <div
                      className="message"
                      style={{ backgroundColor: "antiquewhite" }}
                    >
                      <p>{item.noi_dung}</p>
                    </div>
                  </div>
                  {item.trang_thai === 1 ? (
                    <div className="message-box">
                      <div className="message">
                        <p>Chúng tôi đã nhận được yêu cầu của bạn</p>
                      </div>
                    </div>
                  ) : (
                    <div></div>
                  )}
                </div>
              ))}
          </div>
        </div>
      ) : (
        <Load />
      )}
    </>
  );
};

export default Phanhoi;
