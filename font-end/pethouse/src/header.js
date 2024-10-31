import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 991);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 991);
      if (window.innerWidth > 991) {
        setIsMenuOpen(false); // Đóng menu di động khi thoát chế độ di động
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    if (isMobile) setIsMenuOpen(!isMenuOpen); // Chỉ mở menu khi ở chế độ di động
  };

  return (
    <div className="boxed">
      <div id="site-header-wrap">
        <header id="header" className="header header-container clearfix">
          <div className="container clearfix" id="site-header-inner">
            <div id="logo" className="logo float-left">
              <Link to="/" title="logo">
                <img
                  src="logo-ngang.png"
                  alt="logo"
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
                <a className="icon_search header-search-icon" href="#" />
                <form
                  role="search"
                  method="get"
                  className="header-search-form"
                  action="#"
                >
                  <input
                    type="text"
                    name="s"
                    className="header-search-field"
                    placeholder="Search..."
                  />
                  <button
                    type="submit"
                    className="header-search-submit"
                    title="Search"
                  >
                    Search
                  </button>
                </form>
              </li>
              <li className="box-login">
                <a className="icon_login" href="#" />
              </li>
              <li className="box-cart nav-top-cart-wrapper">
                <a className="icon_cart nav-cart-trigger active" href="#">
                  <span>3</span>
                </a>
                <div className="nav-shop-cart">
                  <div className="widget_shopping_cart_content">
                    <div className="woocommerce-min-cart-wrap">
                      <ul className="woocommerce-mini-cart cart_list product_list_widget">
                        <li className="woocommerce-mini-cart-item mini_cart_item">
                          <span>No Items in Shopping Cart</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <div className="nav-wrap">
              <nav
                id="mainnav"
                className={`mainnav ${isMenuOpen && isMobile ? "open" : ""}`}
                style={{
                  display: isMobile ? (isMenuOpen ? "block" : "none") : "block",
                }}
              >
                <ul className="menu">
                  <li className="active">
                    <Link to="/">Trang chủ</Link>
                  </li>
                  <li>
                    <Link to="/sanpham">Sản phẩm</Link>
                  </li>
                  <li>
                    <a href="coming-soon.html">Đặt lịch</a>
                    <ul className="submenu">
                      <li>
                        <a href="coming-soon.html">Dịch vụ 1</a>
                      </li>
                      <li>
                        <a href="404.html">Dịch vụ 2</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/tintuc">Tin thú cưng</Link>
                    <ul className="submenu">
                      <li>
                        <a href="blog-list.html">Blog List Full</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/lienhe">Liên hệ</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}

export default Header;
