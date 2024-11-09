import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const login = (userData) => {
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
    };

    const register = async (userData) => {
        // Thực hiện yêu cầu API để đăng ký người dùng
        // Sau khi đăng ký thành công, gọi login
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, register, error }}>
            {children}
        </AuthContext.Provider>
    );
};