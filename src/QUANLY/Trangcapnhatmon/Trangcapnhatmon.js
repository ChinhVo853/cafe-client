import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
function Trangcapnhatmon() {
    const [foodImage, setFoodImage] = useState(null);
    const [foodName, setFoodName] = useState('');
    const [foodPrice, setFoodPrice] = useState('');

    const handleImageChange = (e) => {
        setFoodImage(e.target.files[0]);
    };

    const handleNameChange = (e) => {
        setFoodName(e.target.value);
    };

    const handlePriceChange = (e) => {
        setFoodPrice(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the form submission
        console.log({ foodImage, foodName, foodPrice });
    };

    return (
        <div className="them-mon-container">
            <a href="/Trangquanlymon" className="btn-back">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M5.854 3.646a.5.5 0 0 1 0 .708L2.707 7.5H14.5a.5.5 0 0 1 0 1H2.707l3.147 3.146a.5.5 0 0 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 0 1 .708 0z" />
                </svg>
            </a>
            <div className="header">CẬP NHẬT MÓN</div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="foodImage" className="form-label">Hình ảnh</label>
                    <input type="file" className="form-control" id="foodImage" accept="image/*" onChange={handleImageChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="foodName" className="form-label">Tên món</label>
                    <input type="text" className="form-control" id="foodName" placeholder="Nhập tên món ăn" value={foodName} onChange={handleNameChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="foodPrice" className="form-label">Giá</label>
                    <input type="number" className="form-control" id="foodPrice" placeholder="Nhập giá món ăn" value={foodPrice} onChange={handlePriceChange} />
                </div>
                <button type="submit" className="btn btn-custom w-100">Cập nhật</button>
                <a href='/Trangquanlymon' className="quaylai btn btn-secondary go-back-btn" >Hủy</a>

            </form>
        </div>
    );
}

export default Trangcapnhatmon;