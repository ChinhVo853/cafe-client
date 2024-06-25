const DanhSachMenuSection = ({ data, menuIsOpen, handleMenuToggle }) => {
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
          {Object.entries(data.data).map(([key, item]) => (
            <div key={key}>
              {/* <h2>{item.ten_loai}</h2> */}
              <li>
                <a href={item.ten_loai} onClick={handleMenuItemClick}>
                  {item.ten_loai}
                </a>
              </li>
            </div>
          ))}
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
