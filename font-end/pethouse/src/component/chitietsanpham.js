import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function ChiTietSanPham() {
<<<<<<< HEAD
=======
  let { id } = useParams();

  const [sp, ganSP] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8000/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Dữ liệu trả về:", data); // Kiểm tra dữ liệu
        if (data.status === "success") {
          ganSP(data.data); // Gán dữ liệu sản phẩm
        } else {
          console.error("Lỗi khi lấy dữ liệu:", data.message);
          ganSP(null); // Khởi tạo giá trị mặc định
        }
      })
      .catch((error) => {
        console.error("Lỗi khi lấy dữ liệu sản phẩm:", error);
      });
  }, [id]);

>>>>>>> master
  return (
    <>
      <div className="page-title parallax parallax1">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="page-title-heading">
                <h1 className="title">Woolen T-Shirt</h1>
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
                  <li>
                    <Link to="shop-detail-des.html">Mẫu</Link>
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

      <section className="flat-row main-shop shop-detail">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
<<<<<<< HEAD
              <div className="wrap-flexslider">
                <div className="inner">
                  <div className="flexslider style-1 has-relative">
                    <ul className="slides">
                      <li data-thumb="images/shop/sh-detail/thumb-detail-01.jpg">
                        <img
                          src="images/shop/sh-detail/detail-01.jpg"
                          alt="Image"
                        />
                        <div className="flat-icon style-1">
                          <a
                            href="images/shop/sh-detail/detail-01.jpg"
                            className="zoom-popup"
                          >
                            <span className="fa fa-search-plus" />
                          </a>
                        </div>
                      </li>
                      <li data-thumb="images/shop/sh-detail/thumb-detail-02.jpg">
                        <img
                          src="images/shop/sh-detail/detail-01.jpg"
                          alt="Image"
                        />
                        <div className="flat-icon style-1">
                          <a
                            href="images/shop/sh-detail/detail-01.jpg"
                            className="zoom-popup"
                          >
                            <span className="fa fa-search-plus" />
                          </a>
                        </div>
                      </li>
                      <li data-thumb="images/shop/sh-detail/thumb-detail-03.jpg">
                        <img
                          src="images/shop/sh-detail/detail-01.jpg"
                          alt="Image"
                        />
                        <div className="flat-icon style-1">
                          <a
                            href="images/shop/sh-detail/detail-01.jpg"
                            className="zoom-popup"
                          >
                            <span className="fa fa-search-plus" />
                          </a>
                        </div>
                      </li>
                      <li data-thumb="images/shop/sh-detail/thumb-detail-04.jpg">
                        <img
                          src="images/shop/sh-detail/detail-01.jpg"
                          alt="Image"
                        />
                        <div className="flat-icon style-1">
                          <a
                            href="images/shop/sh-detail/detail-01.jpg"
                            className="zoom-popup"
                          >
                            <span className="fa fa-search-plus" />
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/* /.flexslider */}
                </div>
              </div>
=======
              <img
                src={`../image/product/${sp.hinh_anh}`}
                className="card-img-top mx-auto"
                alt={sp.ten_san_pham}
                style={{ width: "75%" }}
              />
>>>>>>> master
            </div>
            {/* /.col-md-6 */}
            <div className="col-md-6">
              <div className="product-detail">
                <div className="inner">
                  <div className="content-detail">
<<<<<<< HEAD
                    <h2 className="product-title">Best Woolen T-Shirt</h2>
=======
                    <h2 className="product-title">{sp.ten_san_pham}</h2>
>>>>>>> master
                    <div className="flat-star style-1">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star-half-o" />
                      <i className="fa fa-star-half-o" />
                      <span>(1)</span>
<<<<<<< HEAD
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.{" "}
                    </p>
                    <div className="price">
                      <del>
                        <span className="regular">$90.00</span>
                      </del>
                      <ins>
                        <span className="amount">$24.00</span>
                      </ins>
                    </div>
                    <div className="size">
                      <span>Size:</span>
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
                    <div className="product-color">
                      <span>Colors:</span>
                      <ul className="flat-color-list">
                        <li>
                          <a href="#" className="yellow" />
                        </li>
                        <li>
                          <a href="#" className="pink">
                            {" "}
                          </a>
                        </li>
                        <li>
                          <a href="#" className="red" />
                        </li>
                        <li>
                          <a href="#" className="black" />
                        </li>
                        <li>
                          <a href="#" className="blue" />
                        </li>
                        <li>
                          <a href="#" className="khaki" />
                        </li>
                      </ul>
                    </div>
                    <ul className="product-infor style-1">
                      <li>
                        <span>100% cotton</span>
                      </li>
                      <li>
                        <span>6 months warranty</span>
                      </li>
                      <li>
                        <span>High Quality</span>
                      </li>
                    </ul>
                    <div className="product-quantity">
                      <div className="quantity">
                        <input
                          type="text"
                          defaultValue={1}
                          name="quantity-number"
                          className="quantity-number"
                        />
                        <span className="inc quantity-button">+</span>
                        <span className="dec quantity-button">-</span>
                      </div>
                      <div className="add-to-cart">
                        <a href="#">ADD TO CART</a>
                      </div>
                      <div className="box-like">
                        <a href="#" className="like">
                          <i className="fa fa-heart-o" />
                        </a>
                      </div>
                    </div>
                    <div className="product-categories">
                      <span>Categories: </span>
                      <a href="#">Men,</a> <a href="#">Shoes</a>
                    </div>
                    <div className="product-tags">
                      <span>Tags: </span>
                      <a href="#">Dress,</a> <a href="#">Fashion,</a>{" "}
                      <a href="#">Furniture,</a> <a href="#">Lookbok</a>
                    </div>
=======
                    </div>
                    <p>{sp.mo_ta}</p>
                    <div className="price">
                      {/* <del>
                        <span className="regular">$90.00</span>
                      </del> */}
                      <ins>
                        <span className="amount">
                          {parseInt(sp.gia).toLocaleString("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          })}
                        </span>
                      </ins>
                    </div>
                    <div className="product-quantity">
                      <div className="quantity">
                        <input
                          type="text"
                          defaultValue={1}
                          name="quantity-number"
                          className="quantity-number"
                        />
                        <span className="inc quantity-button">+</span>
                        <span className="dec quantity-button">-</span>
                      </div>
                      <div className="add-to-cart">
                        <a href="#">Thêm vào giỏ hàng</a>
                      </div>
                      <div className="box-like">
                        <a href="#" className="like">
                          <i className="fa fa-heart-o" />
                        </a>
                      </div>
                    </div>
                    <div className="product-categories">
                      <span>Danh mục: </span>
                      <a href="/#">{sp.ma_danh_muc}</a>
                    </div>
>>>>>>> master
                    <ul className="flat-socials">
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
                          <i className="fa fa-pinterest" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-linkedin" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-google-plus" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* /.product-detail */}
            </div>
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
      </section>

      <section className="flat-row shop-related">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title-section margin-bottom-55">
                <h2 className="title">Related Products</h2>
              </div>
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
                </ul>
                {/* /.product */}
              </div>
              {/* /.product-content */}
            </div>
          </div>
          {/* /.row */}
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
    </>
  );
}
export default ChiTietSanPham;
