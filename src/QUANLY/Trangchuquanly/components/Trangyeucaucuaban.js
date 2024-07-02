import React, { useState } from 'react';

const Trangyeucaucuaban = () => {
  const [requests, setRequests] = useState([
    { id: 1, type: 'Yêu cầu thanh toán', time: '10:30 AM', status: 'Đang chờ xác nhận' },
    { id: 2, type: 'Gọi nhân viên', time: '10:35 AM', status: 'Đang chờ xác nhận' },
    { id: 3, type: 'Khác', time: '10:40 AM', status: 'Đang chờ xác nhận' },
  ]);

  const handleStatusChange = (id) => {
    setRequests(requests.map(request =>
      request.id === id
        ? { ...request, status: request.status === 'Đang chờ xác nhận' ? 'Đã phục vụ' : 'Đang chờ xác nhận' }
        : request
    ));
  };

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
        <div className="header">QUẢN LÝ YÊU CẦU CỦA BÀN 1</div>
        <div className="row">
          <div className="col">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Loại yêu cầu</th>
                  <th scope="col">Thời gian yêu cầu</th>
                  <th scope="col">Trạng thái</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {requests.map(request => (
                  <tr key={request.id}>
                    <td>{request.id}</td>
                    <td>{request.type}</td>
                    <td>{request.time}</td>
                    <td>{request.status}</td>
                    <td>
                      <button
                        className={`btn btn-sm ${request.status === 'Đang chờ xác nhận' ? 'btn-request-confirm' : 'btn-request-undo'}`}
                        onClick={() => handleStatusChange(request.id)}
                      >
                        {request.status === 'Đang chờ xác nhận' ? 'Xác nhận' : 'Hoàn tác'}
                      </button>
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

export default Trangyeucaucuaban;
