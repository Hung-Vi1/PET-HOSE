import React, { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";

const Info = () => {
  const { user, isLoggedIn } = useAuth();

  if (!isLoggedIn || !user) {
    return (
      <div className="container">
        <p>Người dùng chưa đăng nhập.</p>
      </div>
    );
  }

  return (
    <div className="container">
      <br />
      <div className="card">
        <div className="card-header">Thông Tin Cá Nhân</div>
        <div className="card-body">
          <>
            <h5 className="card-title">
              {user.Hovaten || "Không có tên"}
            </h5>
            <p className="card-text">
              <strong>Email:</strong> {user.Email || "Không có email"}
            </p>
            <p className="card-text">
              <strong>Số điện thoại:</strong>{" "}
              {user.SDT || "Không có số điện thoại"}
            </p>
            <p className="card-text">
              <strong>Địa chỉ:</strong> {user.DiaChi || "Không có địa chỉ"}
            </p>
          </>
        </div>
      </div>
      <br />
      <div className="card">
        <div className="card-header">Cài Đặt Tài Khoản</div>
        <div className="card-body">
          <h5 className="card-title">Cập Nhật Mật Khẩu</h5>
          <p className="card-text">Bạn có thể cập nhật mật khẩu của mình tại đây.</p>
          <Link to="/update-password" className="btn btn-primary">
            Cập Nhật Mật Khẩu
          </Link>
        </div>
      </div>
      <br />
      <div className="card">
        <div className="card-header">Hoạt Động Gần Đây</div>
        <div className="card-body">
          <p className="card-text">Không có hoạt động nào gần đây.</p>
        </div>
      </div>
    </div>
  );
};

export default Info;
