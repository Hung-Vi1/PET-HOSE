// import React, { useEffect, useState } from "react";
// import { useParams, Navigate, Link } from "react-router-dom";
// import { useAuth } from "./contexts/AuthContext";
// import Select from "react-select";
// // import "./App.css";

// function AdminDonHangThem() {
//   const { ma_don_hang } = useParams();
//   const { isLoggedIn } = useAuth();

//   const [areas, setAreas] = useState([]);
//   const [districts, setDistricts] = useState([]);
//   const [wards, setWards] = useState([]);
//   const [selectedArea, setSelectedArea] = useState(null);
//   const [selectedDistrict, setSelectedDistrict] = useState(null);
//   const [selectedWard, setSelectedWard] = useState(null);
//   const [hoTen, setHoTen] = useState("");
//   const [soDienThoai, setSoDienThoai] = useState("");
//   const [diaChi, setDiaChi] = useState("");
//   const [trangThai, setTrangThai] = useState("0");
//   const [phuongThucTT, setPhuongThucTT] = useState("0");
//   const [userOptions, setUserOptions] = useState([]);
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [loi, setLoi] = useState("");

//   // Lấy dữ liệu tỉnh thành
//   useEffect(() => {
//     fetch(`https://provinces.open-api.vn/api/?depth=3`)
//       .then((response) => response.json())
//       .then((data) => {
//         console.log("Dữ liệu từ API tỉnh thành:", data);
//         const formattedData = data.map((area) => ({
//           value: area.code,
//           label: area.name,
//           districts: area.districts || [], // Đặt mặc định là mảng rỗng nếu không có districts
//         }));
//         setAreas(formattedData);
//       })
//       .catch((error) => {
//         console.error("Lỗi khi lấy dữ liệu:", error);
//       });
//   }, []);

//   // Lấy dữ liệu người dùng
//   useEffect(() => {
//     fetch("http://localhost:8000/api/users")
//       .then((response) => response.json())
//       .then((data) => {
//         if (data.status === "success") {
//           const options = data.data.map((user) => ({
//             value: user.ma_tai_khoan,
//             label: `${user.ten_tai_khoan} - ${user.so_dien_thoai}`,
//             soDienThoai: user.so_dien_thoai,
//             diaChi: user.dia_chi,
//           }));
//           setUserOptions(options);
//         } else {
//           setLoi(data.message);
//         }
//       })
//       .catch((error) => {
//         console.error("Lỗi khi lấy dữ liệu người dùng:", error);
//         setLoi("Có lỗi xảy ra, vui lòng thử lại.");
//       });
//   }, []);

//   // Hàm phân tách địa chỉ
//   const parseAddress = (address) => {
//     const parts = address.split(",").map((part) => part.trim());
//     console.log("Phân tách địa chỉ:", parts);
//     if (parts.length >= 4) {
//       return {
//         ward: parts[1].replace(/Phường |Xã /, "").trim(),
//         district: parts[2].replace(/Quận |Huyện /, "").trim(),
//         area: parts[3].replace(/Thành phố |Tỉnh /, "").trim(),
//       };
//     }
//     return { ward: "", district: "", area: "" };
//   };

//   // Theo dõi sự thay đổi của selectedArea, selectedDistrict và selectedWard
//   useEffect(() => {
//     console.log("Selected Area:", selectedArea);
//     console.log("Selected District:", selectedDistrict);
//     console.log("Selected Ward:", selectedWard);
//   }, [selectedArea, selectedDistrict, selectedWard]);

//   const handleUserChange = (selectedOption) => {
//     setSelectedUser(selectedOption);

//     if (selectedOption) {
//       const { ward, district, area } = parseAddress(selectedOption.diaChi);
//       setHoTen(selectedOption.label.split(" - ")[0]);
//       setSoDienThoai(selectedOption.soDienThoai);
//       setDiaChi(selectedOption.diaChi);

//       const areaData = areas.find((areaItem) => areaItem.label.includes(area));
//       if (areaData) {
//         setSelectedArea(areaData);
//         setDistricts(
//           areaData.districts.map((district) => ({
//             value: district.code,
//             label: district.name,
//             wards: district.wards || [],
//           }))
//         );

//         const districtData = areaData.districts.find((districtItem) =>
//           districtItem.name.toLowerCase().includes(district.toLowerCase())
//         );

//         if (districtData) {
//           setSelectedDistrict(districtData);

//           // Cập nhật danh sách wards
//           const wardData = districtData.wards.find((wardItem) =>
//             wardItem.name.toLowerCase().includes(ward.toLowerCase())
//           );

//           if (wardData) {
//             setSelectedWard(wardData);
//           } else {
//             setSelectedWard(null);
//           }

//           setWards(
//             districtData.wards.map((ward) => ({
//               value: ward.code,
//               label: ward.name,
//             }))
//           );
//         } else {
//           setSelectedDistrict(null);
//           setWards([]);
//         }
//       }
//     } else {
//       resetFields();
//     }
//   };

//   const resetFields = () => {
//     setHoTen("");
//     setSoDienThoai("");
//     setDiaChi("");
//     setSelectedArea(null);
//     setSelectedDistrict(null);
//     setSelectedWard(null);
//     setDistricts([]);
//     setWards([]);
//   };

//   const handleAreaChange = (selectedOption) => {
//     setSelectedArea(selectedOption);
//     setSelectedDistrict(null); // Đặt lại selectedDistrict
//     setSelectedWard(null); // Đặt lại selectedWard
//     setWards([]); // Đặt lại danh sách wards

//     if (selectedOption) {
//       // Cập nhật districts từ selectedOption
//       const formattedDistricts = selectedOption.districts.map((district) => ({
//         value: district.code,
//         label: district.name,
//         wards: district.wards || [], // Đặt mặc định là mảng rỗng nếu không có wards
//       }));

//       setDistricts(formattedDistricts);
//     } else {
//       setDistricts([]); // Nếu không có selectedOption, đặt lại districts
//     }
//   };

//   const handleDistrictChange = (selectedOption) => {
//     setSelectedDistrict(selectedOption);
//     setSelectedWard(null); // Đặt lại selectedWard

//     if (selectedOption && selectedOption.wards) {
//       const formattedWards = selectedOption.wards.map((ward) => ({
//         value: ward.code,
//         label: ward.name,
//       }));
//       setWards(formattedWards);
//     } else {
//       setWards([]); // Đặt lại danh sách wards nếu không có
//     }
//   };

//   // Theo dõi sự thay đổi của districts và wards
//   useEffect(() => {
//     console.log("Districts:", districts);
//     console.log("Wards:", wards);
//   }, [districts, wards]);

//   const handlePaymentMethodChange = (value) => {
//     setPhuongThucTT(value);
//     setTrangThai(value === "0" ? "0" : "2");
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const orderData = {
//       hoTen,
//       soDienThoai,
//       diaChi: `${selectedWard ? selectedWard.label : ""}, ${
//         selectedDistrict ? selectedDistrict.label : ""
//       }, ${selectedArea ? selectedArea.label : ""}, ${diaChi}`,
//       trangThai,
//       phuongThucTT,
//     };

//     fetch(`http://localhost:8000/api/donhang`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(orderData),
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Không thể tạo đơn hàng");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         console.log("Đơn hàng đã được tạo:", data);
//       })
//       .catch((error) => {
//         console.error("Lỗi khi tạo đơn hàng:", error);
//       });
//   };

//   if (!isLoggedIn) {
//     return <Navigate to="/login" />;
//   }

//   return (
//     <div className="container-fluid">
//       <div className="row">
//         <div className="col-md p-0">
//           <div className="container mt-3 mb-5">
//             <div className="d-flex">
//               <Link
//                 to={`/admindonhang`}
//                 className="my-0 my-auto btn border border-secondary-subtle text-secondary me-3"
//               >
//                 <i className="bi bi-arrow-left"></i>
//               </Link>
//               <h1 className="mb-0">Thêm đơn hàng</h1>
//             </div>

//             <form onSubmit={handleSubmit}>
//               <div className="d-flex flex-wrap">
//                 <div className="col-md-8 px-0">
//                   <div className="d-flex flex-wrap me-3">
//                     <div className="col-md-12 border border-dark rounded-3 my-3 p-2">
//                       <h5 className="mb-2 py-1">Thông tin giao hàng</h5>

//                       <div className="row mb-3">
//                         <div className="col-md">
//                           <label className="form-label">Họ và tên</label>
//                           <Select
//                             options={userOptions}
//                             value={selectedUser}
//                             onChange={handleUserChange}
//                             placeholder="Chọn khách hàng"
//                             isClearable
//                             styles={{ minHeight: "50px" }}
//                           />
//                         </div>

//                         <div className="col-md">
//                           <label className="form-label">Số điện thoại</label>
//                           <input
//                             type="text"
//                             className="form-control"
//                             value={soDienThoai}
//                             onChange={(e) => setSoDienThoai(e.target.value)}
//                             required
//                             placeholder="Vui lòng nhập số điện thoại"
//                           />
//                         </div>
//                       </div>

//                       <div className="row mb-3">
//                         <div className="col-md">
//                           <label className="form-label">Tỉnh/Thành phố</label>
//                           <Select
//                             options={areas}
//                             value={selectedArea}
//                             onChange={handleAreaChange}
//                             placeholder="Chọn Tỉnh / Thành phố"
//                             isClearable
//                             styles={{ minHeight: "50px" }}
//                           />
//                         </div>
//                         <div className="col-md">
//                           <label className="form-label">Quận/Huyện</label>
//                           <Select
//                             options={districts}
//                             value={selectedDistrict}
//                             onChange={handleDistrictChange}
//                             placeholder="Chọn Quận / Huyện"
//                             isClearable
//                             isDisabled={!selectedArea}
//                             styles={{ minHeight: "50px" }}
//                           />
//                         </div>
//                       </div>

//                       <div className="row mb-3">
//                         <div className="col-md">
//                           <label className="form-label">Phường/Xã</label>
//                           <Select
//                             options={wards}
//                             value={selectedWard}
//                             onChange={setSelectedWard}
//                             placeholder="Chọn Phường / Xã"
//                             isClearable
//                             isDisabled={!selectedDistrict}
//                             styles={{ minHeight: "50px" }}
//                           />
//                         </div>
//                         <div className="col-md">
//                           <label className="form-label">Địa chỉ</label>
//                           <input
//                             type="text"
//                             className="form-control"
//                             value={diaChi}
//                             onChange={(e) => setDiaChi(e.target.value)}
//                             required
//                             placeholder="Vui lòng nhập địa chỉ chi tiết"
//                           />
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="col-md px-0">
//                   <div className="d-flex flex-wrap">
//                     <div className="col-md-12 border border-dark rounded-3 my-3 p-2">
//                       <h5 className="mb-2 py-1">Trạng thái đơn hàng</h5>

//                       <select
//                         className="form-select"
//                         value={trangThai}
//                         onChange={(e) => setTrangThai(e.target.value)}
//                         disabled
//                       >
//                         <option value="0">Chờ xác nhận</option>
//                         <option value="2">Hoàn thành</option>
//                       </select>
//                     </div>

//                     <div className="col-md border border-dark rounded-3 my-3 p-2">
//                       <h5 className="mb-2 py-1">Phương thức thanh toán</h5>

//                       <select
//                         className="form-select"
//                         value={phuongThucTT}
//                         onChange={(e) =>
//                           handlePaymentMethodChange(e.target.value)
//                         }
//                       >
//                         <option value="0">Thanh toán khi nhận hàng</option>
//                         <option value="1">Thanh toán chuyển khoản</option>
//                       </select>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="d-flex justify-content-end">
//                 <Link
//                   to={`/admindonhangchitiet/${ma_don_hang}`}
//                   type="button"
//                   className="btn btn-outline-danger me-2 my-0"
//                 >
//                   Hủy
//                 </Link>
//                 <button type="submit" className="btn btn-primary ms-2">
//                   Lưu
//                 </button>
//               </div>
//             </form>

//             {loi && <div className="alert alert-danger mt-3">{loi}</div>}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AdminDonHangThem;

import React, { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";
import Select from "react-select";

function AdminDonHangThem() {
  const [accounts, setAccounts] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedAccount, setSelectedAccount] = useState("");
  const [selectedAccountInfo, setSelectedAccountInfo] = useState({});
  const [orderItems, setOrderItems] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("Chuyển khoản");
  const [note, setNote] = useState("");
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const { user, isLoggedIn } = useAuth();

  // Lấy danh sách tài khoản
  useEffect(() => {
    fetch("http://localhost:8000/api/users")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Không thể tải danh sách tài khoản");
        }
        return res.json();
      })
      .then((data) => {
        if (data.status === "success") {
          setAccounts(data.data);
        }
      })
      .catch((error) => setError(error.message));
  }, []);

  // Lấy danh sách sản phẩm
  useEffect(() => {
    fetch("http://localhost:8000/api/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Không thể tải danh sách sản phẩm");
        }
        return res.json();
      })
      .then((data) => {
        if (data.status === "success") {
          setProducts(data.data);
        }
      })
      .catch((error) => setError(error.message));
  }, []);

  // Cập nhật thông tin tài khoản khi chọn tài khoản
  const handleAccountChange = (selectedOption) => {
    if (selectedOption) {
      const account = accounts.find(
        (acc) => acc.ma_tai_khoan === selectedOption.value
      );
      if (account) {
        setSelectedAccount(account.ma_tai_khoan);
        setSelectedAccountInfo(account);
      }
    } else {
      setSelectedAccount("");
      setSelectedAccountInfo({});
    }
  };

  // Cập nhật sản phẩm đã chọn
  const handleProductChange = (selectedOption) => {
    if (selectedOption) {
      const existingIndex = orderItems.findIndex(
        (item) => item.productId === Number(selectedOption.value)
      );

      if (existingIndex !== -1) {
        const newItems = [...orderItems];
        newItems[existingIndex].quantity += 1;
        setOrderItems(newItems);
      } else {
        setOrderItems([
          ...orderItems,
          { productId: Number(selectedOption.value), quantity: 1 },
        ]);
      }
      setSelectedProduct(selectedOption);
    }
  };

  // Cập nhật số lượng sản phẩm
  const handleQuantityChange = (index, value) => {
    const newItems = [...orderItems];
    newItems[index].quantity = Number(value);
    setOrderItems(newItems);
  };

  // Xóa sản phẩm khỏi đơn hàng
  const removeProduct = (index) => {
    const newItems = orderItems.filter((_, i) => i !== index);
    setOrderItems(newItems);
  };

  // Tính tổng giá trị đơn hàng
  const calculateTotal = () => {
    return orderItems.reduce((total, item) => {
      const product = products.find((p) => p.ma_san_pham === item.productId);
      return total + (product ? Number(product.gia) * item.quantity : 0);
    }, 0);
  };

  // Xử lý gửi đơn hàng
  const handleSubmit = (e) => {
    e.preventDefault();

    if (orderItems.length === 0) {
      setError("Bạn chưa chọn sản phẩm nào để thêm đơn hàng.");
      return;
    }

    // Đặt trạng thái đơn hàng là "Chờ xác nhận" mặc định
    const orderData = {
      Mataikhoan: selectedAccount,
      PTTT: paymentMethod,
      GhiChu: note,
      chi_tiet: orderItems.map((item) => ({
        MaSP: item.productId,
        SoLuong: item.quantity,
      })),
      TrangThai: "cho_xac_nhan", // Trạng thái mặc định
    };

    fetch("http://localhost:8000/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Có lỗi xảy ra khi thêm đơn hàng");
        }
        return res.json();
      })
      .then((data) => {
        if (data.status === "success") {
          setSuccessMessage("Thêm đơn hàng thành công!");
          setSelectedAccount("");
          setOrderItems([]);
          setSelectedProduct(null);
          setPaymentMethod("Chuyển khoản");
          setNote("");
          setSelectedAccountInfo({});
        } else {
          throw new Error(data.message || "Có lỗi xảy ra");
        }
      })
      .catch((error) => setError(error.message));
  };

  // Hàm lọc tùy chọn
  const filterAccountOptions = (option, inputValue) => {
    const { label } = option;
    return label.toLowerCase().includes(inputValue.toLowerCase());
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
              className="list-group-item list-group-item-action my-0 rounded-0 active"
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
                      Xin chào, {user.Hovaten || "Không có tên"}
                    </a>
                    <ul className="dropdown-menu bg-primary p-0 mt-0 border-0 rounded-0">
                      <li>
                        <Link
                          className="menu-header-top dropdown-item"
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
                          className="menu-header-bottom dropdown-item"
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
                to={`/admindonhang`}
                className="my-0 my-auto btn border border-secondary-subtle text-secondary me-3"
              >
                <i className="bi bi-arrow-left"></i>
              </Link>
              <h1 className="mb-0">Thêm Đơn Hàng</h1>
            </div>

            {error && <p className="text-danger">{error}</p>}
            {successMessage && <p className="text-success">{successMessage}</p>}

            <form onSubmit={handleSubmit}>
              <div className="d-flex flex-wrap">
                <div className="col-md-8 px-0">
                  <div className="d-flex flex-wrap me-3">
                    <div className="col-md-12 border border-dark rounded-3 my-3 p-2">
                      <h5 className="mb-2 py-1">Thông tin giao hàng</h5>

                      <div className="row mb-3">
                        <div className="col-md">
                          <label htmlFor="account" className="form-label">
                            Tài Khoản
                          </label>
                          <Select
                            id="account"
                            options={accounts.map((account) => ({
                              value: account.ma_tai_khoan,
                              label: `${account.ten_tai_khoan} - ${account.so_dien_thoai}`,
                            }))}
                            onChange={handleAccountChange}
                            isClearable
                            filterOption={filterAccountOptions}
                          />
                        </div>

                        <div className="col-md">
                          <label htmlFor="phone" className="form-label">
                            Số điện thoại
                          </label>
                          <input
                            type="text"
                            id="phone"
                            className="form-control"
                            value={selectedAccountInfo.so_dien_thoai || ""}
                            readOnly
                          />
                        </div>
                      </div>

                      <div className="mb-3">
                        <label htmlFor="address" className="form-label">
                          Địa chỉ
                        </label>
                        <input
                          type="text"
                          id="address"
                          className="form-control"
                          value={selectedAccountInfo.dia_chi || ""}
                          readOnly
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md px-0">
                  <div className="d-flex flex-wrap">
                    <div className="col-md-12 border border-dark rounded-3 my-3 p-2">
                      <h5 htmlFor="TrangThaiDonHang" className="mb-2 py-1">
                        Trạng thái đơn hàng
                      </h5>
                      <select
                        id="TrangThaiDonHang"
                        className="form-select"
                        disabled
                      >
                        <option value="cho_xac_nhan">Chờ xác nhận</option>
                      </select>
                    </div>

                    <div className="col-md border border-dark rounded-3 my-3 p-2">
                      <h5 className="mb-2 py-1">Phương thức thanh toán</h5>
                      <select
                        id="paymentMethod"
                        className="form-select"
                        value={paymentMethod}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                      >
                        <option value="Chuyển khoản">
                          Thanh toán chuyển khoản
                        </option>
                        <option value="Tiền mặt">
                          Thanh toán khi nhận hàng
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <div className="d-flex flex-wrap">
                <div className="col-md-12 border border-dark rounded-3 my-3 p-2">
                  <h5 className="mb-2 py-1">Chi tiết đơn hàng</h5>

                  <Select
                    id="product"
                    options={products.map((product) => ({
                      value: product.ma_san_pham,
                      label: `
                      ${product.ten_san_pham} - ${parseInt(
                        product.gia
                      ).toLocaleString("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      })}
              `,
                    }))}
                    value={selectedProduct}
                    onChange={handleProductChange}
                    isClearable
                  />

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
                        <th style={{ width: "60px" }}></th>
                      </tr>
                    </thead>

                    <tbody>
                      {orderItems.map((item, index) => {
                        const product = products.find(
                          (p) => p.ma_san_pham === item.productId
                        );
                        const price = product ? Number(product.gia) : 0;
                        const totalPrice = price * item.quantity;

                        return (
                          <tr key={index}>
                            <td className="text-center align-middle">
                              {index + 1}
                            </td>
                            <td style={{ width: "8%" }}>
                              <img
                                src={`http://localhost:8000/image/product/${product.hinh_anh}`}
                                alt={`http://localhost:8000/image/product/${product.hinh_anh}`}
                              />
                            </td>
                            <td className="align-middle">
                              {product
                                ? product.ten_san_pham
                                : "Sản phẩm không tồn tại"}
                            </td>
                            <td className="text-center align-middle">
                              <input
                                type="number"
                                className="form-control mx-auto"
                                value={item.quantity}
                                onChange={(e) =>
                                  handleQuantityChange(index, e.target.value)
                                }
                                min="1"
                                style={{ width: "65px" }}
                              />
                            </td>
                            <td className="text-end align-middle">
                              {parseInt(price).toLocaleString("vi-VN", {
                                style: "currency",
                                currency: "VND",
                              })}
                            </td>
                            <td className="text-end align-middle">
                              {parseInt(totalPrice).toLocaleString("vi-VN", {
                                style: "currency",
                                currency: "VND",
                              })}
                            </td>
                            <td className="align-middle">
                              <button
                                type="button"
                                className="btn d-flex justify-content-center"
                                onClick={() => removeProduct(index)}
                              >
                                <i className="bi bi-x-lg btn text-danger p-0"></i>
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>

                    <tfoot>
                      <tr>
                        <td className="text-center">Ghi chú</td>
                        <td colSpan={3}>
                          <textarea
                            className="form-control h-50"
                            value={note}
                            onChange={(e) => setNote(e.target.value)}
                          ></textarea>
                        </td>
                        <td className="text-end fw-bold">Tổng hóa đơn</td>
                        <td className="text-end fw-bold">
                          {parseInt(calculateTotal()).toLocaleString("vi-VN", {
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
                  to={`/admindonhang`}
                  className="btn btn-outline-danger me-2 my-0"
                >
                  Hủy
                </Link>
                <button type="submit" className="btn btn-primary ms-2">
                  Tạo đơn
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDonHangThem;
