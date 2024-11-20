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
            <h7 className="card-title">
            <strong>Tên tài khoảng:</strong> {user.Hovaten || "Không có tên"}
            </h7>
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
        <div className="card-header">Cài Đặt Tài Khoản</div>
        <div className="card-body">
          <h5 className="card-title">Cập Nhật Tài Khoảng Của Bạn</h5>
          <Link to="/update-info" className="btn btn-danger">
            Cập Nhập
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Info;
