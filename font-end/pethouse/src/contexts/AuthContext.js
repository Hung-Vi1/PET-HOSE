import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Trạng thái đăng nhập

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      setIsLoggedIn(true); // Cập nhật trạng thái đăng nhập
    }
  }, []);

  const login = (userData) => {
    setUser(userData);
    setIsLoggedIn(true); // Cập nhật trạng thái đăng nhập
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    setIsLoggedIn(false); // Cập nhật trạng thái đăng nhập
    localStorage.removeItem("user");
  };

  const register = async (userData) => {
    // Thực hiện yêu cầu API để đăng ký người dùng
    // Sau khi đăng ký thành công, gọi login
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        register,
        error,
        setError,
        isLoggedIn,
        setIsLoggedIn, // Có thể dùng nếu cần từ bên ngoài
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
