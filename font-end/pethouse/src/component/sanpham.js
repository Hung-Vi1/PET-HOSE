import { Link } from "react-router-dom";
function SanPham() {
  return (
    <>
      <div className="page-title parallax parallax1">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="page-title-heading">
                <h1 className="title">Sản phẩm</h1>
              </div>
              {/* /.page-title-heading */}
              <div className="breadcrumbs">
                <ul>
                  <li>
                    <Link to="/">Trang chủ</Link>
                  </li>
                  <li>
                    <Link to="/sanpham">Sản phẩm</Link>
                  </li>
                </ul>
              </div>
              {/* /.breadcrumbs */}
            </div>
            {/* /.col-md-12 */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
      </div>

      <section className="flat-row main-shop shop-4col">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="filter-shop bottom_68 clearfix">
                <p className="showing-product">Showing 1–12 of 56 Products</p>
                <ul className="flat-filter-search">
                  <li>
                    <a href="#" className="show-filter">
                      Filters
                    </a>
                  </li>
                  <li className="search-product">
                    <a href="#">Search</a>
                  </li>
                </ul>
              </div>
              {/* /.filte-shop */}
              <div className="box-filter slidebar-shop clearfix">
                <div className="btn-close">
                  <a href="#">
                    <i className="fa fa-times" />
                  </a>
                </div>
                <div className="widget widget-sort-by">
                  <h5 className="widget-title">Sort By</h5>
                  <ul>
                    <li>
                      <a href="#" className="active">
                        Default
                      </a>
                    </li>
                    <li>
                      <a href="#">Popularity</a>
                    </li>
                    <li>
                      <a href="#">Average rating</a>
                    </li>
                    <li>
                      <a href="#">Newness</a>
                    </li>
                    <li>
                      <a href="#">Price: low to high</a>
                    </li>
                    <li>
                      <a href="#">Price: high to low</a>
                    </li>
                  </ul>
                </div>
                {/* /.widget-sort-by */}
                <div className="widget widget-price">
                  <h5 className="widget-title">Price</h5>
                  <ul>
                    <li>
                      <a href="#" className="active">
                        $0.00 - $50.00
                      </a>
                    </li>
                    <li>
                      <a href="#">$50.00 - $100.00</a>
                    </li>
                    <li>
                      <a href="#">$100.00 - $150.00</a>
                    </li>
                    <li>
                      <a href="#">$150.00 - $200.00</a>
                    </li>
                    <li>
                      <a href="#">$200.00 - 250.00</a>
                    </li>
                    <li>
                      <a href="#">250.00+</a>
                    </li>
                  </ul>
                </div>
                {/* /.widget */}
                <div className="widget widget-color">
                  <h5 className="widget-title">Colors</h5>
                  <ul className="flat-color-list icon-left">
                    <li>
                      <a href="#" className="yellow" />
                      <span>Yellow</span>
                    </li>
                    <li>
                      <a href="#" className="pink">
                        {" "}
                      </a>
                      <span>White</span>
                    </li>
                    <li>
                      <a href="#" className="red active" />
                      <span>Red</span>{" "}
                    </li>
                    <li>
                      <a href="#" className="black" />
                      <span>Black</span>
                    </li>
                    <li>
                      <a href="#" className="blue" />
                      <span>Green</span>
                    </li>
                    <li>
                      <a href="#" className="khaki" />
                      <span>Orange</span>
                    </li>
                  </ul>
                </div>
                {/* /.widget-color */}
                <div className="widget widget-size">
                  <h5 className="widget-title">Size</h5>
                  <ul>
                    <li>
                      <a href="#">L</a>
                    </li>
                    <li>
                      <a href="#">M</a>
                    </li>
                    <li>
                      <a href="#">S</a>
                    </li>
                    <li>
                      <a href="#">XL</a>
                    </li>
                    <li>
                      <a href="#">XXL</a>
                    </li>
                    <li>
                      <a href="#">Over Size</a>
                    </li>
                  </ul>
                </div>
                {/* /.widget */}
                <div className="widget widget_tag">
                  <h5 className="widget-title">Tags</h5>
                  <div className="tag-list">
                    <a href="#">All products</a>
                    <a href="#" className="active">
                      Bags
                    </a>
                    <a href="#">Chair</a>
                    <a href="#">Decoration</a>
                    <a href="#">Fashion</a>
                    <a href="#">Tie</a>
                    <a href="#">Furniture</a>
                    <a href="#">Accesories</a>
                  </div>
                </div>
                {/* /.widget */}
              </div>
              {/* /.box-filter */}
              <div className="shop-search clearfix">
                <form
                  role="search"
                  method="get"
                  className="search-form"
                  action="#"
                >
                  <label>
                    <input
                      type="search"
                      className="search-field"
                      placeholder="Searching …"
                      defaultValue=""
                      name="s"
                    />
                  </label>
                </form>
              </div>
              {/* /.top-serach */}
              <div className="product-content product-fourcolumn clearfix">
                <ul className="product style2">
                  <li className="product-item">
                    <div className="product-thumb clearfix">
                      <a href="#">
                        <img src="images/shop/sh-4/1.jpg" alt="image" />
                      </a>
                    </div>
                    <div className="product-info clearfix">
                      <span className="product-title">
                        Cotton White Underweaer Block Out Edition
                      </span>
                      <div className="price">
                        <ins>
                          <span className="amount">$19.00</span>
                        </ins>
                      </div>
                      <ul className="flat-color-list">
                        <li>
                          <a href="#" className="red" />
                        </li>
                        <li>
                          <a href="#" className="blue" />
                        </li>
                        <li>
                          <a href="#" className="black" />
                        </li>
                      </ul>
                    </div>
                    <div className="add-to-cart text-center">
                      <a href="#">ADD TO CART</a>
                    </div>
                    <a href="#" className="like">
                      <i className="fa fa-heart-o" />
                    </a>
                  </li>
                  <li className="product-item">
                    <div className="product-thumb clearfix">
                      <a href="#">
                        <img src="images/shop/sh-4/2.jpg" alt="image" />
                      </a>
                      <span className="new">New</span>
                    </div>
                    <div className="product-info clearfix">
                      <span className="product-title">
                        Cotton White Underweaer Block Out Edition
                      </span>
                      <div className="price">
                        <ins>
                          <span className="amount">$10.00</span>
                        </ins>
                      </div>
                    </div>
                    <div className="add-to-cart text-center">
                      <a href="#">ADD TO CART</a>
                    </div>
                    <a href="#" className="like">
                      <i className="fa fa-heart-o" />
                    </a>
                  </li>
                  <li className="product-item">
                    <div className="product-thumb clearfix">
                      <a href="#" className="product-thumb">
                        <img src="images/shop/sh-4/3.jpg" alt="image" />
                      </a>
                    </div>
                    <div className="product-info clearfix">
                      <span className="product-title">
                        Cotton White Underweaer Block Out Edition
                      </span>
                      <div className="price">
                        <ins>
                          <span className="amount">$20.00</span>
                        </ins>
                      </div>
                    </div>
                    <div className="add-to-cart text-center">
                      <a href="#">ADD TO CART</a>
                    </div>
                    <a href="#" className="like">
                      <i className="fa fa-heart-o" />
                    </a>
                  </li>
                  <li className="product-item">
                    <div className="product-thumb clearfix">
                      <a href="#" className="product-thumb">
                        <img src="images/shop/sh-4/4.jpg" alt="image" />
                      </a>
                      <span className="new sale">Sale</span>
                    </div>
                    <div className="product-info clearfix">
                      <span className="product-title">
                        Cotton White Underweaer Block Out Edition
                      </span>
                      <div className="price">
                        <del>
                          <span className="regular">$90.00</span>
                        </del>
                        <ins>
                          <span className="amount">$60.00</span>
                        </ins>
                      </div>
                      <ul className="flat-color-list">
                        <li>
                          <a href="#" className="red" />
                        </li>
                        <li>
                          <a href="#" className="blue" />
                        </li>
                        <li>
                          <a href="#" className="black" />
                        </li>
                      </ul>
                    </div>
                    <div className="add-to-cart text-center">
                      <a href="#">ADD TO CART</a>
                    </div>
                    <a href="#" className="like">
                      <i className="fa fa-heart-o" />
                    </a>
                  </li>
                  <li className="product-item">
                    <div className="product-thumb clearfix">
                      <a href="#" className="product-thumb">
                        <img src="images/shop/sh-4/5.jpg" alt="image" />
                      </a>
                      <span className="new">New</span>
                    </div>
                    <div className="product-info clearfix">
                      <span className="product-title">
                        Cotton White Underweaer Block Out Edition
                      </span>
                      <div className="price">
                        <ins>
                          <span className="amount">$139.00</span>
                        </ins>
                      </div>
                    </div>
                    <div className="add-to-cart text-center">
                      <a href="#">ADD TO CART</a>
                    </div>
                    <a href="#" className="like">
                      <i className="fa fa-heart-o" />
                    </a>
                  </li>
                  <li className="product-item">
                    <div className="product-thumb clearfix">
                      <a href="#" className="product-thumb">
                        <img src="images/shop/sh-4/6.jpg" alt="image" />
                      </a>
                      <span className="new sale">Sale</span>
                    </div>
                    <div className="product-info clearfix">
                      <span className="product-title">
                        Cotton White Underweaer Block Out Edition
                      </span>
                      <div className="price">
                        <del>
                          <span className="regular">$150.00</span>
                        </del>
                        <ins>
                          <span className="amount">$120.00</span>
                        </ins>
                      </div>
                      <ul className="flat-color-list">
                        <li>
                          <a href="#" className="red" />
                        </li>
                        <li>
                          <a href="#" className="blue" />
                        </li>
                        <li>
                          <a href="#" className="black" />
                        </li>
                      </ul>
                    </div>
                    <div className="add-to-cart text-center">
                      <a href="#">ADD TO CART</a>
                    </div>
                    <a href="#" className="like">
                      <i className="fa fa-heart-o" />
                    </a>
                  </li>
                  <li className="product-item">
                    <div className="product-thumb clearfix">
                      <a href="#" className="product-thumb">
                        <img src="images/shop/sh-4/7.jpg" alt="image" />
                      </a>
                    </div>
                    <div className="product-info clearfix">
                      <span className="product-title">
                        Cotton White Underweaer Block Out Edition
                      </span>
                      <div className="price">
                        <ins>
                          <span className="amount">$110.00</span>
                        </ins>
                      </div>
                    </div>
                    <div className="add-to-cart text-center">
                      <a href="#">ADD TO CART</a>
                    </div>
                    <a href="#" className="like">
                      <i className="fa fa-heart-o" />
                    </a>
                  </li>
                  <li className="product-item">
                    <div className="product-thumb clearfix">
                      <a href="#" className="product-thumb">
                        <img src="images/shop/sh-4/8.jpg" alt="image" />
                      </a>
                      <span className="new">New</span>
                    </div>
                    <div className="product-info clearfix">
                      <span className="product-title">
                        Cotton White Underweaer Block Out Edition
                      </span>
                      <div className="price">
                        <ins>
                          <span className="amount">$90.00</span>
                        </ins>
                      </div>
                    </div>
                    <div className="add-to-cart text-center">
                      <a href="#">ADD TO CART</a>
                    </div>
                    <a href="#" className="like">
                      <i className="fa fa-heart-o" />
                    </a>
                  </li>
                  <li className="product-item">
                    <div className="product-thumb clearfix">
                      <a href="#" className="product-thumb">
                        <img src="images/shop/sh-4/9.jpg" alt="image" />
                      </a>
                      <span className="new">New</span>
                    </div>
                    <div className="product-info clearfix">
                      <span className="product-title">
                        Cotton White Underweaer Block Out Edition
                      </span>
                      <div className="price">
                        <ins>
                          <span className="amount">$79.00</span>
                        </ins>
                      </div>
                    </div>
                    <div className="add-to-cart text-center">
                      <a href="#">ADD TO CART</a>
                    </div>
                    <a href="#" className="like">
                      <i className="fa fa-heart-o" />
                    </a>
                  </li>
                  <li className="product-item">
                    <div className="product-thumb clearfix">
                      <a href="#" className="product-thumb">
                        <img src="images/shop/sh-4/10.jpg" alt="image" />
                      </a>
                      <span className="new sale">Sale</span>
                    </div>
                    <div className="product-info clearfix">
                      <span className="product-title">
                        Cotton White Underweaer Block Out Edition
                      </span>
                      <div className="price">
                        <del>
                          <span className="regular">$150.00</span>
                        </del>
                        <ins>
                          <span className="amount">$120.00</span>
                        </ins>
                      </div>
                      <ul className="flat-color-list">
                        <li>
                          <a href="#" className="red" />
                        </li>
                        <li>
                          <a href="#" className="blue" />
                        </li>
                        <li>
                          <a href="#" className="black" />
                        </li>
                      </ul>
                    </div>
                    <div className="add-to-cart text-center">
                      <a href="#">ADD TO CART</a>
                    </div>
                    <a href="#" className="like">
                      <i className="fa fa-heart-o" />
                    </a>
                  </li>
                  <li className="product-item">
                    <div className="product-thumb clearfix">
                      <a href="#" className="product-thumb">
                        <img src="images/shop/sh-4/11.jpg" alt="image" />
                      </a>
                    </div>
                    <div className="product-info clearfix">
                      <span className="product-title">
                        Cotton White Underweaer Block Out Edition
                      </span>
                      <div className="price">
                        <ins>
                          <span className="amount">$66.00</span>
                        </ins>
                      </div>
                    </div>
                    <div className="add-to-cart text-center">
                      <a href="#">ADD TO CART</a>
                    </div>
                    <a href="#" className="like">
                      <i className="fa fa-heart-o" />
                    </a>
                  </li>
                  <li className="product-item">
                    <div className="product-thumb clearfix">
                      <a href="#" className="product-thumb">
                        <img src="images/shop/sh-4/12.jpg" alt="image" />
                      </a>
                      <span className="new">New</span>
                    </div>
                    <div className="product-info clearfix">
                      <span className="product-title">
                        Cotton White Underweaer Block Out Edition
                      </span>
                      <div className="price">
                        <ins>
                          <span className="amount">$20.00</span>
                        </ins>
                      </div>
                    </div>
                    <div className="add-to-cart text-center">
                      <a href="#">ADD TO CART</a>
                    </div>
                    <a href="#" className="like">
                      <i className="fa fa-heart-o" />
                    </a>
                  </li>
                </ul>
                {/* /.product */}
              </div>
              {/* /.product-content */}
              <div className="product-pagination text-center margin-top-11 clearfix">
                <ul className="flat-pagination">
                  <li className="prev">
                    <a href="#">
                      <i className="fa fa-angle-left" />
                    </a>
                  </li>
                  <li>
                    <a href="#">1</a>
                  </li>
                  <li className="active">
                    <a href="#" title="">
                      2
                    </a>
                  </li>
                  <li>
                    <a href="#">3</a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-angle-right" />
                    </a>
                  </li>
                </ul>
                {/* /.flat-pagination */}
              </div>
            </div>
            {/* /.col-md-12 */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
      </section>

      <section className="flat-row mail-chimp">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="text">
                <h3>Sign up for Send Newsletter</h3>
              </div>
            </div>
            <div className="col-md-8">
              <div className="subscribe clearfix">
                <form
                  action="#"
                  method="post"
                  acceptCharset="utf-8"
                  id="subscribe-form"
                >
                  <div className="subscribe-content">
                    <div className="input">
                      <input
                        type="email"
                        name="subscribe-email"
                        placeholder="Your Email"
                      />
                    </div>
                    <div className="button">
                      <button type="button">SUBCRIBE</button>
                    </div>
                  </div>
                </form>
                <ul className="flat-social">
                  <li>
                    <a href="#">
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-google" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-behance" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-linkedin" />
                    </a>
                  </li>
                </ul>
                {/* /.flat-social */}
              </div>
              {/* /.subscribe */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default SanPham;
