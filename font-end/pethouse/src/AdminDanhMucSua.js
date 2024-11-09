import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./App.css";

function AdminDanhMucSua() {
  const { ma_danh_muc } = useParams(); // Lấy ma_danh_muc từ URL
  const [ten_danh_muc, setTenDM] = useState("");
  const [parent_id, setParentId] = useState("");

  useEffect(() => {
    if (ma_danh_muc) {
      fetch(`http://localhost:8000/api/category/${ma_danh_muc}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Network response was not ok");
          }
          return res.json();
        })
        .then((data) => {
          console.log("Dữ liệu từ API:", data); // Kiểm tra dữ liệu
          if (data) {
            setTenDM(data.ten_danh_muc);
            setParentId(data.parent_id);
          }
        })
        .catch((error) => {
          console.error("Lỗi khi lấy thông tin danh mục:", error);
        });
    } else {
      console.error("ma_danh_muc is undefined");
    }
  }, [ma_danh_muc]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý dữ liệu ở đây, ví dụ: gửi đến API để cập nhật
    console.log("Tên danh mục:", ten_danh_muc);
    console.log("Phân loại:", parent_id);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div
          id="openMenu"
          className="col-md-2 p-0 bg-primary collapse collapse-horizontal show"
          style={{ minHeight: "100vh" }}
        >
          <img
            src="/image/Nen_trong_suot.png"
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
              className="list-group-item list-group-item-action my-0 rounded-0 active"
            >
              <h5 className="mb-0 py-1">Danh mục</h5>
            </Link>
            <Link
              to={"/admintaikhoan"}
              className="list-group-item list-group-item-action my-0 rounded-0"
            >
              <h5 className="mb-0 py-1">Tài khoản</h5>
            </Link>
            <a
              href="/#"
              className="list-group-item list-group-item-action my-0 rounded-0"
            >
              <h5 className="mb-0 py-1">Đơn hàng</h5>
            </a>
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

          <div className="container mt-3 mb-5">
            <div className="d-flex">
              <Link
                to={"/admindanhmuc"}
                className="my-0 my-auto btn border border-secondary-subtle text-secondary me-3"
              >
                <i className="bi bi-arrow-left"></i>
              </Link>
              <h1 className="mb-0">{ten_danh_muc}</h1>
            </div>

            <div className="d-flex flex-wrap">
              <div className="col-md-12 border border-dark rounded-3 my-3 p-2">
                <h5 className="mb-2 py-1">Thông tin danh mục</h5>

                <form onSubmit={handleSubmit}>
                  <div className="row mb-3">
                    <div className="col-md">
                      <label htmlFor="TenDM" className="form-label">
                        Tên danh mục
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="TenDM"
                        value={ten_danh_muc}
                        onChange={(e) => setTenDM(e.target.value)}
                      />
                    </div>
                    <div className="col-md">
                      <label htmlFor="parent_id" className="form-label">
                        Phân loại
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="parent_id"
                        value={parent_id}
                        onChange={(e) => setParentId(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="d-flex justify-content-end">
                    <button
                      type="button"
                      className="btn btn-outline-danger me-2"
                    >
                      Xóa
                    </button>
                    <button type="submit" className="btn btn-primary ms-2">
                      Lưu
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDanhMucSua;
