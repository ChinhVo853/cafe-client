import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Trangthemloai() {
    const [typeName, setTypeName] = useState('');
    const [showNotification, setShowNotification] = useState(false);

    const handleNameChange = (e) => {
        setTypeName(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the form submission
        console.log({ typeName });

        // Hiển thị thông báo
        setShowNotification(true);

        // Ẩn thông báo sau 3 giây
        setTimeout(() => {
            setShowNotification(false);
        }, 3000);
    };

    return (
        <div className="them-mon-container">
            <div className="header">THÊM LOẠI</div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="typeName" className="form-label">Tên loại</label>
                    <input
                        type="text"
                        className="form-control"
                        id="typeName"
                        placeholder="Nhập tên loại"
                        value={typeName}
                        onChange={handleNameChange}
                    />
                </div>
                <button type="submit" className="btn btn-custom w-100">Thêm loại</button>
                <a href='/Trangquanlyloai' className="quaylai btn btn-secondary go-back-btn">Hủy</a>
            </form>
            {showNotification && (
                <div className="alert alert-success mt-3" role="alert">
                    Thêm thành công!
                </div>
            )}
        </div>
    );
}

export default Trangthemloai;
