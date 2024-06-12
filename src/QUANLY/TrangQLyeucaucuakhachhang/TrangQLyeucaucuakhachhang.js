import React, { useState } from 'react';
import Menuquanly from '../Menuquanly';
const TrangQLyeucaucuakhachhang = () => {
  const [requests, setRequests] = useState([
    { id: 1, table: 5, type: 'Yêu cầu thanh toán', time: '10:30 AM', status: 'Đang chờ xác nhận' },
    { id: 2, table: 3, type: 'Gọi nhân viên', time: '10:35 AM', status: 'Đang chờ xác nhận' },
    { id: 3, table: 1, type: 'Khác', time: '10:40 AM', status: 'Đang chờ xác nhận' },
  ]);

  const handleStatusChange = (id) => {
    setRequests(requests.map(request =>
      request.id === id
        ? { ...request, status: request.status === 'Đang chờ xác nhận' ? 'Đã phục vụ' : 'Đang chờ xác nhận' }
        : request
    ));
  };
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
      setMenuOpen(!menuOpen);
  };
  return (
    
    <div className="request-container mt-5">
      <div className="search-container-custom">
        <input type="text" placeholder="Tìm kiếm..." />
        <button type="button">🔍</button>
      </div>
      <div className="header">QUẢN LÝ YÊU CẦU KHÁCH HÀNG</div>
      <div className="row">
        <div className="col">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Số bàn</th>
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
                  <td>{request.table}</td>
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
      <Menuquanly
    toggleMenu={toggleMenu}
    menuOpen={menuOpen}
    />
    </div>
  );
};

export default TrangQLyeucaucuakhachhang;
