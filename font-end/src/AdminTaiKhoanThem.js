import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";
import { NavLink } from "react-router-dom";
import "./App.css";

function AdminTaiKhoanThem() {
  const { user } = useAuth();
  const [hovaten, setHovaten] = useState("");
  const [sdt, setSdt] = useState("");
  const [email, setEmail] = useState("");
  const [quyen, setQuyen] = useState(0);
  const [diachi, setDiachi] = useState("");
  const [thucung, setThucung] = useState("");
  const [matkhau, setMatkhau] = useState(""); // Thêm state cho mật khẩu

  const navigate = useNavigate();

  const apiUrl = process.env.REACT_APP_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Dữ liệu người dùng
    const userData = {
      Hovaten: hovaten,
      SDT: sdt,
      Email: email,
      DiaChi: diachi,
      Quyen: quyen,
      ThuCung: thucung,
      Matkhau: matkhau, // Thêm mật khẩu vào dữ liệu
    };

    try {
      const response = await fetch(`${apiUrl}/api/users/store`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`, // Nếu cần token xác thực
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        alert("Tạo tài khoản thành công!");
        navigate("/admintaikhoan"); // Chuyển hướng về trang danh sách tài khoản
      } else {
        const data = await response.json();
        alert(data.message || "Đã xảy ra lỗi khi tạo tài khoản");
      }
    } catch (error) {
      console.error("Lỗi khi gửi yêu cầu:", error);
      alert("Lỗi kết nối với server.");
    }
  };

  return (
    <div className="container-fluid admin">
      <div className="row">
        <div
          id="openMenu"
          className="col-md-2 p-0 collapse collapse-horizontal show menu-admin-doc"
          style={{ minHeight: "100vh" }}
        >
          <NavLink to={"/"}>
            <img
              src={`${apiUrl}/image/Nen_trong_suot.png`}
              className="d-block w-75 mx-auto mt-2"
              alt={`${apiUrl}/image/Nen_trong_suot.png`}
            />
          </NavLink>

          <div className="list-group text-center">
            <NavLink
              to={"/admin"}
              className="list-group-item list-group-item-action mt-0 mb-0 rounded-5 border-0"
              activeClassName="active"
              aria-current="true"
            >
              <h5 className="mb-0">Tổng quan</h5>
            </NavLink>
            <NavLink
              to={"/adminsanpham"}
              className="list-group-item list-group-item-action my-0 rounded-5 border-0"
              activeClassName="active"
            >
              <h5 className="mb-0 py-1">Sản phẩm</h5>
            </NavLink>
            <NavLink
              to={"/admindichvuchamsoc"}
              className="list-group-item list-group-item-action my-0 rounded-5 border-0"
              activeClassName="active"
            >
              <h5 className="mb-0 py-1">Dịch vụ chăm sóc</h5>
            </NavLink>
            <NavLink
              to={"/admindanhmuc"}
              className="list-group-item list-group-item-action my-0 rounded-5 border-0"
              activeClassName="active"
            >
              <h5 className="mb-0 py-1">Danh mục</h5>
            </NavLink>
            <NavLink
              to={"/admintaikhoan"}
              className="list-group-item list-group-item-action my-0 rounded-5 border-0 active"
              activeClassName="active"
            >
              <h5 className="mb-0 py-1">Tài khoản</h5>
            </NavLink>
            <NavLink
              to={"/admindonhang"}
              className="list-group-item list-group-item-action my-0 rounded-5 border-0"
              activeClassName="active"
            >
              <h5 className="mb-0 py-1">Đơn hàng</h5>
            </NavLink>
            <NavLink
              to={"/admindatlich"}
              className="list-group-item list-group-item-action my-0 rounded-5 border-0"
              activeClassName="active"
            >
              <h5 className="mb-0 py-1">Đặt lịch</h5>
            </NavLink>
            <NavLink
              to={"/Admin_BV"}
              className="list-group-item list-group-item-action my-0 rounded-5 border-0"
              activeClassName="active"
            >
              <h5 className="mb-0 py-1">Tin tức</h5>
            </NavLink>
            <NavLink
              to={"/adminlienhe"}
              className="list-group-item list-group-item-action my-0 rounded-5 border-0"
              activeClassName="active"
            >
              <h5 className="mb-0 py-1">Liên hệ</h5>
            </NavLink>
            <NavLink
              to={"/adminmagiamgia"}
              className="list-group-item list-group-item-action my-0 rounded-5 border-0"
              activeClassName="active"
            >
              <h5 className="mb-0 py-1">Mã giảm giá</h5>
            </NavLink>
          </div>
        </div>

        <div className="col-md p-0">
          <nav
            className="navbar navbar-expand-lg p-0 menu-admin-ngang"
            data-bs-theme="dark"
          >
            <div className="container-fluid">
              <button
                className="btn btn-outline-light me-3"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#openMenu"
                aria-expanded="false"
                aria-controls="collapseWidthExample"
              >
                <i className="bi bi-list"></i>
              </button>
              <a className="navbar-brand" href="/#">
                PetHouse
              </a>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle text-white"
                      href="/#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Xin chào, {user.Hovaten || "Không có tên"}
                    </a>
                    <ul className="dropdown-menu bg-primary p-0 mt-0 border-0 rounded-0">
                      <li className="rounded-0">
                        <Link
                          className="menu-header-top dropdown-item m-0 py-2"
                          to={"/"}
                        >
                          Xem trang chủ
                        </Link>
                      </li>
                      <li>
                        <hr className="dropdown-divider m-0" />
                      </li>
                      <li>
                        <a
                          className="menu-header-bottom dropdown-item m-0 py-2"
                          href="/#"
                        >
                          Đăng xuất
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <div className="container">
            <h2 className="my-3">Thêm tài khoản</h2>

            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="SoDienThoai" className="form-label">
                      Số điện thoại
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="SoDienThoai"
                      value={sdt}
                      onChange={(e) => setSdt(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="HoTen" className="form-label">
                      Họ và tên
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="HoTen"
                      value={hovaten}
                      onChange={(e) => setHovaten(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="Quyen" className="form-label">
                      Quyền
                    </label>
                    <select
                      className="form-select"
                      value={quyen}
                      onChange={(e) => setQuyen(Number(e.target.value))}
                    >
                      <option value="0">Người dùng</option>
                      <option value="1">Quản trị viên</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="DiaChi" className="form-label">
                      Địa chỉ
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="DiaChi"
                      value={diachi}
                      onChange={(e) => setDiachi(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="ThuCung" className="form-label">
                      Thú cưng
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="ThuCung"
                      value={thucung}
                      onChange={(e) => setThucung(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="Email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="MatKhau" className="form-label">
                      Mật khẩu
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="MatKhau"
                      value={matkhau}
                      onChange={(e) => setMatkhau(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-primary">
                Xác nhận
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminTaiKhoanThem;
