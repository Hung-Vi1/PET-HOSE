
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";

function Admin_Thembv() {
    const { user } = useAuth();
    const navigate = useNavigate();


    const [tieu_de, setTieuDe] = useState("");
    const [ma_danh_muc_bv, setMaDanhMucBV] = useState("");
    const [noi_dung, setNoiDung] = useState("");
    const [chi_tiet, setChiTiet] = useState("");
    const [hinh, setHinh] = useState(null);
    const [trang_thai, setTrangThai] = useState(1);
    const [ngay_tao] = useState(new Date().toISOString().split("T")[0]);
    const [ngay_cap_nhat] = useState(new Date().toISOString().split("T")[0]);
    const [danhMucBV, setDanhMucBV] = useState([]);
    const [error, setError] = useState(null);
    const [imagePreview, setImagePreview] = useState(null); // Trạng thái để lưu đường dẫn hình ảnh


    useEffect(() => {
        fetch("http://localhost:8000/api/catagorysNews")
            .then((res) => res.json())
            .then((data) => setDanhMucBV(data.data))
            .catch(() => setError("Không thể lấy danh mục bài viết"));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!user) {
            alert("Bạn cần đăng nhập trước khi thêm bài viết!");
            navigate("/login");
            return;
        }

        if (!hinh) {
            alert("Vui lòng nhập ảnh");
            return; // Dừng lại nếu không có ảnh
        }

        const formData = new FormData();
        formData.append("Mataikhoan", user.Mataikhoan);
        formData.append("MaDMBV", ma_danh_muc_bv);
        formData.append("TieuDe", tieu_de);
        formData.append("NoiDung", noi_dung);
        formData.append("ChiTiet", chi_tiet);
        formData.append("Hinh", hinh);
        formData.append("trang_thai", trang_thai);
        formData.append("ngay_tao", ngay_tao);
        formData.append("ngay_cap_nhat", ngay_cap_nhat);

        console.log("Gửi tệp hình ảnh:", hinh); // Log tệp hình ảnh

        fetch("http://127.0.0.1:8000/api/News/store", {
            method: "POST",
            body: formData,
        })
            .then((res) => {
                if (!res.ok) {
                    return res.json().then((err) => {
                        console.error("Lỗi từ server:", err); // Log lỗi từ server
                        throw new Error(err.message || "Lỗi khi thêm bài viết");
                    });
                }
                return res.json();
            })
            .then((data) => {
                alert("Thêm bài viết thành công!");
                setImagePreview(`http://localhost:8000/${data.Hinh}`); // Cập nhật đường dẫn hình ảnh
                navigate("/Admin_BV");
            })
            .catch((error) => {
                console.error("Lỗi:", error.message);
                alert(error.message);
            });
    };

    return (
        <div className="container mt-3 mb-5">
            <h1>Thêm bài viết</h1>
            {error && <p className="text-danger">{error}</p>}

            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Tiêu đề</label>
                    <input
                        type="text"
                        className="form-control"
                        value={tieu_de}
                        onChange={(e) => setTieuDe(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Danh mục bài viết</label>
                    <select
                        className="form-select"
                        value={ma_danh_muc_bv}
                        onChange={(e) => setMaDanhMucBV(e.target.value)}
                        required
                    >
                        <option value="" disabled>
                            Chọn danh mục
                        </option>
                        {danhMucBV.map((dm) => (
                            <option key={dm.ma_danh_muc_BV} value={dm.ma_danh_muc_BV}>
                                {dm.ten_danh_muc_BV}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="mb-3">
                    <label className="form-label">Nội dung</label>
                    <textarea
                        className="form-control"
                        value={noi_dung}
                        onChange={(e) => setNoiDung(e.target.value)}
                        required
                    ></textarea>
                </div>

                <div className="mb-3">
                    <label className="form-label">Chi tiết</label>
                    <textarea
                        className="form-control"
                        value={chi_tiet}
                        onChange={(e) => setChiTiet(e.target.value)}
                        required
                    ></textarea>
                </div>

                <div className="mb-3">
                    <label className="form-label">Hình ảnh</label>
                    <input
                        type="file"
                        className="form-control"
                        accept="image/*"
                        onChange={(e) => {
                            setHinh(e.target.files[0]);
                            setImagePreview(URL.createObjectURL(e.target.files[0])); // Tạo preview hình ảnh
                        }}
                        required
                    />
                </div>

                {imagePreview && (
                    <div className="mb-3">
                        <img src={imagePreview} alt="Preview" style={{ width: "100%", height: "auto" }} />
                    </div>
                )}

                <div className="mb-3">
                    <label className="form-label">Trạng thái</label>
                    <select
                        className="form-select"
                        value={trang_thai}
                        onChange={(e) => setTrangThai(Number(e.target.value))}
                    >
                        <option value="0">Ẩn</option>
                        <option value="1">Hiển thị</option>
                    </select>
                </div>

                <button type="submit" className="btn btn-primary">
                    Thêm bài viết
                </button>
            </form>
        </div>

    );

}

export default Admin_Thembv;
