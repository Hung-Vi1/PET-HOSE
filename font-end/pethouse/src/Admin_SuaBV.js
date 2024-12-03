import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";
import "./App.css";

function Admin_Suabv() {
    const { user } = useAuth();
    const { id } = useParams();
    const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const navigate = useNavigate();

    // Lấy thông tin bài viết theo ID
    useEffect(() => {
        fetch(`http://localhost:8000/api/News/${id}`)
            .then((res) => res.json())
            .then((data) => {
                if (data.data) {
                    setArticle(data.data);
                } else {
                    setError("Không tìm thấy bài viết.");
                }
                setLoading(false);
            })
            .catch((error) => {
                console.error("Lỗi khi lấy bài viết:", error);
                setError("Lỗi khi lấy dữ liệu.");
                setLoading(false);
            });
    }, [id]);

    // Hàm xử lý cập nhật bài viết
    const handleUpdate = (e) => {
        e.preventDefault();

        fetch(`http://localhost:8000/api/News/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(article),
        })
            .then((res) => {
                if (res.ok) {
                    alert("Bài viết đã được cập nhật thành công!");
                    navigate("/Admin_BV"); // Quay về trang danh sách bài viết
                } else {
                    alert("Lỗi khi cập nhật bài viết.");
                }
            })
            .catch((error) => {
                console.error("Lỗi khi cập nhật bài viết:", error);
            });
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="container">
            <h2 className="my-3">Cập nhật bài viết</h2>
            <form onSubmit={handleUpdate}>
                <div className="mb-3">
                    <label htmlFor="tieu_de" className="form-label">Tiêu đề</label>
                    <input
                        type="text"
                        className="form-control"
                        id="tieu_de"
                        value={article.tieu_de}
                        onChange={(e) => setArticle({ ...article, tieu_de: e.target.value })}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="Hinh" className="form-label">Hình ảnh</label>
                    <input
                        type="text"
                        className="form-control"
                        id="Hinh"
                        value={article.Hinh}
                        onChange={(e) => setArticle({ ...article, Hinh: e.target.value })}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="ma_danh_muc_bv" className="form-label">Danh mục</label>
                    <input
                        type="text"
                        className="form-control"
                        id="ma_danh_muc_bv"
                        value={article.ma_danh_muc_bv}
                        onChange={(e) => setArticle({ ...article, ma_danh_muc_bv: e.target.value })}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="ngay_tao" className="form-label">Ngày tạo</label>
                    <input
                        type="date"
                        className="form-control"
                        id="ngay_tao"
                        value={article.ngay_tao.split("T")[0]} // Chuyển đổi định dạng ngày
                        onChange={(e) => setArticle({ ...article, ngay_tao: e.target.value })}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="luot_xem" className="form-label">Lượt xem</label>
                    <input
                        type="number"
                        className="form-control"
                        id="luot_xem"
                        value={article.luot_xem || 0}
                        onChange={(e) => setArticle({ ...article, luot_xem: e.target.value })}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="trang_thai" className="form-label">Trạng thái</label>
                    <select
                        className="form-select"
                        id="trang_thai"
                        value={article.trang_thai}
                        onChange={(e) => setArticle({ ...article, trang_thai: e.target.value })}
                    >
                        <option value="1">Hoạt động</option>
                        <option value="0">Ngừng hoạt động</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Cập nhật</button>
            </form>
        </div>
    );
}

export default Admin_Suabv;