import React, { useEffect, useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import "./App.css";
import { useAuth } from "./contexts/AuthContext";

function AdminDatLichSua() {
  const { ma_don_hang } = useParams();
  const [ngayDat, setNgayDat] = useState("");
  const [hoTen, setHoTen] = useState("");
  const [soDienThoai, setSoDienThoai] = useState("");
  const [diaChi, setDiaChi] = useState("");
  const [pttt, setPttt] = useState("");
  const [ghiChu, setGhiChu] = useState("");
  const [DichvuDetails, setDichvuDetails] = useState([]);
  const [trangThai, setTrangThai] = useState("dang_xu_ly");
  const [ngayGiao, setNgayGiao] = useState("");

  const calculateTotal = () => {
    return DichvuDetails.reduce((total, detail) => {
      return total + detail.SoLuong * detail.DonGia;
    }, 0);
  };

  const { user, isLoggedIn } = useAuth(); // Lấy trạng thái đăng nhập

  // Lấy thông tin đơn hàng theo mã đơn hàng
  useEffect(() => {
    fetch(`http://localhost:8000/api/orderDetailServices/${ma_don_hang}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Không thể lấy thông tin đơn hàng");
        }
        return res.json();
      })
      .then((data) => {
        if (data.status === "success") {
          const dh = data.data[0]; // Lấy thông tin đơn hàng đầu tiên
          setNgayDat(dh.NgayDat);
          setHoTen(dh.Ten);
          setSoDienThoai(dh.SDT);
          setDiaChi(dh.DiaChi);
          setPttt(dh.PTTT);
          setGhiChu(dh.GhiChu);
          setDichvuDetails(data.data); // Lưu tất cả chi tiết sản phẩm
        } else {
          throw new Error(data.message);
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [ma_don_hang]);

  // Chuyển hướng nếu chưa đăng nhập
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  // Xử lý submit form để cập nhật đơn hàng
  const handleSubmit = (e) => {
    e.preventDefault();

    // Kiểm tra xem ngày giao đã được nhập hay chưa
    if (!ngayGiao) {
      alert("Vui lòng nhập ngày giao");
      return;
    }

    const updatedOrder = {
      Ten: hoTen,
      SDT: soDienThoai,
      DiaChi: diaChi,
      PTTT: pttt,
      GhiChu: ghiChu,
      TrangThai: trangThai,
      NgayGiao: ngayGiao,
    };

    fetch(`http://localhost:8000/api/orders/${ma_don_hang}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedOrder),
    })
      .then((res) => {
        console.log('Response status:', res.status);  // In ra mã trạng thái phản hồi
        if (!res.ok) {
          return res.json().then((errorData) => {
            console.log('Error data:', errorData); // In ra dữ liệu lỗi từ phản hồi
            throw new Error("Không thể cập nhật đơn hàng");
          });
        }
        return res.json();
      })
      .then((data) => {
        console.log('Update response:', data);  // In ra dữ liệu phản hồi sau khi cập nhật
        if (data.status === "success") {
          alert("Cập nhật đơn hàng thành công");
        } else {
          alert("Cập nhật đơn hàng thất bại");
        }
      })
      .catch((error) => {
        console.log('Error during update:', error);  // In ra lỗi chi tiết trong catch
        alert("Có lỗi xảy ra khi cập nhật đơn hàng");
      });
  };

  return (
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
              alt={`http://localhost:8000/image/Nen_trong_suot.png`}
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
          </div>
        </div>

        <div className="col-md p-0">
          <nav className="navbar navbar-expand-lg bg-primary p-0" data-bs-theme="dark">
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
            </div>
          </nav>

          <div className="container mt-3 mb-5">
            <div className="d-flex align-items-center">
              <div className="col-md-auto">
                <Link
                  to={"/admindatlich"}
                  className="my-0 my-auto btn border border-secondary-subtle text-secondary me-3"
                >
                  <i className="bi bi-arrow-left"></i>
                </Link>
              </div>
              <div className="col-md-auto">
                <h1 className="mb-0">Cập nhật đơn dịch vụ #{ma_don_hang}</h1>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="d-flex flex-wrap">
                <div className="col-md-8 px-0">
                  <div className="d-flex flex-wrap me-3">
                    <div className="col-md-12 border border-dark rounded-3 my-3 p-2">
                      <h5 className="mb-2 py-1">Thông tin giao hàng</h5>

                      <div className="row mb-3">
                        <div className="col-md">
                          <label className="form-label">Họ và tên</label>
                          <input
                            type="text"
                            className="form-control"
                            value={hoTen}
                            onChange={(e) => setHoTen(e.target.value)}
                            required
                          />
                        </div>

                        <div className="col-md">
                          <label className="form-label">Số điện thoại</label>
                          <input
                            type="number"
                            className="form-control"
                            value={soDienThoai}
                            onChange={(e) => setSoDienThoai(e.target.value)}
                            required
                          />
                        </div>
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Địa chỉ</label>
                        <input
                          className="form-control"
                          value={diaChi}
                          onChange={(e) => setDiaChi(e.target.value)}
                          required
                        />
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Ngày giao</label>
                        <input
                          type="date"
                          className="form-control"
                          value={ngayGiao}
                          onChange={(e) => setNgayGiao(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md px-0">
                  <div className="d-flex flex-wrap">
                    <div className="col-md-12 border border-dark rounded-3 my-3 p-2">
                      <h5 className="mb-2 py-1">Trạng thái đơn hàng</h5>

                      <div>
                        <select
                          className="form-select"
                          value={trangThai}
                          onChange={(e) => setTrangThai(e.target.value)}
                        >
                          <option value="cho_xac_nhan">Chờ xác nhận</option>
                       
                          <option value="dang_xu_ly">Đang xử lý</option>
                          <option value="hoan_thanh">Đã hoàn thành</option>
                         
                          <option value="huy">Đã hủy</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-md border border-dark rounded-3 my-3 p-2">
                      <h5 className="mb-2 py-1">Phương thức thanh toán</h5>

                      <div>
                        <select
                          className="form-select"
                          value={pttt}
                          onChange={(e) => setPttt(e.target.value)}
                        >
                          <option value="0">Thanh toán khi nhận hàng</option>
                          <option value="1">Thanh toán chuyển khoản</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <button className="btn btn-primary px-4" type="submit">
                  Cập nhật
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDatLichSua;
