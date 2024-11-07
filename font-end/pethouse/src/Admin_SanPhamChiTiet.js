import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";
function Admin_SanPhamChiTiet() {
  // Xóa sản phẩm
  /*   const [ganSP] = useState([]);
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
  }; */

  // Ẩn hiện nội dung dưới tồn kho
  const [isFirstOpen, setIsFirstOpen] = useState(false);
  const [isSecondOpen, setIsSecondOpen] = useState(false);

  const toggleFirst = () => {
    setIsFirstOpen(!isFirstOpen);
  };

  const toggleSecond = () => {
    setIsSecondOpen(!isSecondOpen);
  };

  const toggleBoth = () => {
    setIsFirstOpen(!isFirstOpen);
    setIsSecondOpen(!isSecondOpen);
  };

  // Form
  const [TenSanPham, setTenSanPham] = useState("");
  const [MaSP, setMaSP] = useState("");
  const [created_at, setcreated_at] = useState("");
  const [MaDanhMuc, setMaDanhMuc] = useState("");
  const [updated_at, setupdated_at] = useState("");
  const [MoTa, setMoTa] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý dữ liệu ở đây, ví dụ: gửi đến API
    console.log("TenSanPham:", TenSanPham);
    console.log("MaSP:", MaSP);
    console.log("NgayTao:", created_at);
    console.log("LoaiSanPham:", MaDanhMuc);
    console.log("NgayCapNhat:", updated_at);
    console.log("MoTa:", MoTa);
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
            alt="Background"
          />

          <div className="list-group list-group-item-primary">
            <Link
              to={"/admin"}
              className="list-group-item list-group-item-action mt-2 rounded-0"
              aria-current="true"
            >
              <h5 className="mb-0 py-1">Tổng quan</h5>
            </Link>
            <Link
              to={"/adminsanpham"}
              className="list-group-item list-group-item-action mt-0 rounded-0 active"
            >
              <h5 className="mb-0 py-1">Sản phẩm</h5>
            </Link>
            <Link
              to={"/admintaikhoan"}
              className="list-group-item list-group-item-action mt-0 rounded-0"
            >
              <h5 className="mb-0 py-1">Tài khoản</h5>
            </Link>
            <a
              href="/#"
              className="list-group-item list-group-item-action mt-0 rounded-0"
            >
              <h5 className="mb-0 py-1">Đơn hàng</h5>
            </a>
            <a
              href="/#"
              className="list-group-item list-group-item-action mt-0 rounded-0"
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
            <div className="d-flex mt-3">
              <Link
                to={"/adminsanpham"}
                className="my-0 my-auto btn border border-secondary-subtle text-secondary me-3"
              >
                <i className="bi bi-arrow-left"></i>
              </Link>
              <h1 className="mb-0">Balo vận chuyển chó mèo Phi hành</h1>
            </div>

            <div className="d-flex flex-wrap">
              <div className="col-md-8 border border-dark rounded-3 my-3 p-2 me-3">
                <h5 className="mb-2 py-1">Thông tin sản phẩm</h5>

                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="TenSanPham" className="form-label">
                      Tên sản phẩm
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="TenSanPham"
                      aria-describedby="TenSanPhamlHelp"
                      value={TenSanPham}
                      onChange={(e) => setTenSanPham(e.target.value)}
                    />
                    <div id="TenSanPhamlHelp" className="form-text text-danger">
                      Đây là trường bất buộc
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col-md">
                      <label htmlFor="MaSP" className="form-label">
                        Mã sản phẩm
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="MaSP"
                        value={MaSP}
                        onChange={(e) => setMaSP(e.target.value)}
                      />
                    </div>
                    <div className="col-md">
                      <label htmlFor="NgayTao" className="form-label">
                        Ngày tạo
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="NgayTao"
                        value={created_at}
                        onChange={(e) => setcreated_at(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col-md">
                      <label htmlFor="LoaiSanPham" className="form-label">
                        Loại sản phẩm
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="LoaiSanPham"
                        value={MaDanhMuc}
                        onChange={(e) => setMaDanhMuc(e.target.value)}
                      />
                    </div>
                    <div className="col-md">
                      <label htmlFor="NgayCapNhat" className="form-label">
                        Ngày cập nhật
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="NgayCapNhat"
                        value={updated_at}
                        onChange={(e) => setupdated_at(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="MoTa" className="form-label">
                      Mô tả
                    </label>
                    <textarea
                      type="text"
                      className="form-control"
                      id="MoTa"
                      rows={2}
                      value={MoTa}
                      onChange={(e) => setMoTa(e.target.value)}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary">
                    Lưu
                  </button>
                </form>
              </div>

              <div className="col-md border border-dark rounded-3 my-3 p-2">
                <h5 className="mb-2 py-1">Ảnh sản phẩm</h5>

                <div className="text-center">
                  <img
                    className="w-75 mt-5"
                    src="image/san_pham_1.webp"
                    alt="Sản phẩm"
                  />

                  <div className="d-flex justify-content-center">
                    <input
                      className="form-control form-control-lg"
                      type="file"
                      id="fileInput"
                      style={{ display: "none" }}
                    />
                    <label
                      htmlFor="fileInput"
                      className="form-control w-50 hinhanh"
                    >
                      Chọn tệp
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-dark rounded-3 my-3 p-2">
              <div className="d-flex">
                <h5 className="m-0 py-1 pe-3 border-bottom border-2 border-warning text-warning">
                  Tồn kho
                </h5>
                <h5 className="m-0 py-1 pe-3 border-bottom border-2 border-warning text-warning">
                  Lịch sử kho
                </h5>
              </div>

              <table className="table m-0">
                <thead>
                  <tr>
                    <th>Chi nhánh</th>
                    <th className="text-center">Tồn kho</th>
                    <th className="text-center">Có thể bán</th>
                    <th className="text-center">Đang giao dịch</th>
                    <th className="text-center">Hàng đang về</th>
                    <th className="text-center">Hàng đang giao</th>
                    <th className="text-center">Điểm lưu kho</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>564</td>
                    <td className="text-center">100</td>
                    <td className="text-center">100</td>
                    <td className="text-center">0</td>
                    <td className="text-center">0</td>
                    <td className="text-center">0</td>
                    <td className="text-center">___</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div>
              <p className="d-inline-flex gap-1">
                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={toggleFirst}
                  aria-expanded={isFirstOpen}
                  aria-controls="multiCollapseExample1"
                >
                  Toggle first element
                </button>
                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={toggleSecond}
                  aria-expanded={isSecondOpen}
                  aria-controls="multiCollapseExample2"
                >
                  Toggle second element
                </button>
                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={toggleBoth}
                  aria-expanded={isFirstOpen || isSecondOpen}
                  aria-controls="multiCollapseExample1 multiCollapseExample2"
                >
                  Toggle both elements
                </button>
              </p>
              <div className="row">
                <div className="col">
                  <div
                    className={`collapse multi-collapse ${
                      isFirstOpen ? "show" : ""
                    }`}
                    id="multiCollapseExample1"
                  >
                    <div className="card card-body">
                      Some placeholder content for the first collapse component
                      of this multi-collapse example. This panel is hidden by
                      default but revealed when the user activates the relevant
                      trigger.
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div
                    className={`collapse multi-collapse ${
                      isSecondOpen ? "show" : ""
                    }`}
                    id="multiCollapseExample2"
                  >
                    <div className="card card-body">
                      Some placeholder content for the second collapse component
                      of this multi-collapse example. This panel is hidden by
                      default but revealed when the user activates the relevant
                      trigger.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin_SanPhamChiTiet;
