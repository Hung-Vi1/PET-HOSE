import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { useAuth } from "./contexts/AuthContext";
import { Navigate } from "react-router-dom";

function AdminDonHang() {
  const [list_dh, ganDH] = useState([]);

  const { isLoggedIn } = useAuth(); // Lấy trạng thái đăng nhập

  // Lấy danh sách sản phẩm
  useEffect(() => {
    fetch("http://localhost:8000/api/orders")
      .then((res) => res.json())
      .then((data) => {
        console.log("Dữ liệu trả về:", data); // Kiểm tra dữ liệu
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
  }, []);

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
                  <th className="fw-bold text-center">Khách phải trả</th>
                  <th className="fw-bold text-center">Hành động</th>
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

  const fetchOrderById = (ma_tai_khoan) => {
    fetch(`http://localhost:8000/api/orders/${ma_tai_khoan}`)
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
            TrangThaiDonHang = "Chờ xác nhận";
          } else if (dh.trang_thai === "dang_xu_ly") {
            TrangThaiDonHang = "Đang xử lý";
          } else if (dh.trang_thai === "hoan_thanh") {
            TrangThaiDonHang = "Hoàn thành";
          } else {
            TrangThaiDonHang = "Đã hủy";
          }

          return (
            <tr>
              <td className="text-center">{fromIndex + i + 1}</td>
              <td>
                <Link
                  onClick={() => fetchOrderById(dh.ma_don_hang)}
                  to={`/admindonhangsua/${dh.ma_don_hang}`}
                >
                  DH{dh.ma_don_hang}
                </Link>
              </td>
              <td>{dh.ngay_dat}</td>
              <td>{dh.ngay_giao}</td>
              <td>{dh.ho_ten}</td>
              <td className="text-center">{TrangThaiDonHang}</td>
              <td className="text-center">{dh.tong_tien}</td>
              <td className="text-center" style={{ width: "150px" }}>
                <Link
                  onClick={() => fetchOrderById(dh.ma_san_pham)}
                  to={`/adminsanphamsua/${dh.ma_san_pham}`}
                  className="btn btn-outline-warning m-1"
                >
                  <i className="bi bi-pencil-square"></i>
                </Link>
                <button className="btn btn-outline-danger m-1">
                  <i className="bi bi-trash"></i>
                </button>
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
