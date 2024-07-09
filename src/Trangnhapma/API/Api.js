import axios from "axios";
import config from "../../config";
import Swal from "sweetalert2";
const apiClient = axios.create({
  baseURL: config.apiBaseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export const TaoDatMon = async (id) => {
  try {
    const response = await apiClient.get("api/Dat-Mon/ban/" + id);
    return response;
  } catch (error) {
    if (error.response.status === 422) {
      window.location.href = "/Trangnhapma/" + id;
    } else {
      console.error("Error fetching data:", error);
      throw error;
    }
  }
};
export const KiemTraMaDau = async (data) => {
  try {
    const response = await apiClient.post("api/Dat-Mon/Kiem-Tra-Ban", data);
    return response;
  } catch (error) {
    //  console.log(error);
  }
};

export const KiemTraMa = async (data) => {
  try {
    const response = await apiClient.post("api/Dat-Mon/Kiem-Tra-Ban", data);
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

export const KiemTraBan = async (id) => {
  try {
    const response = await apiClient.get("api/Kiem-Tra-Ban/" + id);
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
