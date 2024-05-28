// src/api.js

import axios from "axios";
import config from "../../config";

const apiClient = axios.create({
  baseURL: config.apiBaseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getSomeData = async () => {
  try {
    const response = await apiClient.get("api/Trang-Chu/1");
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
