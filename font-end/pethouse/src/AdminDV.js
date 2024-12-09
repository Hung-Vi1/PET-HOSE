import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";
import ReactPaginate from "react-paginate";
import "./App.css";

function AdminDichVu() {
  const [listDV, setListDV] = useState([]);
  const { user } = useAuth();

  // Fetch danh sách dịch vụ từ API
  useEffect(() => {
    fetch("http://localhost:8000/api/services")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data.data)) {
          setListDV(data.data);
        } else {
          setListDV([]);
        }
      })
      .catch((error) => {
        console.error("Lỗi khi lấy dữ liệu dịch vụ:", error);
      });
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar user={user} />
        <div className="col-md p-0">
          <Header user={user} />
          <div className="container">
            <Link to="/admindvthem" className="btn btn-success float-end">
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
                  <th className="fw-bold text-center">Trạng thái</th>
                  <th className="fw-bold text-center">Hành động</th>
                </tr>
              </thead>
              <tbody>
                <Pagination listDV={listDV} pageSize={10} setListDV={setListDV} />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

function Sidebar({ user }) {
  return (
    <div
      id="openMenu"
      className="col-md-2 p-0 bg-primary collapse collapse-horizontal show"
      style={{ minHeight: "100vh" }}
    >
      <Link to="/">
        <img
          src={`http://localhost:8000/image/Nen_trong_suot.png`}
          className="d-block w-75 mx-auto"
          alt="PetHouse Logo"
        />
      </Link>
      <div className="list-group list-group-item-primary">
        <SidebarLink to="/admin" label="Tổng quan" />
        <SidebarLink to="/adminsanpham" label="Sản phẩm" />
        <SidebarLink
          to="/admindichvuchamsoc"
          label="Dịch vụ chăm sóc"
          active
        />
        <SidebarLink to="/admindanhmuc" label="Danh mục" />
        <SidebarLink to="/admintaikhoan" label="Tài khoản" />
        <SidebarLink to="/admindonhang" label="Đơn hàng" />
        <SidebarLink to="/admindatlich" label="Đặt lịch" />
        <SidebarLink to="/Admin_BV" label="Tin tức" />
        <SidebarLink to="/adminlienhe" label="Liên hệ" />
        <SidebarLink to="/adminmagiamgia" label="Mã giảm giá" />
      </div>
    </div>
  );
}

function SidebarLink({ to, label, active }) {
  return (
    <Link
      to={to}
      className={`list-group-item list-group-item-action my-0 rounded-0 ${
        active ? "active" : ""
      }`}
    >
      <h5 className="mb-0 py-1">{label}</h5>
    </Link>
  );
}

function Header({ user }) {
  return (
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
        >
          <i className="bi bi-list"></i>
        </button>
        <a className="navbar-brand" href="/">
          PetHouse
        </a>
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
            >
              Xin chào, {user?.Hovaten || "Không có tên"}
            </a>
            <ul className="dropdown-menu bg-primary p-0 mt-0 border-0 rounded-0">
              <li>
                <Link className="menu-header-top dropdown-item m-0 py-2" to="/">
                  Xem trang chủ
                </Link>
              </li>
              <li>
                <a
                  className="menu-header-bottom dropdown-item m-0 py-2"
                  href="#"
                >
                  Đăng xuất
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
}

function Pagination({ listDV, pageSize, setListDV }) {
  const [currentPage, setCurrentPage] = useState(0);
  const offset = currentPage * pageSize;
  const currentPageData = listDV.slice(offset, offset + pageSize);
  const pageCount = Math.ceil(listDV.length / pageSize);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <>
      {currentPageData.map((dv, index) => (
        <ServiceRow key={dv.ma_dich_vu} index={index} service={dv} setListDV={setListDV} />
      ))}
      <tr>
        <td colSpan="7">
          <ReactPaginate
            nextLabel=">"
            previousLabel="<"
            pageCount={pageCount}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            className="thanhphantrang"
          />
        </td>
      </tr>
    </>
  );
}

function ServiceRow({ service, index, setListDV }) {
  const { ma_dich_vu, ten_dich_vu, hinh_anh, tenDM, gia, trang_thai } = service;

  const handleDelete = () => {
    if (window.confirm("Bạn có chắc chắn muốn xóa dịch vụ này không?")) {
      fetch(`http://127.0.0.1:8000/api/services/destroy/${ma_dich_vu}`, {
        method: "DELETE",
      })
        .then((response) => {
          if (response.ok) {
            alert("Xóa dịch vụ thành công!");
            setListDV((prevListDV) => prevListDV.filter((dv) => dv.ma_dich_vu !== ma_dich_vu));
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

  const statusBadge = trang_thai === "1" ? (
    <span className="badge rounded-pill text-bg-success">Hiện</span>
  ) : (
    <span className="badge rounded-pill text-bg-danger">Ẩn</span>
  );

  return (
    <tr>
      <td className="text-center align-middle">{index + 1}</td>
      <td className="text-capitalize align-middle">{ten_dich_vu}</td>
      <td className="text-center">
        <img
          src={`http://localhost:8000/image/product/${hinh_anh}`}
          alt="Service"
          style={{ width: "100px" }}
        />
      </td>
      <td className="text-center align-middle">{tenDM}</td>
      <td className="text-center align-middle">
        {parseInt(gia).toLocaleString("vi-VN", {
          style: "currency",
          currency: "VND",
        })}
      </td>
      <td className="text-center align-middle fs-5">{statusBadge}</td>
      <td className="text-center align-middle">
        <Link
          to={`/adminDVsua/${ma_dich_vu}`}
          className="btn btn-outline-warning m-1"
        >
          <i className="bi bi-pencil-square"></i>
        </Link>
        <button
          onClick={handleDelete}
          className="btn btn-outline-danger m-1"
        >
          <i className="bi bi-trash"></i>
        </button>
      </td>
    </tr>
  );
}

export default AdminDichVu;
