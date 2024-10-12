function Header() {
    return (
        <>
            <header id="header" className="header header-container clearfix">
                <div className="container clearfix" id="site-header-inner">
                    <div id="logo" className="logo float-left">
                        <a href="index.html" title="logo">
                            <img src="images/logo.png" alt="image" width={107}  height={24} data-retina="images/logo@2x.png"data-width={107} data-height={24}/>
                        </a>
                    </div>
                    {/* /.logo */}
                    <div className="mobile-button">
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
                                    defaultValue=""
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
                                        <ul className="woocommerce-mini-cart cart_list product_list_widget ">
                                            <li className="woocommerce-mini-cart-item mini_cart_item">
                                                <span>No Items in Shopping Cart</span>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* /.widget_shopping_cart_content */}
                                </div>
                            </div>
                            {/* /.nav-shop-cart */}
                        </li>
                    </ul>
                    {/* /.menu-extra */}
                    <div className="nav-wrap">
                        <nav id="mainnav" className="mainnav">
                            <ul className="menu">
                                <li className="active">
                                    <a href="index.html">HOME</a>
                                    <ul className="submenu">
                                        <li className="active">
                                            <a href="index.html">Homepage Style 1</a>
                                        </li>
                                        <li>
                                            <a href="index-v2.html">Homepage Style 2</a>
                                        </li>
                                        <li>
                                            <a href="index-v3.html">Homepage Style 3</a>
                                        </li>
                                        <li>
                                            <a href="index-v4.html">Homepage Style 4</a>
                                        </li>
                                        <li>
                                            <a href="index-v5.html">Homepage Style 5</a>
                                        </li>
                                        <li>
                                            <a href="index-v6.html">Homepage Style 6</a>
                                        </li>
                                        <li>
                                            <a href="index-v7.html">Homepage Style 7</a>
                                        </li>
                                        <li>
                                            <a href="index-v8.html">Homepage Style 8</a>
                                        </li>
                                        <li>
                                            <a href="index-v9.html">Homepage Style 9</a>
                                        </li>
                                        <li>
                                            <a href="index-v10.html">Homepage Style 10</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="shop-3col.html">SHOP</a>
                                    <ul className="submenu">
                                        <li>
                                            <a href="shop-3col.html">Shop Layouts</a>
                                            <ul className="submenu">
                                                <li>
                                                    <a href="shop-3col.html">Three Columns</a>
                                                </li>
                                                <li>
                                                    <a href="shop-4col.html">Four Columns</a>
                                                </li>
                                                <li>
                                                    <a href="shop-5col.html">Five Columns</a>
                                                </li>
                                                <li>
                                                    <a href="shop-3col-slide.html">Slidebar Three Columns</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="shop-detail-des.html">Shop Details</a>
                                            <ul className="submenu">
                                                <li>
                                                    <a href="shop-detail-des.html">Details Description</a>
                                                </li>
                                                <li>
                                                    <a href="shop-detail-exter.html">Details External</a>
                                                </li>
                                                <li>
                                                    <a href="shop-detail-option.html">Details Options</a>
                                                </li>
                                                <li>
                                                    <a href="shop-detail-fix.html">Details Fix</a>
                                                </li>
                                                <li>
                                                    <a href="shop-detail-zoom.html">Details Zoom</a>
                                                </li>
                                                <li>
                                                    <a href="shop-detail-group.html">Details Grouped</a>
                                                </li>
                                                <li>
                                                    <a href="shop-detail-video.html">Details Video</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="coming-soon.html">PAGE</a>
                                    <ul className="submenu">
                                        <li>
                                            <a href="coming-soon.html">Coming Soon</a>
                                        </li>
                                        <li>
                                            <a href="404.html"> Error 404</a>
                                        </li>
                                        <li>
                                            <a href="faqs.html">FAQs</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="blog-list.html">BLOG</a>
                                    <ul className="submenu">
                                        <li>
                                            <a href="blog-list.html">Blog List Full</a>
                                        </li>
                                        <li>
                                            <a href="blog-list-1.html">Blog list Slide 1</a>
                                        </li>
                                        <li>
                                            <a href="blog-list-2.html">Blog list Slide 2</a>
                                        </li>
                                        <li>
                                            <a href="blog-grid.html">Blog Gird Full</a>
                                        </li>
                                        <li>
                                            <a href="blog-grid-1.html">Blog Gird Slide</a>
                                        </li>
                                        <li>
                                            <a href="blog-detail.html">Blog Details</a>
                                        </li>
                                    </ul>
                                    {/* /.submenu */}
                                </li>
                                <li>
                                    <a href="contact.html">CONTACT</a>
                                    <ul className="submenu right-submenu">
                                        <li>
                                            <a href="contact.html">Contact Style 1</a>
                                        </li>
                                        <li>
                                            <a href="contact-v2.html">Contact Style 2</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                        {/* /.mainnav */}
                    </div>
                    {/* /.nav-wrap */}
                </div>
                {/* /.container-fluid */}
            </header>
            {/* /header */}
        </>

    )
}
export default Header