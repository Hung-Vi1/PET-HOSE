import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";
import { NavLink } from "react-router-dom";
import "./App.css";

function AdminSanPhamSua() {
  const { user } = useAuth();
  const { ma_san_pham } = useParams();
  const [tenSanPham, setTenSanPham] = useState("");
  const [ma_danh_muc, setMaDanhMuc] = useState("");
  const [moTa, setMoTa] = useState("");
  const [soLuong, setSoLuong] = useState(0);
  const [gia, setGia] = useState(0);
  const [giamGia, setGiamGia] = useState(0);
  const [hinhAnh, setHinhAnh] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [danhMuc, setDanhMuc] = useState([]);
  const [trangThai, setTrangThai] = useState(0); // Mặc định là Hiện (1)

  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    // Lấy thông tin sản phẩm hiện tại
    fetch(`${apiUrl}/api/products/${ma_san_pham}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          const sp = data.data;
          setTenSanPham(sp.ten_san_pham);
          setMaDanhMuc(sp.ma_danh_muc);
          setMoTa(sp.mo_ta);
          setSoLuong(sp.so_luong);
          setGia(sp.gia);
          setGiamGia(sp.giam_gia);
          setHinhAnh(sp.hinh_anh);
          setTrangThai(sp.trang_thai);
          setImagePreview(`${apiUrl}/image/product/${sp.hinh_anh}`);
        } else {
          setError(data.message);
        }
      })
      .catch((error) => setError(error.message));
  }, [ma_san_pham]);

  useEffect(() => {
    // Lấy danh sách danh mục
    fetch(`${apiUrl}/api/category`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          setDanhMuc(data.data); // Giả sử dữ liệu trả về là một mảng
        } else {
          setError(data.message);
        }
      })
      .catch((error) => setError(error.message));
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Kiểm tra loại tệp là hình ảnh
      const fileType = file.type.split("/")[0]; // Lấy phần loại tệp trước "/"
      if (fileType === "image") {
        setHinhAnh(file);
        // Chuyển đổi hình ảnh thành base64
        const reader = new FileReader();
        reader.onloadend = () => {
          setImagePreview(reader.result); // Hiển thị preview hình ảnh
        };
        reader.readAsDataURL(file);
      } else {
        setError("File phải là hình ảnh!");
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage(null);

    const formData = new FormData();
    formData.append("MaDanhMuc", ma_danh_muc);
    formData.append("TenSanPham", tenSanPham);
    formData.append("GiaSP", gia);
    formData.append("GiamGia", giamGia);
    formData.append("MoTa", moTa);
    formData.append("SoLuong", soLuong);
    formData.append("TrangThai", trangThai); // Gửi trạng thái (0 hoặc 1)

    if (hinhAnh) {
      formData.append("HinhAnh", hinhAnh); // Gửi file ảnh
    }

    fetch(`${apiUrl}/api/products/update/${ma_san_pham}`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          setSuccessMessage("Cập nhật sản phẩm thành công!");
        } else {
          setError(data.message);
        }
      })
      .catch((error) => setError(error.message));
  };

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
              className="list-group-item list-group-item-action my-0 rounded-5 border-0 active"
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

          <div className="container mt-3 mb-5">
            <div className="d-flex">
              <Link
                to={"/adminsanpham"}
                className="my-0 my-auto btn border border-secondary-subtle text-secondary me-3 float-left"
              >
                <i className="bi bi-arrow-left"></i>
              </Link>
              <h1 className="float-left">Cập nhật sản phẩm</h1>
            </div>

            {error && <div className="alert alert-danger">{error}</div>}
            {successMessage && (
              <div className="alert alert-success">{successMessage}</div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="d-flex flex-wrap">
                <div className="col-md-8 px-0">
                  <div className="d-flex flex-wrap me-3">
                    <div className="col-md-12 border border-dark rounded-3 my-3 p-2">
                      <h5 className="mb-2 py-1">Thông tin sản phẩm</h5>

                      <div className="mb-3">
                        <div className="form-group">
                          <label>Tên sản phẩm</label>
                          <input
                            type="text"
                            className="form-control"
                            value={tenSanPham}
                            onChange={(e) => setTenSanPham(e.target.value)}
                            required
                          />
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md">
                          <div className="form-group">
                            <label>Mã danh mục</label>
                            <select
                              className="form-select"
                              value={ma_danh_muc}
                              onChange={(e) => setMaDanhMuc(e.target.value)}
                              required
                            >
                              {danhMuc.map((dm) => (
                                <option
                                  key={dm.ma_danh_muc}
                                  value={dm.ma_danh_muc}
                                >
                                  {dm.ten_danh_muc}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div className="col-md-2">
                          <div className="form-group">
                            <label>Số lượng</label>
                            <input
                              type="number"
                              className="form-control"
                              value={soLuong}
                              onChange={(e) => setSoLuong(e.target.value)}
                              required
                            />
                          </div>
                        </div>

                        <div className="col-md-2">
                          <div className="form-group">
                            <label>Trạng thái</label>
                            <select
                              className="form-select"
                              value={trangThai}
                              onChange={(e) => setTrangThai(e.target.value)}
                              required
                            >
                              <option value="1">Hiện</option>
                              <option value="0">Ẩn</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <div className="mb-3">
                        <div className="form-group">
                          <label>Mô tả</label>
                          <textarea
                            className="form-control"
                            value={moTa}
                            onChange={(e) => setMoTa(e.target.value)}
                            required
                          />
                        </div>
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
                            onChange={handleFileChange}
                          />
                        </div>

                        {imagePreview && (
                          <div className="mt-3">
                            <img
                              src={imagePreview}
                              alt={imagePreview}
                              className="img-preview"
                              style={{
                                maxWidth: "80%",
                                // height: "auto",
                                // maxHeight: "200px",
                                marginBottom: "10px",
                              }}
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-12 px-0">
                  <div className="d-flex flex-wrap">
                    <div className="col-md-12 border border-dark rounded-3 my-3 p-2">
                      <h5 className="mb-2 py-1">Thông tin giá</h5>

                      <div className="row">
                        <div className="col-md">
                          <div className="form-group">
                            <label>Giá sản phẩm</label>
                            <input
                              type="number"
                              className="form-control"
                              value={gia}
                              onChange={(e) => setGia(e.target.value)}
                              required
                            />
                          </div>
                        </div>

                        <div className="col-md">
                          <div className="form-group">
                            <label>Giá khuyến mãi</label>
                            <input
                              type="number"
                              className="form-control"
                              value={giamGia}
                              onChange={(e) => setGiamGia(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="d-flex justify-content-end">
                <Link
                  to={"/adminsanpham"}
                  type="button"
                  className="btn btn-outline-danger me-2"
                >
                  Hủy
                </Link>

                <button type="submit" className="btn btn-primary ms-2 my-auto">
                  Cập nhật
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminSanPhamSua;
