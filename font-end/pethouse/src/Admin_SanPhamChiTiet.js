import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
function Admin_SanPhamChiTiet() {
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
          <div className="list-group list-group-item-primary m-3">
            <Link
              to="/admin"
              className="list-group-item list-group-item-action"
              aria-current="true"
            >
              Tổng quan
            </Link>
            <Link
              to="/adminsanpham"
              className="list-group-item list-group-item-action active"
            >
              Sản phẩm
            </Link>
            <Link
              to="/admintaikhoan"
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
            <div className="d-flex">
              <i className="bi bi-chevron-double-left py-1 my-2"></i>
              <strong className="py-1 my-2 ms-2">
                Quay lại danh sách sản phẩm
              </strong>
              <div className="d-flex ms-auto">
                <button
                  type="button"
                  className="btn btn-outline-warning p-1 m-2"
                >
                  Thoát
                </button>
                <button
                  type="button"
                  className="btn btn-danger p-1 m-2 text-white"
                >
                  Xóa
                </button>
                <button
                  type="button"
                  className="btn btn-warning p-1 m-2 text-white"
                >
                  Sửa
                </button>
              </div>
            </div>

            <hr className="mt-0" />

            <h1>Balo vận chuyển chó mèo Phi hành</h1>

            <button type="button" className="btn btn-outline-dark">
              <i className="bi bi-copy me-2"></i>Sao chép
            </button>

            <div className="border border-dark rounded-3 my-3 p-2">
              <div className="d-flex">
                <h5 className="m-0 py-1">Thông tin sản phẩm</h5>
                <div className="border border-warning rounded-5 bg-warning text-white ms-3">
                  <p className="m-0 p-1">Đang giao dịch</p>
                </div>
              </div>

              <hr className="my-2" />

              <div className="row">
                <div className="col-md-4">
                  <table className="table table-borderless mb-0">
                    <tbody>
                      <tr>
                        <td>Mã SKU</td>
                        <td>:</td>
                        <td>SP001</td>
                      </tr>
                      <tr>
                        <td>Mã barcode</td>
                        <td>:</td>
                        <td>9319740000531</td>
                      </tr>
                      <tr>
                        <td>Khối lượng</td>
                        <td>:</td>
                        <td>2kg</td>
                      </tr>
                      <tr>
                        <td>Đơn vị tính</td>
                        <td>:</td>
                        <td>Chai</td>
                      </tr>
                      <tr>
                        <td>Phân loại</td>
                        <td>:</td>
                        <td>Sản phẩm thường</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="col-md-4">
                  <table className="table table-borderless mb-0">
                    <tbody>
                      <tr>
                        <td>Nhãn hiệu</td>
                        <td>:</td>
                        <td>___</td>
                      </tr>
                      <tr>
                        <td>Tags</td>
                        <td>:</td>
                        <td>___</td>
                      </tr>
                      <tr>
                        <td>Ngày tạo</td>
                        <td>:</td>
                        <td>27/09/2024 17:09</td>
                      </tr>
                      <tr>
                        <td>Ngày cập nhật</td>
                        <td>:</td>
                        <td>27/09/2024 17:09</td>
                      </tr>
                      <tr>
                        <td>Loại sản phẩm</td>
                        <td>:</td>
                        <td>Phụ kiện chó / mèo</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="text-center col-md-4">
                  <img
                    className="w-50"
                    src="image/san_pham_1.webp"
                    alt="Sản phẩm"
                  />
                </div>
              </div>
            </div>

            <div className="d-flex">
              <div className="col-md-9 border border-dark rounded-3 mb-3 p-2 me-1">
                <h5 className="m-0 py-1">Giá sản phẩm</h5>
                <hr className="my-2" />
                <div className="row">
                  <div className="col-md-6">
                    <table className="table table-borderless mb-0">
                      <tbody>
                        <tr>
                          <td>Giá nhập</td>
                          <td>:</td>
                          <td>300.000 đ</td>
                        </tr>
                        <tr>
                          <td>Giá sale</td>
                          <td>:</td>
                          <td>400.000 đ</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="col-md-6">
                    <table className="table table-borderless mb-0">
                      <tbody>
                        <tr>
                          <td>Giá nhập</td>
                          <td>:</td>
                          <td>300.000 đ</td>
                        </tr>
                        <tr>
                          <td>Giá sale</td>
                          <td>:</td>
                          <td>400.000 đ</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="col-md border border-dark rounded-3 mb-3 p-2 ms-1">
                <h5 className="m-0 py-1">Thông tin thêm</h5>
                <hr className="my-2" />
                <div className="form-check m-0">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="ChoPhepBan"
                  />
                  <label className="form-check-label" htmlFor="ChoPhepBan">
                    Cho phép bán
                  </label>
                </div>
                <div className="form-check m-0">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="ApDungThue"
                  />
                  <label className="form-check-label" htmlFor="ApDungThue">
                    Áp dụng thuế
                  </label>
                </div>
              </div>
            </div>

            <div>
              <p className="d-inline-flex gap-1">
                <a
                  className="btn btn-primary"
                  data-bs-toggle="collapse"
                  href="#collapseExample"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  Link with href
                </a>
                <button
                  className="btn btn-primary"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseExample"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  Button with data-bs-target
                </button>
              </p>
              <div className="collapse show" id="collapseExample">
                <div className="card card-body">
                  Some placeholder content for the collapse component. This
                  panel is hidden by default but revealed when the user
                  activates the relevant trigger.
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
