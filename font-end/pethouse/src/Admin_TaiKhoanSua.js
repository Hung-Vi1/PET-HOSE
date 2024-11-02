import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";

function Admin_TaiKhoanSua() {
  return (
    <div className="container-fluid admintrangchu">
      <div className="row">
        <div
          id="openMenu"
          className="col-md-2 p-0 bg-primary collapse collapse-horizontal show"
          style={{ minHeight: "100vh" }}
        >
          <img
            src="image/Nen_trong_suot.png"
            className="d-block w-75 mx-auto"
            alt="image/Nen_trong_suot.png"
          />

          <div className="list-group list-group-item-primary">
            <Link
              to={"/admin"}
              className="list-group-item list-group-item-action mt-2 rounded-0"
              aria-current="true"
            >
              <h5 className="mb-0 py-1">Tổng quan</h5>
            </Link>
            <Link
              to={"/adminsanpham"}
              className="list-group-item list-group-item-action mt-0 rounded-0"
            >
              <h5 className="mb-0 py-1">Sản phẩm</h5>
            </Link>
            <Link
              to={"/admintaikhoan"}
              className="list-group-item list-group-item-action mt-0 rounded-0 active"
            >
              <h5 className="mb-0 py-1">Tài khoản</h5>
            </Link>
            <a
              href="/#"
              className="list-group-item list-group-item-action mt-0 rounded-0"
            >
              <h5 className="mb-0 py-1">Đơn hàng</h5>
            </a>
            <a
              href="/#"
              className="list-group-item list-group-item-action mt-0 rounded-0"
            >
              <h5 className="mb-0 py-1">Dịch vụ chăm sóc</h5>
            </a>
            <a
              href="/#"
              className="list-group-item list-group-item-action mt-0 rounded-0"
            >
              <h5 className="mb-0 py-1">Tin tức</h5>
            </a>
          </div>
        </div>
        <div className="col-md p-0">
          <nav
            className="navbar navbar-expand-lg bg-primary p-0"
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
                      className="nav-link dropdown-toggle"
                      href="/#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Xin chào, Trần Thanh Tú
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

            <form>
              <div className="mb-3">
                <label for="HoTen" className="form-label">
                  Họ và tên
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="HoTen"
                  placeholder="Trần Ngọc Kim Hiếu"
                />
              </div>
              <div className="mb-3">
                <label for="SoDienThoai" className="form-label">
                  Số điện thoại
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="SoDienThoai"
                  placeholder="0364395907"
                />
              </div>
              <div className="mb-3">
                <label for="Email" className="form-label">
                  Email
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="Email"
                  placeholder="tranngockimhieu2k12@gmail.com"
                />
              </div>
              <div className="mb-3">
                <label for="MatKhau" className="form-label">
                  Mật khẩu
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="MatKhau"
                  placeholder="************"
                  disabled
                />
              </div>
              <div className="mb-3">
                <label for="Quyền" className="form-label">
                  Quyền
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option value="0" selected>
                    Người dùng
                  </option>
                  <option value="1">Quản trị viên</option>
                </select>
              </div>
              <div className="mb-3">
                <label for="DiaChi" className="form-label">
                  Địa chỉ
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="DiaChi"
                  placeholder="564/19A Đường Tỉnh Lộ 15 Tổ 8 Ấp Bến Đình Xã Nhuận Đức Huyện Củ Chi Thành phố Hồ Chí Minh"
                  disabled
                />
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

export default Admin_TaiKhoanSua;
