import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Quanlyban({ tables, changeStatus, handlePayment, handleQRCode }) {
    return (
        <div className="request-container mt-5">
            <div className="header">THỐNG KÊ</div>
            <div className="col text-end mb-3">
                <button className="btn btn-primary" onClick={() => { /* Logic để thêm bàn mới */ }}>Thêm bàn</button>
            </div>
            <div className="container">
                <div className="row">
                    {tables.map((table) => (
                        <div className="col-md-4" key={table.id}>
                            <div className="card mb-3">
                                <div className={`card-body ${table.status}`} id={`table-${table.id}`}>
                                    <h5 className="card-title">Bàn {table.id}</h5>
                                    <p className="card-text">Mã bàn: {table.code}</p>
                                    <p className="card-text">Trạng thái: {table.status === 'occupied' ? 'Đang sử dụng' : 'Trống'}</p>
                                    <button className="btn btn-primary" onClick={() => changeStatus(table.id)}>
                                        {table.status === 'occupied' ? 'Đổi sang trống' : 'Đổi sang đang sử dụng'}
                                    </button>
                                    <button className="btn btn-info qr-btn" onClick={() => handleQRCode(table.code)}>QR</button>
                                    <button className="btn btn-warning payment-btn" onClick={() => handlePayment(table.id)}>Thanh toán</button>
                                    <a href="#" className="btn btn-danger delete-btn">Xóa</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Quanlyban;
