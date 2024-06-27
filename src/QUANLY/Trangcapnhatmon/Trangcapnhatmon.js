import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';

function Trangcapnhatmon() {
    const [formData, setFormData] = useState({
        foodImage: null,
        foodName: '',
        foodPrice: '',
        foodReviews: '',
        foodCategory: '',
        foodSize: '',
        foodStatus: 'Còn hàng'
    });

    const [showNotification, setShowNotification] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleImageChange = (e) => {
        setFormData({
            ...formData,
            foodImage: e.target.files[0]
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the form submission
        console.log(formData);

        // Hiển thị thông báo
        setShowNotification(true);

        // Ẩn thông báo sau 3 giây
        setTimeout(() => {
            setShowNotification(false);
        }, 3000);
    };
    const [size, setSize] = useState(false);
    const handleSize = (e) => {
        setSize(e.target.checked);
    };
    return (
        <div className="them-mon-container">
            <div className="header">CẬP NHẬT MÓN</div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="foodImage" className="form-label">Hình ảnh</label>
                    <input
                        type="file"
                        className="form-control"
                        id="foodImage"
                        accept="image/*"
                        onChange={handleImageChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="foodName" className="form-label">Tên món</label>
                    <input
                        type="text"
                        className="form-control"
                        id="foodName"
                        name="foodName"
                        placeholder="Nhập tên món ăn"
                        value={formData.foodName}
                        onChange={handleChange}
                    />
                </div>


                <div className="mb-3">
                    <label htmlFor="foodCategory" className="form-label">Loại</label>
                    <select type="text" className="form-control" id="foodCategory" name="foodCategory" value={formData.foodCategory} onChange={handleChange} />
                </div>
                <div className="form-row mb-3">
                    <div className="form-group">
                        <label htmlFor="foodCategory" className="form-label">Size</label>
                        <select type="text" className="form-control" id="foodCategory" name="foodCategory" onChange={handleChange}>
                            {/* Thêm các tùy chọn cho select */}
                            <option value="">Chọn size</option>
                            <option value="small">Nhỏ</option>
                            <option value="medium">Vừa</option>
                            <option value="large">Lớn</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="foodPrice" className="form-label">Giá</label>
                        <input
                            type="number"
                            className="form-control"
                            id="foodPrice"
                            name="foodPrice"
                            placeholder="Nhập giá món ăn"
                            value={formData.foodPrice}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                
                <div className="mb-3">
                    <label htmlFor="foodStatus" className="form-label">Trạng thái</label>
                    <select
                        className="form-control"
                        id="foodStatus"
                        name="foodStatus"
                        value={formData.foodStatus}
                        onChange={handleChange}
                    >
                        <option value="Còn hàng">Còn hàng</option>
                        <option value="Hết hàng">Hết hàng</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-custom w-100">Cập nhật</button>
                <a href='/Trangquanlymon' className="quaylai btn btn-secondary go-back-btn">Hủy</a>
            </form>
            {showNotification && (
                <div className="alert alert-success mt-3" role="alert">
                    Cập nhật thành công!
                </div>
            )}
        </div>
    );
}

export default Trangcapnhatmon;
