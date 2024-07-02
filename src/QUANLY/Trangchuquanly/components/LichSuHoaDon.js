import React, { useState } from 'react';

const Lichsuhoadon = () => {
  const [requests, setRequests] = useState([
    { ma: 1, total: '108.000đ', time: '10:30 AM'},
    { ma: 2, total: '108.000đ', time: '10:35 AM'},
    { ma: 3, total: '108.000đ', time: '10:40 AM'},
  ]);

  
  
  return (
    <div>
      <div className="search-container-custom">
        <input type="text" placeholder="Tìm kiếm..." />
        <button type="button">🔍</button>
      </div>
      <a href="/Trangchuquanly">
          <button className="btn-quayve" type="button">
            <i className="fa-solid fa-circle-chevron-left"></i>
          </button>
        </a>
      <div className="request-container mt-5">
        <div className="header">LỊCH SỬ HÓA ĐƠN BÀN 1</div>
        <div className="row">
          <div className="col">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">MÃ</th>
                  <th scope="col">TỔNG TIỀN</th>
                  <th scope="col">NGÀY</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {requests.map(request => (
                  <tr key={request.ma}>
                    <td>{request.ma}</td>
                    <td>{request.total}</td>
                    <td>{request.time}</td>
                    <td>
                    <a href='/Chitiethoadon' className="btn btn-success mx-2">CHI TIẾT HÓA ĐƠN</a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lichsuhoadon;
