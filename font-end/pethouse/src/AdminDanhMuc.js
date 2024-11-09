import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";

function AdminDanhMuc() {
  const [list_dm, ganSP] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Lấy danh sách danh mục
  useEffect(() => {
    fetch("http://localhost:8000/api/category")
      .then((res) => res.json())
      .then((data) => {
        console.log("Dữ liệu trả về:", data); // Kiểm tra dữ liệu
        // Kiểm tra xem data có thuộc tính data không
        if (Array.isArray(data.data)) {
          ganSP(data.data); // Nếu có mảng sản phẩm trong data
        } else {
          console.error("Dữ liệu không phải là mảng:", data);
          ganSP([]); // Khởi tạo giá trị mặc định
        }
      })
      .catch((error) => {
        console.error("Lỗi khi lấy dữ liệu sản phẩm:", error);
      });
  }, []);

  // Lấy thông tin danh mục theo ID
  const fetchCategoryById = (ma_danh_muc) => {
    fetch(`http://localhost:8000/api/category/${ma_danh_muc}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Thông tin danh mục:", data);
        setSelectedCategory(data); // Lưu thông tin danh mục vào state
      })
      .catch((error) => {
        console.error("Lỗi khi lấy thông tin danh mục:", error);
      });
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
              to={"/admindanhmuc"}
              className="list-group-item list-group-item-action mt-0 rounded-0 active"
            >
              <h5 className="mb-0 py-1">Danh mục</h5>
            </Link>
            <Link
              to={"/admintaikhoan"}
              className="list-group-item list-group-item-action mt-0 rounded-0"
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
            <Link
              to={"/adminsanphamthem"}
              className="btn btn-success float-end"
            >
              Thêm danh mục
            </Link>

            <h2 className="my-3">Danh mục</h2>
            <table className="table align-middle table-borderless">
              <thead>
                <tr>
                  <th className="fw-bold text-center">STT</th>
                  <th className="fw-bold">Tên danh mục</th>
                  <th className="fw-bold text-center">Phân loại</th>
                  <th className="fw-bold text-center">Ngày tạo</th>
                  <th className="fw-bold text-center">Hành động</th>
                </tr>
              </thead>
              <tbody>
                {list_dm.map((dm, i) => {
                  // Tạo số thứ tự
                  const stt = i + 1;
                  // Xử lý hiển thị tên danh mục dựa vào parent_id
                  let loaiDanhMuc;
                  if (dm.parent_id === 0) {
                    loaiDanhMuc = "Thư mục cha";
                  } else if (dm.parent_id === 1) {
                    loaiDanhMuc = "Thư mục cha -> Chó";
                  } else {
                    loaiDanhMuc = "Thư mục cha -> Mèo";
                  }

                  return (
                    <tr key={dm.ma_danh_muc}>
                      <td className="text-center">{stt}</td>
                      <td>{dm.ten_danh_muc}</td>
                      <td className="text-center">{loaiDanhMuc}</td>
                      <td className="text-center">{dm.ngay_tao}</td>
                      <td className="text-center">
                        <Link
                          onClick={() => fetchCategoryById(dm.ma_danh_muc)}
                          to={`/admindanhmucsua/${dm.ma_danh_muc}`}
                          className="btn btn-outline-warning m-1"
                        >
                          <i className="bi bi-pencil-square"></i>
                        </Link>
                        <a href="/#" className="btn btn-outline-danger m-1">
                          <i className="bi bi-trash"></i>
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            {selectedCategory && (
              <div>
                <h3>Thông tin danh mục đã chọn:</h3>
                <p>Tên danh mục: {selectedCategory.ten_danh_muc}</p>
                <p>Ngày tạo: {selectedCategory.ngay_tao}</p>
                {/* Thêm thông tin khác nếu cần */}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDanhMuc;
