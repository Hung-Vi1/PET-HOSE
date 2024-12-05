import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import "./App.css";

function AdminMGGSua() {
  const { maGiamGia } = useParams(); // Lấy mã giảm giá từ URL
  const navigate = useNavigate();

  const [MaGiamGia, setMaGiamGia] = useState(""); // Mã giảm giá
  const [LoaiGiam, setLoaiGiam] = useState(""); // Loại giảm giá
  const [Code, setCode] = useState(""); // Mã code
  const [Value, setValue] = useState(0); // Giá trị giảm giá
  const [MinOrderValue, setMinOrderValue] = useState(0); // Giá trị đơn hàng tối thiểu
  const [ExpiryDate, setExpiryDate] = useState(""); // Ngày hết hạn
  const [UsageLimit, setUsageLimit] = useState(0); // Giới hạn sử dụng
  const [error, setError] = useState(null);
  const [existingCodes, setExistingCodes] = useState([]); // Mảng mã giảm giá hiện có

  // Lấy thông tin mã giảm giá hiện tại
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/coupons/${maGiamGia}`) // Gọi API lấy chi tiết mã giảm giá
      .then((res) => {
        if (!res.ok) {
          throw new Error("Không thể tải thông tin mã giảm giá");
        }
        return res.json();
      })
      .then((data) => {
        if (data.status === "success" && data.data.length > 0) {
          const coupon = data.data[0]; // Lấy đối tượng đầu tiên trong mảng `data`
          setMaGiamGia(coupon.ma_giam_gia || "");
          setLoaiGiam(coupon.loai_giam || "");
          setCode(coupon.code || "");
          setValue(parseFloat(coupon.phan_tram) || 0); // Chuyển đổi giá trị `phan_tram` thành số
          setMinOrderValue(parseFloat(coupon.so_tien_nho_nhat) || 0); // Chuyển đổi giá trị `so_tien_nho_nhat` thành số
          setExpiryDate(coupon.ngay_het_giam || "");
          setUsageLimit(coupon.so_luong || 0); // Số lượng
        } else {
          setError("Không tìm thấy thông tin mã giảm giá");
        }
      })
      .catch(() => setError("Lỗi khi tải thông tin mã giảm giá"));

    // Lấy danh sách mã giảm giá đã tồn tại
    fetch("http://127.0.0.1:8000/api/coupons")
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success" && data.data) {
          const codes = data.data.map((coupon) => coupon.code);
          setExistingCodes(codes);
        }
      })
      .catch(() => setError("Lỗi khi tải danh sách mã giảm giá"));
  }, [maGiamGia]);

  // Kiểm tra mã giảm giá có bị trùng lặp không
  const isCodeDuplicate = (code) => {
    return existingCodes.includes(code);
  };

  // Xử lý cập nhật mã giảm giá
  const handleSubmit = (e) => {
    e.preventDefault();

    // Kiểm tra mã giảm giá trùng lặp
    if (isCodeDuplicate(Code)) {
      alert("Mã giảm giá này đã tồn tại. Vui lòng chọn mã khác.");
      return;
    }

    const formData = {
      code: Code,
      type: LoaiGiam,
      value: Value,
      min_order_value: MinOrderValue,
      expiry_date: ExpiryDate,
      usage_limit: UsageLimit,
    };

    fetch(`http://127.0.0.1:8000/api/coupons/update/${maGiamGia}`, {
      method: "PUT", // Sử dụng phương thức PUT để cập nhật
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Cập nhật thất bại");
        }
        return res.json();
      })
      .then(() => {
        alert("Cập nhật thành công!");
        navigate("/adminmagiamgia");
      })
      .catch((err) => {
        console.error("Lỗi khi cập nhật:", err);
        alert(`Có lỗi xảy ra khi cập nhật mã giảm giá: ${err.message}`);
      });
  };

  return (
    <div className="container mt-3">
      <h1>Cập Nhật Mã Giảm Giá</h1>
      {error && <p className="text-danger">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Mã giảm giá</label>
          <input
            type="text"
            className="form-control"
            value={Code}
            onChange={(e) => setCode(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Loại giảm giá</label>
          <select
            className="form-control"
            value={LoaiGiam}
            onChange={(e) => setLoaiGiam(e.target.value)}
            required
          >
            <option value="">Chọn loại giảm giá</option>
            <option value="fixed">Giảm giá cố định</option>
            <option value="percentage">Giảm giá theo phần trăm</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Giá trị giảm giá</label>
          <input
            type="number"
            className="form-control"
            value={Value}
            onChange={(e) => setValue(Number(e.target.value))}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Giá trị đơn hàng tối thiểu</label>
          <input
            type="number"
            className="form-control"
            value={MinOrderValue}
            onChange={(e) => setMinOrderValue(Number(e.target.value))}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Ngày hết hạn</label>
          <input
            type="date"
            className="form-control"
            value={ExpiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Giới hạn sử dụng</label>
          <input
            type="number"
            className="form-control"
            value={UsageLimit}
            onChange={(e) => setUsageLimit(Number(e.target.value))}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Cập nhật
        </button>
        <Link to="/adminmagiamgia" className="btn btn-secondary ms-2">
          Quay lại
        </Link>
      </form>
    </div>
  );
}

export default AdminMGGSua;
  