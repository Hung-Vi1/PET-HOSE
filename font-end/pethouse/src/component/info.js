import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';

const Info = () => {
  const { user, isLoggedIn, setIsLoggedIn } = useAuth();

  // Kiểm tra quyền của người dùng
  const isAdmin = user && user.role === 'admin';

  return (
    <div className="info-container">
      <h1>Thông tin tài khoản</h1>
      {isLoggedIn ? (
        <div>
          <p>Họ và tên: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Số điện thoại: {user.phone}</p>
          <p>Địa chỉ: {user.address}</p>
          {isAdmin ? (
            <div>
              <h2>Quyền Admin</h2>
              <p>Bạn có quyền truy cập vào trang admin.</p>
              <Link to="/admin">Đi đến trang Admin</Link>
            </div>
          ) : (
            <div>
              <h2>Quyền Khách Hàng</h2>
              <p>Bạn chỉ có thể xem thông tin tài khoản của mình.</p>
            </div>
          )}
        </div>
      ) : (
        <p>Bạn chưa đăng nhập. Vui lòng đăng nhập để xem thông tin tài khoản.</p>
      )}
    </div>
  );
};

export default Info;