import axios from "axios";
import config from "../../../config";

const apiClient = axios.create({
  baseURL: config.apiBaseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export const layData = async (id) => {
  try {
    const response = await apiClient.get("api/Loai/Xem/" + id);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const Sua = async (data) => {
  try {
    const response = await apiClient.post("api/Loai/Sua", data);
    return response;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
