import React, {  } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";

function Admin_Thembv() {
    const { user } = useAuth();

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
                            className="list-group-item list-group-item-action my-0 rounded-0 "
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
                            className="list-group-item list-group-item-action my-0 rounded-0"
                        >
                            <h5 className="mb-0 py-1">Đặt lịch</h5>
                        </Link>
                        <Link
                            to={"/Admin_BV"}
                            className="list-group-item list-group-item-action my-0 rounded-0 active"
                        >
                            <h5 className="mb-0 py-1">Tin tức</h5>
                        </Link>
                    </div>
                </div>

                <div className="col-md p-0">
                    <nav className="navbar navbar-expand-lg bg-primary p-0" data-bs-theme="dark">
                        <div className="container-fluid">
                            <button className="btn btn-outline-light me-3" type="button" data-bs-toggle="collapse" data-bs-target="#openMenu" aria-expanded="false" aria-controls="collapseWidthExample">
                                <i className="bi bi-list"></i>
                            </button>
                            <a className="navbar-brand" href="/#">PetHouse</a>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Xin chào, {user.Hovaten || "Không có tên"}
                                        </a>
                                        <ul className="dropdown-menu bg-primary p-0 mt-0 border-0 rounded-0">
                                            <li className="rounded-0">
                                                <Link className="menu-header-top dropdown-item m-0 py-2" to={"/"}>Xem trang chủ</Link>
                                            </li>
                                            <li><hr className="dropdown-divider m-0" /></li>
                                            <li>
                                                <a className="menu-header-bottom dropdown-item m-0 py-2" href="/#">Đăng xuất</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <div className="container">
                        <div className="d-flex">
                            <Link to={"/Admin_BV"} className="my-0 my-auto btn border border-secondary-subtle text-secondary me-3">
                                <i className="bi bi-arrow-left"></i>
                            </Link>
                            <h1 className="mb-0">Thêm tin tức</h1>
                            <p className="text-danger"></p>
                        </div>

                        Thêm vào chỗ
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Admin_Thembv;