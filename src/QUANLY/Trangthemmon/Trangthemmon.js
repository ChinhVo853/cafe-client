import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';

function Trangthemmon() {
    const [formData, setFormData] = useState({
        foodImage: null,
        foodName: '',
        foodPrice: '',
        foodReviews: '',
        foodCategory: '',
        foodSize: '',
        foodStatus: 'Còn hàng'
    });

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
    };

    return (
        <div className="them-mon-container">
            <a href="/Trangquanlymon" className="btn-back">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M5.854 3.646a.5.5 0 0 1 0 .708L2.707 7.5H14.5a.5.5 0 0 1 0 1H2.707l3.147 3.146a.5.5 0 0 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 0 1 .708 0z"/>
                </svg>
            </a>
            <div className="header">THÊM MÓN</div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="foodImage" className="form-label">Hình ảnh</label>
                    <input type="file" className="form-control" id="foodImage" accept="image/*" onChange={handleImageChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="foodName" className="form-label">Tên món</label>
                    <input type="text" className="form-control" id="foodName" name="foodName" placeholder="Nhập tên món ăn" value={formData.foodName} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="foodPrice" className="form-label">Giá</label>
                    <input type="number" className="form-control" id="foodPrice" name="foodPrice" placeholder="Nhập giá món ăn" value={formData.foodPrice} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="foodReviews" className="form-label">Số lượng đánh giá</label>
                    <input type="number" className="form-control" id="foodReviews" name="foodReviews" placeholder="Nhập số lượng đánh giá" value={formData.foodReviews} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="foodCategory" className="form-label">Loại</label>
                    <input type="text" className="form-control" id="foodCategory" name="foodCategory" placeholder="Nhập loại món ăn" value={formData.foodCategory} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="foodSize" className="form-label">Size</label>
                    <input type="text" className="form-control" id="foodSize" name="foodSize" placeholder="Nhập size món ăn" value={formData.foodSize} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="foodStatus" className="form-label">Trạng thái</label>
                    <select className="form-control" id="foodStatus" name="foodStatus" value={formData.foodStatus} onChange={handleChange}>
                        <option value="Còn hàng">Còn hàng</option>
                        <option value="Hết hàng">Hết hàng</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-custom w-100">Thêm món</button>
                <a href='/Trangquanlymon' className="quaylai btn btn-secondary go-back-btn" >Hủy</a>
            </form>
        </div>
    );
}

export default Trangthemmon;
