import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";
import "./App.css";

function AdminDVSua() {
  const { user } = useAuth();
  const { maDichVu } = useParams(); // Lấy mã dịch vụ từ URL
  const navigate = useNavigate();

  const [TenSanPham, setTenSanPham] = useState("");
  const [GiaSP, setGiaSP] = useState(0);
  const [GiamGia, setGiamGia] = useState(0);
  const [MoTa, setMoTa] = useState("");
  const [HinhAnh, setHinhAnh] = useState(null);
  const [MaDanhMuc, setMaDanhMuc] = useState(1);
  const [TrangThai, setTrangThai] = useState(1);
  const [TenDanhMuc, setTenDanhMuc] = useState(""); // Thêm để lưu tên danh mục
  const [error, setError] = useState(null);

  // Lấy thông tin dịch vụ hiện tại
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/services/${maDichVu}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Không thể tải thông tin dịch vụ");
        }
        return res.json();
      })
      .then((data) => {
        if (data.status === "success" && data.data) {
          const service = data.data;
          setTenSanPham(service.ten_dich_vu || "");
          setGiaSP(service.gia || 0);
          setGiamGia(service.giam_gia || 0);
          setMoTa(service.mo_ta || "");
          setMaDanhMuc(service.ma_danh_muc || 1);
          setTrangThai(service.trang_thai || 1);
          setTenDanhMuc(service.tenDM || ""); // Cập nhật tên danh mục
          setHinhAnh(service.hinh_anh || null); // Lưu tên hình ảnh (nếu có)
        }
      })
      .catch(() => setError("Lỗi khi tải thông tin dịch vụ"));
  }, [maDichVu]);

  // Xử lý cập nhật dịch vụ
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("MaDanhMuc", MaDanhMuc);
    formData.append("TenSanPham", TenSanPham);
    formData.append("GiaSP", GiaSP);
    formData.append("GiamGia", GiamGia);
    formData.append("MoTa", MoTa);
    formData.append("SoLuong", 10); // Hoặc lấy từ giá trị nhập vào
    formData.append("LuotXem", 0);
    formData.append("LuotBan", 0);
    formData.append("ThoiGian", new Date().toISOString());
    formData.append("TrangThai", TrangThai);
    if (HinhAnh) formData.append("HinhAnh", HinhAnh); // Gửi hình ảnh nếu có

    fetch(`http://127.0.0.1:8000/api/services/update/${maDichVu}`, {
      method: "POST", // Sử dụng phương thức PUT
      body: formData,
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Cập nhật thất bại");
        }
        return res.json();
      })
      .then(() => {
        alert("Cập nhật thành công!");
        navigate("/admindichvuchamsoc");
      })
      .catch((err) => {
        console.error(err);
        alert("Có lỗi xảy ra khi cập nhật dịch vụ.");
      });
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div
            id="openMenu"
            className="col-md-2 p-0 bg-primary collapse collapse-horizontal show"
            style={{ minHeight: "100vh" }}
          >
            <Link to={"/"}>
              <img
                src={`http://localhost:8000/image/Nen_trong_suot.png`}
                className="d-block w-75 mx-auto"
                alt="Logo"
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
                className="list-group-item list-group-item-action my-0  rounded-0"
              >
                <h5 className="mb-0 py-1">Sản phẩm</h5>
              </Link>
              <Link
                to={"/admindichvuchamsoc"}
                className="list-group-item list-group-item-action my-0 rounded-0 active"
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
                className="list-group-item list-group-item-action my-0 rounded-0"
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
                >
                  <i className="bi bi-list"></i>
                </button>
                <a className="navbar-brand" href="/#">
                  PetHouse
                </a>
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="/#"
                      role="button"
                      data-bs-toggle="dropdown"
                    >
                      Xin chào, {user.Hovaten || "Không có tên"}
                    </a>
                    <ul className="dropdown-menu bg-primary p-0 mt-0 border-0 rounded-0">
                      <li>
                        <Link
                          className="menu-header-top dropdown-item m-0 py-2"
                          to={"/"}
                        >
                          Xem trang chủ
                        </Link>
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
            </nav>

            <div className="container mt-3 mb-5">
              <h1 className="text-capitalize">{TenSanPham}</h1>
              {error && <p className="text-danger">{error}</p>}
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Tên dịch vụ</label>
                  <input
                    type="text"
                    className="form-control"
                    value={TenSanPham}
                    onChange={(e) => setTenSanPham(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Giá</label>
                  <input
                    type="number"
                    className="form-control"
                    value={GiaSP}
                    onChange={(e) => setGiaSP(Number(e.target.value))}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Giảm giá (%)</label>
                  <input
                    type="number"
                    className="form-control"
                    value={GiamGia}
                    onChange={(e) => setGiamGia(Number(e.target.value))}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Mô tả</label>
                  <textarea
                    className="form-control"
                    value={MoTa}
                    onChange={(e) => setMoTa(e.target.value)}
                    required
                  ></textarea>
                </div>

                <div className="mb-3">
                  <label className="form-label">Hình ảnh</label>
                  <input
                    type="file"
                    className="form-control"
                    accept="image/*"
                    onChange={(e) => setHinhAnh(e.target.files[0])}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Danh mục</label>
                  <select
                    className="form-control"
                    value={MaDanhMuc}
                    onChange={(e) => setMaDanhMuc(Number(e.target.value))}
                  >
                    <option value={1}>Chó cảnh</option>
                    <option value={2}>Mèo cảnh</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label">Trạng thái</label>
                  <select
                    className="form-control"
                    value={TrangThai}
                    onChange={(e) => setTrangThai(Number(e.target.value))}
                  >
                    <option value={1}>Hiện</option>
                    <option value={2}>Ẩn</option>
                  </select>
                </div>

                <button type="submit" className="btn btn-primary">
                  Cập nhật
                </button>
                <Link
                  to="/admindichvuchamsoc"
                  className="btn btn-secondary ms-2"
                >
                  Quay lại
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminDVSua;
