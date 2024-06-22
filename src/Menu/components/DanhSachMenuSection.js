
const DanhSachMenuSection = ({ menuIsOpen, handleMenuToggle }) => {
  const handleMenuItemClick = (event) => {
    event.preventDefault();
    const targetId = event.target.getAttribute("href").substring(1); // Lấy ID của phần tử đích (bỏ qua ký tự #)
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
    <>
      <div className={`menu ${menuIsOpen ? "open" : ""}`} id="menu">
        <ul>

          <li>
            <a href="#milk-tea" onClick={handleMenuItemClick}>
              <i className="fas fa-coffee"></i> Trà sữa
            </a>
          </li>
          <li>
            <a href="#fruit-tea" onClick={handleMenuItemClick}>
              <i className="fas fa-apple-alt"></i> Trà trái cây
            </a>
          </li>
          <li>
            <a href="#soda" onClick={handleMenuItemClick}>
              <i className="fas fa-wine-glass-alt"></i> Soda
            </a>
          </li>
          <li>
            <a href="#coffee" onClick={handleMenuItemClick}>
              <i className="fas fa-mug-hot"></i> Cà phê hạt
            </a>
          </li>
          <li>
            <a href="#ice-blend" onClick={handleMenuItemClick}>
              <i className="fas fa-ice-cream"></i> Đá xay
            </a>
          </li>
          <li>
            <a href="#other" onClick={handleMenuItemClick}>
              <i className="fas fa-utensils"></i> Món khác
            </a>
          </li>

        </ul>
      </div>
      <button className="menu-toggle" id="menu-toggle" onClick={handleMenuToggle}>
        ☰
      </button>
    </>
  );
};

export default DanhSachMenuSection;
