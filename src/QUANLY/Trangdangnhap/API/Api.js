import axios from "axios";
import config from "../../../config";
import Cookies from "js-cookie";
import Swal from "sweetalert2";
const apiClient = axios.create({
  baseURL: config.apiBaseUrl,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${Cookies.get("token")}`,
  },
});

export const DangNhap = async (data) => {
  try {
    const response = await apiClient.post("api/Login", data);

    localStorage.setItem("quyen", response.data.quyen_id);
    Cookies.set("token", response.data.access_token, { expires: 7 });
    window.location.href = "/Trangchuquanly";
    return response;
  } catch (error) {
    if (error.response.status == 401) {
      Swal.fire({
        title: "Thất bại",
        text: "Tài khoản mật khẩu không đúng",
        icon: "error",
      });
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

export const Me = async () => {
  try {
    const response = await apiClient.get("api/me");
    return response;
  } catch (error) {
    if (error.response.status == 401) {
    } else {
      console.error("Error fetching data:", error);
      throw error;
    }
  }
};

export const DoiMatKhau = async (data) => {
  try {
    const response = await apiClient.post("api/Nguoi-Dung/Doi-Mat-Khau", data);
    window.location.href = "/Trangthongtinnhanvien";

    return response;
  } catch (error) {
    if (error.response.status == 401) {
      Swal.fire({
        title: "Thất bại",
        text: "Tài khoản mật khẩu không đúng",
        icon: "error",
      });
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

export const LayLaiMatKhau = async (data) => {
  try {
    const response = await apiClient.post("/api/Tranglaymatkhau", data);
    window.location.href = "/Trangdangnhap";

    return response;
  } catch (error) {
    if (error.response.status == 422) {
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