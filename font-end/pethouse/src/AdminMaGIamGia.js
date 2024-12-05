import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuth } from "./contexts/AuthContext";
import ReactPaginate from "react-paginate";
import "./App.css";

function AdminMaGG() {
  const [list_maGG, ganmGG] = useState([]);
  const { user } = useAuth();

  // Lấy danh sách dịch vụ chăm sóc thay vì danh mục
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/coupons") // Đổi endpoint ở đây
      .then((res) => res.json())
      .then((data) => {
        console.log("Dữ liệu trả về:", data); // Kiểm tra dữ liệu
        // Kiểm tra xem data có thuộc tính data không
        if (Array.isArray(data.data)) {
          ganmGG(data.data); // Nếu có mảng dịch vụ trong data
        } else {
          console.error("Dữ liệu không phải là mảng:", data);
          ganmGG([]); // Khởi tạo giá trị mặc định
        }
      })
      .catch((error) => {
        console.error("Lỗi khi lấy dữ liệu dịch vụ:", error);
      });
  }, []);

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
              className="list-group-item list-group-item-action my-0 rounded-0 active"
            >
              <h5 className="mb-0 py-1">Mã giảm giá</h5>
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
            <Link
              to={"/admindichvuchamsocthem"}
              className="btn btn-success float-end"
            >
              Thêm dịch vụ
            </Link>

            <h2 className="my-3">Mã giảm giá</h2>
            <table className="table align-middle table-borderless">
              <thead>
                <tr>
                  <th className="fw-bold text-center">STT</th>
                  <th className="fw-bold">Mã giảm giá</th>
                  <th className="fw-bold">Loại</th>
                  <th className="fw-bold text-center">Code</th>
                  <th className="fw-bold text-center">Giảm</th>
                  <th className="fw-bold text-center">Mức tiêu thụ để áp dụng</th>
                  <th className="fw-bold text-center">Số lượng</th>
                  <th className="fw-bold text-center">Hành động</th>

                </tr>
              </thead>
              <tbody>
                <PhanTrang listDM={list_maGG} pageSize={10} ganDM={ganmGG} />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

function PhanTrang({ listDM, pageSize, ganmGG }) {
  const [fromIndex, setfromIndex] = useState(0);
  const toIndex = fromIndex + pageSize;
  const spTrong1Trang = listDM.slice(fromIndex, toIndex);
  const tongSoTrang = Math.ceil(listDM.length / pageSize);

  const chuyenTrang = (event) => {
    const newIndex = (event.selected * pageSize) % listDM.length;
    setfromIndex(newIndex);
  };

  return (
    <>
      <HienSPTrongMotTrang
        spTrongTrang={spTrong1Trang}
        fromIndex={fromIndex}
        ganDM={ganmGG}
      />
      <tr>
        <td colSpan="5">
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

function HienSPTrongMotTrang({ spTrongTrang, fromIndex, ganmGG }) {
  return (
    <>
      {spTrongTrang.map((mgg, i) => (
        <tr key={mgg.id}>
          <td className="text-center">{fromIndex + i + 1}</td>
          <td>{mgg.ma_giam_gia}</td>
          <td>{mgg.loai_giam}</td>
          <td className="text-center">{mgg.code}</td>
          <td className="text-center">
            {mgg.loai_giam === "percentage"
              ? new Intl.NumberFormat("vi-VN", {
                style: "percent",
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              }).format(mgg.phan_tram / 100)
              : parseInt(mgg.phan_tram).toLocaleString("vi-VN", {
                style: "currency",
                currency: "VND",
              })}
          </td>
          <td className="text-center">
            {parseInt(mgg.so_tien_nho_nhat).toLocaleString("vi-VN", {
              style: "currency",
              currency: "VND",
            })}
          </td>
          <td className="text-center">{mgg.so_luong}</td>
          <td className="text-center">
            <Link
              to={`/admindichvuchamsocsua/${mgg.id}`}
              className="btn btn-outline-warning m-1"
            >
              <i className="bi bi-pencil-square"></i>
            </Link>
            <Link
              to={`/admindichvuchamsocthem`}
              className="btn btn-outline-success m-1"
            >
              <i className="bi bi-plus-circle"></i>
            </Link>
          </td>
        </tr>
      ))}

    </>
  );
}

export default AdminMaGG;
