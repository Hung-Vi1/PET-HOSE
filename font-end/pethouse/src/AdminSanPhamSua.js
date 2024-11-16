import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./App.css";

function AdminSanPhamSua() {
  // Xóa sản phẩm
  /*   const [ganSP] = useState([]);
  const xoaSanPham = (maSP) => {
    // Hiển thị thông báo xác nhận
    if (window.confirm("Bạn có muốn xóa sản phẩm này?")) {
      fetch(`http://localhost:8000/api/products/destroy/${maSP}`, {
        method: "DELETE",
      })
        .then((res) => {
          if (res.ok) {
            // Gọi lại hàm fetch để tải lại dữ liệu sản phẩm
            fetch("http://localhost:8000/api/products")
              .then((res) => res.json())
              .then((data) => {
                console.log("Dữ liệu trả về:", data);
                if (Array.isArray(data.data)) {
                  ganSP(data.data);
                } else {
                  console.error("Dữ liệu không phải là mảng:", data);
                  ganSP([]); // Khởi tạo giá trị mặc định
                }
              })
              .catch((error) => {
                console.error("Lỗi khi lấy dữ liệu sản phẩm:", error);
              });
          }
        })
        .catch((error) => {
          console.error("Lỗi khi xóa sản phẩm:", error);
        });
    }
  }; */

  const { ma_san_pham } = useParams(); // Lấy mã sản phẩm từ URL
  const [ten_san_pham, setTenSanPham] = useState("");
  const [ngay_tao, setNgayTao] = useState("");
  const [ma_danh_muc, setMaDanhMuc] = useState("");
  const [ngay_cap_nhat, setNgayCapNhat] = useState("");
  const [mo_ta, setMoTa] = useState("");
  const [so_luong, setSoLuong] = useState("");
  const [gia, setGia] = useState("");
  const [giam_gia, setGiamGia] = useState(0);
  const [hinh_anh, setHinhAnh] = useState("");
  const [fileHinhAnh, setFileHinhAnh] = useState(null); // State cho file hình ảnh
  const [error, setError] = useState(null);
  const [danhMuc, setDanhMuc] = useState([]); // State để lưu danh sách danh mục

  // Lấy thông tin sản phẩm theo mã sản phẩm
  useEffect(() => {
    if (ma_san_pham) {
      fetch(`http://localhost:8000/api/products/${ma_san_pham}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Không thể lấy thông tin sản phẩm");
          }
          return res.json();
        })
        .then((data) => {
          if (data && data.status === "success" && data.data) {
            const sp = data.data;
            setTenSanPham(sp.ten_san_pham || "");
            setNgayTao(sp.ngay_tao || "");
            setMaDanhMuc(sp.ma_danh_muc || "");
            setNgayCapNhat(sp.ngay_cap_nhat || "");
            setMoTa(sp.mo_ta || "");
            setGia(sp.gia || "");
            setGiamGia(sp.giam_gia || 0);
            setSoLuong(sp.so_luong || "");
            setHinhAnh(sp.hinh_anh || "");
          } else {
            throw new Error(data.message || "Không có dữ liệu");
          }
        })
        .catch((error) => setError(error.message));
    }
  }, [ma_san_pham]);

  // Lấy danh sách danh mục từ API
  useEffect(() => {
    fetch("http://localhost:8000/api/category")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Không thể lấy danh sách danh mục");
        }
        return res.json();
      })
      .then((data) => {
        if (data && data.status === "success" && data.data) {
          setDanhMuc(data.data);
        } else {
          throw new Error(data.message || "Không có dữ liệu danh mục");
        }
      })
      .catch((error) => setError(error.message));
  }, []);

  // Hàm xử lý gửi dữ liệu cập nhật
  const handleSubmit = (e) => {
    e.preventDefault();

    // Kiểm tra các trường bắt buộc
    if (!ten_san_pham) {
      alert("Vui lòng nhập tên sản phẩm!");
      return;
    }
    if (!ma_danh_muc) {
      alert("Vui lòng chọn mã danh mục!");
      return;
    }
    if (!gia || gia < 0) {
      alert("Vui lòng nhập giá hợp lệ!");
      return;
    }
    if (!so_luong || so_luong < 0) {
      alert("Vui lòng nhập số lượng hợp lệ!");
      return;
    }

    const updatedProduct = {
      TenSanPham: ten_san_pham,
      NgayTao: ngay_tao,
      MaDanhMuc: ma_danh_muc,
      NgayCapNhat: ngay_cap_nhat,
      MoTa: mo_ta,
      SoLuong: so_luong,
      GiaSP: gia,
      GiamGia: giam_gia,
      HinhAnh: hinh_anh,
    };

    const formData = new FormData();
    Object.keys(updatedProduct).forEach((key) =>
      formData.append(key, updatedProduct[key])
    );
    if (fileHinhAnh) {
      formData.append("HinhAnh", fileHinhAnh); // Thêm file hình ảnh vào formData
    }

    // Gửi yêu cầu cập nhật
    fetch(`http://localhost:8000/api/products/update/${ma_san_pham}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((err) => {
            throw new Error(err.message || "Cập nhật sản phẩm thất bại");
          });
        }
        return res.json();
      })
      .then((data) => {
        if (data.status === "success") {
          alert("Cập nhật sản phẩm thành công!");
          console.log(data);
        } else {
          throw new Error(data.message || "Có lỗi xảy ra");
        }
      })
      .catch((error) => {
        setError(error.message);
        console.error("Lỗi:", error);
      });
  };

  return (
    <div className="container-fluid admintrangchu">
      <div className="row">
        <div
          id="openMenu"
          className="col-md-2 p-0 bg-primary collapse collapse-horizontal show"
          style={{ minHeight: "100vh" }}
        >
          <img
            src="../image/Nen_trong_suot.png"
            className="d-block w-75 mx-auto"
            alt="Background"
          />

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
              className="list-group-item list-group-item-action my-0  rounded-0 active"
            >
              <h5 className="mb-0 py-1">Sản phẩm</h5>
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
            <a
              href="/#"
              className="list-group-item list-group-item-action my-0 rounded-0"
            >
              <h5 className="mb-0 py-1">Đơn hàng</h5>
            </a>
            <a
              href="/#"
              className="list-group-item list-group-item-action my-0 rounded-0"
            >
              <h5 className="mb-0 py-1">Dịch vụ chăm sóc</h5>
            </a>
            <a
              href="/#"
              className="list-group-item list-group-item-action mt-0 rounded-0"
            >
              <h5 className="mb-0 py-1">Tin tức</h5>
            </a>
          </div>
        </div>

        <div className="col-md p-0">
          <nav
            className="navbar navbar-expand-lg bg-primary p-0"
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
                      className="nav-link dropdown-toggle"
                      href="/#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Xin chào, Trần Thanh Tú
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
                to={"/adminsanpham"}
                className="my-0 my-auto btn border border-secondary-subtle text-secondary me-3"
              >
                <i className="bi bi-arrow-left"></i>
              </Link>
              <h1 className="mb-0">{ten_san_pham || "Chỉnh sửa sản phẩm"}</h1>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="d-flex flex-wrap">
                <div className="col-md-8 px-0">
                  <div className="d-flex flex-wrap me-3">
                    <div className="col-md-12 border border-dark rounded-3 my-3 p-2">
                      <h5 className="mb-2 py-1">Thông tin sản phẩm</h5>

                      <div className="mb-3">
                        <label htmlFor="TenSanPham" className="form-label">
                          Tên sản phẩm
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="TenSanPham"
                          value={ten_san_pham}
                          onChange={(e) => setTenSanPham(e.target.value)}
                          required
                        />
                      </div>

                      <div className="row mb-3">
                        <div className="col-md">
                          <label htmlFor="MaSP" className="form-label">
                            Mã sản phẩm
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="MaSP"
                            value={`SP${ma_san_pham}`}
                            readOnly
                          />
                        </div>
                        <div className="col-md">
                          <label htmlFor="NgayTao" className="form-label">
                            Ngày tạo
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="NgayTao"
                            value={ngay_tao}
                            onChange={(e) => setNgayTao(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="row mb-3">
                        <div className="col-md">
                          <label htmlFor="LoaiSanPham" className="form-label">
                            Loại sản phẩm
                          </label>
                          <select
                            className="form-select"
                            id="LoaiSanPham"
                            value={ma_danh_muc}
                            onChange={(e) => setMaDanhMuc(e.target.value)}
                            required
                          >
                            <option value="" disabled>
                              Chọn loại sản phẩm
                            </option>
                            {danhMuc.map((loaiSP) => (
                              <option
                                key={loaiSP.ma_danh_muc}
                                value={loaiSP.ma_danh_muc}
                              >
                                {loaiSP.ten_danh_muc}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="col-md">
                          <label htmlFor="NgayCapNhat" className="form-label">
                            Ngày cập nhật
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="NgayCapNhat"
                            value={ngay_cap_nhat}
                            onChange={(e) => setNgayCapNhat(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="mb-3">
                        <label htmlFor="MoTa" className="form-label">
                          Mô tả
                        </label>
                        <textarea
                          className="form-control"
                          id="MoTa"
                          rows={3}
                          value={mo_ta}
                          onChange={(e) => setMoTa(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="col-md border border-dark rounded-3 my-3 p-2">
                      <div className="d-flex flex-wrap justify-content-between">
                        <h5 className="mb-2 py-1">Thông tin kho</h5>

                        <a href="/#" className="my-auto text-primary lichsukho">
                          Lịch sử thay đổi kho
                        </a>
                      </div>

                      <table className="table table-borderless">
                        <thead>
                          <tr>
                            <th className="fw-bold">Kho lưu trữ</th>
                            <th className="fw-bold text-center">Tồn kho</th>
                            <th className="fw-bold text-center">
                              Hàng đang về
                            </th>
                            <th className="fw-bold text-center">
                              Đang giao dịch
                            </th>
                            <th className="fw-bold text-center">Có thể bán</th>
                          </tr>
                        </thead>

                        <tbody>
                          <tr>
                            <td>Cửa hàng</td>
                            <td className="text-center">{so_luong}</td>
                            <td className="text-center">0</td>
                            <td className="text-center">0</td>
                            <td className="text-center">{so_luong}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <div className="col-md px-0">
                  <div className="d-flex flex-wrap">
                    <div className="col-md-12 border border-dark rounded-3 my-3 p-2">
                      <h5 className="mb-2 py-1">Ảnh sản phẩm</h5>

                      <div className="text-center">
                        <img
                          className="w-75 pt-2 pb-4"
                          src={`../image/product/${hinh_anh}`}
                          alt={hinh_anh}
                        />

                        <div className="d-flex justify-content-center py-2">
                          <input
                            className="form-control form-control-lg"
                            type="file"
                            id="fileInput"
                            style={{ display: "none" }}
                          />
                          <label
                            htmlFor="fileInput"
                            className="form-control w-50 hinhanh"
                          >
                            Chọn tệp
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="col-md border border-dark rounded-3 my-3 p-2">
                      <h5 className="mb-2 py-1">Thông tin giá</h5>

                      <div className="mb-3">
                        <label htmlFor="GiaSP" className="form-label">
                          Giá bán
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          id="GiaSP"
                          value={gia}
                          onChange={(e) => {
                            const value = e.target.value;
                            if (value >= 0) {
                              setGia(value);
                            }
                          }}
                          min="0"
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="GiamGia" className="form-label">
                          Giá khuyễn mãi
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          id="GiamGia"
                          value={giam_gia}
                          onChange={(e) => {
                            const value = e.target.value;
                            if (value >= 0) {
                              setGiamGia(value);
                            }
                          }}
                          min="0"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="d-flex justify-content-end">
                <button type="submit" className="btn btn-outline-danger me-2">
                  Xóa
                </button>
                <button type="submit" className="btn btn-primary ms-2">
                  Lưu
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminSanPhamSua;
