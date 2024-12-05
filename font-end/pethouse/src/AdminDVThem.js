import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./App.css";

function AdminDVThem() {
  // const { user } = useAuth();
  const navigate = useNavigate();

  const [ten_dich_vu, setTenDichVu] = useState("");
  const [gia, setGia] = useState(0);
  const [giam_gia, setGiamGia] = useState(0);
  const [mo_ta, setMoTa] = useState("");
  const [hinh_anh, setHinhAnh] = useState("");
  const [maDanhMuc, setMaDanhMuc] = useState(1); // Mặc định là danh mục "Chó cảnh"
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("TenSanPham", ten_dich_vu);
    formData.append("GiaSP", gia);
    formData.append("GiamGia", giam_gia);
    formData.append("MoTa", mo_ta);
    formData.append("HinhAnh", hinh_anh);
    formData.append("MaDanhMuc", maDanhMuc);

    fetch("http://localhost:8000/api/services/store", {
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
    <div className="container-fluid admintrangchu">
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
              className="list-group-item list-group-item-action mt-2 mb-0 rounded-0 active"
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
              className="list-group-item list-group-item-action my-0 rounded-0"
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
          <nav className="navbar navbar-expand-lg bg-primary p-0" data-bs-theme="dark">
            <div className="container-fluid">
              <a className="navbar-brand" href="/#">
                PetHouse
              </a>
            </div>
          </nav>

          <div className="container mt-3 mb-5">
            <h1 className="mb-0">Thêm dịch vụ</h1>
            {error && <p className="text-danger">{error}</p>}

            <form onSubmit={handleSubmit}>
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

              <div className="mb-3">
                <label className="form-label">Mô tả dịch vụ</label>
                <textarea
                  className="form-control"
                  value={mo_ta}
                  onChange={(e) => setMoTa(e.target.value)}
                  required
                ></textarea>
              </div>

              <div className="mb-3">
                <label className="form-label">Ảnh dịch vụ</label>
                <input
                  type="file"
                  className="form-control"
                  accept="image/*"
                  onChange={(e) => setHinhAnh(e.target.files[0])}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Danh mục</label>
                <select
                  className="form-control"
                  value={maDanhMuc}
                  onChange={(e) => setMaDanhMuc(Number(e.target.value))}
                  required
                >
                  <option value={1}>Chó cảnh</option>
                  <option value={2}>Mèo cảnh</option>
                </select>
              </div>

              <div className="d-flex justify-content-end">
                <button type="submit" className="btn btn-primary">
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
