import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";

function Admin_Suabv() {
    const { user } = useAuth();
    const navigate = useNavigate();
    const { id } = useParams();

    const [tieu_de, setTieuDe] = useState("");
    const [ma_danh_muc_bv, setMaDanhMucBV] = useState("");
    const [noi_dung, setNoiDung] = useState("");
    const [chi_tiet, setChiTiet] = useState("");
    const [hinh, setHinh] = useState(null);
    const [trang_thai, setTrangThai] = useState(1);
    const [danhMucBV, setDanhMucBV] = useState([]);
    const [error, setError] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
// Đảm bảo mã tài khoản được thêm vào

    useEffect(() => {
        fetch("http://localhost:8000/api/catagorysNews")
            .then((res) => res.json())
            .then((data) => setDanhMucBV(data.data))
            .catch(() => setError("Không thể lấy danh mục bài viết"));

        if (id) {
            fetch(`http://localhost:8000/api/News/${id}`)
                .then((res) => res.json())
                .then((data) => {
                    setTieuDe(data.TieuDe);
                    setMaDanhMucBV(data.MaDMBV);
                    setNoiDung(data.NoiDung);
                    setChiTiet(data.ChiTiet);
                    setTrangThai(data.trang_thai);
                    setImagePreview(`http://localhost:8000/${data.Hinh}`);
                })
                .catch((err) => {
                    console.error("Lỗi khi lấy bài viết:", err);
                    setError("Không thể lấy thông tin bài viết.");
                });
        }
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!user) {
            alert("Bạn cần đăng nhập trước khi sửa bài viết!");
            navigate("/login");
            return;
        }

        const formData = new FormData();
        formData.append("Mataikhoan", user.Mataikhoan);
        formData.append("MaDMBV", ma_danh_muc_bv);
        formData.append("TieuDe", tieu_de);
        formData.append("NoiDung", noi_dung);
        formData.append("ChiTiet", chi_tiet);
        if (hinh) {
            formData.append("Hinh", hinh);
        }
        formData.append("trang_thai", trang_thai);

        fetch(`http://localhost:8000/api/News/${id}`, {
            method: "POST",
            body: formData,
        })
            .then((res) => {
                if (!res.ok) {
                    return res.json().then((err) => {
                        console.error("Lỗi từ server:", err);
                        throw new Error(err.message || "Lỗi khi sửa bài viết");
                    });
                }
                return res.json();
            })
            .then(() => {
                alert("Sửa bài viết thành công!");
                navigate("/Admin_BV");
            })
            .catch((error) => {
                console.error("Lỗi:", error.message);
                alert(error.message);
            });
    };

    return (
        <div className="container mt-3 mb-5">
            <h1>Sửa bài viết</h1>
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
                            setImagePreview(URL.createObjectURL(e.target.files[0]));
                        }}
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
                    Cập nhật bài viết
                </button>
            </form>
        </div>
    );
}

export default Admin_Suabv;