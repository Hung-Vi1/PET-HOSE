import React from "react";
import { useParams, Link } from "react-router-dom";
import "./App.css";
import { useEffect } from "react";
import { useAuth } from "./contexts/AuthContext";
import { Navigate } from "react-router-dom";

function AdminDonHangSua() {
  const { ma_don_hang } = useParams();

  const { isLoggedIn } = useAuth(); // Lấy trạng thái đăng nhập

  // Lấy thông tin đơn hàng theo mã đơn hàng
  useEffect(() => {
    fetch(`http://localhost:8000/api/orders/${ma_don_hang}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Không thể lấy thông tin danh mục");
        }
        return res.json();
      })
      .then((data) => {
        // Kiểm tra trạng thái và lấy dữ liệu
        if (data.status === "success") {
          const dm = data.data; // Lấy dữ liệu danh mục
        } else {
          throw new Error(data.message); // Thông báo lỗi nếu không thành công
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [ma_don_hang]);

  if (!isLoggedIn) {
    // Nếu chưa đăng nhập, chuyển hướng về trang đăng nhập
    return <Navigate to="/login" />;
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div
          id="openMenu"
          className="col-md-2 p-0 bg-primary collapse collapse-horizontal show"
          style={{ minHeight: "100vh" }}
        >
          <img
            src="http://localhost:8000/image/Nen_trong_suot.png"
            className="d-block w-75 mx-auto"
            alt="http://localhost:8000/image/Nen_trong_suot.png"
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
              className="list-group-item list-group-item-action my-0 rounded-0"
            >
              <h5 className="mb-0 py-1">Tài khoản</h5>
            </Link>
            <Link
              to={"/admindonhang"}
              className="list-group-item list-group-item-action my-0 rounded-0 active"
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
            <Link
              to={"/admindonhangthem"}
              className="btn btn-success float-end"
            >
              Thêm đơn hàng
            </Link>

            <h2 className="my-3">Chi tiết đơn hàng</h2>
            <table className="table align-middle table-borderless">
              <thead>
                <tr>
                  <th className="fw-bold text-center">STT</th>
                  <th className="fw-bold">Mã đơn hàng</th>
                  <th className="fw-bold">Ngày tạo</th>
                  <th className="fw-bold">Ngày hoàn thành</th>
                  <th className="fw-bold">Tên khách hàng</th>
                  <th className="fw-bold text-center text-nowrap">
                    Trạng thái
                  </th>
                  <th className="fw-bold text-center">Khách phải trả</th>
                  <th className="fw-bold text-center">Hành động</th>
                </tr>
              </thead>
              <tbody></tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDonHangSua;
