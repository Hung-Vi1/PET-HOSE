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

  const [ten_san_pham, setten_san_pham] = useState("");
  const { ma_san_pham } = useParams(); // Sử dụng destructuring để lấy ma_san_pham
  const [ngay_tao, setngay_tao] = useState("");
  const [tenDM, settenDM] = useState("");
  const [ngay_cap_nhat, setngay_cap_nhat] = useState("");
  const [mo_ta, setmo_ta] = useState("");
  const [gia, setgia] = useState("");
  const [giam_gia, setgiam_gia] = useState("");
  const [hinh_anh, sethinh_anh] = useState("");
  const [error, setError] = useState(null);

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
          console.log(data);
          if (data && data.status === "success" && data.data) {
            const sp = data.data;
            if (typeof sp === "object") {
              // Kiểm tra sp có phải là đối tượng không
              setten_san_pham(sp.ten_san_pham || "");
              setngay_tao(sp.ngay_tao || "");
              settenDM(sp.tenDM || "");
              setngay_cap_nhat(sp.ngay_cap_nhat || "");
              setmo_ta(sp.mo_ta || "");
              setgia(sp.gia || "");
              setgiam_gia(sp.giam_gia || "");
              sethinh_anh(sp.hinh_anh || "");
            } else {
              throw new Error("Dữ liệu sản phẩm không hợp lệ");
            }
          } else {
            throw new Error(data.message || "Không có dữ liệu");
          }
        })
        .catch((error) => {
          setError(error.message);
        });
    }
  }, [ma_san_pham]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("TenSanPham:", ten_san_pham);
    console.log("MaSP:", ma_san_pham);
    console.log("NgayTao:", ngay_tao);
    console.log("LoaiSanPham:", tenDM);
    console.log("NgayCapNhat:", ngay_cap_nhat);
    console.log("MoTa:", mo_ta);
    console.log("GiaSP:", gia);
    console.log("GiamGia:", giam_gia);
    console.log("Hinhanh:", hinh_anh);
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

            <div className="d-flex flex-wrap">
              <div className="col-md-8 px-0">
                <div className="d-flex flex-wrap me-3">
                  <div className="col-md-12 border border-dark rounded-3 my-3 p-2">
                    <h5 className="mb-2 py-1">Thông tin sản phẩm</h5>

                    <form onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <label htmlFor="TenSanPham" className="form-label">
                          Tên sản phẩm
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="TenSanPham"
                          aria-describedby="TenSanPhamlHelp"
                          value={ten_san_pham}
                          onChange={(e) => setten_san_pham(e.target.value)}
                        />
                        <div
                          id="TenSanPhamlHelp"
                          className="form-text text-danger"
                        >
                          Đây là trường bắt buộc
                        </div>
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
                            value={ma_san_pham}
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
                            onChange={(e) => setngay_tao(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="row mb-3">
                        <div className="col-md">
                          <label htmlFor="LoaiSanPham" className="form-label">
                            Loại sản phẩm
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="LoaiSanPham"
                            value={tenDM}
                            onChange={(e) => settenDM(e.target.value)}
                          />
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
                            onChange={(e) => setngay_cap_nhat(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="mb-3">
                        <label htmlFor="MoTa" className="form-label">
                          Mô tả
                        </label>
                        <textarea
                          type="text"
                          className="form-control"
                          id="MoTa"
                          rows={3}
                          value={mo_ta}
                          onChange={(e) => setmo_ta(e.target.value)}
                        />
                      </div>
                    </form>
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
                          <th className="fw-bold text-center">Hàng đang về</th>
                          <th className="fw-bold text-center">
                            Đang giao dịch
                          </th>
                          <th className="fw-bold text-center">Có thể bán</th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr>
                          <td>Cửa hàng</td>
                          <td className="text-center">100</td>
                          <td className="text-center">0</td>
                          <td className="text-center">0</td>
                          <td className="text-center">100</td>
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
                        alt="Sản phẩm"
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

                    <form className="adminspsua" onSubmit={handleSubmit}>
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
                              setgia(value);
                            }
                          }}
                          min="0" // Đặt giá trị tối thiểu là 0
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
                              setgiam_gia(value);
                            }
                          }}
                          min="0" // Đặt giá trị tối thiểu là 0
                        />
                      </div>
                    </form>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminSanPhamSua;
