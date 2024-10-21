import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

function Admin_SanPhamChiTiet() {
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

          <div className="list-group list-group-item-primary m-3">
            <Link
              to={"/admin"}
              className="list-group-item list-group-item-action"
              aria-current="true"
            >
              Tổng quan
            </Link>
            <Link
              to={"/adminsanpham"}
              className="list-group-item list-group-item-action active"
            >
              Sản phẩm
            </Link>
            <Link
              to={"/admintaikhoan"}
              className="list-group-item list-group-item-action"
            >
              Tài khoản
            </Link>
            <a href="/#" className="list-group-item list-group-item-action">
              Đơn hàng
            </a>
            <a href="/#" className="list-group-item list-group-item-action">
              Dịch vụ chăm sóc
            </a>
            <a href="/#" className="list-group-item list-group-item-action">
              Tin tức
            </a>
          </div>
        </div>

        <div className="col-md p-0">
          <nav
            className="navbar navbar-expand-lg bg-primary"
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
                    <ul className="dropdown-menu bg-primary p-0">
                      <li>
                        <a className="menu-header-top dropdown-item" href="/#">
                          Xem trang chủ
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider m-0" />
                      </li>
                      <li>
                        <a
                          className="menu-header-bottom dropdown-item"
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
            <div className="d-flex">
              <i className="bi bi-chevron-double-left py-1 my-2"></i>
              <strong className="py-1 my-2 ms-2">
                Quay lại danh sách sản phẩm
              </strong>

              <div className="d-flex ms-auto">
                <button type="button" class="btn btn-outline-warning p-1 m-2">
                  Thoát
                </button>
                <button type="button" class="btn btn-danger p-1 m-2 text-white">
                  Xóa
                </button>
                <button
                  type="button"
                  class="btn btn-warning p-1 m-2 text-white"
                >
                  Sửa
                </button>
              </div>
            </div>
            <hr className="mt-0" />
            <h1>Balo vận chuyển chó mèo Phi hành</h1>
            <span class="badge bg-dark">Sao chép</span>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin_SanPhamChiTiet;
