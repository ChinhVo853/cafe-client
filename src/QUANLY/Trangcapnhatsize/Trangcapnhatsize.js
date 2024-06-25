import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Trangcapnhatsize() {
    const [sizeName, setSizeName] = useState('');
    const [showNotification, setShowNotification] = useState(false);

    const handleNameChange = (e) => {
        setSizeName(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the form submission
        console.log({ sizeName });

        // Hiển thị thông báo
        setShowNotification(true);

        // Ẩn thông báo sau 3 giây
        setTimeout(() => {
            setShowNotification(false);
        }, 3000);
    };

    return (
        <div className="them-mon-container">
            <div className="header">CẬP NHẬT SIZE</div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="sizeName" className="form-label">Tên size</label>
                    <input
                        type="text"
                        className="form-control"
                        id="sizeName"
                        placeholder="Nhập tên size"
                        value={sizeName}
                        onChange={handleNameChange}
                    />
                </div>
                <button type="submit" className="btn btn-custom w-100">Cập nhật</button>
                <a href='/Trangquanlysize' className="quaylai btn btn-secondary go-back-btn">Hủy</a>
            </form>
            {showNotification && (
                <div className="alert alert-success mt-3" role="alert">
                    Cập nhật thành công!
                </div>
            )}
        </div>
    );
}

export default Trangcapnhatsize;
