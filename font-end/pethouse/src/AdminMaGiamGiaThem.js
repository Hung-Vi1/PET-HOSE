import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminMGGThem() {
  const navigate = useNavigate();

  // Trạng thái cho mã giảm giá
  const [code, setCode] = useState("");
  const [type, setType] = useState("percentage");  // "percentage" or "fixed"
  const [value, setValue] = useState(0);
  const [min_order_value, setMinOrderValue] = useState(0);
  const [expiry_date, setExpiryDate] = useState("");
  const [usage_limit, setUsageLimit] = useState(0);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const couponData = {
      code,
      type,
      value,
      min_order_value,
      expiry_date,
      usage_limit,
    };

    // Gửi yêu cầu thêm mã giảm giá
    fetch("http://localhost:8000/api/coupons/store", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(couponData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          alert("Thêm mã giảm giá thành công!");
          navigate("/adminmagiamgia"); // Chuyển hướng về trang mã giảm giá
        } else {
          throw new Error(data.message || "Có lỗi xảy ra khi thêm mã giảm giá");
        }
      })
      .catch((error) => {
        console.error("Lỗi:", error.message);
        alert(error.message);
      });
  };

  return (
    <div className="container mt-3 mb-5">
      <h1 className="mb-0">Thêm mã giảm giá</h1>
      {error && <p className="text-danger">{error}</p>}

      <form onSubmit={handleSubmit}>
        {/* Form mã giảm giá */}
        <div className="mb-3">
          <label className="form-label">Mã giảm giá</label>
          <input
            type="text"
            className="form-control"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            required
          />
        </div>

        {/* Loại giảm giá */}
        <div className="mb-3">
          <label className="form-label">Loại giảm giá</label>
          <select 
            className="form-control"
            value={type}
            onChange={(e) => setType(e.target.value)}
            required
          >
            <option value="percentage">Giảm theo phần trăm</option>
            <option value="fixed">Giảm theo tiền</option>
          </select>
        </div>

        {/* Giá trị giảm */}
        <div className="mb-3">
          <label className="form-label">
            {type === "fixed" ? "Giảm (VNĐ)" : "Giảm (%)"}
          </label>
          <input
            type="number"
            className="form-control"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            required
          />
        </div>

        {/* Mức tiêu thụ */}
        <div className="mb-3">
          <label className="form-label">Mức tiêu thụ để áp dụng</label>
          <input
            type="number"
            className="form-control"
            value={min_order_value}
            onChange={(e) => setMinOrderValue(e.target.value)}
            required
          />
        </div>

        {/* Hạn sử dụng */}
        <div className="mb-3">
          <label className="form-label">Hạn sử dụng</label>
          <input
            type="date"
            className="form-control"
            value={expiry_date}
            onChange={(e) => setExpiryDate(e.target.value)}
            required
          />
        </div>

        {/* Giới hạn sử dụng */}
        <div className="mb-3">
          <label className="form-label">Giới hạn sử dụng</label>
          <input
            type="number"
            className="form-control"
            value={usage_limit}
            onChange={(e) => setUsageLimit(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Thêm mã giảm giá
        </button>
      </form>
    </div>
  );
}

export default AdminMGGThem;
