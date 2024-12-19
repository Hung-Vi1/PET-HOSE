import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";
import { NavLink } from "react-router-dom";
import "./App.css";

function Admin_Suabv() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { id } = useParams();

  const [tieu_de, setTieuDe] = useState("");
  const [ma_danh_muc_bv, setMaDanhMucBV] = useState("");
  const [noi_dung, setNoiDung] = useState("");
  const [chi_tiet, setChiTiet] = useState("");
  const [hinh, setHinh] = useState(null);
  const [trang_thai, setTrangThai] = useState(1);
  const [danhMucBV, setDanhMucBV] = useState([]);
  const [error, setError] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    // Lấy danh mục bài viết
    fetch(`${apiUrl}/api/catagorysNews`)
      .then((res) => res.json())
      .then((data) => setDanhMucBV(data.data))
      .catch(() => setError("Không thể lấy danh mục bài viết"));

    // Nếu có id, tải thông tin bài viết để chỉnh sửa
    if (id) {
      fetch(`${apiUrl}/api/News/${id}`)
        .then((res) => res.json())
        .then((data) => {
          const {
            tieu_de,
            ma_danh_muc_bv,
            noi_dung,
            chi_tiet,
            trang_thai,
            Hinh,
          } = data.data;
          setTieuDe(tieu_de);
          setMaDanhMucBV(ma_danh_muc_bv);
          setNoiDung(noi_dung);
          setChiTiet(chi_tiet);
          setTrangThai(Number(trang_thai)); // Đảm bảo trạng thái là số

          // Cập nhật preview hình ảnh
          if (Hinh) {
            setImagePreview(`${apiUrl}/image/News/${Hinh}`); // Đường dẫn đến hình ảnh
          }
        })
        .catch((err) => {
          console.error("Lỗi khi lấy bài viết:", err);
          setError("Không thể lấy thông tin bài viết.");
        });
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Kiểm tra người dùng đã đăng nhập hay chưa
    if (!user) {
      alert("Bạn cần đăng nhập trước khi sửa bài viết!");
      navigate("/login");
      return;
    }

    // Chuẩn bị dữ liệu gửi lên server
    const formData = new FormData();
    formData.append("Mataikhoan", user.Mataikhoan);
    formData.append("MaDMBV", ma_danh_muc_bv);
    formData.append("TieuDe", tieu_de);
    formData.append("NoiDung", noi_dung);
    formData.append("ChiTiet", chi_tiet);
    if (hinh) {
      formData.append("Hinh", hinh);
    }
    formData.append("TrangThai", trang_thai);

    // Gửi dữ liệu đến API
    fetch(`${apiUrl}/api/News/${id}`, {
      method: "POST",
      body: formData,
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((err) => {
            console.error("Lỗi từ server:", err);
            throw new Error(err.message || "Lỗi khi sửa bài viết");
          });
        }
        return res.json();
      })
      .then(() => {
        alert("Sửa bài viết thành công!");
        navigate("/Admin_BV");
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
              className="list-group-item list-group-item-action my-0 rounded-5 border-0 active"
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
            <div className="d-flex align-items-center">
              <Link
                to={"/Admin_BV"}
                className="my-0 my-auto btn border border-secondary-subtle text-secondary me-3"
              >
                <i className="bi bi-arrow-left"></i>
              </Link>
              <h1 className="mb-0">Sửa Bài Viết</h1>
            </div>
            {error && <p className="text-danger">{error}</p>}

            <form onSubmit={handleSubmit}>
              <div className="d-flex flex-wrap">
                <div className="col-md-8 px-0">
                  <div className="d-flex flex-wrap me-3">
                    <div className="col-md-12 border border-dark rounded-3 my-3 p-2">
                      <h5 className="mb-2 py-1">Thông tin bài viết</h5>
                      <div className="mb-3">
                        <label className="form-label">Tên bài viết</label>
                        <input
                          type="text"
                          className="form-control"
                          value={tieu_de}
                          onChange={(e) => setTieuDe(e.target.value)}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Nội Dung</label>
                        <textarea
                          className="form-control"
                          rows="5"
                          value={noi_dung}
                          onChange={(e) => setNoiDung(e.target.value)}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Chi Tiết</label>
                        <textarea
                          className="form-control"
                          rows="5"
                          value={chi_tiet}
                          onChange={(e) => setChiTiet(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md px-0">
                  <div className="d-flex flex-wrap">
                    <div className="col-md-12 border border-dark rounded-3 my-3 p-2">
                      <h5 className="mb-2 py-1">Ảnh bài viết</h5>

                      <input
                        type="file"
                        className="form-control"
                        onChange={(e) => {
                          setHinh(e.target.files[0]);
                          setImagePreview(
                            URL.createObjectURL(e.target.files[0])
                          );
                        }}
                      />
                      {imagePreview && (
                        <div className="mt-3">
                          <img
                            src={imagePreview}
                            alt={imagePreview}
                            style={{
                              maxWidth: "100%",
                              marginBottom: "10px",
                            }}
                          />
                        </div>
                      )}
                    </div>

                    <div className="col-md border border-dark rounded-3 my-3 p-2">
                      <h5 className="mb-2 py-1">Thông tin khác</h5>

                      <div className="mb-3">
                        <label className="form-label">Danh mục bài viết</label>
                        <select
                          className="form-select"
                          value={ma_danh_muc_bv}
                          onChange={(e) => setMaDanhMucBV(e.target.value)}
                          required
                        >
                          <option value="">Chọn danh mục</option>
                          {danhMucBV.map((item) => (
                            <option
                              key={item.ma_danh_muc_BV}
                              value={item.ma_danh_muc_BV}
                            >
                              {item.ten_danh_muc_BV}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Trạng Thái</label>
                        <select
                          className="form-select"
                          value={trang_thai}
                          onChange={(e) => setTrangThai(Number(e.target.value))}
                          required
                        >
                          <option value={1}>Hiển thị</option>
                          <option value={0}>Ẩn</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="d-flex justify-content-end">
                <button type="submit" className="btn btn-outline-primary">
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

export default Admin_Suabv;
