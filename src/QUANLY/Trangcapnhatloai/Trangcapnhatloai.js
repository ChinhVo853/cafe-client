import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
function Trangcapnhatloai() {
    
    const [typeName, settypeName] = useState('');
    

 
    const handleNameChange = (e) => {
        settypeName(e.target.value);
    };

    
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the form submission
        console.log({ typeName});
    };

    return (
        <div className="them-mon-container">
            
            <div className="header">CẬP NHẬT LOẠI</div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="typeName" className="form-label">Tên loai</label>
                    <input type="text" className="form-control" id="typeName" placeholder="Nhập tên loại" value={typeName} onChange={handleNameChange} />
                </div>
                <button type="submit" className="btn btn-custom w-100">Cập nhật</button>
                <a href='/Trangquanlyloai' className="quaylai btn btn-secondary go-back-btn" >Hủy</a>

            </form>
        </div>
    );
}

export default Trangcapnhatloai;