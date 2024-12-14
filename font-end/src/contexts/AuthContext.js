import React, { createContext, useContext, useState, useEffect } from "react";

import CryptoJS from "crypto-js";
// Tạo AuthContext
const AuthContext = createContext();
const secretKey = "vOhUNGvI"; // Khóa bí mật giống với lúc mã hóa

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Trạng thái lưu thông tin người dùng
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Trạng thái đăng nhập
  const [error, setError] = useState(null); // Trạng thái lỗi
 
  // Kiểm tra thông tin người dùng trong sessionStorage khi component render
  useEffect(() => {
    const storedUser = sessionStorage.getItem("user");
    if (storedUser) {
      try {
        // Giải mã dữ liệu
        const bytes = CryptoJS.AES.decrypt(storedUser, secretKey);
        const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

        
        setUser(decryptedData); // Cập nhật state với thông tin người dùng

        setIsLoggedIn(true); // Cập nhật trạng thái đăng nhập
      } catch (error) {
        console.error("Giải mã thất bại:", error);
        setError("Dữ liệu không hợp lệ, vui lòng đăng nhập lại.");
        sessionStorage.removeItem("user"); // Xóa dữ liệu lỗi
      }
    }
  }, []);

  // Hàm đăng nhập
  const login = (userData) => {
    try {
      // Mã hóa dữ liệu trước khi lưu
      const encryptedData = CryptoJS.AES.encrypt(
        JSON.stringify(userData),
        secretKey
      ).toString();

      setUser(userData);
      setIsLoggedIn(true);
      sessionStorage.setItem("user", encryptedData); // Lưu vào sessionStorage
    } catch (error) {
      setError("Đăng nhập không thành công.");
      console.error("Lỗi đăng nhập:", error);
    }
  };

  // Hàm đăng xuất
  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
    sessionStorage.removeItem("user"); // Xóa thông tin người dùng khỏi sessionStorage
  };

  // Kiểm tra quyền của người dùng
  const hasPermission = (permission) => {
    if (!user || !user.Quyen) return false; // Kiểm tra trường hợp thiếu dữ liệu
    return Number(user.Quyen) === permission;
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,  // Cung cấp setUser
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

// Hook để sử dụng AuthContext trong các component khác
export const useAuth = () => {
  return useContext(AuthContext);
};
