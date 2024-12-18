import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const token = AsyncStorage.getItem("userToken");
console.log(token);

const api = axios.create({
  baseURL: "http://54.254.164.127/api/v1",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});

export const fetchPosts = async () => {
  try {
    const response = await api.get("/users");
    return response.data.data;
  } catch (error) {
    throw new Error("Failed to fetch users: " + error.message);
  }
};

export const getProfile = async () => {
  const token = await AsyncStorage.getItem("userToken");
  try {
    console.log(token);
    const response = await api.get("/users/me", {
      headers: { Authorization: "Bearer " + token },
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch users: " + error.message);
  }
};

export const fetchtransactionHistory = async () => {
  const token = await AsyncStorage.getItem("userToken");
  try {
    console.log(token);
    const response = await api.get("/transactions", {
      headers: { Authorization: "Bearer " + token },
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch users: " + error.message);
  }
};

export const login = async (email, password) => {
  try {
    const response = await api.post("/auth/login", { email, password });
    return response.data.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || "Login failed");
  }
};

export const register = async (postData) => {
  console.log(postData);
  try {
    const response = await api.post("/auth/register", postData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || "Registration failed");
  }
};

export const createTransfer = async (postData) => {
  const token = await AsyncStorage.getItem("userToken");
  try {
    const response = await api.post("/transactions", postData, {
      headers: { Authorization: "Bearer " + token },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || "Transactions failed");
  }
};

export const createTopup = async (postData) => {
  const token = await AsyncStorage.getItem("userToken");
  console.log(token);
  try {
    const response = await api.post("/transactions", postData, {
      headers: { Authorization: "Bearer " + token },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || "TopUp failed");
  }
};

export default api;
