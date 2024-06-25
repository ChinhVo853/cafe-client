import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './Formgoinhanvien.css'; // Import CSS file for additional styling

function Formgoinhanvien({ showCallStaffForm, requestItems, handleCheckboxChange, handleSubmitForm, toggleCallStaffForm }) {
    const [showSuccessNotification, setShowSuccessNotification] = useState(false);

    const handleFormSubmit = () => {
        handleSubmitForm();
        setShowSuccessNotification(true);

        // Hide the notification after 3 seconds
        setTimeout(() => {
            setShowSuccessNotification(false);
        }, 3000);
    };

    return (
        <>
            {/* Call Staff Form */}
            {showCallStaffForm && (
                <div className="call-staff-form">
                    <div className="form-content">
                        <h2>Gọi Nhân Viên</h2>
                        <textarea placeholder="Nhập yêu cầu của bạn..." rows="4"></textarea>
                        <div className="request-items">
                            <label>
                                <input
                                    type="checkbox"
                                    checked={requestItems.tương_ớt}
                                    onChange={() => handleCheckboxChange('tương_ớt')}
                                />
                                Tương ớt
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={requestItems.tương_cà}
                                    onChange={() => handleCheckboxChange('tương_cà')}
                                />
                                Tương cà
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={requestItems.giấy}
                                    onChange={() => handleCheckboxChange('giấy')}
                                />
                                Giấy
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={requestItems.tăm}
                                    onChange={() => handleCheckboxChange('tăm')}
                                />
                                Tăm
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={requestItems.nước_tương}
                                    onChange={() => handleCheckboxChange('nước_tương')}
                                />
                                Nước tương
                            </label>
                            {/* Thêm các mục yêu cầu khác ở đây */}
                        </div>
                        <button className="btn btn-primary mt-3" onClick={handleFormSubmit}>
                            <i className="fa fa-paper-plane"></i> Gửi Yêu Cầu
                        </button>
                        <button className="btn btn-secondary mt-3" onClick={toggleCallStaffForm}>
                            <i className="fa fa-times"></i> Đóng
                        </button>
                    </div>
                </div>
            )}
            {showSuccessNotification && (
                <div className="alert alert-success success-notification" role="alert">
                    Yêu cầu của bạn đã được gửi thành công!
                </div>
            )}
        </>
    );
}

export default Formgoinhanvien;
