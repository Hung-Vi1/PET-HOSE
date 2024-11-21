import React from "react";
import { useParams, Link } from "react-router-dom";
import "./App.css";
import { useEffect } from "react";
import { useAuth } from "./contexts/AuthContext";
import { Navigate } from "react-router-dom";

function AdminDonHangSua() {
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
            <div className="d-flex">
              <Link
                to={"/admindonhang"}
                className="my-0 my-auto btn border border-secondary-subtle text-secondary me-3"
              >
                <i className="bi bi-arrow-left"></i>
              </Link>
              <h1 className="mb-0">Chi tiết đơn hàng SP{ma_don_hang}</h1>
            </div>

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
                        <textarea
                          className="form-control"
                          rows={1}
                          // value={mo_ta}
                          // onChange={(e) => setMoTa(e.target.value)}
                          required
                        ></textarea>
                      </div>

                      <div className="row mb-3">
                        <div className="col-md">
                          <label className="form-label">Mã danh mục</label>
                          <select
                            className="form-select"
                            // value={ma_danh_muc}
                            // onChange={(e) => setMaDanhMuc(e.target.value)}
                            required
                          >
                            <option value="" disabled>
                              Chọn loại sản phẩm
                            </option>
                            {/* {danhMuc.map((loaiSP) => (
                              <option
                                key={loaiSP.ma_danh_muc}
                                value={loaiSP.ma_danh_muc}
                              >
                                {loaiSP.ten_danh_muc}
                              </option>
                            ))} */}
                          </select>
                        </div>
                        <div className="col-md">
                          <label className="form-label">Số lượng</label>
                          <input
                            type="number"
                            className="form-control"
                            // value={so_luong}
                            // onChange={(e) => setSoLuong(Number(e.target.value))}
                            required
                          />
                        </div>
                      </div>

                      <div className="row mb-3">
                        <div className="col-md">
                          <label className="form-label">Lượt xem</label>
                          <input
                            type="number"
                            className="form-control"
                            // value={luot_xem}
                            // onChange={(e) => setLuotXem(Number(e.target.value))}
                            readOnly // Lượt xem mặc định là 0
                          />
                        </div>
                        <div className="col-md">
                          <label className="form-label">Lượt bán</label>
                          <input
                            type="number"
                            className="form-control"
                            // value={luot_ban}
                            // onChange={(e) => setLuotBan(Number(e.target.value))}
                            readOnly // Lượt bán mặc định là 0
                          />
                        </div>
                      </div>

                      <div className="row mb-3">
                        <div className="col-md">
                          <label id="TrangThai" className="form-label">
                            Trạng thái
                          </label>
                          <select
                            type="number"
                            className="form-select"
                            // value={trang_thai}
                            // onChange={(e) =>
                            //   setTrangThai(Number(e.target.value))
                            // }
                          >
                            <option value="0">Ẩn</option>
                            <option value="1">Hiện</option>
                          </select>
                        </div>
                        <div className="col-md">
                          <label className="form-label">Ngày tạo</label>
                          <input
                            type="date"
                            className="form-control"
                            // value={ngay_tao}
                            // onChange={(e) => setNgayTao(e.target.value)}
                            readOnly // Ngày tạo mặc định là ngày hiện tại
                          />
                        </div>
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Mô tả</label>
                        <textarea
                          className="form-control"
                          // value={mo_ta}
                          // onChange={(e) => setMoTa(e.target.value)}
                          required
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md px-0">
                  <div className="d-flex flex-wrap">
                    <div className="col-md-12 border border-dark rounded-3 my-3 p-2">
                      <h5 className="mb-2 py-1">Ảnh sản phẩm</h5>

                      <div className="text-center">
                        <div className="d-flex justify-content-center py-2">
                          <input
                            type="file"
                            className="form-control"
                            accept="image/*"
                            // onChange={(e) => setHinhAnh(e.target.files[0])}
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-md border border-dark rounded-3 my-3 p-2">
                      <h5 className="mb-2 py-1">Thông tin giá</h5>

                      <div className="mb-3">
                        <label className="form-label">Giá sản phẩm</label>
                        <input
                          type="number"
                          className="form-control"
                          // value={gia}
                          // onChange={(e) => setGia(Number(e.target.value))}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Giảm giá</label>
                        <input
                          type="number"
                          className="form-control"
                          // value={giam_gia}
                          // onChange={(e) => setGiamGia(Number(e.target.value))}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="d-flex justify-content-end">
                <button type="button" className="btn btn-outline-danger me-2">
                  Xóa
                </button>
                <button type="submit" className="btn btn-primary ms-2">
                  Thêm sản phẩm
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDonHangSua;
