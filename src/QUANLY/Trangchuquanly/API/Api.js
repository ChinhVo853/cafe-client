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

export const XemData = async () => {
  try {
    const response = await apiClient.get("api/Ban/Xem");
    return response.data;
  } catch (error) {
    if (error.response.status == 401) {
      window.location.href = "/Trangdangnhap";
    } else {
      console.error("Error fetching data:", error);
      throw error;
    }
  }
};

export const XoaData = async (data) => {
  try {
    const response = await apiClient.post("api/Ban/Xoa", data);
    return response;
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

export const LayData = async (id) => {
  try {
    const response = await apiClient.get(
      "api/Yeu-Cau/Laydanhsachyeucautungban/" + id
    );

    return response.data;
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

export const XacNhanYeuCau = async (data) => {
  try {
    const response = await apiClient.post("api/Yeu-Cau/Xac-Nhan", data);
    return response;
  } catch (error) {
    if (error.response.status == 401) {
      window.location.href = "/Trangdangnhap";
    } else {
      console.error("Error fetching data:", error);
      throw error;
    }
  }
};

export const ThemBanData = async (data) => {
  try {
    const response = await apiClient.post("api/Ban/Them", data);
    window.location.href = "/Trangchuquanly";
    return response;
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

export const DSTrangThaiBan = async (ban) => {
  try {
    const response = await apiClient.get("api/Ban/Xem/" + ban);
    return response;
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

export const DanhSachChiTietHoaDon = async (ban) => {
  try {
    const response = await apiClient.get(
      "api/Hoa-Don/Danh-Sach-Chi-Tiet/" + ban
    );
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
export const LayDSHoaDon = async (id) => {
  try {
    const response = await apiClient.get("api/Hoa-Don/DanhSachHoaDon/" + id);
    return response.data;
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

export const LayDSCTHoaDon = async (id) => {
  try {
    const response = await apiClient.get(
      "api/Hoa-Don/Danh-Sach-Chi-Tiet/" + id
    );

    return response.data;
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
export const LamTrong = async (ban) => {
  try {
    const response = await apiClient.post("api/Ban/Lam-Trong/", ban);
    return response;
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

export const TimBan = async (ban) => {
  try {
    const response = await apiClient.get("api/Ban/Tim/" + ban);
    return response;
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

export const SuaBan = async (data) => {
  try {
    const response = await apiClient.post("api/Ban/Sua/", data);
    window.location.href = "/Trangchuquanly";
    return response;
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

export const ChiTietXN = async (id) => {
  try {
    const response = await apiClient.get("api/Hoa-Don/Xac-Nhan-Chi-Tiet/" + id);
    return response;
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

export const ChiTietHoaDonTheoMa = async (id) => {
  try {
    const response = await apiClient.get(
      "api/Hoa-Don/Danh-Sach-Chi-Tiet-theo-ma/" + id
    );
    return response;
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

export const TimNgayHoaDon = async (data) => {
  try {
    const response = await apiClient.post("api/Hoa-Don/TimNgay", data);
    return response;
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
