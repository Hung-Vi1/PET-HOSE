import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ThanhToan() {
  const [cart, setCart] = useState([]);
  const [userData, setUserData] = useState({
    name: "",
    phone: "",
    address: "",
    Mataikhoan: "",
  });
  const [formData, setFormData] = useState({
    note: "",
    paymentMethod: "cod",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const savedCart = sessionStorage.getItem("cart");
    setCart(savedCart ? JSON.parse(savedCart) : []);

    const user = sessionStorage.getItem("user");
    if (user) {
      const parsedUser = JSON.parse(user);
      setUserData({
        name: parsedUser.Hovaten,
        phone: parsedUser.SDT,
        address: parsedUser.DiaChi,
        Mataikhoan: parsedUser.Mataikhoan || "",
      });
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      return total + item.quantity * parseInt(item.gia);
    }, 0);
  };

  const handleSubmit = async () => {
    if (!userData.Mataikhoan) {
      alert("Vui lòng nhập mã tài khoản để đặt hàng.");
      return;
    }

    const orderData = {
      Mataikhoan: userData.Mataikhoan,
      PTTT: formData.paymentMethod === "cod" ? "Ship COD" : "Chuyển khoản",
      GhiChu: formData.note,
      chi_tiet: cart.map((item) => ({
        MaSP: item.ma_san_pham,
        SoLuong: item.quantity,
      })),
    };

    try {
      const response = await fetch("http://127.0.0.1:8000/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      const result = await response.json();

      if (response.ok) {
        alert("Đơn hàng đã được gửi thành công!");

        // Xoá giỏ hàng khỏi sessionStorage
        sessionStorage.removeItem("cart");

        // Cập nhật state cart về mảng rỗng
        setCart([]);

        // Chuyển hướng người dùng về trang chủ
        navigate("/");
      } else {
        console.error("Lỗi khi đặt hàng:", result.message);
        alert("Đã xảy ra lỗi khi đặt hàng, vui lòng thử lại.");
      }
    } catch (error) {
      console.error("Lỗi kết nối tới API:", error);
      alert("Không thể kết nối tới máy chủ, vui lòng thử lại sau.");
    }
  };

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-8">
          <h2 className="mb-4">Chi tiết đơn hàng</h2>
          <table className="table">
            <thead>
              <tr>
                <th style={{ textAlign: "center" }}>Hình ảnh</th>
                <th style={{ width: "20%", textAlign: "center" }}>Tên sản phẩm</th>
                <th style={{ textAlign: "center" }}>Số lượng</th>
                <th style={{ textAlign: "center" }}>Giá</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={index}>
                  <td style={{ textAlign: "center" }}>
                    <img
                      src={`image/product/${item.hinh_anh}`}
                      alt={item.ten_san_pham}
                      style={{ width: "100px", height: "auto" }}
                    />
                  </td>
                  <td style={{ textAlign: "center" }}>{item.ten_san_pham}</td>
                  <td style={{ textAlign: "center" }}>{item.quantity}</td>
                  <td style={{ textAlign: "center" }}>
                    {parseInt(item.gia).toLocaleString("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    })}
                  </td>
                </tr>
              ))}
              <tr>
                <td colSpan="3" style={{ textAlign: "right", fontWeight: "bold" }}>
                  Tổng cộng:
                </td>
                <td style={{ textAlign: "center", fontWeight: "bold" }}>
                  {calculateTotal().toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  })}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="col-md-4">
          <h4 className="mb-4">Thông tin giao hàng</h4>
          <div className="mb-3">
            <label className="form-label">Tên</label>
            <input
              type="text"
              className="form-control"
              value={userData.name}
              name="name"
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Số điện thoại</label>
            <input
              type="text"
              className="form-control"
              value={userData.phone}
              name="phone"
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Địa chỉ</label>
            <input
              type="text"
              className="form-control"
              value={userData.address}
              name="address"
              onChange={handleInputChange}
            />
          </div>
          <form>
            <div className="mb-3">
              <label className="form-label">Ghi chú</label>
              <textarea
                name="note"
                className="form-control"
                placeholder="Ghi chú (tuỳ chọn)"
                value={formData.note}
                onChange={(e) =>
                  setFormData({ ...formData, note: e.target.value })
                }
              ></textarea>
            </div>
            <div className="mb-3">
              <label className="form-label">Phương thức thanh toán</label>
              <select
                name="paymentMethod"
                className="form-control"
                value={formData.paymentMethod}
                onChange={(e) =>
                  setFormData({ ...formData, paymentMethod: e.target.value })
                }
              >
                <option value="cod">Ship COD</option>
                <option value="bank">Chuyển khoản</option>
              </select>
            </div>
          </form>
        </div>
      </div>

      <div className="text-right py-3">
        <button className="btn btn-success btn-lg" onClick={handleSubmit}>
          Thanh toán
        </button>
      </div>
    </div>
  );
}

export default ThanhToan;
