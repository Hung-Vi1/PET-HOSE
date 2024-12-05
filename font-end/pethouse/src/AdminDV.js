import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";
import ReactPaginate from "react-paginate";
import "./App.css";

function AdminDichVu() {
  const [list_dv, ganDV] = useState([]);
  const { user } = useAuth();

  // Lấy danh sách dịch vụ
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/services")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data.data)) {
          ganDV(data.data);
        } else {
          ganDV([]);
        }
      })
      .catch((error) => {
        console.error("Lỗi khi lấy dữ liệu dịch vụ:", error);
      });
  }, []);

  // Hàm xóa dịch vụ theo ma_dich_vu
  const xoaDichVu = (ma_dich_vu) => {
    if (!ma_dich_vu) {
      alert("Không tìm thấy mã dịch vụ. Vui lòng thử lại.");
      return;
    }
    if (window.confirm("Bạn có chắc chắn muốn xóa dịch vụ này không?")) {
      fetch(`http://127.0.0.1:8000/api/services/destroy/${ma_dich_vu}`, {
        method: "DELETE",
      })
        .then((response) => {
          if (response.ok) {
            alert("Xóa dịch vụ thành công!");
            ganDV((prevList) =>
              prevList.filter((item) => item.ma_dich_vu !== ma_dich_vu)
            );
          } else {
            alert("Xóa dịch vụ thất bại!");
          }
        })
        .catch((error) => {
          console.error("Lỗi khi xóa dịch vụ:", error);
          alert("Có lỗi xảy ra khi xóa dịch vụ.");
        });
    }
  };

  return (
    <div className="container-fluid">
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
              to={"/admindichvuchamsoc"}
              className="list-group-item list-group-item-action my-0 rounded-0 active"
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
              to={"/Admin_BV"}
              className="list-group-item list-group-item-action my-0 rounded-0"
            >
              <h5 className="mb-0 py-1">Tin tức</h5>
            </Link>
            <Link
              to={"/adminlienhe"}
              className="list-group-item list-group-item-action my-0 rounded-0"
            >
              <h5 className="mb-0 py-1">Liên hệ</h5>
            </Link>
            <Link
              to={"/adminmagiamgia"}
              className="list-group-item list-group-item-action my-0 rounded-0"
            >
              <h5 className="mb-0 py-1">Mã giảm giá</h5>
            </Link>
          </div>
        </div>
        <div className="col-md p-0">
          <nav className="navbar navbar-expand-lg bg-primary p-0" data-bs-theme="dark">
            <div className="container-fluid">
              <button
                className="btn btn-outline-light me-3"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#openMenu"
              >
                <i className="bi bi-list"></i>
              </button>
              <a className="navbar-brand" href="/#">
                PetHouse
              </a>
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/#"
                    role="button"
                    data-bs-toggle="dropdown"
                  >
                    Xin chào, {user.Hovaten || "Không có tên"}
                  </a>
                  <ul className="dropdown-menu bg-primary p-0 mt-0 border-0 rounded-0">
                    <li>
                      <Link
                        className="menu-header-top dropdown-item m-0 py-2"
                        to={"/"}
                      >
                        Xem trang chủ
                      </Link>
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
          </nav>
          <div className="container">
            <Link to={"/admindvthem"} className="btn btn-success float-end">
              Thêm dịch vụ
            </Link>
            <h2 className="my-3">Dịch vụ chăm sóc</h2>
            <table className="table align-middle table-borderless">
              <thead>
                <tr>
                  <th className="fw-bold text-center">STT</th>
                  <th className="fw-bold">Tên dịch vụ</th>
                  <th className="fw-bold text-center">Hình ảnh</th>
                  <th className="fw-bold text-center">Danh mục</th>
                  <th className="fw-bold text-center">Giá</th>
                  <th className="fw-bold text-center">Hành động</th>
                </tr>
              </thead>
              <tbody>
                {list_dv.map((dv, index) => (
                  <tr key={dv.ma_dich_vu}>
                    <td className="text-center">{index + 1}</td>
                    <td>{dv.ten_dich_vu}</td>
                    <td className="text-center">
                      <img
                        src={`http://localhost:8000/image/product/${dv.hinh_anh}`}
                        alt={`product/${dv.hinh_anh}`}
                        style={{ width: "100px" }}
                      />
                    </td>
                    <td className="text-center">{dv.tenDM}</td>
                    <td className="text-center">{dv.gia.toLocaleString()} đ</td>
                    <td className="text-center">
                      <Link
                        to={`/adminDVsua/${dv.ma_dich_vu}`}
                        className="btn btn-outline-warning m-1"
                      >
                        <i className="bi bi-pencil-square"></i>
                      </Link>
                      <button
                        onClick={() => xoaDichVu(dv.ma_dich_vu)}
                        className="btn btn-outline-danger m-1"
                      >
                        <i className="bi bi-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDichVu;
