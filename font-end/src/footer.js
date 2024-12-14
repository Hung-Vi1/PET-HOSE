import { Link } from "react-router-dom"
function Footer() {
    return (
        <div className="row bg-footer">
            <div className="col-sm-6 col-md-3">
                <div className="widget widget-link">
                    <ul>
                        {/* <li>
                            <a href="#">Về chúng tôi</a>
                        </li> */}
                        <li>
                            <Link to="/sanpham">Sản phẩm</Link>
                        </li>
                        {/* <li>
                            <Link href="blog-list.html">Sản phẩm cho mèo</Link>
                        </li> */}
                        <li>
                            <Link to="/datlich">Dịch vụ chăm sóc</Link>
                        </li>
                        <li>
                            <Link to="/lienhe">Liên hệ</Link>
                        </li>
                        <li>
                            <Link to="/tintuc">Tin tức</Link>
                        </li>
                    </ul>
                </div>
                {/* /.widget */}
            </div>
            {/* /.col-md-3 */}
            <div className="col-sm-6 col-md-3">
                <div className="widget widget-link link-login">
                    <ul>
                        <li>
                            <Link to="/">Trang chủ</Link>
                        </li>
                        <li>
                            <Link to="/login">Đăng nhập/ Đăng ký</Link>
                        </li>
                        <li>
                            <Link to="/giohang">Giỏ hàng</Link>
                        </li>
                        <li>
                            <Link to="/timkiem">Tìm kiếm</Link>
                        </li>
                    </ul>
                </div>
                {/* /.widget */}
            </div>
            {/* /.col-md-3 */}
            <div className="col-sm-6 col-md-3">
                <div className="widget widget-link link-faq">
                    <ul>
                        <li>
                            <Link to="/info">Tài khoản</Link>
                        </li>
                        <li>
                            <Link to="/lichsumua">Lịch sử mua hàng</Link>
                        </li>
                        <li>
                            <Link to="/lichsuDV">Lịch sử dùng dịch vụ</Link>
                        </li>
                        
                    </ul>
                </div>
                {/* /.widget */}
            </div>
            {/* /.col-md-3 */}
            <div className="col-sm-6 col-md-3">
                <div className="widget widget-brand">
                    <div className="logo logo-footer">
                        <Link to="/">
                            <img src="/image/Nen_trong_suot.png" alt="image" width={107} height={24} />
                        </Link>
                    </div>
                    <ul className="flat-contact">
                        <li className="address">Tô ký, phường Trung Mỹ Tây, quận 12, TP.HCM</li>
                        <li className="phone">0962491715</li>
                        <li className="email">pethouse@gmail.com</li>
                    </ul>
                    {/* /.flat-contact */}
                </div>
                {/* /.widget */}
            </div>
            {/* /.col-md-3 */}
        </div>

    )
}
export default Footer