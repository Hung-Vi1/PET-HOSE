import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function AdminSanPhamSua() {
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
          setGiamGia(sp.giam_gia);
          setHinhAnh(sp.hinh_anh);
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
      setHinhAnh(file);
      setImagePreview(URL.createObjectURL(file));
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
    if (hinhAnh) {
      formData.append("HinhAnh", hinhAnh);
    }

    console.log(formData);

    fetch(`http://localhost:8000/api/products/update/${ma_san_pham}`, {
      method: "PUT",
      body: formData,
      headers: {
        Accept: "application/json",
      },
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
    <div className="container">
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
        <div className="form-group">
          <label>Mã danh mục</label>
          <select
            className="form-control"
            value={ma_danh_muc}
            onChange={(e) => setMaDanhMuc(e.target.value)}
            required
          >
            {danhMuc.map((dm) => (
              <option key={dm.ma_danh_muc} value={dm.ma_danh_muc}>
                {dm.ten_danh_muc}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Mô tả</label>
          <textarea
            className="form-control"
            value={moTa}
            onChange={(e) => setMoTa(e.target.value)}
            required
          />
        </div>
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
        <div className="form-group">
          <label>Giá khuyến mãi</label>
          <input
            type="number"
            className="form-control"
            value={giamGia}
            onChange={(e) => setGiamGia(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Hình ảnh</label>
          <input
            type="file"
            className="form-control"
            onChange={handleFileChange}
          />
          {imagePreview && (
            <img src={imagePreview} alt="Preview" className="img-preview" />
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          Cập nhật
        </button>
      </form>
    </div>
  );
}

export default AdminSanPhamSua;
