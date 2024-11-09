// AccountInfo.js
import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Info = () => {
    const { user } = useAuth();
    const navigate = useNavigate();

    const handleAdminPage = () => {
        navigate('/admin'); // Đường dẫn đến trang admin
    };

    return (
        <div>
            <h1>Thông Tin Tài Khoản</h1>
            {user ? (
                <>
                    <p>Tên: {user.name}</p>
                    <p>Email: {user.email}</p>
                    <p>Vai trò: {user.role === 1 ? "Admin" : "Khách hàng"}</p>
                    {user.role === 1 && (
                        <button onClick={handleAdminPage}>
                            Đến trang admin
                        </button>
                    )}
                </>
            ) : (
                <p>Vui lòng đăng nhập để xem thông tin tài khoản.</p>
            )}
        </div>
    );
};

export default Info;