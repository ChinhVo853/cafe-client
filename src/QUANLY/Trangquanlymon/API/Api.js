import axios from "axios";
import config from "../../../config";
import Cookies from "js-cookie";
import Swal from "sweetalert2";
const apiClient = axios.create({
  baseURL: config.apiBaseUrl,
  headers: {
    "Content-Type": "multipart/form-data",
    Authorization: `Bearer ${Cookies.get("token")}`,
  },
});

export const LayData = async () => {
  try {
    const response = await apiClient.get("api/San-Pham/Xem");
    return response;
  } catch (error) {
    if (error.response.status === 401) {
      window.location.href = "/Trangdangnhap";
    } else {
      console.error("Error fetching data:", error);
      throw error;
    }
  }
};

export const SuaTT = async (data) => {
  try {
    const response = await apiClient.post("api/San-Pham/Trang-Thai", data);
    return response;
  } catch (error) {
    if (error.response.status === 401) {
      window.location.href = "/Trangdangnhap";
    } else if (error.response.status === 422) {
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

export const Xoa = async (data) => {
  try {
    const response = await apiClient.post("api/San-Pham/Xoa", data);
    return response;
  } catch (error) {
    if (error.response.status === 401) {
      window.location.href = "/Trangdangnhap";
    } else if (error.response.status === 422) {
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

export const TimMon = async (data) => {
  try {
    const response = await apiClient.post("api/San-Pham/Tim", data);
    return response;
  } catch (error) {
    if (error.response.status === 401) {
      window.location.href = "/Trangdangnhap";
    } else if (error.response.status === 422) {
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
