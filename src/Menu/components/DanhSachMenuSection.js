const DanhSachMenuSection = ({ menuIsOpen, handleMenuToggle }) => {
  return (
    <>
      <div className={`menu ${menuIsOpen ? "open" : ""}`} id="menu">
        <ul>
          <li>
            <a href="#milk-tea">Trà sữa</a>
          </li>
          <li>
            <a href="#fruit-tea">Trà trái cây</a>
          </li>
          <li>
            <a href="#soda">Soda</a>
          </li>
          <li>
            <a href="#coffee">Cà phê hạt</a>
          </li>
          <li>
            <a href="#ice-blend">Đá xay</a>
          </li>
          <li>
            <a href="#other">Món khá</a>
          </li>
        </ul>
      </div>
      <button
        className="menu-toggle"
        id="menu-toggle"
        onClick={handleMenuToggle}
      >
        ☰
      </button>
    </>
  );
};

export default DanhSachMenuSection;
