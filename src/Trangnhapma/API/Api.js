import axios from "axios";
import config from "../../config";

const apiClient = axios.create({
  baseURL: config.apiBaseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export const TaoDatMon = async (id) => {
  try {
    const response = await apiClient.get("api/Dat-Mon/ban/" + id);
    return response;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
export const KiemTraMa = async (data) => {
  try {
    const response = await apiClient.post("api/Dat-Mon/Kiem-Tra-Ban", data);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
