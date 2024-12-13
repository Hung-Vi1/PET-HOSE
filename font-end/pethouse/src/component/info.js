// src/pages/Info.js

import React from "react";
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
    <div className="container  my-5 d-flex justify-content-center">
      <br />
      <div className="card col-10 p-0">
        <div className="card-header text-center" style={{backgroundColor:"#f4b915", color:"white"}}><h3>Thông Tin Cá Nhân</h3></div>
        <div className="card-body" style={{backgroundColor:"#F7F0DD"}}>
          <h7 className="card-title">
            <strong>Tên tài khoản:</strong> {user.Hovaten || "Không có tên"}
          </h7>
          <p className="card-text">
            <strong className="fw-bold">Email:</strong> {user.Email || "Không có email"}
          </p>
          <p className="card-text">
            <strong className="fw-bold">Số điện thoại:</strong> {user.SDT || "Không có số điện thoại"}
          </p>
          <p className="card-text">
            <strong className="fw-bold">Địa chỉ:</strong> {user.DiaChi || "Không có địa chỉ"}
          </p>
          <p className="card-text">
            <strong className="fw-bold">Thú cưng:</strong> {user.ThuCung || "Chưa nhập thú cưng"}
          </p>

        </div>
        <hr className="m-0"/>
        <div className="card-body text-center" style={{backgroundColor:"#F7F0DD"}}> 
          <h5 className="card-title">Cập Nhật Tài Khoản Của Bạn</h5>
          <Link to={`/update-info/${user.Mataikhoan}`} className="btn btn-warning mx-2">
            Cập Nhật
          </Link>
          <Link to={`/update-password/${user.Mataikhoan}`} className="btn btn-danger mx-2">
            Đổi mật khẩu<t></t>
          </Link>
        </div>
        
      </div>
    </div>
  );
};

export default Info;
