import { Link } from "react-router-dom"
function Footer() {
    return (
        <footer className="bg-footer py-4">
        <div className="container">
            <div className="row g-4">
                <div className="col-6 col-md-3">
                    <div className="widget widget-link">
                        <ul>
                            <li><Link to="/sanpham">Sản phẩm</Link></li>
                            <li><Link to="/datlich">Dịch vụ chăm sóc</Link></li>
                            <li><Link to="/lienhe">Liên hệ</Link></li>
                            <li><Link to="/tintuc">Tin tức</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="col-6 col-md-3">
                    <div className="widget widget-link link-login">
                        <ul>
                            <li><Link to="/">Trang chủ</Link></li>
                            <li><Link to="/login">Đăng nhập/ Đăng ký</Link></li>
                            <li><Link to="/giohang">Giỏ hàng</Link></li>
                            <li><Link to="/timkiem">Tìm kiếm</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="col-6 col-md-3">
                    <div className="widget widget-link link-faq">
                        <ul>
                            <li><Link to="/info">Tài khoản</Link></li>
                            <li><Link to="/lichsumua">Lịch sử mua hàng</Link></li>
                            <li><Link to="/lichsuDV">Lịch sử dùng dịch vụ</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="col-6 col-md-3">
                    <div className="widget widget-brand">
                        <div className="logo logo-footer">
                            <Link to="/">
                                <img src="/image/Nen_trong_suot.png" alt="image" width={107} height={24} />
                            </Link>
                        </div>
                        <ul className="flat-contact">
                            <li className="address">Địa chỉ: Tô ký, phường Trung Mỹ Tây, quận 12, TP.HCM</li>
                            <li className="phone">Hotline: 0962491715</li>
                            <li className="email">Email: pethouse@gmail.com</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>

    )
}
export default Footer