import React, { createContext, useState, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthContext = createContext(); // Membuat konteks Auth

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (token) => {
    setUser({ token }); // Simpan user token di state
    await AsyncStorage.setItem("userToken", token); // Simpan token di penyimpanan lokal
    // console.log(await AsyncStorage.getItem("userToken"));
  };

  const logout = async () => {
    setUser(null); // Hapus user dari state
    await AsyncStorage.removeItem("userToken"); // Hapus token dari penyimpanan lokal
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook untuk menggunakan AuthContext
export default useAuth = () => useContext(AuthContext);
