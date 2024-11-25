import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function DatLich() {
  const [services, setServices] = useState([]);
  const [userData, setUserData] = useState({
    name: "",
    phone: "",
    address: "",
    email: "",
    Mataikhoan: "",
    paymentMethod: "", // Thêm thuộc tính paymentMethod
    selectedService: "", // Thêm thuộc tính selectedService
    notes: "", // Ghi chú
  });

  const navigate = useNavigate();

  useEffect(() => {
    const user = sessionStorage.getItem("user");
    if (user) {
      const parsedUser = JSON.parse(user);
      setUserData({
        name: parsedUser.Hovaten,
        phone: parsedUser.SDT,
        address: parsedUser.DiaChi,
        email: parsedUser.Email,
        Mataikhoan: parsedUser.Mataikhoan || "",
        paymentMethod: "", // Mặc định là không có phương thức thanh toán
        selectedService: "", // Dịch vụ mặc định chưa chọn
        notes: "", // Ghi chú mặc định
      });
    }
  }, []);

  useEffect(() => {
    // Lấy danh sách dịch vụ từ API
    fetch("http://127.0.0.1:8000/api/services")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        if (data && data.data) {
          setServices(data.data);
        } else {
          console.error("Dữ liệu không đúng định dạng!");
        }
      })
      .catch((error) => {
        console.error("Lỗi khi gọi API:", error);
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Xây dựng dữ liệu gửi lên API
    const orderData = {
      Mataikhoan: userData.Mataikhoan,  // Mã tài khoản từ userData
      PTTT: userData.paymentMethod,      // Phương thức thanh toán
      GhiChu: userData.notes,            // Ghi chú (nếu có)
      chi_tiet: [
        {
          MaSP: userData.selectedService,  // Mã sản phẩm từ dịch vụ đã chọn
          SoLuong: 1,                      // Số lượng sản phẩm
        },
      ],
    };

    // Gửi dữ liệu lên API
    fetch("http://127.0.0.1:8000/api/orderServices", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),  // Gửi dữ liệu dưới dạng JSON
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        if (data.status === "success") {
          alert("Đặt lịch thành công!");
          navigate("/ ");  // Chuyển hướng tới trang lịch hẹn hoặc trang khác
        } else {
          alert("Có lỗi xảy ra. Vui lòng thử lại.");
        }
      })
      .catch((error) => {
        console.error("Lỗi khi gửi yêu cầu:", error);
        alert(`Lỗi khi gửi yêu cầu: ${error.message}`);
      });
  };

  return (
    <>
      <div className="page-title parallax parallax1">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="page-title-heading">
                <h1 className="title">Đặt lịch</h1>
              </div>
              <div className="breadcrumbs">
                <ul>
                  <li>
                    <Link to="/">Trang chủ</Link>
                  </li>
                  <li>
                    <Link to="/datlich">Đặt lịch</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container booking-form mt-5 p-4">
        <h2 className="text-center mb-4">Đăng ký lịch hẹn</h2>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-5">
              <div className="form-group">
                <label htmlFor="name">Họ và tên:</label>
                <input
                  type="text"
                  className="form-control"
                  value={userData.name}
                  name="name"
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="text"
                  className="form-control"
                  value={userData.email}
                  name="email"
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Số điện thoại:</label>
                <input
                  type="text"
                  className="form-control"
                  value={userData.phone}
                  name="phone"
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="service">Dịch vụ:</label>
                <select
                  className="form-control"
                  id="service"
                  name="selectedService"
                  required
                  value={userData.selectedService}
                  onChange={handleInputChange}
                >
                  <option value="">Chọn dịch vụ</option>
                  {services.map((service) => (
                    <option key={service.ma_dich_vu} value={service.ma_dich_vu}>
                      {service.ten_dich_vu} - {service.gia} VND
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label htmlFor="notes">Ghi chú:</label>
                <textarea
                  className="form-control"
                  id="notes"
                  name="notes"
                  rows="3"
                  value={userData.notes}
                  onChange={handleInputChange}
                  placeholder="Nhập ghi chú nếu có"
                ></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="paymentMethod">Phương thức thanh toán:</label>
                <select
                  className="form-control"
                  id="paymentMethod"
                  name="paymentMethod"
                  value={userData.paymentMethod}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Chọn phương thức thanh toán</option>
                  <option value="cash">Tiền mặt</option>
                  <option value="transfer">Chuyển khoản</option>
                </select>
              </div>
              <button type="submit" className="btn btn-danger mt-3">
                Xác nhận đặt lịch
              </button>
            </div>
            <div className="col-md-3 d-flex align-items-center">
              <div className="image-column">
                <img
                  src="/image/banner_booking.webp"
                  alt="Ảnh minh họa dịch vụ"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default DatLich;
