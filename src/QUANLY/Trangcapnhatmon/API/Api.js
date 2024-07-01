import axios from "axios";
import config from "../../../config";
import Cookies from "js-cookie";
const apiClient = axios.create({
  baseURL: config.apiBaseUrl,
  headers: {
    "Content-Type": "multipart/form-data",
    Authorization: `Bearer ${Cookies.get("token")}`,
  },
});

export const XemData = async (id) => {
  try {
    const response = await apiClient.get("api/San-Pham/Xem/" + id);
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
