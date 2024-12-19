import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";
import { NavLink } from "react-router-dom";
import "./App.css";

function AdminThemDatLich() {
  const { user } = useAuth();
  const navigate = useNavigate();

  // State for API data
  const [users, setUsers] = useState([]);
  const [services, setServices] = useState([]);

  // State for form inputs
  const [selectedUser, setSelectedUser] = useState([]);
  const [selectedServices, setSelectedServices] = useState([]);
  const [note, setNote] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");

  const apiUrl = process.env.REACT_APP_API_URL;

  // Fetch users and services on component mount
  useEffect(() => {
    // Fetch users
    fetch(`${apiUrl}/api/users`)
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success" && Array.isArray(data.data)) {
          setUsers(data.data);
        } else {
          console.error("Invalid users data format:", data);
          setUsers([]);
        }
      })
      .catch((error) => console.error("Error fetching users:", error));

    // Fetch services
    fetch(`${apiUrl}/api/services`)
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success" && Array.isArray(data.data)) {
          setServices(data.data);
        } else {
          console.error("Invalid services data format:", data);
          setServices([]);
        }
      })
      .catch((error) => console.error("Error fetching services:", error));
  }, []);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedUser || selectedServices.length === 0 || !deliveryDate) {
      alert("Vui lòng điền đầy đủ thông tin!");
      return;
    }

    const payload = {
      Mataikhoan: selectedUser,
      GhiChu: note,
      NgayGiao: deliveryDate,
      chi_tiet: selectedServices.map((service) => ({
        MaSP: service.ma_dich_vu,
        SoLuong: 1, // Default quantity to 1; adjust as needed.
      })),
    };

    try {
      const response = await fetch(`${apiUrl}/api/orderServices`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        alert("Thêm đơn thành công!");
        navigate("/admindatlich");
      } else {
        const errorData = await response.json();
        console.error("Error adding order:", errorData);
        alert("Thêm đơn thất bại!");
      }
    } catch (error) {
      console.error("Error during submission:", error);
      alert("Thêm đơn thất bại!");
    }
  };

  // Handle selecting a service
  const handleServiceSelection = (service) => {
    setSelectedServices((prevServices) => {
      const exists = prevServices.find(
        (s) => s.ma_dich_vu === service.ma_dich_vu
      );
      if (exists) {
        return prevServices.filter((s) => s.ma_dich_vu !== service.ma_dich_vu);
      } else {
        return [...prevServices, service];
      }
    });
  };

  // Handle date change
  const handleDateChange = (e) => {
    const newDate = e.target.value;
    // Check if there's already a time value and append it to the new date
    const currentTime = deliveryDate ? deliveryDate.split("T")[1] : "07:00"; // Default time
    setDeliveryDate(newDate + "T" + currentTime + ":00");
  };

  // Handle time change
  const handleTimeChange = (e) => {
    const currentDate = deliveryDate ? deliveryDate.split("T")[0] : ""; // Get current date if available
    const newTime = e.target.value;
    setDeliveryDate(currentDate + "T" + newTime + ":00");
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
              className="list-group-item list-group-item-action my-0 rounded-5 border-0 active"
              activeClassName="active"
            >
              <h5 className="mb-0 py-1">Đặt lịch</h5>
            </NavLink>
            <NavLink
              to={"/Admin_BV"}
              className="list-group-item list-group-item-action my-0 rounded-5 border-0"
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

          <div className="p-4">
            <div className="d-flex">
              <Link
                to={"/admindatlich"}
                className="my-0 my-auto btn border border-secondary-subtle text-secondary me-3"
              >
                <i className="bi bi-arrow-left"></i>
              </Link>
              <h2>Thêm đơn đặt lịch</h2>
            </div>
            <form
              onSubmit={handleSubmit}
              className="col-md-12 border border-dark rounded-3 my-3 p-2"
            >
              <div className="mb-3">
                <label className="form-label">Chọn tài khoản</label>
                <select
                  className="form-select"
                  value={selectedUser || ""}
                  onChange={(e) => setSelectedUser(e.target.value)}
                >
                  <option value="">Chọn tài khoản</option>
                  {users.map((user) => (
                    <option key={user.ma_tai_khoan} value={user.ma_tai_khoan}>
                      {user.ten_tai_khoan}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label">Chọn dịch vụ</label>
                <div className="d-flex flex-wrap">
                  {services.map((service) => (
                    <div key={service.ma_dich_vu} className="form-check me-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id={`service-${service.ma_dich_vu}`}
                        onChange={() => handleServiceSelection(service)}
                      />
                      <label
                        className="form-check-label"
                        htmlFor={`service-${service.ma_dich_vu}`}
                      >
                        {service.ten_dich_vu} (
                        {parseInt(service.gia).toLocaleString("vi-VN", {
                          style: "currency",
                          currency: "VND",
                        })}
                        )
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">Ghi chú</label>
                <textarea
                  className="form-control"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                ></textarea>
              </div>

              <div className="mb-3">
                <label className="form-label">Giờ</label>
                <div className="d-flex">
                  <input
                    type="date"
                    className="form-control"
                    value={deliveryDate.split("T")[0] || ""} // Chỉ lấy phần ngày nếu có
                    onChange={handleDateChange}
                  />
                  <select
                    className="form-select ms-2"
                    value={
                      deliveryDate.split("T")[1]
                        ? deliveryDate.split("T")[1].substring(0, 5)
                        : "07:00"
                    }
                    onChange={handleTimeChange}
                  >
                    {Array.from({ length: 12 }, (_, index) => {
                      const hour = 7 + index;
                      if (hour === 12) return null;
                      return (
                        <option
                          key={hour}
                          value={`${hour.toString().padStart(2, "0")}:00`}
                        >
                          {`${hour}:00`}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>

              <div className="d-flex justify-content-end">
                <button type="submit" className="btn btn-primary">
                  Thêm đơn
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminThemDatLich;
