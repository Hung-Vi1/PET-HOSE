import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";
import ReactPaginate from "react-paginate";
import "./App.css";

function Admin_bv() {
  const { user } = useAuth();
  const [list_bv, ganBV] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    fetch(`${apiUrl}/api/News`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data.data)) {
          ganBV(data.data);
        } else {
          ganBV([]);
        }
      })
      .catch((error) => {
        console.error("Lỗi khi lấy dữ liệu bài viết:", error);
      });
  });

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = list_bv.slice(indexOfFirstPost, indexOfLastPost);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(list_bv.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }

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
              src={`${apiUrl}/image/Nen_trong_suot.png`}
              className="d-block w-75 mx-auto"
              alt={`${apiUrl}/image/Nen_trong_suot.png`}
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
              className="list-group-item list-group-item-action my-0 rounded-0"
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
              className="list-group-item list-group-item-action my-0 rounded-0 active"
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

          <div className="container mt-3 mb-5">
            <Link to={"/Admin_ThemBV"} className="btn btn-success float-end">
              Thêm bài viết
            </Link>
            <h2 className="my-3">Bài viết</h2>
            <table className="table align-middle table-borderless">
              <thead>
                <tr>
                  <th className="fw-bold text-center">STT</th>
                  <th className="fw-bold text-center">Ảnh</th>
                  <th className="fw-bold">Tên bài viết</th>
                  <th className="fw-bold text-center text-nowrap">Danh mục</th>
                  <th className="fw-bold text-center">Ngày tạo</th>
                  <th className="fw-bold text-center text-nowrap">Lượt xem</th>
                  <th className="fw-bold text-center text-nowrap">
                    Trạng thái
                  </th>
                  <th className="fw-bold text-center text-nowrap">Hành động</th>
                </tr>
              </thead>
              <tbody>
                <PhanTrang listBV={list_bv} pageSize={10} />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

function HienSPTrongMotTrang({ spTrongTrang, fromIndex }) {
  const [ganBV] = useState([]);
  const setSelectedProduct = useState(null);

  const apiUrl = process.env.REACT_APP_API_URL;

  const fetchNewsById = (id) => {
    fetch(`${apiUrl}/api/News/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Thông tin sản phẩm:", data);
        setSelectedProduct(data);
      })
      .catch((error) => {
        console.error("Lỗi khi lấy thông tin sản phẩm:", error);
      });
  };

  const xoaBaiViet = (id) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa bài viết này?")) {
      fetch(`${apiUrl}/api/News/${id}`, {
        method: "DELETE",
      })
        .then((res) => {
          if (res.ok) {
            ganBV((prevList) =>
              prevList.filter((item) => item.bai_viet !== id)
            );
            alert("Bài viết đã được xóa thành công!");
          } else {
            alert("Lỗi khi xóa bài viết.");
          }
        })
        .catch((error) => {
          console.error("Lỗi khi xóa bài viết:", error);
        });
    }
  };

  return (
    <>
      {spTrongTrang.map((item, index) => (
        <tr key={item.bai_viet}>
          <td className="text-center">{fromIndex + index + 1}</td>
          <td className="text-center" style={{ width: "10%" }}>
            <img
              src={`${apiUrl}/image/News/${item.Hinh}`}
              alt={`${apiUrl}/image/News/${item.Hinh}`}
            />
          </td>
          <td>{item.tieu_de}</td>
          <td className="text-center">{item.ma_danh_muc_bv}</td>
          <td className="text-center">{item.ngay_tao}</td>
          <td className="text-center">{item.luot_xem}</td>
          <td className="text-center">
            {item.trang_thai === "1" ? "Hiện " : "Ẩn"}
          </td>
          <td className="text-center text-nowrap">
            <Link
              onClick={() => fetchNewsById(item.bai_viet)}
              to={`/Admin_SuaBV/${item.bai_viet}`}
              className="btn btn-outline-warning m-1"
            >
              <i className="bi bi-pencil-square"></i>
            </Link>
            <button
              onClick={() => xoaBaiViet(item.bai_viet)}
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

function PhanTrang({ listBV, pageSize }) {
  const [fromIndex, setfromIndex] = useState(0);
  const toIndex = fromIndex + pageSize;
  const spTrong1Trang = listBV.slice(fromIndex, toIndex);
  const tongSoTrang = Math.ceil(listBV.length / pageSize);
  const chuyenTrang = (event) => {
    const newIndex = (event.selected * pageSize) % listBV.length;
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

export default Admin_bv;
