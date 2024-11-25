import React from "react";
import { useParams, Link } from "react-router-dom";
import "./App.css";
import { useEffect } from "react";
import { useAuth } from "./contexts/AuthContext";
import { Navigate } from "react-router-dom";
// Định dạng ngày giờ
import { format } from "date-fns";
import { vi } from "date-fns/locale";

function AdminDonHangChiTiet() {
  const { ma_don_hang } = useParams();

  const { isLoggedIn } = useAuth(); // Lấy trạng thái đăng nhập

  // Lấy thông tin đơn hàng theo mã đơn hàng
  useEffect(() => {
    fetch(`http://localhost:8000/api/orders/${ma_don_hang}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Không thể lấy thông tin danh mục");
        }
        return res.json();
      })
      .then((data) => {
        // Kiểm tra trạng thái và lấy dữ liệu
        if (data.status === "success") {
          const dm = data.data; // Lấy dữ liệu danh mục
        } else {
          throw new Error(data.message); // Thông báo lỗi nếu không thành công
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [ma_don_hang]);

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
            src="http://localhost:8000/image/Nen_trong_suot.png"
            className="d-block w-75 mx-auto"
            alt="http://localhost:8000/image/Nen_trong_suot.png"
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

          <div className="container mt-3 mb-5">
            <div className="d-flex align-items-center">
              <div className="col-md-auto">
                <Link
                  to={"/admindonhang"}
                  className="my-0 my-auto btn border border-secondary-subtle text-secondary me-3"
                >
                  <i className="bi bi-arrow-left"></i>
                </Link>
              </div>
              <div className="col-md-auto">
                <h1 className="mb-0">#{ma_don_hang}</h1>
              </div>
              <div className="col-md-auto ms-auto px-3">
                <Link
                  className="text-success"
                  to={`/admindonhangsua/${ma_don_hang}`}
                >
                  <strong>
                    <i class="bi bi-pencil-square"></i> Sửa đơn
                  </strong>
                </Link>
              </div>
              <div className="col-md-auto px-3 text-primary">
                <strong>
                  <i class="bi bi-printer"></i> In đơn
                </strong>
              </div>
              <div className="col-md-auto ps-3 pe-2 text-danger">
                <strong>
                  <i class="bi bi-x-circle"></i> Hủy đơn
                </strong>
              </div>
            </div>
            <p className="col-md-12 m-0">20/11/2024 03:03</p>

            <form>
              <div className="d-flex flex-wrap">
                <div className="col-md-8 px-0">
                  <div className="d-flex flex-wrap me-3">
                    <div className="col-md-12 border border-dark rounded-3 my-3 p-2">
                      <h5 className="mb-2 py-1">Thông tin giao hàng</h5>

                      <div className="row mb-3">
                        <div className="col-md">
                          <label className="form-label">Họ và tên</label>
                          <input
                            type="text"
                            className="form-control"
                            // value={ten_san_pham}
                            // onChange={(e) => setTenSanPham(e.target.value)}
                            required
                            placeholder="Nguyễn Văn A"
                          />
                        </div>

                        <div className="col-md">
                          <label className="form-label">Số điện thoại</label>
                          <input
                            type="number"
                            className="form-control"
                            // value={ten_san_pham}
                            // onChange={(e) => setTenSanPham(e.target.value)}
                            required
                            placeholder="0364395907"
                          />
                        </div>
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Địa chỉ</label>
                        <input
                          className="form-control"
                          // value={mo_ta}
                          // onChange={(e) => setMoTa(e.target.value)}
                          required
                          placeholder="564/19A Đường Tỉnh Lộ 15 Tổ 8 Ấp Bến Đình Xã Nhuận Đức Huyện 
                          Củ Chi Thành Phố Hồ Chí Minh"
                        ></input>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md px-0">
                  <div className="d-flex flex-wrap">
                    <div className="col-md-12 border border-dark rounded-3 my-3 p-2">
                      <h5 className="mb-2 py-1">Trạng thái đơn hàng</h5>

                      <div>
                        <select
                          type="number"
                          className="form-select"
                          // value={trang_thai}
                          // onChange={(e) =>
                          //   setTrangThai(Number(e.target.value))
                          // }
                        >
                          <option value="0">Chờ xác nhận</option>
                          <option value="1">Đang xử lý</option>
                          <option value="1">Đã xử lý</option>
                          <option value="1">Đã hủy</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-md border border-dark rounded-3 my-3 p-2">
                      <h5 className="mb-2 py-1">Phương thức thanh toán</h5>

                      <div>
                        <select
                          type="number"
                          className="form-select"
                          // value={trang_thai}
                          // onChange={(e) =>
                          //   setTrangThai(Number(e.target.value))
                          // }
                        >
                          <option value="0">Thanh toán khi nhận hàng</option>
                          <option value="1">Thanh toán chuyển khoản</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="d-flex flex-wrap">
                <div className="col-md-12 border border-dark rounded-3 my-3 p-2">
                  <h5 className="mb-2 py-1">Chi tiết đơn hàng</h5>

                  <table className="table table-borderless">
                    <thead>
                      <tr>
                        <th className="text-center fw-bold">STT</th>
                        <th colSpan={2} className="fw-bold">
                          Sản phẩm
                        </th>
                        <th className="text-center fw-bold">Số lượng</th>
                        <th className="text-end fw-bold">Đơn giá</th>
                        <th className="text-end fw-bold">Thành tiền</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td className="text-center">1</td>
                        <td style={{ width: "6%" }}>
                          <img
                            src="http://localhost:8000/image/product/test.jpg"
                            alt="http://localhost:8000/image/product/test.jpg"
                            className="w-100 h-auto"
                          />
                        </td>
                        <td>Sản phẩm test1</td>
                        <td className="text-center">2</td>
                        <td className="text-end">
                          {parseInt(199000).toLocaleString("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          })}
                        </td>
                        <td className="text-end">
                          {parseInt(199000 * 2).toLocaleString("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          })}
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">2</td>
                        <td style={{ width: "6%" }}>
                          <img
                            src="http://localhost:8000/image/product/test.jpg"
                            alt="http://localhost:8000/image/product/test.jpg"
                            className="w-100 h-auto"
                          />
                        </td>
                        <td>Sản phẩm test2</td>
                        <td className="text-center">1</td>
                        <td className="text-end">
                          {parseInt(159000).toLocaleString("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          })}
                        </td>
                        <td className="text-end">
                          {parseInt(159000 * 1).toLocaleString("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          })}
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">3</td>
                        <td style={{ width: "6%" }}>
                          <img
                            src="http://localhost:8000/image/product/test.jpg"
                            alt="http://localhost:8000/image/product/test.jpg"
                            className="w-100 h-auto"
                          />
                        </td>
                        <td>Sản phẩm test3</td>
                        <td className="text-center">3</td>
                        <td className="text-end">
                          {parseInt(99000).toLocaleString("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          })}
                        </td>
                        <td className="text-end">
                          {parseInt(99000 * 3).toLocaleString("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          })}
                        </td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <td className="text-center">Ghi chú</td>
                        <td colSpan={3}>
                          <div className="">
                            <textarea className="form-control h-50"></textarea>
                          </div>
                        </td>
                        <td className="text-end fw-bold">Tổng hóa đơn</td>
                        <td className="text-end fw-bold">
                          {parseInt(854000).toLocaleString("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          })}
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDonHangChiTiet;
