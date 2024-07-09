import React from "react";
import { Link } from "react-scroll";
import { useParams } from "react-router-dom";

const DanhSachMenuSection = ({ data, menuIsOpen, handleMenuToggle }) => {
  const { ban } = useParams();

  return (
    <>
      <div className={`menu ${menuIsOpen ? "open" : ""}`} id="menu">
        <ul>
          {Object.entries(data.data).map(([key, item]) => (
            <li key={key}>
              <Link
                to={item.ten_loai}
                spy={true}
                smooth={true}
                offset={-10}
                duration={100}
                onClick={handleMenuToggle} // Đóng menu khi click
              >
                {item.ten_loai}
              </Link>
            </li>
          ))}
        </ul>
        <button className="home-button-menu">
          <a href={`/Trangchugoimon/${ban}`}>
            <i className="fas fa-home"></i>
          </a>
        </button>
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
