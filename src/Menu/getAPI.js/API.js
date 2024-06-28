import axios from "axios";
import config from "../../config";

const apiClient = axios.create({
  baseURL: config.apiBaseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getSomeData = async (id) => {
  try {
    const response = await apiClient.get("api/Menu/" + id);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const ThemData = async (data) => {
  try {
    const response = await apiClient.post("api/Dat-Mon/Them-Mon", data);
    return response;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const ThemSL = async (data) => {
  try {
    const response = await apiClient.post("api/Dat-Mon/Them-So-Luong", data);
    return response;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const GiamSL = async (data) => {
  try {
    const response = await apiClient.post("api/Dat-Mon/Giam-So-Luong", data);
    return response;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
