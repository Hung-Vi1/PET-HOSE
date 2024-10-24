import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

function Admin_TrangChu() {
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
            <a
              href="/#"
              className="list-group-item list-group-item-action active"
              aria-current="true"
            >
              Tổng quan
            </a>
            <Link
              to={"/adminsanpham"}
              className="list-group-item list-group-item-action"
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
            <h2 className="my-3">Tổng quan</h2>

            <div className="row">
              <div className="col-md-3">
                <div className="card border-primary mb-3">
                  <div className="card-body text-primary">
                    <h5 className="card-title text-center fw-bold">Sản phẩm</h5>
                    <p className="card-text fs-1 text-center">500</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card border-success mb-3">
                  <div className="card-body text-success">
                    <h5 className="card-title text-center fw-bold">
                      Tài khoản
                    </h5>
                    <p className="card-text fs-1 text-center">1.500</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card border-warning mb-3">
                  <div className="card-body text-warning">
                    <h5 className="card-title text-center fw-bold">Đơn hàng</h5>
                    <p className="card-text fs-1 text-center">100</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card border-danger mb-3">
                  <div className="card-body text-danger">
                    <h5 className="card-title text-center fw-bold">Đánh giá</h5>
                    <p className="card-text fs-1 text-center">3.200</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin_TrangChu;
