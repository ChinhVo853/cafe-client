function Menunhanvien({ menuOpen, toggleMenu }) {
  return (
    <>
      <div className={`menu ${menuOpen ? "open" : ""}`} id="menu">
        <ul>
          <li>
            <a href="/Trangchuquanly">
              <i className="fa-solid fa-house"></i> THỐNG KÊ
            </a>
          </li>
          <li>
            <a href="/TrangQLyeucaucuakhachhang">
              <i className="fas fa-hand-paper"></i> YÊU CẦU CỦA KHÁCH HÀNG
            </a>
          </li>
        </ul>
      </div>
      <button className="menu-toggle" id="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
    </>
  );
}
export default Menunhanvien;
