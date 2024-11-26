import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./App.css";

function AdminTaiKhoan() {
  const { user, isLoggedIn } = useAuth();  // Lấy trạng thái đăng nhập
  const [listTK, ganListTK] = useState([]);
  const navigate = useNavigate();

  // Lấy danh sách tài khoản

  if (!isLoggedIn) {
    // Nếu chưa đăng nhập, chuyển hướng về trang đăng nhập
    return <Navigate to="/login" />;
  }

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
              className="list-group-item list-group-item-action mt-2 mb-0 rounded-0"
              aria-current="true"
            >
              <h5 className="mb-0 py-1">Tổng quan</h5>
            </Link>
            <Link
              to={"/adminsanpham"}
              className="list-group-item list-group-item-action my-0  rounded-0"
            >
              <h5 className="mb-0 py-1">Sản phẩm</h5>
            </Link>
            <Link
              to={"/admindanhmuc"}
              className="list-group-item list-group-item-action my-0 rounded-0"
            >
              <h5 className="mb-0 py-1">Danh mục</h5>
            </Link>
            <Link
              to={"/admintaikhoan"}
              className="list-group-item list-group-item-action my-0 rounded-0 active"
            >
              <h5 className="mb-0 py-1">Tài khoản</h5>
            </Link>
            <Link
              to={"/admindonhang"}
              className="list-group-item list-group-item-action my-0 rounded-0"
            >
              <h5 className="mb-0 py-1">Đơn hàng</h5>
            </Link>
            <a
              href="/#"
              className="list-group-item list-group-item-action my-0 rounded-0"
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
            <Link
              to={"/admintaikhoanthem"}
              className="btn btn-success float-end"
            >
              Thêm tài khoản
            </Link>

            <h2 className="my-3">Tài khoản</h2>

            <table className="table align-middle">
              <thead>
                <tr>
                  <th className="fw-bold text-center">STT</th>
                  <th className="fw-bold">Họ và tên</th>
                  <th className="fw-bold text-center">Số điện thoại</th>
                  <th className="fw-bold">Email</th>
                  <th className="fw-bold text-center">Quyền</th>
                  <th className="fw-bold text-center">Hành động</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-star">1</td>
                  <td>Trần Ngọc Kim Hiếu</td>
                  <td className="text-center">0364395907</td>
                  <td>tranngockimhieu2k2@gmail.com</td>
                  <td className="text-center">
                    <span class="badge text-bg-success">Người dùng</span>
                  </td>
                  <td className="text-center">
                    <Link
                      to={"/admintaikhoansua"}
                      className="btn btn-outline-warning m-1"
                    >
                      <i className="bi bi-pencil-square"></i>
                    </Link>
                    <a href="/#" className="btn btn-outline-danger m-1">
                      <i className="bi bi-trash"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="text-star">2</td>
                  <td>Trần Ngọc Kim Hiếu</td>
                  <td className="text-center">0364395907</td>
                  <td>tranngockimhieu2k2@gmail.com</td>
                  <td className="text-center">
                    <span class="badge text-bg-danger">Quản trị viên</span>
                  </td>
                  <td className="text-center">
                    <Link
                      to={"/admintaikhoansua"}
                      className="btn btn-outline-warning m-1"
                    >
                      <i className="bi bi-pencil-square"></i>
                    </Link>
                    <a href="/#" className="btn btn-outline-danger m-1">
                      <i className="bi bi-trash"></i>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>

            <nav aria-label="Page navigation example">
              <ul className="pagination justify-content-center">
                <li className="page-item disabled">
                  <a className="page-link" href="/#">
                    <i className="bi bi-chevron-double-left"></i>
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link active" href="/#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="/#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="/#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="/#">
                    <i className="bi bi-chevron-double-right"></i>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminTaiKhoan;
