import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./App.css";

function AdminTaiKhoanSua() {
  const { user } = useAuth();
  const { ma_tai_khoan } = useParams(); // Nhận ma_tai_khoan từ URL
  const navigate = useNavigate();

  const apiUrl = process.env.REACT_APP_API_URL;

  const [account, setAccount] = useState({
    Hovaten: "",
    SDT: "",
    Email: "",
    ThuCung: "",
    DiaChi: "",
  });

  useEffect(() => {
    // Lấy thông tin tài khoản từ API khi component mount
    fetch(`${apiUrl}/api/users/show/${ma_tai_khoan}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          setAccount({
            Hovaten: data.data.ten_tai_khoan,
            SDT: data.data.so_dien_thoai,
            Email: data.data.email,
            ThuCung: data.data.thu_cung,
            DiaChi: data.data.dia_chi,
          });
        } else {
          alert("Không thể lấy thông tin tài khoản!");
        }
      })
      .catch((error) => {
        console.error("Lỗi lấy thông tin tài khoản:", error);
      });
  }, [ma_tai_khoan]);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Cập nhật tài khoản qua API
    const updatedAccount = {
      Hovaten: account.Hovaten,
      SDT: account.SDT,
      Email: account.Email,
      MatKhau: account.MatKhau,

      DiaChi: account.DiaChi,
      ThuCung: account.ThuCung,
    };

    fetch(`${apiUrl}/api/users/${ma_tai_khoan}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedAccount),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Cập nhật thất bại");
        }
        return response.json();
      })
      .then((data) => {
        alert("Cập nhật tài khoản thành công!");
        navigate("/admintaikhoan"); // Điều hướng về danh sách tài khoản
      })
      .catch((error) => {
        alert("Cập nhật thất bại: " + error.message);
      });
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setAccount((prevAccount) => ({
      ...prevAccount,
      [id]: value,
    }));
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
            <h2 className="my-3">Sửa tài khoản</h2>
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="Hovaten" className="form-label">
                      Họ và tên
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="Hovaten"
                      value={account.Hovaten || ""}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="SDT" className="form-label">
                      Số điện thoại
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="SDT"
                      value={account.SDT || ""}
                      onChange={handleChange}
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
                      value={account.Email || ""}
                      onChange={handleChange}
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
                      value={account.ThuCung || ""}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="DiaChi" className="form-label">
                      Địa chỉ
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="DiaChi"
                      value={account.DiaChi || ""}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className="d-flex justify-content-between">
                <button type="submit" className="btn btn-success">
                  Cập nhật
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminTaiKhoanSua;
