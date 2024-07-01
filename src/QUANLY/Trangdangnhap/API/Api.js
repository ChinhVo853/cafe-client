import axios from "axios";
import config from "../../../config";
import Cookies from "js-cookie";
const apiClient = axios.create({
  baseURL: config.apiBaseUrl,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${Cookies.get("token")}`,
  },
});

export const DangNhap = async (data) => {
  try {
    const response = await apiClient.post("api/Login", data);
    Cookies.set("token", response.data.access_token, { expires: 7 });
    return response;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const Me = async (data) => {
  try {
    const response = await apiClient.get("api/me");
    return response;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
