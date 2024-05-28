const DanhSachMenuSection = ({ data, menuIsOpen, handleMenuToggle }) => {
  return (
    <>
      <div className={`menu ${menuIsOpen ? "open" : ""}`} id="menu">
        <ul>
          {data.map((item, index) => {
            return (
              <li key={index}>
                <a href="#milk-tea">{item.ten_loai}</a>
              </li>
            );
          })}
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
