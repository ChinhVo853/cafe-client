import React, { useState, useEffect, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { XemData } from "./API/Api";
import { useParams } from "react-router-dom";
import config from "../../config";
import axios from "axios";
import Cookies from "js-cookie";
import Swal from "sweetalert2";
import Load from "../../Load/Load";
function Trangcapnhatmon() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [data, setData] = useState();
  const [tenMon, setTenMon] = useState();
  const [gia, setGia] = useState();
  const [sizeID, setSizeID] = useState();
  const [loaiID, setLoaiID] = useState();
  const [trangThai, setTrangThai] = useState();

  const { id } = useParams();
  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
  };

  const LayDuLieu = useCallback(async () => {
    try {
      if (localStorage.getItem("quyen") == 2) {
        window.location.href = "/Trangchuquanly";
      }
      const result = await XemData(id);
      setData(result.data.data);
      setGia(result.data.data.gia);
      setTrangThai(result.data.data.trang_thai);
      setTenMon(result.data.data.tenMon);
      setLoaiID(result.data.data.LoaiID);
      setSizeID(result.data.data.sizeID);
    } catch (error) {
      console.error("Failed to fetch data", error);
    }
  }, []);
  //console.log(sizeID);
  useEffect(() => {
    LayDuLieu();
  }, [LayDuLieu]);
  const handleUpload = async (event) => {
    event.preventDefault();
    // console.log(selectedImage);
    const formData = new FormData();
    formData.append("image", selectedImage);
    formData.append("MonID", id);
    formData.append("tenMon", tenMon);
    formData.append("gia", gia);
    formData.append("trangThai", trangThai);
    formData.append("sizeID", sizeID);
    formData.append("loaiID", loaiID);
    //console.log(formData);
    try {
      const response = await axios.post(
        config.apiBaseUrl + "/api/San-Pham/Them-Anh",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        }
      );
      window.location.href = "/Trangquanlymon";
    } catch (error) {
      if (error.response.status == 401) {
        window.location.href = "/Trangdangnhap";
      } else if (error.response.status == 422) {
        const errors = error.response.data.errors;
        if (typeof errors === "string") {
          Swal.fire({
            title: "Thất bại",
            text: errors,
            icon: "error",
          });
        } else {
          const errorMessages = [];

          // Duyệt qua các trường trong errors và gom thông báo lỗi thành một chuỗi HTML
          for (const field in errors) {
            if (errors.hasOwnProperty(field)) {
              errors[field].forEach((message) => {
                errorMessages.push(`<p>${message}</p>`);
              });
            }
          }
          Swal.fire({
            title: "Thất bại",
            html: `<div>${errorMessages.join("")}</div>`,
            icon: "error",
          });
        }
      } else {
        console.error("Error fetching data:", error);
        throw error;
      }
    }
  };
  const handleChangeGia = (e) => {
    setGia(e.target.value); // Cập nhật giá trị mới vào state khi người dùng nhập
  };
  const handleChangeTenMon = (e) => {
    setTenMon(e.target.value); // Cập nhật giá trị mới vào state khi người dùng nhập
  };
  const handleChangeTrangThai = (e) => {
    setTrangThai(e.target.value); // Cập nhật giá trị mới vào state khi người dùng nhập
  };
  return (
    <>
      {data ? (
        <div className="them-mon-container">
          <div className="header">CẬP NHẬT MÓN</div>

          <div className="mb-3">
            <label htmlFor="foodImage" className="form-label">
              Hình ảnh
            </label>
            <input
              type="file"
              className="form-control"
              id="foodImage"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="foodName" className="form-label">
              Tên món
            </label>
            <input
              type="text"
              className="form-control"
              id="foodName"
              name="foodName"
              placeholder="Nhập tên món ăn"
              value={tenMon}
              onChange={handleChangeTenMon}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="foodCategory" className="form-label">
              Loại
            </label>
            <input
              type="text"
              className="form-control"
              id="foodCategory"
              name="foodCategory"
              value={data.tenLoai}
              readOnly
            />
          </div>
          <div className="form-row mb-3">
            <div className="form-group">
              <label htmlFor="foodCategory" className="form-label">
                Size
              </label>
              <input
                type="text"
                className="form-control"
                id="foodCategory"
                name="foodCategory"
                readOnly
                value={data.tenSize}
              />
            </div>
            <div className="form-group">
              <label htmlFor="foodPrice" className="form-label">
                Giá
              </label>
              <input
                type="number"
                className="form-control"
                id="foodPrice"
                name="foodPrice"
                placeholder="Nhập giá món ăn"
                value={gia}
                onChange={handleChangeGia}
              />
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="foodStatus" className="form-label">
              Trạng thái
            </label>
            {trangThai == 0 ? (
              <select
                className="form-control"
                id="foodStatus"
                name="foodStatus"
                onChange={handleChangeTrangThai}
              >
                <option value="0">Hết hàng</option>
                <option value="1">Còn hàng</option>
              </select>
            ) : (
              <select
                className="form-control"
                id="foodStatus"
                onChange={handleChangeTrangThai}
                name="foodStatus"
              >
                <option value="1">Còn hàng</option>
                <option value="0">Hết hàng</option>
              </select>
            )}
          </div>
          <button onClick={handleUpload} className="btn btn-custom w-100">
            Cập nhật
          </button>
          <a
            href="/Trangquanlymon"
            className="quaylai btn btn-secondary go-back-btn"
          >
            Hủy
          </a>
        </div>
      ) : (
        <Load />
      )}
    </>
  );
}

export default Trangcapnhatmon;
