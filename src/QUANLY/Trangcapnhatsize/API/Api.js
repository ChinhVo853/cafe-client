import axios from "axios";
import config from "../../../config";
import Cookies from "js-cookie";
const apiClient = axios.create({
  baseURL: config.apiBaseUrl,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${Cookies.get("token")}`,
  },
});

export const SuaData = async (data) => {
  try {
    const response = await apiClient.post("api/Size/Sua", data);
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
export const LayData = async (id) => {
  try {
    const response = await apiClient.get("api/Size/Xem/" + id);
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
