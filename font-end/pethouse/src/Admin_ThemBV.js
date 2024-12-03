import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function Admin_Thembv() {
    const navigate = useNavigate();

    const [tieuDe, setTieuDe] = useState('');
    const [moTa, setMoTa] = useState('');
    const [maKV, setMaKV] = useState('1');
    const [trangThai, setTrangThai] = useState('1');
    const [hinhAnh, setHinhAnh] = useState('');
    const [noiDung, setNoiDung] = useState('');
    const [maTaiKhoan, setMaTaiKhoan] = useState(''); // Thêm state cho mã tài khoản
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        const newArticle = {
            TieuDe: tieuDe,
            MoTa: moTa,
            MaKV: maKV,
            TrangThai: trangThai,
            HinhAnh: hinhAnh,
            NoiDung: noiDung,
            MaTaiKhoan: maTaiKhoan, // Thêm mã tài khoản vào đối tượng gửi
        };

        console.log('Dữ liệu gửi đi:', newArticle); 

        fetch('http://localhost:8000/api/News/store', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newArticle),
        })
            .then((res) => {
                if (!res.ok) {
                    return res.json().then(err => { throw new Error(err.message); });
                }
                return res.json();
            })
            .then(() => {
                alert('Thêm bài viết thành công!');
                navigate('/admin_Bv');
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <div className="container">
            <h1>Thêm Bài Viết</h1>
            {error && <p className="text-danger">{error}</p>}
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="TieuDe" className="form-label">Tiêu đề:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="TieuDe"
                        value={tieuDe}
                        onChange={(e) => setTieuDe(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="MoTa" className="form-label">Mô tả:</label>
                    <textarea
                        className="form-control"
                        id="MoTa"
                        rows="4"
                        value={moTa}
                        onChange={(e) => setMoTa(e.target.value)}
                        required
                    ></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="MaKV" className="form-label">Mã khu vực:</label>
                    <select
                        className="form-select"
                        id="MaKV"
                        value={maKV}
                        onChange={(e) => setMaKV(e.target.value)}
                        required
                    >
                        <option value="1">Quận 1</option>
                        <option value="2">Quận 2</option>
                        <option value="3">Quận 3</option>
                        <option value="4">Quận 4</option>
                        <option value="5">Quận 5</option>
                        <option value="6">Quận 6</option>
                        <option value="7">Quận 7</option>
                        <option value="8">Quận 8</option>
                        <option value="9">Quận 9</option>
                        <option value="10">Quận 10</option>
                        <option value="11">Quận 11</option>
                        <option value="12">Quận 12</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="TrangThai" className="form-label">Trạng thái:</label>
                    <select
                        className="form-select"
                        id="TrangThai"
                        value={trangThai}
                        onChange={(e) => setTrangThai(e.target.value)}
                        required
                    >
                        <option value="1">Hoạt động</option>
                        <option value="0">Không hoạt động</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="HinhAnh" className="form-label">Link Hình ảnh:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="HinhAnh"
                        value={hinhAnh}
                        onChange={(e) => setHinhAnh(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="NoiDung" className="form-label">Nội dung:</label>
                    <CKEditor
                        editor={ClassicEditor}
                        data={noiDung}
                        onChange={(event, editor) => {
                            const data = editor.getData();
                            setNoiDung(data);
                        }}
                        config={{
                            placeholder: 'Vui lòng nhập nội dung vào đây',
                        }}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="MaTaiKhoan" className="form-label">Mã Tài Khoản:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="MaTaiKhoan"
                        value={maTaiKhoan}
                        onChange={(e) => setMaTaiKhoan(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary" disabled={loading}>
                    {loading ? 'Đang thêm...' : 'Thêm tin tức'}
                </button>
            </form>
        </div>
    );
}

export default Admin_Thembv;