import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "../App.css"

function SanPham() {
  const [listsp, ganListSP] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/products")
      .then((res) => res.json())
      .then((data) => {
        console.log("Dữ liệu trả về:", data); // Kiểm tra dữ liệu
        // Kiểm tra xem data có thuộc tính data không
        if (Array.isArray(data.data)) {
          ganListSP(data.data); // Nếu có mảng sản phẩm trong data
        } else {
          console.error("Dữ liệu không phải là mảng:", data);
          ganListSP([]); // Khởi tạo giá trị mặc định
        }
      })
      .catch((error) => {
        console.error("Lỗi khi lấy dữ liệu sản phẩm:", error);
      });
  }, []);

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
            <form role="search" method="get" className="search-form" action="#">
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
          <div className="d-flex flex-wrap">
            {listsp.map((sp, i) => (
              <div className="card col-md-3 text-center p-2 mb-2" key={i}>
                <img
                  src={`image/product/${sp.hinh_anh}`}
                  className="card-img-top mx-auto"
                  alt={sp.ten_san_pham}
                  style={{ width: "75%" }}
                />
                <div className="card-body">
                  <h5 className="card-title" style={{ height: "100px" }}>
                    {sp.ten_san_pham}
                  </h5>
                  <p className="card-text">{sp.mo_ta}</p>
                  <div>
                    <a href="#" className="btn btn-danger me-3">
                      Mua ngay
                    </a>
                    <a href="#" className="btn btn-warning">
                      Thêm vào giỏ hàng
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* /.product */}

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

          {/* /.col-md-12 */}

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
