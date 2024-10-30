import { Link } from "react-router-dom";
<<<<<<< HEAD
<<<<<<< HEAD
function SanPham() {
=======
import { useState, useEffect } from "react";
=======
import React, { useState, useEffect } from "react";
>>>>>>> master
import "../App.css";

function SanPham() {
  const [isFilterVisible, setFilterVisible] = useState(false);
  const [isSearchVisible, setSearchVisible] = useState(false);

  const toggleFilter = () => setFilterVisible(!isFilterVisible);
  const toggleSearch = () => setSearchVisible(!isSearchVisible);

  const [sp, ganSP] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/api/products")
      .then((res) => res.json())
      .then((data) => {
        console.log("Dữ liệu trả về:", data); // Kiểm tra dữ liệu
        // Kiểm tra xem data có thuộc tính data không
        if (Array.isArray(data.data)) {
          ganSP(data.data); // Nếu có mảng sản phẩm trong data
        } else {
          console.error("Dữ liệu không phải là mảng:", data);
          ganSP([]); // Khởi tạo giá trị mặc định
        }
      })
      .catch((error) => {
        console.error("Lỗi khi lấy dữ liệu sản phẩm:", error);
      });
  }, []);

>>>>>>> master
  return (
    <>
      <div className="header_sticky header-style-2 has-menu-extra">
        {/* Preloader */}
        {/* <div id="loading-overlay">
          <div className="loader"></div>
        </div> */}

<<<<<<< HEAD
      <section className="flat-row main-shop shop-4col">
        <div className="container">
<<<<<<< HEAD
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
=======
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
            {sp.map((sp, i) => (
              <div className="card col-md-3 text-center p-2 mb-2" key={i}>
                <Link to={"/chitietsanpham/" + sp.ma_san_pham}>
                  <img
                    src={`image/product/${sp.hinh_anh}`}
                    className="card-img-top mx-auto"
                    alt={sp.ten_san_pham}
                    style={{ width: "75%" }}
                  />
                </Link>

                <div className="card-body">
                  <Link to={"/chitietsanpham/" + sp.ma_san_pham}>
                    <h5 className="card-title" style={{ height: "100px" }}>
                      {sp.ten_san_pham}
                    </h5>
                  </Link>
                  <h5 className="card-text">
                    {parseInt(sp.gia).toLocaleString("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    })}
                  </h5>
                  <div>
                    <a href="/#" className="btn btn-danger me-3">
                      Mua ngay
                    </a>
                    <a href="/#" className="btn btn-warning">
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

>>>>>>> master
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
=======
        <div className="boxed">
          <div className="page-title parallax parallax1">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="page-title-heading">
                    <h1 className="title">Sản phẩm</h1>
                  </div>
                  <div className="breadcrumbs">
                    <ul>
                      <li>
                        <a href="index.html">Trang chủ</a>
                      </li>
                      <li>
                        <a href="shop-3col.html">Sản phẩm</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
>>>>>>> master
            </div>
          </div>

          <section className="flat-row main-shop shop-4col">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="filter-shop bottom_68 clearfix">
                    <p className="showing-product">
                      Showing 1–12 of 56 Products
                    </p>
                    <ul className="flat-filter-search">
                      <li>
                        <a
                          href="#"
                          className="show-filter text-black"
                          onClick={toggleFilter}
                        >
                          {isFilterVisible ? "Filters" : "Filters"}
                        </a>
                      </li>
                      <li className="search-product">
                        <a
                          href="#"
                          className="text-black"
                          onClick={toggleSearch}
                        >
                          Search
                        </a>
                      </li>
                    </ul>
                  </div>
                  {isFilterVisible && (
                    <div className="box-filter slidebar-shop clearfix">
                      <div className="btn-close">
                        <a href="#" onClick={toggleFilter}>
                          <i className="fa fa-times"></i>
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
                      <div className="widget widget-color">
                        <h5 className="widget-title">Colors</h5>
                        <ul className="flat-color-list icon-left">
                          <li>
                            <a href="#" className="yellow"></a>
                            <span>Yellow</span>
                          </li>
                          <li>
                            <a href="#" className="pink"></a>
                            <span>White</span>
                          </li>
                          <li>
                            <a href="#" className="red active"></a>
                            <span>Red</span>
                          </li>
                          <li>
                            <a href="#" className="black"></a>
                            <span>Black</span>
                          </li>
                          <li>
                            <a href="#" className="blue"></a>
                            <span>Green</span>
                          </li>
                          <li>
                            <a href="#" className="khaki"></a>
                            <span>Orange</span>
                          </li>
                        </ul>
                      </div>
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
                    </div>
                  )}
                  {isSearchVisible && (
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
                            name="s"
                          />
                        </label>
                      </form>
                    </div>
                  )}
                  <div className="product-content product-fourcolumn clearfix">
                    <ul className="product style2">
                      {sp.map((sp, i) => (
                        <li className="product-item" key={i}>
                          <div className="product-thumb clearfix">
                            <Link to={"/chitietsanpham/" + sp.ma_san_pham}>
                              <img
                                src={`image/product/${sp.hinh_anh}`}
                                className="card-img-top mx-auto"
                                alt={sp.ten_san_pham}
                                style={{ width: "75%" }}
                              />
                            </Link>
                          </div>
                          <div className="product-info clearfix">
                            <span className="product-title">
                              {sp.ten_san_pham}
                            </span>
                            <div className="price">
                              <ins>
                                <span className="amount">
                                  {parseInt(sp.gia).toLocaleString("vi-VN", {
                                    style: "currency",
                                    currency: "VND",
                                  })}
                                </span>
                              </ins>
                            </div>
                          </div>
                          <div className="add-to-cart text-center">
                            <a href="#">Thêm vào giỏ hàng</a>
                          </div>
                          <a href="#" className="like">
                            <i className="fa fa-heart-o"></i>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="product-pagination text-center margin-top-11 clearfix">
                    <ul className="flat-pagination">
                      <li className="prev">
                        <a href="#">
                          <i className="fa fa-angle-left"></i>
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
                          <i className="fa fa-angle-right"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
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
        </div>
      </div>
    </>
  );
}
export default SanPham;
