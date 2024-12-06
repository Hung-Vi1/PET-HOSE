import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const UpdatePassword = () => {
  const { id } = useParams();
  const { user, isLoggedIn } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    OldPassword: "",
    Matkhau: "",
    ConfirmPassword: "",
  });

  const [notification, setNotification] = useState({
    message: "",
    type: "", // success hoặc error
  });

  useEffect(() => {
    if (!isLoggedIn || id !== String(user?.Mataikhoan)) {
      alert("Mã tài khoản không hợp lệ hoặc người dùng chưa đăng nhập.");
      navigate("/login");
    }
  }, [id, user, isLoggedIn, navigate]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.Matkhau !== formData.ConfirmPassword) {
      setNotification({
        message: "Mật khẩu mới và xác nhận mật khẩu không khớp.",
        type: "error",
      });
      return;
    }

    fetch(`http://127.0.0.1:8000/api/users/doiMatKhau/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        OldPassword: formData.OldPassword,
        Matkhau: formData.Matkhau,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          setNotification({
            message: "Đổi mật khẩu thành công!",
            type: "success",
          });
          setTimeout(() => navigate("/info"), 2000);
        } else {
          setNotification({
            message: data.message || "Mật khẩu mới không hợp lệ.",
            type: "error",
          });
        }
      })
      .catch(() => {
        setNotification({
          message: "Không thể kết nối đến máy chủ. Vui lòng thử lại sau.",
          type: "error",
        });
      });
  };

  return (
    <div className="container">
      <h2>Đổi Mật Khẩu</h2>
      {notification.message && (
        <div
          className={`alert ${
            notification.type === "success" ? "alert-success" : "alert-danger"
          }`}
          role="alert"
        >
          {notification.message}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Mật khẩu cũ</label>
          <input
            type="password"
            name="OldPassword"
            className="form-control"
            value={formData.OldPassword}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Mật khẩu mới</label>
          <input
            type="password"
            name="Matkhau"
            className="form-control"
            value={formData.Matkhau}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Xác nhận mật khẩu</label>
          <input
            type="password"
            name="ConfirmPassword"
            className="form-control"
            value={formData.ConfirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Đổi Mật Khẩu
        </button>
      </form>
    </div>
  );
};

export default UpdatePassword;
