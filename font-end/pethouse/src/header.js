import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuth } from "./contexts/AuthContext";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 991);
  const [cart, setCart] = useState([]);
  const { user, logout } = useAuth(); // Nhập user và logout từ AuthContext
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 991);
      if (window.innerWidth > 991) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const updateCart = () => {
      const savedCart = sessionStorage.getItem("cart");
      const parsedCart = savedCart ? JSON.parse(savedCart) : [];
      setCart(parsedCart);
    };

    // Gọi hàm updateCart khi component load lần đầu
    updateCart();

    // Lắng nghe sự kiện 'cartUpdated' để cập nhật giỏ hàng khi có thay đổi
    window.addEventListener("cartUpdated", updateCart);

    // Cleanup event listener khi component bị unmount
    return () => {
      window.removeEventListener("cartUpdated", updateCart);
    };
  }, []);

  const toggleMenu = () => {
    if (isMobile) setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    logout(); // Gọi hàm logout
    setIsDropdownOpen(false); // Đóng dropdown sau khi đăng xuất
  };

  const truncateProductName = (name, maxLength = 20) => {
    return name.length > maxLength ? `${name.slice(0, maxLength)}...` : name;
  };

  return (
    <>
      <div id="logo" className="logo float-left">
        <Link to="/" title="logo">
          <img
            src="logo-ngang.png"
            alt="anh"
            width={107}
            height={24}
            data-retina="logo-ngang.png"
            data-width={107}
            data-height={24}
          />
        </Link>
      </div>

      <div className="mobile-button" onClick={toggleMenu}>
        <span />
      </div>

      <ul className="menu-extra">
        <li className="box-search">
          <a className="icon_search header-search-icon" href="/#" />
          <form role="search" method="get" className="header-search-form" action="#">
            <input type="text" name="s" className="header-search-field" placeholder="Search..." />
            <button type="submit" className="header-search-submit" title="Search">Search</button>
          </form>
        </li>
        <li className="box-login">
          {user ? (
            <div
              className="user-menu"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <span className="m-2">{user.slice(0, 4)}{user.length > 4}</span>
              {isDropdownOpen && (
                <ul className="submenu ps-4">
                  <li className="m-0">
                    <Link className="text-nowrap" to="/info">Thông tin tài khoản</Link>
                  </li>
                  <li>
                    <Link className="text-nowrap" to="/lichsumua">Lịch sử mua hàng</Link>
                  </li>
                  <li>
                    <a
                      style={{ cursor: 'pointer' }}
                      onClick={handleLogout}
                      className="text-nowrap"
                    >
                      Đăng Xuất
                    </a>
                  </li>
                </ul>
              )}
            </div>
          ) : (
            <Link className="icon_login" to="/login"></Link>
          )}
        </li>
        <li className="box-cart nav-top-cart-wrapper">
          <Link className="icon_cart nav-cart-trigger active" to="/giohang">
            <span>{cart.length}</span>
          </Link>
          <div className="nav-shop-cart">
            <div className="widget_shopping_cart_content">
              <div className="woocommerce-min-cart-wrap">
                {cart.length > 0 ? (
                  <ul className="woocommerce-mini-cart cart_list product_list_widget">
                    {cart.map((item, index) => (
                      <li
                        key={index}
                        className="woocommerce-mini-cart-item mini_cart_item"
                        style={{ fontSize: "14px" }}
                      >
                        <span>{truncateProductName(item.ten_san_pham)}</span> -{" "}
                        <span>Số lượng: {item.quantity}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <span>Chưa có sản phẩm nào trong giỏ hàng</span>
                )}
              </div>
            </div>
          </div>
        </li>
      </ul>

      <div className="nav-wrap">
        <nav id="mainnav" className={`mainnav ${isMenuOpen && isMobile ? "open" : ""}`} style={{ display: isMobile ? (isMenuOpen ? "block" : "none") : "block" }}>
          <ul className="menu">
            <li className="active">
              <Link to="/">Trang chủ</Link>
            </li>
            <li>
              <Link to="/sanpham">Sản phẩm</Link>
            </li>
            <li>
              <Link to="/datlich">Đặt lịch</Link>
              <ul className="submenu">
                <li><a href="coming-soon.html">Dịch vụ 1</a></li>
                <li><a href="404.html">Dịch vụ 2</a></li>
              </ul>
            </li>
            <li>
              <Link to="/tintuc">Tin thú cưng</Link>
              <ul className="submenu">
                <li><a href="blog-list.html">Blog List Full</a></li>
              </ul>
            </li>
            <li><Link to="/lienhe">Liên hệ</Link></li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Header;