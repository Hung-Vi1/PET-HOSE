import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

function Admin_SanPham() {
  const [list_sp, ganSP] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/products")
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

  return (
    <div className="container-fluid admintrangchu">
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

          <div className="list-group list-group-item-primary m-3">
            <Link
              to={"/admin"}
              className="list-group-item list-group-item-action"
              aria-current="true"
            >
              Tổng quan
            </Link>
            <Link
              to={"/adminsanpham"}
              className="list-group-item list-group-item-action active"
            >
              Sản phẩm
            </Link>
            <Link
              to={"/admintaikhoan"}
              className="list-group-item list-group-item-action"
            >
              Tài khoản
            </Link>
            <a href="/#" className="list-group-item list-group-item-action">
              Đơn hàng
            </a>
            <a href="/#" className="list-group-item list-group-item-action">
              Dịch vụ chăm sóc
            </a>
            <a href="/#" className="list-group-item list-group-item-action">
              Tin tức
            </a>
          </div>
        </div>

        <div className="col-md p-0">
          <nav
            className="navbar navbar-expand-lg bg-primary"
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
                    <ul className="dropdown-menu bg-primary p-0">
                      <li>
                        <a className="menu-header-top dropdown-item" href="/#">
                          Xem trang chủ
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider m-0" />
                      </li>
                      <li>
                        <a
                          className="menu-header-bottom dropdown-item"
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
              Thêm sản phẩm
            </Link>

            <h2 className="my-3">Sản phẩm</h2>
            <table className="table align-middle table-borderless">
              <thead>
                <tr>
                  <th className="fw-bold text-center">STT</th>
                  <th className="fw-bold text-center">Ảnh</th>
                  <th className="fw-bold">Tên sản phẩm</th>
                  <th className="fw-bold text-center">Danh mục</th>
                  <th className="fw-bold text-center">Ngày tạo</th>
                  <th className="fw-bold text-center">Hành động</th>
                </tr>
              </thead>
              <tbody>
                <PhanTrang listSP={list_sp} pageSize={10} />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

function HienSPTrongMotTrang({ spTrongTrang }) {
  const [ganSP] = useState([]);

  const xoaSanPham = (maSP) => {
    // Hiển thị thông báo xác nhận
    if (window.confirm("Bạn có muốn xóa sản phẩm này?")) {
      fetch(`http://localhost:8000/api/products/destroy/${maSP}`, {
        method: "DELETE",
      })
        .then((res) => {
          if (res.ok) {
            // Gọi lại hàm fetch để tải lại dữ liệu sản phẩm
            fetch("http://localhost:8000/api/products")
              .then((res) => res.json())
              .then((data) => {
                console.log("Dữ liệu trả về:", data);
                if (Array.isArray(data.data)) {
                  ganSP(data.data);
                } else {
                  console.error("Dữ liệu không phải là mảng:", data);
                  ganSP([]); // Khởi tạo giá trị mặc định
                }
              })
              .catch((error) => {
                console.error("Lỗi khi lấy dữ liệu sản phẩm:", error);
              });
          }
        })
        .catch((error) => {
          console.error("Lỗi khi xóa sản phẩm:", error);
        });
    }
  };

  return (
    <>
      {
        spTrongTrang.map((sp, i) => {
          return (
            <tr>
              <td className="text-center">{i + 1}</td>
              <td className="text-center">
                <img
                  src={`image/product/${sp.hinh_anh}`}
                  alt="image/san_pham_1.webp"
                  style={{ width: "100px" }}
                />
              </td>
              <td>{sp.ten_san_pham}</td>
              <td className="text-center">{sp.tenDM}</td>
              <td className="text-center">{sp.ngay_tao}</td>
              <td className="text-center" style={{ width: "150px" }}>
                <Link
                  to={"/adminsanphamchitiet"}
                  className="btn btn-outline-warning m-1"
                >
                  <i className="bi bi-pencil-square"></i>
                </Link>
                <button
                  onClick={() => xoaSanPham(sp.ma_san_pham)}
                  className="btn btn-outline-danger m-1"
                >
                  <i className="bi bi-trash"></i>
                </button>
              </td>
            </tr>
          );
        }) //map
      }
    </>
  );
} //HienSPTrongMotTrang

function PhanTrang({ listSP, pageSize }) {
  const [fromIndex, setfromIndex] = useState(0);
  const toIndex = fromIndex + pageSize;
  const spTrong1Trang = listSP.slice(fromIndex, toIndex);
  const tongSoTrang = Math.ceil(listSP.length / pageSize);
  const chuyenTrang = (event) => {
    const newIndex = (event.selected * pageSize) % listSP.length;
    setfromIndex(newIndex);
  };
  return (
    <>
      <HienSPTrongMotTrang spTrongTrang={spTrong1Trang} />
      <tr>
        <td colspan="6">
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

export default Admin_SanPham;
