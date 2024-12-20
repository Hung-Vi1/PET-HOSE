import { React, useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";
import { NavLink } from "react-router-dom";
import ReactPaginate from "react-paginate";
import "./App.css";

function AdminMaGiamGia() {
  const { user, isLoggedIn } = useAuth(); // Lấy trạng thái đăng nhập
  const [listDiscounts, setListDiscounts] = useState([]); // Danh sách mã giảm giá

  const apiUrl = process.env.REACT_APP_API_URL;

  // Lấy danh sách mã giảm giá
  useEffect(() => {
    const fetchDiscounts = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/coupons`);
        const data = await response.json();
        setListDiscounts(data.data || []); // Gán dữ liệu vào state
      } catch (error) {
        console.error("Lỗi khi lấy danh sách mã giảm giá:", error);
      }
    };

    fetchDiscounts();
  }, []);

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
            <Link to={"/adminmggThem"} className="btn btn-success float-end">
              Thêm mã giảm giá
            </Link>
            <h2 className="my-3">Danh sách mã giảm giá</h2>

            <table className="table align-middle table-borderless">
              <thead>
                <tr>
                  <th className="fw-bold text-center">STT</th>
                  <th className="fw-bold">Mã giảm giá</th>
                  <th className="fw-bold">Loại</th>
                  <th className="fw-bold text-center">Code</th>
                  <th className="fw-bold text-center">Giảm</th>
                  <th className="fw-bold text-center">
                    Mức tiêu thụ để áp dụng
                  </th>
                  <th className="fw-bold text-center">Số lượng</th>
                  <th className="fw-bold text-center">Hành động</th>
                </tr>
              </thead>
              <tbody>
                <PhanTrang list_Discounts={listDiscounts} pageSize={10} />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

function HienSPTrongMotTrang({ spTrongTrang, fromIndex }) {
  const [listDiscounts, setListDiscounts] = useState([]); // Danh sách mã giảm giá
  const setSelectedDiscounts = useState(null);

  const apiUrl = process.env.REACT_APP_API_URL;

  const fetchDiscountsById = (ma_giam_gia) => {
    fetch(`${apiUrl}/api/coupons/${ma_giam_gia}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Thông tin sản phẩm:", data);
        setSelectedDiscounts(data);
      })
      .catch((error) => {
        console.error("Lỗi khi lấy thông tin sản phẩm:", error);
      });
  };

  // Hàm xóa mã giảm giá
  const handleDelete = async (ma_giam_gia) => {
    if (window.confirm("Bạn chắc chắn muốn xóa mã giảm giá này?")) {
      try {
        // Gọi API xóa mã giảm giá với ma_giam_gia
        const response = await fetch(
          `${apiUrl}/api/coupons/destroy/${ma_giam_gia}`,
          {
            method: "DELETE", // Phương thức DELETE để xóa mã giảm giá
          }
        );

        if (response.ok) {
          // Cập nhật lại danh sách mã giảm giá sau khi xóa
          setListDiscounts(
            listDiscounts.filter(
              (discount) => discount.ma_giam_gia !== ma_giam_gia
            )
          );
          alert("Mã giảm giá đã được xóa.");
        } else {
          alert("Xóa mã giảm giá thất bại.");
        }
      } catch (error) {
        console.error("Lỗi khi xóa mã giảm giá:", error);
        alert("Có lỗi xảy ra khi xóa mã giảm giá.");
      }
    }
  };

  return (
    <>
      {spTrongTrang.map((discount, i) => (
        <tr key={discount.ma_giam_gia}>
          <td className="text-center align-middle">{i + 1}</td>
          <td className="align-middle">{discount.ma_giam_gia}</td>
          <td className="align-middle">{discount.loai_giam}</td>
          <td className="text-center align-middle">{discount.code}</td>
          <td className="text-center align-middle">
            {discount.loai_giam === "fixed"
              ? `${parseInt(discount.phan_tram).toLocaleString("vi-VN")} VNĐ`
              : `${parseFloat(discount.phan_tram)}%`}
          </td>
          <td className="text-center align-middle">
            {parseInt(discount.so_tien_nho_nhat).toLocaleString("vi-VN")} VNĐ
          </td>
          <td className="text-center align-middle">{discount.so_luong}</td>
          <td className="text-center align-middle">
            <Link
              onClick={() => fetchDiscountsById(discount.ma_giam_gia)}
              to={`/adminmgmsua/${discount.ma_giam_gia}`}
              className="btn btn-outline-warning m-1"
            >
              <i className="bi bi-pencil-square"></i>
            </Link>
            <button
              onClick={() => handleDelete(discount.ma_giam_gia)}
              className="btn btn-outline-danger m-1"
            >
              <i className="bi bi-trash"></i>
            </button>
          </td>
        </tr>
      ))}
    </>
  );
} //HienSPTrongMotTrang

function PhanTrang({ list_Discounts, pageSize }) {
  const [fromIndex, setfromIndex] = useState(0);
  const toIndex = fromIndex + pageSize;
  const spTrong1Trang = list_Discounts.slice(fromIndex, toIndex);
  const tongSoTrang = Math.ceil(list_Discounts.length / pageSize);
  const chuyenTrang = (event) => {
    const newIndex = (event.selected * pageSize) % list_Discounts.length;
    setfromIndex(newIndex);
  };
  return (
    <>
      <HienSPTrongMotTrang spTrongTrang={spTrong1Trang} fromIndex={fromIndex} />
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

export default AdminMaGiamGia;
