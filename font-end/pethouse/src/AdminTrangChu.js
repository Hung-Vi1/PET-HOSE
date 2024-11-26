import React from "react";
import { Link, Navigate } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import "./App.css";

// Đăng ký các thành phần cần thiết cho Chart.js
Chart.register(...registerables);

function AdminTrangChu() {
  const { user, isLoggedIn } = useAuth(); // Lấy trạng thái đăng nhập

  // Dữ liệu cho biểu đồ cột
  // Dữ liệu cho biểu đồ cột
  const data = {
    labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
    datasets: [
      {
        label: "Population (millions)",
        backgroundColor: [
          "#3e95cd",
          "#8e5ea2",
          "#3cba9f",
          "#e8c3b9",
          "#c45850",
        ],
        data: [2478, 5267, 734, 784, 433],
      },
    ],
  };

  // Tùy chọn cho biểu đồ
  const options = {
    legend: { display: false },
    title: {
      display: true,
      text: "Predicted world population (millions) in 2050",
    },
  };

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
          <Link to={"/"}>
            <img
              src={`http://localhost:8000/image/Nen_trong_suot.png`}
              className="d-block w-75 mx-auto"
              alt={`http://localhost:8000/image/Nen_trong_suot.png`}
            />
          </Link>

          <div className="list-group list-group-item-primary">
            <Link
              to={"/admin"}
              className="list-group-item list-group-item-action mt-2 mb-0 rounded-0 active"
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
              to={"/admindichvuchamsoc"}
              className="list-group-item list-group-item-action my-0 rounded-0"
            >
              <h5 className="mb-0 py-1">Dịch vụ chăm sóc</h5>
            </Link>
            <Link
              to={"/admindanhmuc"}
              className="list-group-item list-group-item-action my-0 rounded-0"
            >
              <h5 className="mb-0 py-1">Danh mục</h5>
            </Link>
            <Link
              to={"/admintaikhoan"}
              className="list-group-item list-group-item-action my-0 rounded-0"
            >
              <h5 className="mb-0 py-1">Tài khoản</h5>
            </Link>
            <Link
              to={"/admindonhang"}
              className="list-group-item list-group-item-action my-0 rounded-0"
            >
              <h5 className="mb-0 py-1">Đơn hàng</h5>
            </Link>
            <Link
              to={"/admindatlich"}
              className="list-group-item list-group-item-action my-0 rounded-0"
            >
              <h5 className="mb-0 py-1">Đặt lịch</h5>
            </Link>
            <Link
              to={"/admintintuc"}
              className="list-group-item list-group-item-action my-0 rounded-0"
            >
              <h5 className="mb-0 py-1">Tin tức</h5>
            </Link>
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

            <div className="d-flex flex-wrap border border-dark rounded-3 my-3 p-2">
              <div className="col-md-6">
                <Bar data={data} options={options} />
              </div>

              <div className="col-md-6">dsvad</div>

              <div className="col-md-6"></div>

              <div className="col-md-6"></div>

              <div className="col-md-12"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminTrangChu;
