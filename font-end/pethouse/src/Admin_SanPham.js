import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import { useState, useEffect } from "react";
function Admin_SanPham() {
  const [sp, ganSP] = useState([]);
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
            <table className="table align-middle">
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
                {sp.map((sp, i) => (
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
                    <td className="text-center">{sp.ma_danh_muc}</td>
                    <td className="text-center">{sp.ngay_tao}</td>
                    <td className="text-center">
                      <Link
                        to={"/adminsanphamchitiet"}
                        className="btn btn-outline-warning m-1"
                      >
                        <i className="bi bi-pencil-square"></i>
                      </Link>
                      {/* <Link href="/#" className="btn btn-outline-danger m-1">
                          <i className="bi bi-trash"></i>xóa
                        </Link> */}
                      {/* <button onClick={() => xoaSanPham(sp.maSP)}><i className="bi bi-trash"></i></button> */}
                      <button
                        onClick={() => xoaSanPham(sp.ma_san_pham)}
                        className="btn btn-danger btn-sm"
                      >
                        Xóa
                      </button>
                    </td>
                  </tr>
                ))}

                {/* <tr>
                    <td className="text-center">1</td>
                    <td className="text-center">
                      <img
                        src="image/san_pham_1.webp"
                        alt="image/san_pham_1.webp"
                        style={{ width: "100px" }}
                      />
                    </td>
                    <td>Balo vận chuyển chó mèo Phi hành</td>
                    <td className="text-center">Phụ kiện chó / mèo</td>
                    <td className="text-center">25/05/2024</td>
                    <td className="text-center">
                      <Link
                        to={"/adminsanphamchitiet"}
                        className="btn btn-outline-warning m-1"
                      >
                        <i className="bi bi-pencil-square"></i>
                      </Link>
                      <a href="/#" className="btn btn-outline-danger m-1">
<i className="bi bi-trash"></i>
                      </a>
                    </td>
                  </tr> */}
              </tbody>
            </table>

            <nav aria-label="Page navigation example">
              <ul className="pagination justify-content-center">
                <li className="page-item disabled">
                  <a className="page-link" href="/#">
                    <i className="bi bi-chevron-double-left"></i>
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link active" href="/#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="/#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="/#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="/#">
                    <i className="bi bi-chevron-double-right"></i>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin_SanPham;
