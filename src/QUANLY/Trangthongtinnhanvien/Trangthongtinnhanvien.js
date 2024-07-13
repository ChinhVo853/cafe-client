import React, { useState, useEffect, useCallback } from "react";
import Logout from "../Logout";
import { LayData as LayDuLieu, Capnhatthongtin, Dangxuat } from "./API/Api";
import Load from "../../Load/Load";
import Swal from "sweetalert2";

function TrangthongTinNhanVien() {
  const [ho_ten, set_ho_ten] = useState();
  const [so_dien_thoai, set_so_dien_thoai] = useState();
  const [id, set_id] = useState();
  const [data, setData] = useState();
  const LayData = useCallback(async () => {
    try {
      const result = await LayDuLieu();
      setData(result);
      set_ho_ten(result.ho_ten);
      set_so_dien_thoai(result.so_dien_thoai);
      set_id(result.id);
    } catch (error) {
      console.error("Failed to fetch data", error);
    }
  }, []);
  console.log(so_dien_thoai);
  useEffect(() => {
    document.title = "Thông tin";
    LayData();
  }, []);

  const Capnhat = async () => {
    const data2 = {
      ho_ten: ho_ten,
      so_dien_thoai: so_dien_thoai,
      id: data.id,
    };
    await Capnhatthongtin(data2);
    Swal.fire({
      title: "Thành công",
      icon: "success",
    });
    LayData();
  };
  const handleNameChange = (e) => {
    set_ho_ten(e.target.value);
  };
  const handlePhoneChange = (e) => {
    set_so_dien_thoai(e.target.value);
  };

  const DX = async () => {
    await Dangxuat();
  };

  return (
    <>
      {data ? (
        <div className="Body-thongtin">
          <div className="container rounded bg-white mt-5 mb-5">
            <div className="header">THÔNG TIN NHÂN VIÊN</div>
            <a href="/Trangchuquanly">
              <button className="btn-quayve" type="button">
                <i className="fa-solid fa-circle-chevron-left"></i>
              </button>
            </a>
            <div className="row">
              <div className="col-md-7 border-right">
                <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                  <img
                    className="rounded-circle mt-5"
                    width="150px"
                    src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                    alt="Profile"
                  />
                  <span className="font-weight-bold">{data.ho_ten}</span>
                  <span className="text-black-50">{data.email}</span>
                </div>
              </div>
              <div className="col-md-5 border-right">
                <div className="p-3 py-5">
                  <div className="row mt-2">
                    <div className="col-md-6">
                      <label className="labels">HỌ VÀ TÊN</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="..."
                        name="name"
                        value={ho_ten}
                        onChange={handleNameChange}
                      />
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-md-6">
                      <label className="labels">SỐ ĐIỆN THOẠI</label>
                      <input
                        type="number"
                        className="form-control"
                        placeholder="..."
                        name="phone"
                        value={so_dien_thoai}
                        onChange={handlePhoneChange}
                      />
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-md-6">
                      <label className="labels">EMAIL</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="..."
                        name="email"
                        value={data.email}
                        readOnly
                      />
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-md-6 mt-5">
                      <a href="/DoiMatKhau">Đổi mật khẩu</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-4">
              <button className="btn btn-success mx-2" onClick={Capnhat}>
                Cập nhật
              </button>
              <Logout Dangxuat={DX} />
            </div>
          </div>
        </div>
      ) : (
        <Load />
      )}
    </>
  );
}

export default TrangthongTinNhanVien;
