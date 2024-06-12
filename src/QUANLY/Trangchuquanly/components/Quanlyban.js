import 'bootstrap/dist/css/bootstrap.min.css';

function Quanlyban({ tables, changeStatus, handlePayment }) {

    return (
        <>
            <div className="request-container mt-5">
                <div className="header">THỐNG KÊ</div>
                <div className="col text-end mb-3">
                    <button className="btn btn-primary">Thêm bàn</button>
                </div>
                <div className="container">
                    <div className="row">
                        {tables.map((table) => (
                            <div className="col-md-4" key={table.id}>
                                <div className="card">
                                    <div className={`card-body ${table.status}`} id={`table-${table.id}`}>
                                        <h5 className="card-title">Bàn {table.id}</h5>
                                        <p className="card-text">Trạng thái: {table.status === 'occupied' ? 'Đang sử dụng' : 'Trống'}</p>
                                        <a href="#" className="btn btn-primary">Xem lịch sử hóa đơn</a>
                                        {/* <button className="btn btn-success change-status" onClick={() => changeStatus(table.id)}>Trạng thái</button> */}
                                        <button className="btn btn-warning payment-btn" onClick={() => handlePayment(table.id)}>Thanh toán</button>
                                        <a href="#" className="btn btn-danger delete-btn">Xóa</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Quanlyban;
