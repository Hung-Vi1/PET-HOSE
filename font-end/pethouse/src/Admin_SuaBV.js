// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom"; // Để lấy id bài viết từ URL và điều hướng
// import { useAuth } from "./contexts/AuthContext"; // Lấy thông tin người dùng nếu cần
// import "./App.css";

// function Admin_Suabv() {
//     const { user } = useAuth();
//     const { id } = useParams(); // Lấy id bài viết từ URL
//     const [baiViet, setBaiViet] = useState({
//         tieu_de: "",
//         Hinh: "",
//         noi_dung: "",
//         chi_tiet: "",
//         ma_danh_muc_bv: 1,
//         trang_thai: 1,
//     });
//     const [loading, setLoading] = useState(true);
//     const navigate = useNavigate(); // Dùng để điều hướng sau khi cập nhật thành công

//     // Lấy dữ liệu bài viết cần sửa
//     useEffect(() => {
//         fetch(`http://localhost:8000/api/News/${id}`)
//             .then((res) => res.json())
//             .then((data) => {
//                 if (data.data) {
//                     setBaiViet(data.data);
//                     setLoading(false); // Dữ liệu đã được tải xong
//                 } else {
//                     alert("Không tìm thấy bài viết.");
//                     navigate("/Admin_BV"); // Quay lại trang danh sách nếu không tìm thấy bài viết
//                 }
//             })
//             .catch((error) => {
//                 console.error("Lỗi khi lấy dữ liệu bài viết:", error);
//                 setLoading(false);
//             });
//     }, [id, navigate]);

//     // Hàm cập nhật bài viết
//     const capNhatBaiViet = () => {
//         fetch(`http://localhost:8000/api/News/${id}`, {
//             method: "PUT", // Sử dụng phương thức PUT để cập nhật bài viết
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(baiViet),
//         })
//             .then((res) => res.json())
//             .then((data) => {
//                 if (data.success) {
//                     alert("Cập nhật bài viết thành công!");
//                     navigate("/Admin_BV"); // Quay lại trang danh sách bài viết sau khi cập nhật
//                 } else {
//                     alert("Có lỗi xảy ra khi cập nhật bài viết.");
//                 }
//             })
//             .catch((error) => {
//                 console.error("Lỗi khi cập nhật bài viết:", error);
//             });
//     };

//     // Hàm xử lý thay đổi giá trị các trường input
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setBaiViet((prevState) => ({
//             ...prevState,
//             [name]: value,
//         }));
//     };

//     return (
// <<<<<<< HEAD
//         <div className="container">
//             {loading ? (
//                 <p>Đang tải dữ liệu...</p>
//             ) : (
//                 <>
//                     <h2>Cập nhật bài viết</h2>
//                     <div className="form-group">
//                         <label htmlFor="tieu_de">Tiêu đề:</label>
//                         <input
//                             type="text"
//                             className="form-control"
//                             id="tieu_de"
//                             name="tieu_de"
//                             value={baiViet.tieu_de}
//                             onChange={handleChange}
//                         />
// =======
//         <div className="container-fluid">
//             <div className="row">
//             <div
//                     id="openMenu"
//                     className="col-md-2 p-0 bg-primary collapse collapse-horizontal show"
//                     style={{ minHeight: "100vh" }}
//                 >
//                     <Link to={"/"}>
//                         <img
//                             src={`http://localhost:8000/image/Nen_trong_suot.png`}
//                             className="d-block w-75 mx-auto"
//                             alt={`http://localhost:8000/image/Nen_trong_suot.png`}
//                         />
//                     </Link>

//                     <div className="list-group list-group-item-primary">
//                         <Link
//                             to={"/admin"}
//                             className="list-group-item list-group-item-action mt-2 mb-0 rounded-0"
//                             aria-current="true"
//                         >
//                             <h5 className="mb-0 py-1">Tổng quan</h5>
//                         </Link>
//                         <Link
//                             to={"/adminsanpham"}
//                             className="list-group-item list-group-item-action my-0  rounded-0"
//                         >
//                             <h5 className="mb-0 py-1">Sản phẩm</h5>
//                         </Link>
//                         <Link
//                             to={"/admindichvuchamsoc"}
//                             className="list-group-item list-group-item-action my-0 rounded-0"
//                         >
//                             <h5 className="mb-0 py-1">Dịch vụ chăm sóc</h5>
//                         </Link>
//                         <Link
//                             to={"/admindanhmuc"}
//                             className="list-group-item list-group-item-action my-0 rounded-0"
//                         >
//                             <h5 className="mb-0 py-1">Danh mục</h5>
//                         </Link>
//                         <Link
//                             to={"/admintaikhoan"}
//                             className="list-group-item list-group-item-action my-0 rounded-0"
//                         >
//                             <h5 className="mb-0 py-1">Tài khoản</h5>
//                         </Link>
//                         <Link
//                             to={"/admindonhang"}
//                             className="list-group-item list-group-item-action my-0 rounded-0"
//                         >
//                             <h5 className="mb-0 py-1">Đơn hàng</h5>
//                         </Link>
//                         <Link
//                             to={"/admindatlich"}
//                             className="list-group-item list-group-item-action my-0 rounded-0"
//                         >
//                             <h5 className="mb-0 py-1">Đặt lịch</h5>
//                         </Link>
//                         <Link
//                             to={"/Admin_BV"}
//                             className="list-group-item list-group-item-action my-0 rounded-0 active"
//                         >
//                             <h5 className="mb-0 py-1">Tin tức</h5>
//                         </Link>
//                         <Link
//                             to={"/adminlienhe"}
//                             className="list-group-item list-group-item-action my-0 rounded-0"
//                         >
//                             <h5 className="mb-0 py-1">Liên hệ</h5>
//                         </Link>
//                         <Link
//                             to={"/adminmagiamgia"}
//                             className="list-group-item list-group-item-action my-0 rounded-0"
//                         >
//                             <h5 className="mb-0 py-1">Mã giảm giá</h5>
//                         </Link>
// >>>>>>> 5cefcc941049f9ccde9832f02a71b8a8ba11042c
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="Hinh">Ảnh:</label>
//                         <input
//                             type="text"
//                             className="form-control"
//                             id="Hinh"
//                             name="Hinh"
//                             value={baiViet.Hinh}
//                             onChange={handleChange}
//                         />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="noi_dung">Nội dung:</label>
//                         <textarea
//                             className="form-control"
//                             id="noi_dung"
//                             name="noi_dung"
//                             value={baiViet.noi_dung}
//                             onChange={handleChange}
//                         />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="chi_tiet">Chi tiết:</label>
//                         <textarea
//                             className="form-control"
//                             id="chi_tiet"
//                             name="chi_tiet"
//                             value={baiViet.chi_tiet}
//                             onChange={handleChange}
//                         />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="ma_danh_muc_bv">Danh mục:</label>
//                         <input
//                             type="number"
//                             className="form-control"
//                             id="ma_danh_muc_bv"
//                             name="ma_danh_muc_bv"
//                             value={baiViet.ma_danh_muc_bv}
//                             onChange={handleChange}
//                         />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="trang_thai">Trạng thái:</label>
//                         <select
//                             className="form-control"
//                             id="trang_thai"
//                             name="trang_thai"
//                             value={baiViet.trang_thai}
//                             onChange={handleChange}
//                         >
//                             <option value="1">Hiện</option>
//                             <option value="0">Ẩn</option>
//                         </select>
//                     </div>
//                     <button className="btn btn-success mt-3" onClick={capNhatBaiViet}>
//                         Cập nhật
//                     </button>
//                 </>
//             )}
//         </div>
//     );
// }

// export default Admin_Suabv;
