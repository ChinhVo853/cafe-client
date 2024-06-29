// src/api.js

import axios from "axios";
import config from "../../../config";

const apiClient = axios.create({
  baseURL: config.apiBaseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export const LayYeuCau = async () => {
  try {
    const response = await apiClient.get("api/Yeu-Cau/Xem-Tat-Ca");
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const XacNhanYeuCau = async (id) => {
  try {
    const response = await apiClient.get("api/Yeu-Cau/Xac-Nhan/" + id);
    return response;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
