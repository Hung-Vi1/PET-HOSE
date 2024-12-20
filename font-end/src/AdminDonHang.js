import { React, useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { useAuth } from "./contexts/AuthContext";
import { NavLink } from "react-router-dom";
import "./App.css";
// Định dạng ngày giờ
import { format } from "date-fns";
import { vi } from "date-fns/locale";

function AdminDonHang() {
  const [list_dh, ganDH] = useState([]);
  const { user, isLoggedIn } = useAuth(); // Lấy trạng thái đăng nhập

  const apiUrl = process.env.REACT_APP_API_URL;

  // Lấy danh sách sản phẩm
  useEffect(() => {
    fetch(`${apiUrl}/api/orders`)
      .then((res) => res.json())
      .then((data) => {
        // console.log("Dữ liệu trả về:", data); // Kiểm tra dữ liệu
        // Kiểm tra xem data có thuộc tính data không
        if (Array.isArray(data.data)) {
          ganDH(data.data); // Nếu có mảng sản phẩm trong data
        } else {
          console.error("Dữ liệu không phải là mảng:", data);
          ganDH([]); // Khởi tạo giá trị mặc định
        }
      })
      .catch((error) => {
        console.error("Lỗi khi lấy dữ liệu sản phẩm:", error);
      });
  });

  if (!isLoggedIn) {
    // Nếu chưa đăng nhập, chuyển hướng về trang đăng nhập
    return <Navigate to="/login" />;
  }

  return (
    <div className="container-fluid admin">
      <div className="row">
        <div
          id="openMenu"
          className="col-md-2 p-0 collapse collapse-horizontal show menu-admin-doc"
          style={{ minHeight: "100vh" }}
        >
          <NavLink to={"/"}>
            <img
              src={`${apiUrl}/image/Nen_trong_suot.png`}
              className="d-block w-75 mx-auto mt-2"
              alt={`${apiUrl}/image/Nen_trong_suot.png`}
            />
          </NavLink>

          <div className="list-group text-center">
            <NavLink
              to={"/admin"}
              className="list-group-item list-group-item-action mt-0 mb-0 rounded-5 border-0"
              activeClassName="active"
              aria-current="true"
            >
              <h5 className="mb-0">Tổng quan</h5>
            </NavLink>
            <NavLink
              to={"/adminsanpham"}
              className="list-group-item list-group-item-action my-0 rounded-5 border-0"
              activeClassName="active"
            >
              <h5 className="mb-0 py-1">Sản phẩm</h5>
            </NavLink>
            <NavLink
              to={"/admindichvuchamsoc"}
              className="list-group-item list-group-item-action my-0 rounded-5 border-0"
              activeClassName="active"
            >
              <h5 className="mb-0 py-1">Dịch vụ chăm sóc</h5>
            </NavLink>
            <NavLink
              to={"/admindanhmuc"}
              className="list-group-item list-group-item-action my-0 rounded-5 border-0"
              activeClassName="active"
            >
              <h5 className="mb-0 py-1">Danh mục</h5>
            </NavLink>
            <NavLink
              to={"/admintaikhoan"}
              className="list-group-item list-group-item-action my-0 rounded-5 border-0"
              activeClassName="active"
            >
              <h5 className="mb-0 py-1">Tài khoản</h5>
            </NavLink>
            <NavLink
              to={"/admindonhang"}
              className="list-group-item list-group-item-action my-0 rounded-5 border-0"
              activeClassName="active"
            >
              <h5 className="mb-0 py-1">Đơn hàng</h5>
            </NavLink>
            <NavLink
              to={"/admindatlich"}
              className="list-group-item list-group-item-action my-0 rounded-5 border-0"
              activeClassName="active"
            >
              <h5 className="mb-0 py-1">Đặt lịch</h5>
            </NavLink>
            <NavLink
              to={"/Admin_BV"}
              className="list-group-item list-group-item-action my-0 rounded-5 border-0"
              activeClassName="active"
            >
              <h5 className="mb-0 py-1">Tin tức</h5>
            </NavLink>
            <NavLink
              to={"/adminlienhe"}
              className="list-group-item list-group-item-action my-0 rounded-5 border-0"
              activeClassName="active"
            >
              <h5 className="mb-0 py-1">Liên hệ</h5>
            </NavLink>
            <NavLink
              to={"/adminmagiamgia"}
              className="list-group-item list-group-item-action my-0 rounded-5 border-0"
              activeClassName="active"
            >
              <h5 className="mb-0 py-1">Mã giảm giá</h5>
            </NavLink>
          </div>
        </div>

        <div className="col-md p-0">
          <nav
            className="navbar navbar-expand-lg p-0 menu-admin-ngang"
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
                      className="nav-link dropdown-toggle text-white"
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
              to={"/admindonhangthem"}
              className="btn btn-success float-end"
            >
              Thêm đơn hàng
            </Link>

            <h2 className="my-3">Đơn hàng</h2>
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
                  <th className="fw-bold text-end">Khách phải trả</th>
                </tr>
              </thead>
              <tbody>
                <PhanTrang listDH={list_dh} pageSize={10} />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

function HienSPTrongMotTrang({ spTrongTrang, fromIndex }) {
  const setSelectedOrder = useState(null);
  const apiUrl = process.env.REACT_APP_API_URL;

  const fetchOrderById = (ma_tai_khoan) => {
    fetch(`${apiUrl}/api/orderDetails/${ma_tai_khoan}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Thông tin sản phẩm:", data);
        setSelectedOrder(data);
      })
      .catch((error) => {
        console.error("Lỗi khi lấy thông tin sản phẩm:", error);
      });
  };

  return (
    <>
      {
        spTrongTrang.map((dh, i) => {
          let TrangThaiDonHang;

          if (dh.trang_thai === "cho_xac_nhan") {
            TrangThaiDonHang = (
              <span className="badge text-bg-warning">Chờ xác nhận</span>
            );
          } else if (dh.trang_thai === "da_xac_nhan") {
            TrangThaiDonHang = (
              <span className="badge text-bg-secondary">Đã xác nhận</span>
            );
          } else if (dh.trang_thai === "dang_van_chuyen") {
            TrangThaiDonHang = (
              <span className="badge text-bg-info">Đang vận chuyển</span>
            );
          } else if (dh.trang_thai === "da_thanh_toan") {
            TrangThaiDonHang = (
              <span className="badge text-bg-primary">Đã thanh toán</span>
            );
          } else if (dh.trang_thai === "hoan_thanh") {
            TrangThaiDonHang = (
              <span className="badge text-bg-success">Hoàn thành</span>
            );
          } else {
            TrangThaiDonHang = (
              <span className="badge text-bg-danger">Đã hủy</span>
            );
          }

          return (
            <tr>
              <td className="text-center">{fromIndex + i + 1}</td>
              <td>
                <Link
                  onClick={() => fetchOrderById(dh.ma_don_hang)}
                  to={`/admindonhangchitiet/${dh.ma_don_hang}`}
                  className="text-primary"
                >
                  #{dh.ma_don_hang}
                </Link>
              </td>
              <td>
                {format(new Date(dh.ngay_dat), "dd/MM/yyyy HH:mm", {
                  locale: vi,
                })}
              </td>
              <td>
                {format(new Date(dh.ngay_giao), "dd/MM/yyyy HH:mm", {
                  locale: vi,
                })}
              </td>
              <td>{dh.ho_ten}</td>
              <td className="text-center">{TrangThaiDonHang}</td>
              <td className="text-end">
                {parseInt(dh.tong_tien).toLocaleString("vi-VN", {
                  style: "currency",
                  currency: "VND",
                })}
              </td>
            </tr>
          );
        }) //map
      }
    </>
  );
} //HienDHTrongMotTrang

function PhanTrang({ listDH, pageSize }) {
  const [fromIndex, setfromIndex] = useState(0);
  const toIndex = fromIndex + pageSize;
  const dhTrong1Trang = listDH.slice(fromIndex, toIndex);
  const tongSoTrang = Math.ceil(listDH.length / pageSize);
  const chuyenTrang = (event) => {
    const newIndex = (event.selected * pageSize) % listDH.length;
    setfromIndex(newIndex);
  };
  return (
    <>
      <HienSPTrongMotTrang spTrongTrang={dhTrong1Trang} fromIndex={fromIndex} />
      <tr>
        <td colspan="8">
          <ReactPaginate
            nextLabel=">"
            previousLabel="<"
            pageCount={tongSoTrang}
            pageRangeDisplayed={5}
            onPageChange={chuyenTrang}
            className="thanhphantrang"
          />
        </td>
      </tr>
    </>
  );
} //PhanTrang

export default AdminDonHang;
