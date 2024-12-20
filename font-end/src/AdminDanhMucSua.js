import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";
import { NavLink } from "react-router-dom";
import "./App.css";

function AdminDanhMucSua() {
  const { user } = useAuth();
  const { ma_danh_muc } = useParams();
  const [tenDM, setTenDM] = useState("");
  const [parentId, setParentId] = useState("");
  const [loai, setLoai] = useState("0");
  const [error, setError] = useState(null);

  const apiUrl = process.env.REACT_APP_API_URL;

  // Hàm fetch với cơ chế retry
  const fetchWithRetry = async (
    url,
    options = {},
    retries = 3,
    delay = 1000
  ) => {
    for (let i = 0; i < retries; i++) {
      const response = await fetch(url, options);
      if (response.ok) {
        return response.json(); // Trả về dữ liệu nếu thành công
      } else if (response.status !== 429 || i === retries - 1) {
        throw new Error(`Error: ${response.status}`);
      }
      await new Promise((res) => setTimeout(res, delay)); // Đợi trước khi thử lại
    }
  };

  // Lấy thông tin danh mục theo mã danh mục
  useEffect(() => {
    fetchWithRetry(`${apiUrl}/api/category/${ma_danh_muc}`)
      .then((data) => {
        if (data.status === "success") {
          const dm = data.data;
          setTenDM(dm.ten_danh_muc);
          setParentId(dm.parent_id || "");
          setLoai(dm.loai);
        } else {
          throw new Error(data.message);
        }
      })
      .catch((error) => {
        setError(error.message);
      });
  }, [ma_danh_muc, apiUrl]);

  // Xử lý gửi form
  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedCategory = {
      TenDM: tenDM,
      parent_id: parentId,
      loai: loai,
    };

    fetchWithRetry(`${apiUrl}/api/category/update/${ma_danh_muc}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedCategory),
    })
      .then(() => {
        alert("Cập nhật thành công!");
      })
      .catch((error) => {
        setError(error.message);
      });
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
              className="list-group-item list-group-item-action my-0 rounded-5 border-0 active"
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
              className="list-group-item list-group-item-action my-0 rounded-5 border-0"
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

          <div className="container mt-3 mb-5">
            <div className="d-flex">
              <Link
                to={"/admindanhmuc"}
                className="my-0 my-auto btn border border-secondary-subtle text-secondary me-3"
              >
                <i className="bi bi-arrow-left"></i>
              </Link>
              <h1 className="mb-0">{tenDM}</h1>
            </div>

            <div className="d-flex flex-wrap">
              <div className="col-md-12 border border-dark rounded-3 my-3 p-2">
                <h5 className="mb-2 py-1">Thông tin danh mục</h5>

                {error && <p className="text-danger">{error}</p>}

                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="tenDM" className="form-label">
                      Tên Danh Mục
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="tenDM"
                      value={tenDM}
                      onChange={(e) => setTenDM(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="parent_id" className="form-label">
                      Phân Loại
                    </label>
                    <select
                      id="parent_id"
                      className="form-select"
                      value={parentId}
                      onChange={(e) =>
                        setParentId(
                          e.target.value === "" ? null : e.target.value
                        )
                      }
                    >
                      <option value="">Không có</option>
                      <option value="0">Thư Mục Cha</option>
                      <option value="1">Thư Mục Cha - Chó</option>
                      <option value="2">Thư Mục Cha - Mèo</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="loai" className="form-label">
                      Loại
                    </label>
                    <select
                      id="loai"
                      className="form-select"
                      value={loai}
                      onChange={(e) => setLoai(e.target.value)}
                    >
                      <option value="0">Loại 0</option>
                      <option value="1">Loại 1</option>
                    </select>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Cập Nhật
                  </button>
                  <Link to="/admindanhmuc" className="btn btn-secondary ms-2">
                    Trở Về
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDanhMucSua;
