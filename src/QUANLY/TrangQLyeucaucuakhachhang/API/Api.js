// src/api.js

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
export const LayYeuCau = async () => {
  try {
    const response = await apiClient.get("api/Yeu-Cau/Xem-Tat-Ca");
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

export const XacNhanYeuCau = async (data) => {
  try {
    const response = await apiClient.post("api/Yeu-Cau/Xac-Nhan/", data);
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
