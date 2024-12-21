import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import CryptoJS from "crypto-js";

const UpdateInfo = () => {
  const { id } = useParams(); 
  const { user, isLoggedIn, setUser } = useAuth(); 
  const navigate = useNavigate();
  const apiUrl = process.env.REACT_APP_API_URL;
  const secretKey = "vOhUNGvI"; 

  const [userInfo, setUserInfo] = useState({
    Hovaten: "",
    Email: "",
    SDT: "",
    DiaChi: "",
    ThuCung: "",
  });

  useEffect(() => {
    if (!isLoggedIn || id !== String(user?.Mataikhoan)) {
      alert("Mã tài khoản không hợp lệ hoặc người dùng chưa đăng nhập.");
      return navigate("/login");
    }

    if (user) {
      setUserInfo({
        Hovaten: user.Hovaten || "",
        Email: user.Email || "",
        SDT: user.SDT || "",
        DiaChi: user.DiaChi || "",
        ThuCung: user.ThuCung || "",
      });
    }
  }, [id, user, isLoggedIn, navigate]);

  const handleChange = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`${apiUrl}/api/users/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((response) => response.json())
      .then((data) => {
        const updatedUser = data.user;

        const encryptedData = CryptoJS.AES.encrypt(
          JSON.stringify(updatedUser),
          secretKey
        ).toString();

        setUser(updatedUser);
        sessionStorage.setItem("user", encryptedData);

        alert("Cập nhật thông tin thành công!");
        navigate("/info");
      })
      .catch((error) => {
        console.error("Lỗi khi cập nhật dữ liệu người dùng:", error);
        alert("Có lỗi xảy ra, vui lòng thử lại.");
      });
  };

  return (
    <div className="container my-5">
      <div className="card mx-5">
        <div className="card-header text-center" style={{ backgroundColor: "#f4b915", color: "white" }}>
          <h2>Cập Nhật Thông Tin Tài Khoản</h2>
        </div>
        <div className="card-body px-5">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Tên tài khoản</label>
                  <input
                    type="text"
                    name="Hovaten"
                    className="form-control"
                    value={userInfo.Hovaten}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    name="Email"
                    className="form-control"
                    value={userInfo.Email}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Số điện thoại</label>
                  <input
                    type="text"
                    name="SDT"
                    className="form-control"
                    value={userInfo.SDT}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label>Địa chỉ</label>
                  <input
                    type="text"
                    name="DiaChi"
                    className="form-control"
                    value={userInfo.DiaChi}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Thú Cưng</label>
                  <input
                    type="text"
                    name="ThuCung"
                    className="form-control"
                    value={userInfo.ThuCung}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-warning text-light">
              Cập Nhật
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateInfo;
