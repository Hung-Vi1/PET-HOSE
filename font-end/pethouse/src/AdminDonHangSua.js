import React, { useEffect, useState } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";
import Select from "react-select";
import "./App.css";

function AdminDonHangSua() {
  const { ma_don_hang } = useParams();
  const { isLoggedIn } = useAuth(); // Lấy trạng thái đăng nhập

  const [areas, setAreas] = useState([]); // Danh sách tỉnh/thành phố
  const [districts, setDistricts] = useState([]); // Danh sách quận/huyện
  const [wards, setWards] = useState([]); // Danh sách phường/xã
  const [selectedArea, setSelectedArea] = useState(null); // Khu vực đã chọn
  const [selectedDistrict, setSelectedDistrict] = useState(null); // Quận/Huyện đã chọn
  const [selectedWard, setSelectedWard] = useState(null); // Phường/Xã đã chọn

  useEffect(() => {
    fetch(`https://provinces.open-api.vn/api/?depth=3`)
      .then((response) => response.json())
      .then((data) => {
        const formattedData = data.map((area) => ({
          value: area.code,
          label: area.name,
          districts: area.districts, // Lưu districts ở đây
        }));
        setAreas(formattedData);
      })
      .catch((error) => {
        console.error("Lỗi khi lấy dữ liệu:", error);
      });
  }, []);

  const handleAreaChange = (selectedOption) => {
    setSelectedArea(selectedOption);
    setSelectedDistrict(null); // Reset quận/huyện
    setWards([]); // Reset phường/xã

    if (selectedOption) {
      const selectedAreaData = areas.find(
        (area) => area.value === selectedOption.value
      );
      if (selectedAreaData && selectedAreaData.districts) {
        setDistricts(
          selectedAreaData.districts.map((district) => ({
            value: district.code,
            label: district.name,
            wards: district.wards, // Lưu wards ở đây
          }))
        );
      } else {
        setDistricts([]);
      }
    }
  };

  const handleDistrictChange = (selectedOption) => {
    setSelectedDistrict(selectedOption);
    setSelectedWard(null); // Reset phường/xã

    if (selectedOption) {
      const selectedDistrictData = districts.find(
        (district) => district.value === selectedOption.value
      );
      if (selectedDistrictData && selectedDistrictData.wards) {
        setWards(
          selectedDistrictData.wards.map((ward) => ({
            value: ward.code,
            label: ward.name,
          }))
        );
      } else {
        setWards([]);
      }
    } else {
      setWards([]);
    }
  };

  // Kiểm tra trạng thái đăng nhập
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

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
              className="list-group-item list-group-item-action my-0 rounded-0 active"
            >
              <h5 className="mb-0 py-1">Đơn hàng</h5>
            </Link>
            <Link
              to={"/admindichvuchamsoc"}
              className="list-group-item list-group-item-action my-0 rounded-0"
            >
              <h5 className="mb-0 py-1">Dịch vụ chăm sóc</h5>
            </Link>
            <Link
              to={"/admintintuc"}
              className="list-group-item list-group-item-action my-0 rounded-0"
            >
              <h5 className="mb-0 py-1">Tin tức</h5>
            </Link>
            <Link
              to={"/admindichvu"}
              className="list-group-item list-group-item-action my-0 rounded-0"
            >
              <h5 className="mb-0 py-1">Dịch vụ</h5>
            </Link>
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
                to={`/admindonhangchitiet/${ma_don_hang}`}
                className="my-0 my-auto btn border border-secondary-subtle text-secondary me-3"
              >
                <i className="bi bi-arrow-left"></i>
              </Link>
              <h1 className="mb-0">Cập nhật đơn hàng #{ma_don_hang}</h1>
            </div>

            <form>
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
                            // value={ten_san_pham}
                            // onChange={(e) => setTenSanPham(e.target.value)}
                            required
                            placeholder="Nguyễn Văn A"
                          />
                        </div>

                        <div className="col-md">
                          <label className="form-label">Số điện thoại</label>
                          <input
                            type="number"
                            className="form-control"
                            // value={ten_san_pham}
                            // onChange={(e) => setTenSanPham(e.target.value)}
                            required
                            placeholder="0364395907"
                          />
                        </div>
                      </div>

                      <div className="row mb-3">
                        <div className="col-md">
                          <label className="form-label">Tỉnh/Thành phố</label>
                          <Select
                            options={areas}
                            value={selectedArea}
                            onChange={handleAreaChange}
                            placeholder="Chọn Tỉnh / Thành phố"
                            isClearable
                            styles={{ minHeight: "550px" }}
                          />
                        </div>
                        <div className="col-md">
                          <label className="form-label">Quận/Huyện</label>
                          <Select
                            options={districts}
                            value={selectedDistrict}
                            onChange={handleDistrictChange}
                            placeholder="Chọn Quận / Huyện"
                            isClearable
                            isDisabled={!selectedArea}
                          />
                        </div>
                      </div>

                      <div className="row mb-3">
                        <div className="col-md">
                          <label className="form-label">Phường/Xã</label>
                          <Select
                            options={wards}
                            value={selectedWard}
                            onChange={setSelectedWard}
                            placeholder="Chọn Phường / Xã"
                            isClearable
                            isDisabled={!selectedDistrict}
                          />
                        </div>
                        <div className="col-md">
                          <label className="form-label">Địa chỉ</label>
                          <input
                            type="text"
                            className="form-control"
                            // value={ten_san_pham}
                            // onChange={(e) => setTenSanPham(e.target.value)}
                            required
                            placeholder="564/19A Đường Tỉnh Lộ 15 Tổ 8 Ấp Bến Đình"
                          />
                        </div>
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
                          type="number"
                          className="form-select"
                          // value={trang_thai}
                          // onChange={(e) =>
                          //   setTrangThai(Number(e.target.value))
                          // }
                        >
                          <option value="0">Chờ xác nhận</option>
                          <option value="1">Đang xử lý</option>
                          <option value="1">Đã xử lý</option>
                          <option value="1">Đã hủy</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-md border border-dark rounded-3 my-3 p-2">
                      <h5 className="mb-2 py-1">Phương thức thanh toán</h5>

                      <div>
                        <select
                          type="number"
                          className="form-select"
                          // value={trang_thai}
                          // onChange={(e) =>
                          //   setTrangThai(Number(e.target.value))
                          // }
                        >
                          <option value="0">Thanh toán khi nhận hàng</option>
                          <option value="1">Thanh toán chuyển khoản</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="d-flex flex-wrap">
                <div className="col-md-12 border border-dark rounded-3 my-3 p-2">
                  <h5 className="mb-2 py-1">Chi tiết đơn hàng</h5>

                  <form className="d-flex mb-3" role="search">
                    <input
                      className="form-control me-2"
                      type="search"
                      placeholder="Nhập tên sản phẩm"
                      aria-label="Search"
                    />
                  </form>

                  <table className="table table-borderless">
                    <thead>
                      <tr>
                        <th className="text-center fw-bold">STT</th>
                        <th colSpan={2} className="fw-bold w-50">
                          Sản phẩm
                        </th>
                        <th className="text-center fw-bold">Số lượng</th>
                        <th className="text-end fw-bold">Đơn giá</th>
                        <th className="text-end fw-bold text-nowrap">
                          Thành tiền
                        </th>
                        <th className="text-center fw-bold text-nowrap"></th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td className="text-center">1</td>
                        <td style={{ width: "6%" }}>
                          <img
                            src="http://localhost:8000/image/product/test.jpg"
                            alt="http://localhost:8000/image/product/test.jpg"
                            className="w-100 h-auto"
                          />
                        </td>
                        <td>Sản phẩm test1</td>
                        <td className="d-flex justify-content-center">
                          <input
                            type="number"
                            className="form-control w-50"
                            placeholder="2"
                          />
                        </td>
                        <td className="text-end">
                          {parseInt(199000).toLocaleString("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          })}
                        </td>
                        <td className="text-end">
                          {parseInt(199000 * 2).toLocaleString("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          })}
                        </td>
                        <td className="text-center">
                          <i className="bi bi-x-lg btn text-danger p-0"></i>
                        </td>
                      </tr>

                      <tr>
                        <td className="text-center">2</td>
                        <td style={{ width: "6%" }}>
                          <img
                            src="http://localhost:8000/image/product/test.jpg"
                            alt="http://localhost:8000/image/product/test.jpg"
                            className="w-100 h-auto"
                          />
                        </td>
                        <td>Sản phẩm test2</td>
                        <td className="d-flex justify-content-center">
                          <input
                            type="number"
                            className="form-control w-50"
                            placeholder="1"
                          />
                        </td>
                        <td className="text-end">
                          {parseInt(159000).toLocaleString("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          })}
                        </td>
                        <td className="text-end">
                          {parseInt(159000 * 1).toLocaleString("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          })}
                        </td>
                        <td className="text-center">
                          <i className="bi bi-x-lg btn text-danger p-0"></i>
                        </td>
                      </tr>

                      <tr>
                        <td className="text-center">3</td>
                        <td style={{ width: "6%" }}>
                          <img
                            src="http://localhost:8000/image/product/test.jpg"
                            alt="http://localhost:8000/image/product/test.jpg"
                            className="w-100 h-auto"
                          />
                        </td>
                        <td>Sản phẩm test3</td>
                        <td className="d-flex justify-content-center">
                          <input
                            type="number"
                            className="form-control w-50"
                            placeholder="3"
                          />
                        </td>
                        <td className="text-end">
                          {parseInt(99000).toLocaleString("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          })}
                        </td>
                        <td className="text-end">
                          {parseInt(99000 * 3).toLocaleString("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          })}
                        </td>
                        <td className="text-center">
                          <i className="bi bi-x-lg btn text-danger p-0"></i>
                        </td>
                      </tr>
                    </tbody>

                    <tfoot>
                      <tr>
                        <td className="text-center">Ghi chú</td>
                        <td colSpan={3}>
                          <div className="">
                            <textarea className="form-control h-50"></textarea>
                          </div>
                        </td>
                        <td className="text-end fw-bold">Tổng hóa đơn</td>
                        <td className="text-end fw-bold">
                          {parseInt(854000).toLocaleString("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          })}
                        </td>
                        <td></td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>

              <div className="d-flex justify-content-end">
                <Link
                  to={`/admindonhangchitiet/${ma_don_hang}`}
                  type="button"
                  className="btn btn-outline-danger me-2 my-0"
                >
                  Hủy
                </Link>
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

export default AdminDonHangSua;
