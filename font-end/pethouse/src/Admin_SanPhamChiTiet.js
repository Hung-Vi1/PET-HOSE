import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";
function Admin_SanPhamChiTiet() {
  const [ganSP] = useState([]);

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
  };

  // Ẩn hiện nội dung dưới tồn kho
  const [isFirstOpen, setIsFirstOpen] = useState(false);
  const [isSecondOpen, setIsSecondOpen] = useState(false);

  const toggleFirst = () => {
    setIsFirstOpen(!isFirstOpen);
  };

  const toggleSecond = () => {
    setIsSecondOpen(!isSecondOpen);
  };

  const toggleBoth = () => {
    setIsFirstOpen(!isFirstOpen);
    setIsSecondOpen(!isSecondOpen);
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
            src="image/Nen_trong_suot.png"
            className="d-block w-75 mx-auto"
            alt="Background"
          />

          <div className="list-group list-group-item-primary">
            <Link
              to={"/admin"}
              className="list-group-item list-group-item-action mt-2 rounded-0"
              aria-current="true"
            >
              <h5 className="mb-0 py-1">Tổng quan</h5>
            </Link>
            <Link
              to={"/adminsanpham"}
              className="list-group-item list-group-item-action mt-0 rounded-0 active"
            >
              <h5 className="mb-0 py-1">Sản phẩm</h5>
            </Link>
            <Link
              to={"/admintaikhoan"}
              className="list-group-item list-group-item-action mt-0 rounded-0"
            >
              <h5 className="mb-0 py-1">Tài khoản</h5>
            </Link>
            <a
              href="/#"
              className="list-group-item list-group-item-action mt-0 rounded-0"
            >
              <h5 className="mb-0 py-1">Đơn hàng</h5>
            </a>
            <a
              href="/#"
              className="list-group-item list-group-item-action mt-0 rounded-0"
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

          <div className="container">
            <div className="d-flex">
              <i className="bi bi-chevron-double-left py-1 my-2"></i>
              <Link to={"/adminsanpham"}>
                <strong className="py-1 my-2 ms-2">
                  Quay lại danh sách sản phẩm
                </strong>
              </Link>

              <div className="d-flex ms-auto">
                <Link
                  className="btn btn-outline-warning p-1 m-2"
                  to={"/adminsanpham"}
                >
                  Thoát
                </Link>

                <button
                  // onClick={() => xoaSanPham(sp.ma_san_pham)}
                  type="button"
                  className="btn btn-danger p-1 m-2 text-white"
                >
                  Xóa
                </button>
                <button
                  type="button"
                  className="btn btn-warning p-1 m-2 text-white"
                >
                  Sửa
                </button>
              </div>
            </div>

            <hr className="mt-0" />

            <h1>Balo vận chuyển chó mèo Phi hành</h1>

            <button type="button" className="btn btn-outline-dark">
              <i className="bi bi-copy me-2"></i>Sao chép
            </button>

            <div className="border border-dark rounded-3 my-3 p-2">
              <div className="d-flex">
                <h5 className="m-0 py-1">Thông tin sản phẩm</h5>
                <div className="border border-warning rounded-5 bg-warning text-white ms-3">
                  <p className="m-0 p-1">Đang giao dịch</p>
                </div>
              </div>

              <hr className="my-2" />

              <div className="row">
                <div className="col-md-8">
                  <table className="table table-borderless mb-0">
                    <tbody>
                      <tr>
                        <td>Mã sản phẩm</td>
                        <td>:</td>
                        <td>SP001</td>
                        <td>Ngày tạo</td>
                        <td>:</td>
                        <td>27/09/2024 17:09</td>
                      </tr>
                      <tr>
                        <td>Loại sản phẩm</td>
                        <td>:</td>
                        <td>Phụ kiện chó / mèo</td>
                        <td>Ngày cập nhật</td>
                        <td>:</td>
                        <td>27/09/2024 17:09</td>
                      </tr>
                      <tr>
                        <td>Giá nhập</td>
                        <td>:</td>
                        <td>300.000 đ</td>
                        <td>Giá sale</td>
                        <td>:</td>
                        <td>400.000 đ</td>
                      </tr>
                      <tr>
                        <td colSpan={6}>
                          <label
                            htmlFor="exampleFormControlTextarea1"
                            className="form-label"
                          >
                            Mô tả
                          </label>
                          <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows="3"
                          >
                            Thành phần dinh dưỡng Xương cho chó gặm sạch răng
                            VEGEBRAND 360 Bone Prevent Tartar với các thành phần
                            như ngũ cốc, thịt và động vật. Dẫn xuất có nguồn gốc
                            thực vật, rau, khoáng chất. Vitamin E. Feroh
                            Sulphate Monohydrate, Zinc Sulphate Monohydrate,
                            Mangan Sulphate Monohydrate. Màu sắc, hương vị, chất
                            bảo quản. Phân tích đảm bảo: Protein thô (tối thiểu)
                            10%. Chất béo thô (tối thiểu) 0,4%. Sợi thô (tối đa)
                            4%. Tro (tối đa) 5%. Độ ẩm (tối đa) 16%. Canxi (tối
                            thiểu) 0,05%. Photpho (tối thiểu) 0,04%. Natri (tối
                            thiểu) 0,02%.
                          </textarea>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="text-center col-md-4">
                  <img
                    className="w-75"
                    src="image/san_pham_1.webp"
                    alt="Sản phẩm"
                  />
                </div>
              </div>
            </div>

            <div>
              <p className="d-inline-flex gap-1">
                <a
                  className="btn btn-primary"
                  href="#multiCollapseExample1"
                  role="button"
                  aria-expanded={isFirstOpen}
                  aria-controls="multiCollapseExample1"
                  onClick={toggleFirst}
                >
                  Toggle first element
                </a>
                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={toggleSecond}
                  aria-expanded={isSecondOpen}
                  aria-controls="multiCollapseExample2"
                >
                  Toggle second element
                </button>
                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={toggleBoth}
                  aria-expanded={isFirstOpen || isSecondOpen}
                  aria-controls="multiCollapseExample1 multiCollapseExample2"
                >
                  Toggle both elements
                </button>
              </p>
              <div className="row">
                <div className="col">
                  <div
                    className={`collapse multi-collapse ${
                      isFirstOpen ? "show" : ""
                    }`}
                    id="multiCollapseExample1"
                  >
                    <div className="card card-body">
                      Some placeholder content for the first collapse component
                      of this multi-collapse example. This panel is hidden by
                      default but revealed when the user activates the relevant
                      trigger.
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div
                    className={`collapse multi-collapse ${
                      isSecondOpen ? "show" : ""
                    }`}
                    id="multiCollapseExample2"
                  >
                    <div className="card card-body">
                      Some placeholder content for the second collapse component
                      of this multi-collapse example. This panel is hidden by
                      default but revealed when the user activates the relevant
                      trigger.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin_SanPhamChiTiet;
