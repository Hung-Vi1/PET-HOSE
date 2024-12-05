import React, { useEffect, useState } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";
import Select from "react-select";
import "./App.css";

function AdminDonHangThem() {
  const { ma_don_hang } = useParams();
  const { isLoggedIn } = useAuth();

  const [areas, setAreas] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [selectedArea, setSelectedArea] = useState(null);
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [selectedWard, setSelectedWard] = useState(null);
  const [hoTen, setHoTen] = useState("");
  const [soDienThoai, setSoDienThoai] = useState("");
  const [diaChi, setDiaChi] = useState("");
  const [trangThai, setTrangThai] = useState("0");
  const [phuongThucTT, setPhuongThucTT] = useState("0");
  const [userOptions, setUserOptions] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [loi, setLoi] = useState("");

  useEffect(() => {
    fetch(`https://provinces.open-api.vn/api/?depth=3`)
      .then((response) => response.json())
      .then((data) => {
        const formattedData = data.map((area) => ({
          value: area.code,
          label: area.name,
          districts: area.districts,
        }));
        setAreas(formattedData);
      })
      .catch((error) => {
        console.error("Lỗi khi lấy dữ liệu:", error);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:8000/api/users")
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          const options = data.data.map((user) => ({
            value: user.ma_tai_khoan,
            label: `${user.ten_tai_khoan} - ${user.so_dien_thoai}`,
            soDienThoai: user.so_dien_thoai,
            diaChi: user.dia_chi,
          }));
          setUserOptions(options);
        } else {
          setLoi(data.message);
        }
      })
      .catch((error) => {
        console.error("Lỗi khi lấy dữ liệu người dùng:", error);
        setLoi("Có lỗi xảy ra, vui lòng thử lại.");
      });
  }, []);

  const parseAddress = (address) => {
    const parts = address.split(",").map((part) => part.trim());

    if (parts.length >= 4) {
      return {
        ward: parts[1].trim(),
        district: parts[2].trim(),
        area: parts[3].trim(),
      };
    }

    return { ward: "", district: "", area: "" };
  };

  const handleUserChange = (selectedOption) => {
    setSelectedUser(selectedOption);
    if (selectedOption) {
      const { ward, district, area } = parseAddress(selectedOption.diaChi);

      setHoTen(selectedOption.label.split(" - ")[0]);
      setSoDienThoai(selectedOption.soDienThoai);
      setDiaChi(selectedOption.diaChi);

      console.log("Ward:", ward);
      console.log("District:", district);
      console.log("Area:", area);
      console.log("Selected Area:", selectedArea);
      console.log("Selected District:", selectedDistrict);
      console.log("Selected Ward:", selectedWard);

      // Cập nhật khu vực
      const areaData = areas.find((areaItem) =>
        areaItem.label.toLowerCase().includes(area.toLowerCase())
      );

      if (areaData) {
        setSelectedArea(areaData);

        // Cập nhật danh sách quận/huyện
        const districtData = areaData.districts.find((districtItem) =>
          districtItem.name.includes(district)
        );

        if (districtData) {
          setSelectedDistrict(districtData);

          // Cập nhật danh sách phường/xã
          const wardData = districtData.wards.find((wardItem) =>
            wardItem.name.includes(ward)
          );

          if (wardData) {
            setSelectedWard(wardData);
          } else {
            setSelectedWard(null); // Không tìm thấy ward
          }

          // Cập nhật danh sách wards
          setWards(
            districtData.wards.map((ward) => ({
              value: ward.code,
              label: ward.name,
            }))
          );
        } else {
          setSelectedDistrict(null); // Không tìm thấy district
        }
      } else {
        setSelectedArea(null); // Không tìm thấy area
      }
    } else {
      resetFields();
    }
  };

  const resetFields = () => {
    setHoTen("");
    setSoDienThoai("");
    setDiaChi("");
    setSelectedArea(null);
    setSelectedDistrict(null);
    setSelectedWard(null);
    setDistricts([]);
    setWards([]);
  };

  const handleAreaChange = (selectedOption) => {
    setSelectedArea(selectedOption);
    setSelectedDistrict(null);
    setSelectedWard(null);
    setWards([]);

    if (selectedOption) {
      setDistricts(
        selectedOption.districts.map((district) => ({
          value: district.code,
          label: district.name,
          wards: district.wards,
        }))
      );
    }
  };

  const handleDistrictChange = (selectedOption) => {
    setSelectedDistrict(selectedOption);
    setSelectedWard(null);

    if (selectedOption) {
      setWards(
        selectedOption.wards.map((ward) => ({
          value: ward.code,
          label: ward.name,
        }))
      );
    } else {
      setWards([]);
    }
  };

  const handlePaymentMethodChange = (value) => {
    setPhuongThucTT(value);
    setTrangThai(value === "0" ? "0" : "2");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const orderData = {
      hoTen,
      soDienThoai,
      diaChi: `${selectedWard ? selectedWard.label : ""}, ${
        selectedDistrict ? selectedDistrict.label : ""
      }, ${selectedArea ? selectedArea.label : ""}, ${diaChi}`,
      trangThai,
      phuongThucTT,
    };

    fetch(`http://localhost:8000/api/donhang`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Không thể tạo đơn hàng");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Đơn hàng đã được tạo:", data);
      })
      .catch((error) => {
        console.error("Lỗi khi tạo đơn hàng:", error);
      });
  };

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md p-0">
          <div className="container mt-3 mb-5">
            <div className="d-flex">
              <Link
                to={`/admindonhang`}
                className="my-0 my-auto btn border border-secondary-subtle text-secondary me-3"
              >
                <i className="bi bi-arrow-left"></i>
              </Link>
              <h1 className="mb-0">Thêm đơn hàng</h1>
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
                          <Select
                            options={userOptions}
                            value={selectedUser}
                            onChange={handleUserChange}
                            placeholder="Chọn khách hàng"
                            isClearable
                            styles={{ minHeight: "50px" }}
                          />
                        </div>

                        <div className="col-md">
                          <label className="form-label">Số điện thoại</label>
                          <input
                            type="text"
                            className="form-control"
                            value={soDienThoai}
                            onChange={(e) => setSoDienThoai(e.target.value)}
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
                            styles={{ minHeight: "50px" }}
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
                            value={diaChi}
                            onChange={(e) => setDiaChi(e.target.value)}
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

                      <select
                        className="form-select"
                        value={trangThai}
                        onChange={(e) => setTrangThai(e.target.value)}
                        disabled
                      >
                        <option value="0">Chờ xác nhận</option>
                        <option value="2">Hoàn thành</option>
                      </select>
                    </div>

                    <div className="col-md border border-dark rounded-3 my-3 p-2">
                      <h5 className="mb-2 py-1">Phương thức thanh toán</h5>

                      <select
                        className="form-select"
                        value={phuongThucTT}
                        onChange={(e) =>
                          handlePaymentMethodChange(e.target.value)
                        }
                      >
                        <option value="0">Thanh toán khi nhận hàng</option>
                        <option value="1">Thanh toán chuyển khoản</option>
                      </select>
                    </div>
                  </div>
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

            {loi && <div className="alert alert-danger mt-3">{loi}</div>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDonHangThem;
