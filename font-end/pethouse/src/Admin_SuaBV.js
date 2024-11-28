// import React, { useState, useEffect } from "react";
// import { useParams, Link } from "react-router-dom";
// import { useAuth } from "./contexts/AuthContext";
// import "./App.css";

// function SuaBV() {
//   const { user } = useAuth(); 
//   const { bai_viet } = useParams(); // Lấy ID từ URL
//   const [tieuDe, setTieuDe] = useState(""); 
//   const [noiDung, setNoiDung] = useState(""); 
//   const [chiTiet, setChiTiet] = useState(""); // Trạng thái cho chi tiết bài viết
//   const [error, setError] = useState(null); 

//   // Lấy thông tin bài viết theo mã bài viết
//   useEffect(() => {
//     fetch(`http://localhost:8000/api/News/${bai_viet}`)
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error("Không thể lấy thông tin bài viết");
//         }
//         return res.json();
//       })
//       .then((data) => {
//         const bv = data.data[0]; // Lấy phần tử đầu tiên từ mảng data
//         if (bv) {
//           setTieuDe(bv.tieu_de);
//           setNoiDung(bv.noi_dung);
//           setChiTiet(bv.chi_tiet); // Lưu chi tiết bài viết
//         } else {
//           setError("Bài viết không tồn tại");
//         }
//       })
//       .catch((error) => {
//         setError(error.message);
//       });
//   }, [bai_viet]);

//   // Xử lý gửi form
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const updatedArticle = {
//       tieu_de: tieuDe,
//       noi_dung: noiDung,
//       chi_tiet: chiTiet // Cập nhật chi tiết bài viết
//     };

//     fetch(`http://localhost:8000/api/News/${bai_viet}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(updatedArticle),
//     })
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error("Lỗi khi cập nhật bài viết");
//         }
//         return res.json();
//       })
//       .then(() => {
//         alert("Cập nhật thành công!");
//       })
//       .catch((error) => {
//         setError(error.message);
//       });
//   };

//   return (
//     <div className="container-fluid">
//       <div className="row">
//         <div className="col-md p-0">
//           <nav className="navbar navbar-expand-lg bg-primary p-0" data-bs-theme="dark">
//             {/* Navbar content */}
//           </nav>

//           <div className="container mt-3 mb-5">
//             <div className="d-flex">
//               <Link to={"/admin_Bv"} className="my-0 my-auto btn border border-secondary-subtle text-secondary me-3">
//                 <i className="bi bi-arrow-left"></i>
//               </Link>
//               <h1 className="mb-0">{tieuDe}</h1>
//             </div>

//             <div className="d-flex flex-wrap">
//               <div className="col-md-12 border border-dark rounded-3 my-3 p-2">
//                 <h5 className="mb-2 py-1">Thông tin bài viết</h5>

//                 {error && <p className="text-danger">{error}</p>}

//                 <form onSubmit={handleSubmit}>
//                   <div className="mb-3">
//                     <label htmlFor="tieuDe" className="form-label">Tiêu Đề</label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       id="tieuDe"
//                       value={tieuDe}
//                       onChange={(e) => setTieuDe(e.target.value)}
//                       required
//                     />
//                   </div>
//                   <div className="mb-3">
//                     <label htmlFor="noiDung" className="form-label">Nội Dung</label>
//                     <textarea
//                       className="form-control"
//                       id="noiDung"
//                       value={noiDung}
//                       onChange={(e) => setNoiDung(e.target.value)}
//                       required
//                     ></textarea>
//                   </div>
//                   <div className="mb-3">
//                     <label htmlFor="chiTiet" className="form-label">Chi Tiết</label>
//                     <textarea
//                       className="form-control"
//                       id="chiTiet"
//                       value={chiTiet}
//                       onChange={(e) => setChiTiet(e.target.value)}
//                       required
//                     ></textarea>
//                   </div>
//                   <button type="submit" className="btn btn-primary">Cập Nhật</button>
//                   <Link to="/admin_Bv" className="btn btn-secondary ms-2">Trở Về</Link>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SuaBV;