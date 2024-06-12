import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Trangthemnhanvien() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic to handle form submission
        console.log(formData);
    };

    return (
        <>
        
        
        <div className="add-employee-wrapper">
            <div className="add-employee-header">THÊM NHÂN VIÊN</div>
            
            
            <form className="add-employee-form" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="add-employee-form-label">Họ tên</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="name" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="add-employee-form-label">SĐT</label>
                    <input 
                        type="tel" 
                        className="form-control" 
                        id="phone" 
                        name="phone" 
                        value={formData.phone} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="add-employee-form-label">Email</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        id="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="username" className="add-employee-form-label">Tài khoản</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="username" 
                        name="username" 
                        value={formData.username} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="add-employee-form-label">Mật khẩu</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        id="password" 
                        name="password" 
                        value={formData.password} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <button type="submit" className="btn add-employee-btn-custom">Thêm nhân viên</button>
                <a href='/TrangQLnhanvien' className="quaylai btn btn-secondary go-back-btn" >Hủy</a>
            </form>
        </div>
        </>
    );
}

export default Trangthemnhanvien;
