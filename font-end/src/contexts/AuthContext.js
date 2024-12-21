import React, { createContext, useContext, useState, useEffect } from "react";

import CryptoJS from "crypto-js";

const AuthContext = createContext();
const secretKey = "vOhUNGvI"; 

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); 
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const [error, setError] = useState(null);
 
  // Kiểm tra thông tin người dùng trong sessionStorage khi component render
  useEffect(() => {
    const storedUser = sessionStorage.getItem("user");
    if (storedUser) {
      try {
        // Giải mã dữ liệu
        const bytes = CryptoJS.AES.decrypt(storedUser, secretKey);
        const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

        
        setUser(decryptedData);

        setIsLoggedIn(true);
      } catch (error) {
        console.error("Giải mã thất bại:", error);
        setError("Dữ liệu không hợp lệ, vui lòng đăng nhập lại.");
        sessionStorage.removeItem("user"); 
      }
    }
  }, []);

  // Hàm đăng nhập
  const login = (userData) => {
    try {
      
      const encryptedData = CryptoJS.AES.encrypt(
        JSON.stringify(userData),
        secretKey
      ).toString();

      setUser(userData);
      setIsLoggedIn(true);
      sessionStorage.setItem("user", encryptedData);
    } catch (error) {
      setError("Đăng nhập không thành công.");
      console.error("Lỗi đăng nhập:", error);
    }
  };

  // Hàm đăng xuất
  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
    sessionStorage.removeItem("user"); 
  };

  // Kiểm tra quyền của người dùng
  const hasPermission = (permission) => {
    if (!user || !user.Quyen) return false; 
    return Number(user.Quyen) === permission;
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,  
        login,
        logout,
        isLoggedIn,
        error,
        setError,
        setIsLoggedIn,
        hasPermission,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
