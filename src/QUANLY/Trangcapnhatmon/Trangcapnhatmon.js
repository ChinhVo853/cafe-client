import React, { useState, useEffect, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { XemData } from "./API/Api";
import { useParams } from "react-router-dom";
import config from "../../config";
import axios from "axios";
import Cookies from "js-cookie";

function Trangcapnhatmon() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [data, setData] = useState();
  const [tenMon, setTenMon] = useState();
  const [gia, setGia] = useState();
  const [trangThai, setTrangThai] = useState();

  const { id } = useParams();
  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
  };

  const LayDuLieu = useCallback(async () => {
    try {
      const result = await XemData(id);
      setData(result.data.data);
      setGia(result.data.data.gia);
      setTrangThai(result.data.data.trang_thai);
      setTenMon(result.data.data.tenMon);
    } catch (error) {
      console.error("Failed to fetch data", error);
    }
  }, []);
  useEffect(() => {
    LayDuLieu();
  }, [LayDuLieu]);
  const handleUpload = async (event) => {
    event.preventDefault();
    console.log(selectedImage);
    const formData = new FormData();
    formData.append("image", selectedImage);
    formData.append("MonID", id);
    formData.append("tenMon", tenMon);
    formData.append("gia", gia);
    formData.append("trangThai", trangThai);

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

      if (response.data.success) {
        alert("Thành công");
        // Thực hiện các thao tác cần thiết sau khi tải lên thành công
      } else {
        alert("Thất bại: " + response.data.message);
        // Xử lý lỗi nếu cần
      }
    } catch (error) {
      console.error("Error uploading image", error);
      alert("Lỗi khi tải lên ảnh");
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
      {data && (
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
      )}
    </>
  );
}

export default Trangcapnhatmon;
