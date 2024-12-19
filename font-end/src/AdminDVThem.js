import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";
import { NavLink } from "react-router-dom";
import "./App.css";

function AdminDVThem() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [ten_dich_vu, setTenDichVu] = useState("");
  const [gia, setGia] = useState(0);
  const [giam_gia, setGiamGia] = useState(0);
  const [mo_ta, setMoTa] = useState("");
  const [hinh_anh, setHinhAnh] = useState("");
  const [maDanhMuc, setMaDanhMuc] = useState(1); // Mặc định là danh mục "Chó cảnh"
  const [imagePreview, setImagePreview] = useState(null);
  const [error, setError] = useState(null);

  const apiUrl = process.env.REACT_APP_API_URL;

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("TenSanPham", ten_dich_vu);
    formData.append("GiaSP", gia);
    formData.append("GiamGia", giam_gia);
    formData.append("MoTa", mo_ta);
    formData.append("HinhAnh", hinh_anh);
    formData.append("MaDanhMuc", maDanhMuc);

    fetch(`${apiUrl}/api/services/store`, {
      method: "POST",
      body: formData,
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((err) => {
            throw new Error(err.message || "Lỗi khi thêm dịch vụ");
          });
        }
        return res.json();
      })
      .then((data) => {
        if (data.status === "success") {
          alert("Thêm dịch vụ thành công!");
          // Reset form
          setTenDichVu("");
          setGia(0);
          setGiamGia(0);
          setMoTa("");
          setHinhAnh(null);
          setMaDanhMuc(1); // Reset về mặc định
          setImagePreview(`${apiUrl}/${data.Hinh}`);
          navigate("/admindichvuchamsoc"); // Chuyển hướng về trang danh sách dịch vụ
        } else {
          throw new Error(data.message || "Có lỗi xảy ra");
        }
      })
      .catch((error) => {
        console.error("Lỗi:", error.message);
        alert(error.message);
      });
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
              className="list-group-item list-group-item-action my-0 rounded-5 border-0"
              activeClassName="active"
            >
              <h5 className="mb-0 py-1">Sản phẩm</h5>
            </NavLink>
            <NavLink
              to={"/admindichvuchamsoc"}
              className="list-group-item list-group-item-action my-0 rounded-5 border-0 active"
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
                to={"/admindichvuchamsoc"}
                className="my-0 my-auto btn border border-secondary-subtle text-secondary me-3"
              >
                <i className="bi bi-arrow-left"></i>
              </Link>

              <h1 className="mb-0">Thêm dịch vụ</h1>
            </div>

            {error && <p className="text-danger">{error}</p>}

            <form onSubmit={handleSubmit}>
              <div className="d-flex flex-wrap">
                <div className="col-md-8 px-0">
                  <div className="d-flex flex-wrap me-3">
                    <div className="col-md-12 border border-dark rounded-3 my-3 p-2">
                      <h5 className="mb-2 py-1">Thông tin dịch vụ</h5>

                      <div className="mb-3">
                        <label className="form-label">Tên dịch vụ</label>
                        <input
                          type="text"
                          className="form-control"
                          value={ten_dich_vu}
                          onChange={(e) => setTenDichVu(e.target.value)}
                          required
                        />
                      </div>

                      <div className="row">
                        <div className="col-md">
                          <label className="form-label">Danh mục</label>
                          <select
                            className="form-control"
                            value={maDanhMuc}
                            onChange={(e) =>
                              setMaDanhMuc(Number(e.target.value))
                            }
                            required
                          >
                            <option value={1}>Chó cảnh</option>
                            <option value={2}>Mèo cảnh</option>
                          </select>
                        </div>

                        <div className="col-md">
                          <label className="form-label">Trạng thái</label>
                          <select className="form-control" disabled>
                            <option>Hiện</option>
                          </select>
                        </div>
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Mô tả dịch vụ</label>
                        <textarea
                          className="form-control"
                          value={mo_ta}
                          onChange={(e) => setMoTa(e.target.value)}
                          required
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md px-0">
                  <div className="d-flex flex-wrap">
                    <div className="col-md-12 border border-dark rounded-3 my-3 p-2">
                      <h5 className="mb-2 py-1">Ảnh dịch vụ</h5>

                      <div className="text-center">
                        <div className="d-flex justify-content-center py-2">
                          <input
                            type="file"
                            className="form-control"
                            accept="image/*"
                            onChange={(e) => {
                              setHinhAnh(e.target.files[0]);
                              setImagePreview(
                                URL.createObjectURL(e.target.files[0])
                              );
                            }}
                            required
                          />
                        </div>
                        {imagePreview && (
                          <div className="mt-3">
                            <img
                              src={imagePreview}
                              alt="Preview"
                              style={{
                                width: "100%",
                                height: "250px",
                                borderRadius: "5px",
                              }}
                            />
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="col-md border border-dark rounded-3 my-3 p-2">
                      <h5 className="mb-2 py-1">Thông tin giá</h5>

                      <div className="mb-3">
                        <label className="form-label">Giá dịch vụ</label>
                        <input
                          type="number"
                          className="form-control"
                          value={gia}
                          onChange={(e) => setGia(Number(e.target.value))}
                          required
                        />
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Giảm giá (%)</label>
                        <input
                          type="number"
                          className="form-control"
                          value={giam_gia}
                          onChange={(e) => setGiamGia(Number(e.target.value))}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="d-flex justify-content-end">
                <Link
                  to="/admindichvuchamsoc"
                  className="btn btn-outline-danger me-2"
                >
                  Hủy
                </Link>
                <button type="submit" className="btn btn-primary ms-2 my-auto">
                  Thêm dịch vụ
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDVThem;
