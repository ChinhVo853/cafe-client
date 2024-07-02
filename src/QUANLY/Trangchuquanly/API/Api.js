import axios from "axios";
import config from "../../../config";

const apiClient = axios.create({
  baseURL: config.apiBaseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export const XemData = async () => {
  try {
    const response = await apiClient.get("api/Ban/Xem");
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const XoaData = async (data) => {
  try {
    const response = await apiClient.post("api/Ban/Xoa", data);
    return response;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

