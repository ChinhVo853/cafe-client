import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
function Trangthemsize (){
    
    const [sizeName, setsizeName] = useState('');

    

    const handleNameChange = (e) => {
        setsizeName(e.target.value);
    };

    

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the form submission
        console.log({ sizeName });
    };

    return (
        <div className="them-mon-container">
            
            <div className="header">THÊM SIZE</div>
            <form onSubmit={handleSubmit}>
                
                <div className="mb-3">
                    <label htmlFor="sizeName" className="form-label">Tên size</label>
                    <input type="text" className="form-control" id="sizeName" placeholder="Nhập tên size" value={sizeName} onChange={handleNameChange} />
                </div>
                
                <button type="submit" className="btn btn-custom w-100">Thêm size</button>
                <a href='/Trangquanlysize' className="quaylai btn btn-secondary go-back-btn" >Hủy</a>

            </form>
        </div>
    );
}

export default Trangthemsize;