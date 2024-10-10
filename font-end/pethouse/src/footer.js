function Footer() {
    return (
        <div className="row">
            <div className="col-sm-6 col-md-3">
                <div className="widget widget-link">
                    <ul>
                        <li>
                            <a href="#">About Us</a>
                        </li>
                        <li>
                            <a href="#">Online Store</a>
                        </li>
                        <li>
                            <a href="blog-list.html">Blog</a>
                        </li>
                        <li>
                            <a href="contact.html">Contact Us</a>
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
                            <a href="#">Login/ Register</a>
                        </li>
                        <li>
                            <a href="#">Your Cart</a>
                        </li>
                        <li>
                            <a href="#">Wishlist items</a>
                        </li>
                        <li>
                            <a href="#">Your checkout</a>
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
                            <a href="faqs.html">FAQs</a>
                        </li>
                        <li>
                            <a href="#">Term of service</a>
                        </li>
                        <li>
                            <a href="#">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#">Returns</a>
                        </li>
                    </ul>
                </div>
                {/* /.widget */}
            </div>
            {/* /.col-md-3 */}
            <div className="col-sm-6 col-md-3">
                <div className="widget widget-brand">
                    <div className="logo logo-footer">
                        <a href="index.html">
                            <img src="images/logo@2x.png" alt="image" width={107} height={24} />
                        </a>
                    </div>
                    <ul className="flat-contact">
                        <li className="address">112 Kingdom, NA 12, New York</li>
                        <li className="phone">+12 345 678 910</li>
                        <li className="email">infor.deercreative@gmail.com</li>
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