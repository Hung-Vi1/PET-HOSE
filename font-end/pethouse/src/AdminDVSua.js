import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import "./App.css";

function AdminDVSua() {
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
    <div className="container mt-3">
      <h1>Cập Nhật Dịch Vụ</h1>
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
        <Link to="/admindichvuchamsoc" className="btn btn-secondary ms-2">
          Quay lại
        </Link>
      </form>
    </div>
  );
}

export default AdminDVSua;
