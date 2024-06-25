import axios from "axios";
import config from "../../../config";

const apiClient = axios.create({
  baseURL: config.apiBaseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export const SuaData = async (data) => {
  try {
    const response = await apiClient.post("api/Size/Sua", data);
    return response;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
export const LayData = async (id) => {
  try {
    const response = await apiClient.get("api/Size/Xem/" + id);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
