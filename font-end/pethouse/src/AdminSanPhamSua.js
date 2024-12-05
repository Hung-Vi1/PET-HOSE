import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";

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
  const [trangThai, setTrangThai] = useState(1); // Mặc định là Hiện

  useEffect(() => {
    // Lấy thông tin sản phẩm hiện tại
    fetch(`http://localhost:8000/api/products/${ma_san_pham}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          const sp = data.data;
          setTenSanPham(sp.ten_san_pham);
          setMaDanhMuc(sp.ma_danh_muc);
          setMoTa(sp.mo_ta);
          setSoLuong(sp.so_luong);
          setGia(sp.gia);
          setGiamGia(sp.giam_gia || 0); // Nếu không có giá trị, đặt mặc định là 0
          setHinhAnh(sp.hinh_anh);
          setTrangThai(sp.trang_thai);
          setImagePreview(`http://localhost:8000/storage/${sp.hinh_anh}`);
        } else {
          setError(data.message);
        }
      })
      .catch((error) => setError(error.message));
  }, [ma_san_pham]);

  useEffect(() => {
    // Lấy danh sách danh mục
    fetch("http://localhost:8000/api/category")
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
      const fileType = file.type.split("/")[0];
      if (fileType === "image") {
        setHinhAnh(file);
        const reader = new FileReader();
        reader.onloadend = () => {
          setImagePreview(reader.result);
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
    formData.append("MoTa", moTa);
    formData.append("SoLuong", soLuong);
    formData.append("TrangThai", trangThai);

    // Kiểm tra và thêm giá trị giảm giá nếu có
    if (giamGia > 0) {
      formData.append("GiamGia", giamGia);
    }

    // Gửi hình ảnh nếu có
    if (hinhAnh) {
      formData.append("HinhAnh", hinhAnh);
    }

    fetch(`http://localhost:8000/api/products/update/${ma_san_pham}`, {
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
              alt="Nen trong suot"
            />
          </Link>

          <div className="list-group list-group-item-primary">
            {/* Menu admin */}
            <Link
              to={"/adminsanpham"}
              className="list-group-item list-group-item-action active"
            >
              Sản phẩm
            </Link>
            <Link to={"/admindanhmuc"} className="list-group-item">
              Danh mục
            </Link>
            <Link to={"/admintaikhoan"} className="list-group-item">
              Tài khoản
            </Link>
          </div>
        </div>

        <div className="col-md p-0">
          <nav className="navbar navbar-expand-lg bg-primary p-0">
            <div className="container-fluid">
              <button
                className="btn btn-outline-light"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#openMenu"
                aria-expanded="false"
              >
                <i className="bi bi-list"></i>
              </button>
              <span className="navbar-brand">PetHouse</span>
              <ul className="navbar-nav ms-auto">
                <li className="nav-item dropdown">
                  <span
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Xin chào, {user.Hovaten || "Admin"}
                  </span>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to={"/"}>
                        Xem trang chủ
                      </Link>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/#">
                        Đăng xuất
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </nav>

          <div className="container mt-4">
            <h1>Cập nhật sản phẩm</h1>
            {error && <div className="alert alert-danger">{error}</div>}
            {successMessage && (
              <div className="alert alert-success">{successMessage}</div>
            )}
            <form onSubmit={handleSubmit}>
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

              {/* Form các trường */}
              <button type="submit" className="btn btn-primary">
                Cập nhật
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminSanPhamSua;
