import axios from "axios";
import config from "../../../config";

const apiClient = axios.create({
  baseURL: config.apiBaseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});
export const ThemData = async (data) => {
  try {
    const response = await apiClient.post("api/Size/Them", data);
    return response;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
