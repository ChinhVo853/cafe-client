import logo from "./logo.svg";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.css";
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
import Trangquanlysize from "./QUANLY/Trangquanlysize/Trangquanlysize";
import Trangthemsize from "./QUANLY/Trangthemsize/Trangthemsize";
import Trangcapnhatsize from "./QUANLY/Trangcapnhatsize/Trangcapnhatsize";
import Trangchugoimon from "./Trangchugoimon/Trangchugoimon";
import Trangnhapma from "./Trangnhapma/Trangnhapma";
import Phanhoi from "./Trangchugoimon/components/Phanhoi";
import Cacmondadat from "./Trangchugoimon/components/Cacmondadat";
import Trangdangnhap from "./QUANLY/Trangdangnhap/Trangdangnhap";
import TrangQR from "./Trangnhapma/TrangQR";
import Logout from "./QUANLY/Logout";
import TrangthongTinNhanVien from "./QUANLY/Trangthongtinnhanvien/Trangthongtinnhanvien";
import TrangcapnhatthongTinNhanVien from "./QUANLY/Trangcapnhatthongtinnhanvien/Trangcapnhatthongtinnhanvien";

function App() {
  return (
    <Routes>
      <Route path="/" element={<TrangChu />} />
      <Route path="/Menu/:ban" element={<Menu />} />
      {/* -----------------------*******QuanLy*********----------------- */}
      <Route path="/Trangchuquanly" element={<Trangchuquanly />} />
      {/* -----------------------*******QuanLyMon*********----------------- */}
      <Route path="/Trangquanlymon" element={<Trangquanlymon />} />
      <Route path="/Trangthemmon" element={<Trangthemmon />} />
      <Route path="/Trangcapnhatmon" element={<Trangcapnhatmon />} />
      {/* -----------------------*******QuanLyLoai*********----------------- */}
      <Route path="/Trangquanlyloai" element={<Trangquanlyloai />} />
      <Route path="/Trangthemloai" element={<Trangthemloai />} />
      <Route path="/Trangcapnhatloai/:id" element={<Trangcapnhatloai />} />
      {/* -----------------------*******QuanLySize*********----------------- */}
      <Route path="/Trangquanlysize" element={<Trangquanlysize />} />
      <Route path="/Trangthemsize" element={<Trangthemsize />} />
      <Route path="/Trangcapnhatsize/:id" element={<Trangcapnhatsize />} />
      {/* -----------------------*******TrangQLyeucaucuakhachhang*********----------------- */}
      <Route
        path="/TrangQLyeucaucuakhachhang"
        element={<TrangQLyeucaucuakhachhang />}
      />
      {/* -----------------------*******TrangQLnhanvien*********----------------- */}


      <Route path="/TrangQLnhanvien" element={<TrangQLnhanvien/>} />
      <Route path="/Trangthemnhanvien" element={<Trangthemnhanvien/>} />
      <Route path="/Trangthongtinnhanvien" element={<TrangthongTinNhanVien/>} />
      <Route path="/Trangdangnhap" element={<Trangdangnhap/>} />
      <Route path="/Logout" element={<Logout/>} />
      <Route path="/Trangcapnhatthongtinnhanvien" element={<TrangcapnhatthongTinNhanVien/>} />




      {/* ********************************************************************** */}
      {/* -----------------------*******TRANGCHUGOIMON*********----------------- */}
      {/* ********************************************************************** */}

      <Route path="/Trangchugoimon/:ban" element={<Trangchugoimon />} />
      <Route path="/Trangnhapma/:ban" element={<Trangnhapma />} />
      <Route path="/Trangnhapma/QR/:ban" element={<TrangQR />} />
      <Route path="/Phanhoi/:ban" element={<Phanhoi />} />
      <Route path="/Cacmondadat" element={<Cacmondadat />} />
    </Routes>
  );
}

export default App;
