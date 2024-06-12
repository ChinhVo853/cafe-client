import logo from "./logo.svg";
import "./App.css";
import '@fortawesome/fontawesome-free/css/all.css';
import { Route, Routes } from "react-router-dom";
import TrangChu from "./TrangChu/TrangChu";
import Menu from "./Menu/Menu";
import Trangchuquanly from "./QUANLY/Trangchuquanly/Trangchuquanly";
import Trangthemmon from "./QUANLY/Trangthemmon/Trangthemmon";
import Trangquanlymon from "./QUANLY/Trangquanlymon/Trangquanlymon";
import Trangcapnhatmon from "./QUANLY/Trangcapnhatmon/Trangcapnhatmon";
import Trangquanlyloai from "./QUANLY/Trangquanlyloai/Trangquanlyloai";
import Trangthemloai from "./QUANLY/Trangthemloai/Trangthemloai";
import Trangcapnhatloai from "./QUANLY/Trangcapnhatloai/Trangcapnhatloai";
import TrangQLyeucaucuakhachhang from "./QUANLY/TrangQLyeucaucuakhachhang/TrangQLyeucaucuakhachhang";
import TrangQLnhanvien from "./QUANLY/TrangQLnhanvien/TrangQLnhanvien";
import Trangthemnhanvien from "./QUANLY/Trangthemnhanvien/Trangthemnhanvien";
function App() {
  return (
    <Routes>
      <Route path="/" element={<TrangChu />} />
      <Route path="/Menu" element={<Menu />} />
      {/* -----------------------*******QuanLy*********----------------- */}
      <Route path="/Trangchuquanly" element={<Trangchuquanly />} />
      {/* -----------------------*******QuanLyMon*********----------------- */}
      <Route path="/Trangquanlymon" element={<Trangquanlymon />} />
      <Route path="/Trangthemmon" element={<Trangthemmon/>} />
      <Route path="/Trangcapnhatmon" element={<Trangcapnhatmon/>} />
      {/* -----------------------*******QuanLyLoai*********----------------- */}
      <Route path="/Trangquanlyloai" element={<Trangquanlyloai/>} />
      <Route path="/Trangthemloai" element={<Trangthemloai/>} />
      <Route path="/Trangcapnhatloai" element={<Trangcapnhatloai/>} />
      {/* -----------------------*******TrangQLyeucaucuakhachhang*********----------------- */}
      <Route path="/TrangQLyeucaucuakhachhang" element={<TrangQLyeucaucuakhachhang/>} />
      {/* -----------------------*******TrangQLnhanvien*********----------------- */}
      <Route path="/TrangQLnhanvien" element={<TrangQLnhanvien/>} />
      <Route path="/Trangthemnhanvien" element={<Trangthemnhanvien/>} />
      
    </Routes>
  );
}

export default App;
