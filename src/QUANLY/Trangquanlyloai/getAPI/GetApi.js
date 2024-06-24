import axios from "axios";
import config from "../../../config";

const apiClient = axios.create({
  baseURL: config.apiBaseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export const layData = async () => {
  try {
    const response = await apiClient.get("api/Loai/Xem");
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const XoaData = async (data) => {
  try {
    const response = await apiClient.post("api/Loai/Xoa", data);
    return response;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
