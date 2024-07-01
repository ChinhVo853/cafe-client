// src/api.js

import axios from "axios";
import config from "../../config";

const apiClient = axios.create({
  baseURL: config.apiBaseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export const LayYeuCau = async (ban) => {
  try {
    const response = await apiClient.get("api/Yeu-Cau/Xem/" + ban);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const TaoYeuCau = async (data) => {
  try {
    const response = await apiClient.post("api/Yeu-Cau/Tao", data);
    return response;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
