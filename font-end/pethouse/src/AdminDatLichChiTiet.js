import React, { useEffect, useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import "./App.css";
import { useAuth } from "./contexts/AuthContext";

function AdminDatLichChiTiet() {
    const { ma_don_hang } = useParams();
    const [NgayGiao, setNgayDat] = useState("");
    const [hoTen, setHoTen] = useState("");
    const [soDienThoai, setSoDienThoai] = useState("");
    const [diaChi, setDiaChi] = useState("");
    const [pttt, setPttt] = useState("");
    const [ghiChu, setGhiChu] = useState("");
    const [DichvuDetails, setDichvuDetails] = useState([]);

    const calculateTotal = () => {
        return DichvuDetails.reduce((total, detail) => {
            return total + detail.SoLuong * detail.DonGia;
        }, 0);
    };

    const { user, isLoggedIn } = useAuth();

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
                    const dh = data.data[0];
                    setNgayDat(dh.NgayDat);
                    setHoTen(dh.Ten);
                    setSoDienThoai(dh.SDT);
                    setDiaChi(dh.DiaChi);
                    setPttt(dh.PTTT);
                    setGhiChu(dh.GhiChu);
                    setDichvuDetails(data.data);
                } else {
                    throw new Error(data.message);
                }
            })
            .catch((error) => {
                console.error("Lỗi khi lấy thông tin đơn hàng:", error);
            });
    }, [ma_don_hang]);

    const handlePrintOrder = async () => {
        const currentDate = new Date().toLocaleDateString("vi-VN", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
        });

        try {
            const response = await fetch(`http://127.0.0.1:8000/api/orderDetailServices/${ma_don_hang}`);
            if (!response.ok) {
                throw new Error(`Lỗi khi gọi API chi tiết đơn hàng: ${response.statusText}`);
            }

            const result = await response.json();
            if (result.status !== 'success' || !Array.isArray(result.data) || result.data.length === 0) {
                alert("Không có chi tiết đơn hàng. Vui lòng kiểm tra lại.");
                return;
            }

            const chiTietDonHang = result.data.map((ct, index) => {
                const totalProductPrice = ct.DonGia * ct.SoLuong;
                return `
              <tr>
                <td style="text-align: center; padding: 10px; border-top: 1px solid #ddd;">${index + 1}</td>
                <td style="text-align: center; padding: 10px; border-top: 1px solid #ddd;">${ct.SanPham.TenSP}</td>
                <td style="text-align: center; padding: 10px; border-top: 1px solid #ddd;">${ct.SoLuong}</td>
                <td style="text-align: center; padding: 10px; border-top: 1px solid #ddd;">${new Intl.NumberFormat("vi-VN").format(ct.DonGia)}</td>
                <td style="text-align: center; padding: 10px; border-top: 1px solid #ddd;">${new Intl.NumberFormat("vi-VN").format(totalProductPrice)}</td>
              </tr>
            `;
            }).join("");

            const totalBeforeDiscount = result.data.reduce((total, ct) => total + ct.DonGia * ct.SoLuong, 0);
            const discount = 0; // Cập nhật giá trị giảm giá nếu có
            const totalAfterDiscount = totalBeforeDiscount - discount;

            const printContent = `
            <html>
              <head>
                <title>Hóa đơn ${ma_don_hang}</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css">
              </head>
              <body>
                <div style="margin-top: 50px; border: 1px solid #ddd; padding: 20px; font-family: Arial, sans-serif;">
                  <div class="header" style="text-align: center; margin-bottom: 20px;">
                    <img id="logo" src="http://localhost:3000/image/logo-ngang.png" alt="Logo" style="width: 120px;">
                    <h2 style="margin: 0;">CỬA HÀNG PETHOUSE VIỆT NAM</h2>
                    <p style="margin: 5px 0;">Tô ký, phường Trung Mỹ Tây, quận 12, TP.HCM</p>
                    <p style="margin: 5px 0;">Email: pethouse@gmail.com / Hotline: 038 997 8430</p>
                    <h3 style="margin: 10px 0;">ĐƠN HÀNG</h3>
                  </div>
                  <p><strong>Ngày:</strong> ${currentDate}</p>
                  <p><strong>Tên khách hàng:</strong> ${hoTen}</p>
                  <p><strong>Địa chỉ:</strong> ${diaChi}</p>
                  <p><strong>Số điện thoại:</strong> ${soDienThoai}</p>
                  <p><strong>Mã đơn hàng:</strong> ${ma_don_hang}</p>
                  <h3 style="margin-top: 20px;">Chi tiết đơn hàng:</h3>  
                  <table style="border: 1px solid #ddd; border-collapse: collapse; width: 100%;">
                    <thead>
                      <tr>
                        <th>STT</th>
                        <th>Sản phẩm</th>
                        <th>Số lượng</th>
                        <th>Đơn giá</th>
                        <th>Tổng</th>
                      </tr>
                    </thead>
                    <tbody>${chiTietDonHang}</tbody>
                  </table>
                  <div class="total" style="margin-top: 20px; font-weight: bold;">
                    <p><span>Tổng trước giảm giá:</span><span class="right" style="float: right;">${new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND", minimumFractionDigits: 0 }).format(totalBeforeDiscount)}</span></p>
                    <p><span>Giảm giá:</span><span class="right" style="float: right;">${new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND", minimumFractionDigits: 0 }).format(discount)}</span></p>
                    <p><span class="font-weight-bold">Tổng thanh toán:</span><span class="right" style="float: right; color: red;">${new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND", minimumFractionDigits: 0 }).format(totalAfterDiscount)}</span></p>
                  </div>
                </div>
                <script>
                  window.onload = function() {
                    const logo = document.getElementById("logo");
                    if (logo.complete) {
                      window.print();
                      window.close();
                    } else {
                      logo.onload = function() {
                        window.print();
                        window.close();
                      };
                    }
                  };
                </script>
              </body>
            </html>
          `;

            const printWindow = window.open("", "_blank");
            if (printWindow) {
                printWindow.document.write(printContent);
                printWindow.document.close();
            }
        } catch (error) {
            console.error("Lỗi khi in đơn hàng:", error);
            alert("Đã xảy ra lỗi khi in đơn hàng.");
        }
    };

    if (!isLoggedIn) {
        return <Navigate to="/login" />;
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div id="openMenu" className="col-md-2 p-0 bg-primary collapse collapse-horizontal show" style={{ minHeight: "100vh" }}>
                    <Link to={"/"}>
                        <img src={`http://localhost:8000/image/Nen_trong_suot.png`} className="d-block w-75 mx-auto" alt={`Logo`} />
                    </Link>
                    <div className="list-group list-group-item-primary">
            <Link
              to={"/admin"}
              className="list-group-item list-group-item-action mt-2 mb-0 rounded-0"
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
              className="list-group-item list-group-item-action my-0 rounded-0 active"
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
                    <nav className="navbar navbar-expand-lg bg-primary p-0">
                        <div className="container-fluid">
                            <button className="btn btn-outline-light me-3" type="button" data-bs-toggle="collapse" data-bs-target="#openMenu" aria-expanded="false" aria-controls="collapseWidthExample">
                                <i className="bi bi-list"></i>
                            </button>
                            <a className="navbar-brand" href="/">PetHouse</a>
                            <div className="collapse navbar-collapse">
                                <ul className="navbar-nav ms-auto">
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Xin chào, {user.Hovaten || "Không có tên"}
                                        </a>
                                        <ul className="dropdown-menu bg-primary">
                                            <li><Link className="menu-header-top dropdown-item" to={"/"}>Xem trang chủ</Link></li>
                                            <li><a className="menu-header-bottom dropdown-item" href="#">Đăng xuất</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>

                    <div className="container mt-3 mb-5">
                        <div className="d-flex align-items-center">
                            <div className="col-md-auto">
                                <Link to={"/admindatlich"} className="btn border text-secondary me-3">
                                    <i className="bi bi-arrow-left"></i>
                                </Link>
                            </div>
                            <div className="col-md-auto">
                                <h1 className="mb-0">Chi tiết đơn đặt lịch #{ma_don_hang}</h1>
                            </div>
                            <div className="col-md-auto ms-auto mr-3">
                                <Link className="text-success" to={`/admindatlichsua/${ma_don_hang}`}>
                                    <strong><i className="bi bi-pencil-square"></i> Sửa đơn</strong>
                                </Link>
                            </div>
                            <div className="col-md-auto text-primary">
                                <strong onClick={handlePrintOrder}>
                                    <i className="bi bi-printer"></i> In đơn
                                </strong>
                            </div>
                        </div>

                        <form>
                            <div className="d-flex flex-wrap">
                                <div className="col-md-12">
                                    <div className="d-flex flex-wrap">
                                        <div className="col-md-12 border rounded-3 my-3 p-2">
                                            <h5>Thông tin giao hàng</h5>
                                            <div className="row mb-3">
                                                <div className="col-md">
                                                    <label>Họ và tên</label>
                                                    <input type="text" className="form-control" value={hoTen} readOnly />
                                                </div>
                                                <div className="col-md">
                                                    <label>Số điện thoại</label>
                                                    <input type="number" className="form-control" value={soDienThoai} readOnly />
                                                </div>
                                            </div>
                                            <div className="mb-3">
                                                <label>Địa chỉ</label>
                                                <input className="form-control" value={diaChi} readOnly />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-12 border rounded-3 my-3 p-2">
                                    <h5>Chi tiết đơn hàng</h5>
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>STT</th>
                                                <th>Dịch vụ</th>
                                                <th>Số lượng</th>
                                                <th>Đơn giá</th>
                                                <th>Thành tiền</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {DichvuDetails.map((detail, index) => (
                                                <tr key={detail.MaCTDH}>
                                                    <td>{index + 1}</td>
                                                    <td>{detail.SanPham.TenSP}</td>
                                                    <td>{detail.SoLuong}</td>
                                                    <td>{detail.DonGia.toLocaleString()} VND</td>
                                                    <td>{(detail.SoLuong * detail.DonGia).toLocaleString()} VND</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <td colSpan="4">Tổng cộng</td>
                                                <td>{calculateTotal().toLocaleString("vi-VN", {
                                                    style: "currency",
                                                    currency: "VND",
                                                })}</td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminDatLichChiTiet;
