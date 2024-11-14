import React, { useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';

const Info = () => {
  const { user, isLoggedIn } = useAuth();
  const [accountInfo, setAccountInfo] = useState(null);

  useEffect(() => {
    const fetchAccountInfo = async () => {
      if (isLoggedIn && user) {
        try {
          const response = await fetch(`http://localhost:8000/api/user/${user.MaTaiKhoan}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${user.token}`, // Nếu cần token
            },
          });

          if (!response.ok) {
            throw new Error('Không thể lấy thông tin tài khoản');
          }

          const data = await response.json();
          setAccountInfo(data);
        } catch (error) {
          console.error('Lỗi khi lấy thông tin tài khoản:', error);
        }
      }
    };

    fetchAccountInfo();
  }, [isLoggedIn, user]);

  return (
    <div class="container"><br/>
    <div class="card">
        <div class="card-header">
            Thông Tin Cá Nhân
        </div>
        <div class="card-body">
            <h5 class="card-title">Nguyễn Văn A</h5>
            <p class="card-text"><strong>Email:</strong> nguyen.vana@example.com</p>
            <p class="card-text"><strong>Số điện thoại:</strong> 0987654321</p>
            <p class="card-text"><strong>Địa chỉ:</strong> 123 Đường ABC, Quận 1, TP.HCM</p>
        </div>
    </div>
    <br/>
    <div class="card">
        <div class="card-header">
            Cài Đặt Tài Khoản
        </div>
        <div class="card-body">
            <h5 class="card-title">Cập Nhật Mật Khẩu</h5>
            <p class="card-text">Bạn có thể cập nhật mật khẩu của mình tại đây.</p>
            <a href="#" class="btn btn-primary">Cập Nhật Mật Khẩu</a>
        </div>
    </div>
    <br/>
    <div class="card">
        <div class="card-header">
            Hoạt Động Gần Đây
        </div>
        <div class="card-body">
            <p class="card-text">Không có hoạt động nào gần đây.</p>
        </div>
    </div>
</div>

  );
};

export default Info;