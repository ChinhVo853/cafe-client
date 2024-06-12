import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
function Trangthemloai (){
    
    const [typeName, settypeName] = useState('');

    

    const handleNameChange = (e) => {
        settypeName(e.target.value);
    };

    

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the form submission
        console.log({ typeName });
    };

    return (
        <div className="them-mon-container">
            <a href="/Trangquanlyloai" className="btn-back">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M5.854 3.646a.5.5 0 0 1 0 .708L2.707 7.5H14.5a.5.5 0 0 1 0 1H2.707l3.147 3.146a.5.5 0 0 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 0 1 .708 0z"/>
                </svg>
            </a>
            <div className="header">THÊM LOẠI</div>
            <form onSubmit={handleSubmit}>
                
                <div className="mb-3">
                    <label htmlFor="typeName" className="form-label">Tên loại</label>
                    <input type="text" className="form-control" id="typeName" placeholder="Nhập tên loại" value={typeName} onChange={handleNameChange} />
                </div>
                
                <button type="submit" className="btn btn-custom w-100">Thêm loại</button>
                <a href='/Trangquanlyloai' className="quaylai btn btn-secondary go-back-btn" >Hủy</a>

            </form>
        </div>
    );
}

export default Trangthemloai;