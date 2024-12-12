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
    const [gioGiao, setGioGiao] = useState("07:00");

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

                    const ngayGiaoFormatted = dh.NgayGiao.split(" ")[0]; // Lấy phần ngày trước dấu cách
                    setNgayGiao(ngayGiaoFormatted); // Cập nhật state với ngày đã định dạng
                    setTrangThai(dh.TrangThai); // Cập nhật trạng thái từ API
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

        if (!ngayGiao || !gioGiao) {
            alert("Vui lòng nhập ngày và giờ giao");
            return;
        }

        const updatedOrder = {
            Ten: hoTen,
            SDT: soDienThoai,
            DiaChi: diaChi,
            PTTT: pttt,
            GhiChu: ghiChu,
            TrangThai: trangThai,
            NgayGiao: `${ngayGiao} ${gioGiao}`, // Kết hợp ngày và giờ giao
        };

        fetch(`http://localhost:8000/api/orders/${ma_don_hang}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedOrder),
        })
            .then((res) => {
                if (!res.ok) {
                    return res.json().then((errorData) => {
                        throw new Error("Không thể cập nhật đơn hàng");
                    });
                }
                return res.json();
            })
            .then((data) => {
                if (data.status === "success") {
                    alert("Cập nhật đơn hàng thành công");
                } else {
                    alert("Cập nhật đơn hàng thất bại");
                }
            })
            .catch((error) => {
                console.log('Error during update:', error);
                alert("Có lỗi xảy ra khi cập nhật đơn hàng");
            });
    };

    // Tạo danh sách giờ từ 7:00 đến 18:00
    const renderGioOptions = () => {
        const options = [];
        for (let hour = 7; hour <= 18; hour++) {
            const hourString = hour < 10 ? `0${hour}:00` : `${hour}:00`;
            options.push(<option key={hour} value={hourString}>{hourString}</option>);
        }
        return options;
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
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link dropdown-toggle"
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
                                                    />
                                                </div>
                                                <div className="col-md">
                                                    <label className="form-label">Số điện thoại</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        value={soDienThoai}
                                                        onChange={(e) => setSoDienThoai(e.target.value)}
                                                    />
                                                </div>
                                            </div>

                                            <div className="row mb-3">
                                                <div className="col-md">
                                                    <label className="form-label">Địa chỉ</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        value={diaChi}
                                                        onChange={(e) => setDiaChi(e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <div className="col-md">
                                                    <label className="form-label">Ghi chú</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        value={ghiChu}
                                                        onChange={(e) => setGhiChu(e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <div className="col-md-6">
                                                    <label className="form-label">Ngày</label>
                                                    <input
                                                        type="date"
                                                        className="form-control"
                                                        value={ngayGiao}
                                                        onChange={(e) => setNgayGiao(e.target.value)}
                                                        min={new Date().toISOString().split("T")[0]} // Thiết lập ngày tối thiểu là ngày hiện tại
                                                    />
                                                </div>

                                                <div className="col-md-6">
                                                    <label className="form-label">Giờ </label>
                                                    <select
                                                        className="form-select"
                                                        value={gioGiao}
                                                        onChange={(e) => setGioGiao(e.target.value)}
                                                    >
                                                        {renderGioOptions()}
                                                    </select>

                                                </div>
                                            </div>


                                        </div>




                                    </div>
                                </div>

                                <div className="col-md-4 px-0">
                                    <div className="d-flex flex-column justify-content-between h-100">
                                        <div>
                                            <div className="border border-dark rounded-3 my-3 p-3">
                                                <h5 className="mb-2 py-1">Chi tiết đơn dịch vụ</h5>
                                                {DichvuDetails.map((item, index) => (
                                                    <div
                                                        key={index}
                                                        className="d-flex justify-content-between align-items-center"
                                                    >
                                                        <div>
                                                            {item.SanPham.TenSP} x {item.SoLuong}
                                                        </div>
                                                        <div>{item.DonGia} VND</div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="mb-2">
                                            <label className="form-label">Trạng thái</label>
                                            <select
                                                className="form-select"
                                                value={trangThai}
                                                onChange={(e) => setTrangThai(e.target.value)}
                                            >
                                                <option value="cho_xac_nhan">Chờ xác nhận</option>
                                                <option value="da_xac_nhan">Đã xác nhận</option>
                                                <option value="da_thanh_toan">Đã thanh toán</option>
                                                <option value="hoan_thanh">Hoàn thành</option>
                                                <option value="huy">Hủy</option>
                                            </select>
                                        </div>

                                        <div className="my-3 p-3 border border-dark rounded-3">
                                            <h5 className="mb-3">Tổng tiền: {calculateTotal()} VND</h5>
                                            <div className="mb-2">
                                                <label className="form-label">Phương thức thanh toán</label>
                                                <select
                                                    className="form-select"
                                                    value={pttt}
                                                    onChange={(e) => setPttt(e.target.value)}
                                                >
                                                    <option value="Tiền mặt">Tiền mặt</option>
                                                    <option value="Chuyển khoản">Chuyển khoản</option>
                                                </select>
                                            </div>


                                            <button type="submit" className="btn btn-success w-100">
                                                Cập nhật
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminDatLichSua;