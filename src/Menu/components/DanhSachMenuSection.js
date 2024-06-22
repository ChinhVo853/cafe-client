const DanhSachMenuSection = ({ menuIsOpen, handleMenuToggle }) => {
  return (
    <>
      <div className={`menu ${menuIsOpen ? "open" : ""}`} id="menu">
      <ul>
    <li>
      <a href="#milk-tea">
        <i className="fas fa-coffee"></i> Trà sữa
      </a>
    </li>
    <li>
      <a href="#fruit-tea">
        <i className="fas fa-apple-alt"></i> Trà trái cây
      </a>
    </li>
    <li>
      <a href="#soda">
        <i className="fas fa-wine-glass-alt"></i> Soda
      </a>
    </li>
    <li>
      <a href="#coffee">
        <i className="fas fa-mug-hot"></i> Cà phê hạt
      </a>
    </li>
    <li>
      <a href="#ice-blend">
        <i className="fas fa-ice-cream"></i> Đá xay
      </a>
    </li>
    <li>
      <a href="#other">
        <i className="fas fa-utensils"></i> Món khác
      </a>
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
