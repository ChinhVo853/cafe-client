function Menuquanly ({menuOpen,toggleMenu}){

    return(
        <>
        <div className={`menu ${menuOpen ? 'open' : ''}`} id="menu">
                <ul>
                <li><a href="/Trangchuquanly"><i class="fa-solid fa-house"></i> THỐNG KÊ</a></li>
                    <li><a href="/Trangquanlymon"><i className="fas fa-utensils"></i> MÓN</a></li>
                    <li><a href="/Trangquanlyloai"><i className="fas fa-list"></i> LOẠI</a></li>
                    <li><a href="/Trangquanlysize"><i class="fa-solid fa-tag"></i> SIZE</a></li>
                    <li><a href="/TrangQLyeucaucuakhachhang"><i className="fas fa-hand-paper"></i> YÊU CẦU CỦA KHÁCH HÀNG</a></li>
                    <li><a href="/TrangQLnhanvien"><i className="fas fa-user"></i> NHÂN VIÊN</a></li>
                </ul>
            </div>
            <button className="menu-toggle" id="menu-toggle" onClick={toggleMenu}>☰</button>
        </>

    );
}
export default Menuquanly;