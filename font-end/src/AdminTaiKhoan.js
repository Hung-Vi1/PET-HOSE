import { React, useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";
import ReactPaginate from "react-paginate";
import { NavLink } from "react-router-dom";
import "./App.css";

// Hàm fetch với cơ chế retry
const fetchWithRetry = async (url, options = {}, retries = 3, delay = 1000) => {
  for (let i = 0; i < retries; i++) {
    const response = await fetch(url, options);
    if (response.ok) {
      const text = await response.text(); // Đọc dữ liệu dưới dạng text
      return text ? JSON.parse(text) : {}; // Phân tích JSON nếu có dữ liệu
    } else if (response.status === 429) {
      await new Promise((res) => setTimeout(res, delay));
    } else {
      throw new Error(`Error: ${response.status}`);
    }
  }
  throw new Error("Max retries exceeded");
};

function AdminTaiKhoan() {
  const { user, isLoggedIn } = useAuth(); // Lấy trạng thái đăng nhập
  const [list_tk, ganTK] = useState([]);
  const apiUrl = process.env.REACT_APP_API_URL;

  const parseDate = (dateString) => {
    const [day, month, year] = dateString.split("/");
    return new Date(year, month - 1, day); // month - 1 vì tháng bắt đầu từ 0
  };

  // Lấy danh sách danh mục
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await fetchWithRetry(`${apiUrl}/api/users`);
        if (Array.isArray(data.data)) {
          // Sắp xếp sản phẩm theo ngày tạo từ gần đến xa
          const sortedProducts = data.data.sort((a, b) => {
            const dateA = parseDate(a.ngay_tao);
            const dateB = parseDate(b.ngay_tao);
            return dateB - dateA; // Sắp xếp từ mới nhất đến cũ nhất
          });
          ganTK(sortedProducts);
        } else {
          console.error("Dữ liệu không phải là mảng:", data);
          ganTK([]);
        }
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu danh mục:", error);
      }
    };

    fetchCategories();
  }, [apiUrl]);

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
              to={"/admintaikhoanthem"}
              className="btn btn-success float-end"
            >
              Thêm tài khoản
            </Link>
            <h2 className="my-3">Tài khoản</h2>

            <table className="table align-middle table-borderless">
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
                <PhanTrang listTK={list_tk} pageSize={10} ganTK={ganTK} />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

function HienSPTrongMotTrang({ spTrongTrang, fromIndex, ganTK }) {
  const [selectedUser, setSelectedUser] = useState(null);
  const apiUrl = process.env.REACT_APP_API_URL;

  // Lấy thông tin chi tiết một tài khoản theo ma_tai_khoan
  const fetchUserById = async (ma_tai_khoan) => {
    try {
      const data = await fetchWithRetry(
        `${apiUrl}/api/users/show/${ma_tai_khoan}`
      );
      console.log("Thông tin danh mục:", data);
      setSelectedUser(data);
    } catch (error) {
      console.error("Lỗi khi lấy thông tin danh mục:", error);
    }
  };

  // Hàm xóa tài khoản
  const xoaTaiKhoan = async (ma_tai_khoan) => {
    if (window.confirm("Bạn có muốn xóa tài khoản này?")) {
      try {
        await fetchWithRetry(`${apiUrl}/api/users/${ma_tai_khoan}`, {
          method: "DELETE",
        });
        alert("Tài khoản đã được xóa thành công");
        const updatedData = await fetchWithRetry(`${apiUrl}/api/users`);
        ganTK(updatedData.data);
      } catch (error) {
        console.error("Lỗi khi xóa tài khoản:", error);
        alert("Có lỗi xảy ra: " + error.message);
      }
    }
  };

  return (
    <>
      {spTrongTrang.map((usr, i) => (
        <tr key={usr.ma_tai_khoan}>
          <td className="text-center align-middle">{fromIndex + i + 1}</td>
          <td className="align-middle">{usr.ten_tai_khoan}</td>
          <td className="text-center align-middle">{usr.so_dien_thoai}</td>
          <td className="align-middle align-middle">{usr.email}</td>
          <td className="text-center align-middle">
            <span
              className={`badge ${
                usr.quyen === 1 ? "text-bg-danger" : "text-bg-success"
              }`}
            >
              {usr.quyen === 1 ? "Quản trị viên" : "Người dùng"}
            </span>
          </td>
          <td className="text-center align-middle">
            <Link
            onClick={() => fetchUserById(usr.ma_tai_khoan)}
              to={`/admintaikhoansua/${usr.ma_tai_khoan}`}
              className="btn btn-outline-warning m-1"
            >
              <i className="bi bi-pencil-square"></i>
            </Link>
            <button
              onClick={() => xoaTaiKhoan(usr.ma_tai_khoan)}
              className="btn btn-outline-danger m-1"
            >
              <i className="bi bi-trash"></i>
            </button>
          </td>
        </tr>
      ))}
    </>
  );
}

function PhanTrang({ listTK, pageSize, ganTK }) {
  const [fromIndex, setFromIndex] = useState(0);
  const toIndex = fromIndex + pageSize;
  const dhTrong1Trang = listTK.slice(fromIndex, toIndex);
  const tongSoTrang = Math.ceil(listTK.length / pageSize);

  const chuyenTrang = (event) => {
    const newIndex = (event.selected * pageSize) % listTK.length;
    setFromIndex(newIndex);
  };

  return (
    <>
      <HienSPTrongMotTrang
        spTrongTrang={dhTrong1Trang}
        fromIndex={fromIndex}
        ganTK={ganTK}
      />
      <tr>
        <td colSpan="6">
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
}

export default AdminTaiKhoan;
